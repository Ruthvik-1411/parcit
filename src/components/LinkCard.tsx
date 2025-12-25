import { View, StyleSheet, Linking } from 'react-native';
import { Card, Text, Chip, Button, IconButton, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from '../data/mockData';

interface LinkCardProps {
  item: Link;
  onSchedule: (id: string) => void;
  onMarkRead: (id: string) => void;
}

const LinkCard = ({ item, onSchedule, onMarkRead }: LinkCardProps) => {
  const theme = useTheme();
  const isScheduled = !!item.scheduledFor;

  const getIcon = (type: Link['type']) => {
    switch (type) {
      case 'github':
        return 'github';
      case 'arxiv':
        return 'file-document-outline';
      case 'linkedin':
        return 'linkedin';
      default:
        return 'web';
    }
  };

  const getMetadataText = () => {
    if (item.type === 'github') {
      return item.metadata.stars;
    }
    if (item.type === 'arxiv') {
      return item.metadata.readTime;
    }
    if (item.type === 'linkedin') {
      return item.metadata.author;
    }
    return '';
  };

  return (
    <Card style={styles.card} mode="elevated" elevation={1}>
      <Card.Content>
        <View style={styles.header}>
          <View style={styles.sourceContainer}>
            <MaterialCommunityIcons name={getIcon(item.type)} size={20} color={theme.colors.onSurface} />
            <Text style={[styles.sourceText, { color: theme.colors.onSurfaceVariant }]}>
              {item.source.toUpperCase()}
            </Text>
            {item.metadata?.readTime && (
               <View style={styles.readTimeContainer}>
                  <MaterialCommunityIcons name="clock-outline" size={14} color={theme.colors.onSurfaceVariant} />
                  <Text style={[styles.readTimeText, { color: theme.colors.onSurfaceVariant }]}>
                    {item.metadata.readTime}
                  </Text>
               </View>
            )}
             {item.type === 'github' && (
               <View style={styles.readTimeContainer}>
                  <Text style={[styles.readTimeText, { color: theme.colors.onSurfaceVariant }]}>
                    {item.metadata.stars}
                  </Text>
               </View>
            )}
          </View>
          <Text style={[styles.dateText, { color: theme.colors.onSurfaceVariant }]}>
             {/* Simple date formatting */}
             {new Date(item.addedAt).toLocaleDateString()}
          </Text>
        </View>

        <Text variant="titleMedium" style={styles.title} onPress={() => Linking.openURL(item.url)}>
          {item.title}
        </Text>
        <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
          {item.description}
        </Text>

        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <Chip 
                key={index} 
                style={styles.tag} 
                textStyle={styles.tagText}
                compact={true}
            >
              {tag}
            </Chip>
          ))}
        </View>
      </Card.Content>
      
      <Card.Actions style={styles.actions}>
        {/* TODO: Make schedule button better styled */}
        <View style={styles.actionGroup}>
          <Button 
              mode={isScheduled ? "contained" : "outlined"} 
              icon={isScheduled ? "calendar-check" : "calendar"} 
              onPress={() => onSchedule(item.id)}
              style={styles.scheduleButton}
              contentStyle={styles.scheduleButtonContent}
              labelStyle={styles.scheduleButtonLabel}
          >
            {isScheduled ? "Scheduled" : "Schedule"}
          </Button>
          <IconButton 
            icon="open-in-new" 
            size={17} 
            onPress={() => Linking.openURL(item.url)} 
            style={styles.iconButton}
          />
        </View>
        
        <View style={styles.actionGroup}>
          <IconButton 
            icon="check" 
            size={14}
            mode="outlined"
            onPress={() => onMarkRead(item.id)} 
            iconColor={item.status === 'read' ? 'white' : theme.colors.primary}
            containerColor={item.status === 'read' ? '#0D9488' : undefined}
            rippleColor={"#0D9488"}
            style={{borderRadius: 999}}
          />
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sourceText: {
    fontSize: 12,
    fontWeight: '600',
  },
  readTimeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 4,
  },
  readTimeText: {
      fontSize: 10,
  },
  dateText: {
      fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#112240', // Light blue tint, F1F5F9 for dark, 112240 for light mode
    height: 30,
  },
  tagText: {
    fontSize: 11,
    color: '#0D9488', // Teal color for light, 64FFDA for dark mode
    bottom: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleButton: {
      borderColor: '#e0e0e0',
      marginRight: 0,
      borderRadius: 8,
  },
  scheduleButtonContent: {
      height: 36,
      width: 120,
      paddingHorizontal: 0,
  },
  scheduleButtonLabel: {
      fontSize: 14,
      bottom: 2
  },
  iconButton: {
    margin: 0,
    borderRadius: 999
  }
});

export default LinkCard;
