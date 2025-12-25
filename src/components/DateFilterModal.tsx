import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, List, Divider, useTheme } from 'react-native-paper';

export type DateFilterOption = 'all' | 'today' | 'last7days' | 'last30days' | 'last6months' | 'lastyear';

interface DateFilterModalProps {
  visible: boolean;
  onDismiss: () => void;
  selectedFilter: DateFilterOption;
  onSelectFilter: (filter: DateFilterOption) => void;
}

const DateFilterModal = ({ visible, onDismiss, selectedFilter, onSelectFilter }: DateFilterModalProps) => {
  const theme = useTheme();

  const dateFilters = [
    { id: 'all' as DateFilterOption, label: 'All Time', description: 'Show all links' },
    { id: 'today' as DateFilterOption, label: 'Today', description: 'Added today' },
    { id: 'last7days' as DateFilterOption, label: 'Last 7 Days', description: 'Added in the last week' },
    { id: 'last30days' as DateFilterOption, label: 'Last 30 Days', description: 'Added in the last month' },
    { id: 'last6months' as DateFilterOption, label: 'Last 6 Months', description: 'Added in the last 6 months' },
    { id: 'lastyear' as DateFilterOption, label: 'Last Year', description: 'Added in the last year' },
  ];

  const handleSelect = (filter: DateFilterOption) => {
    onSelectFilter(filter);
    onDismiss();
  };

  return (
    <Portal>
      <Modal 
        visible={visible} 
        onDismiss={onDismiss} 
        contentContainerStyle={[styles.modalContainer, { backgroundColor: theme.colors.surface }]}
      >
        <View style={styles.header}>
          <Text variant="headlineSmall" style={styles.title}>Filter by Date</Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
            Choose a time range to filter your links
          </Text>
        </View>
        
        <Divider />
        
        <View style={styles.optionsContainer}>
          {dateFilters.map((filter, index) => (
            <React.Fragment key={filter.id}>
              <List.Item
                title={filter.label}
                description={filter.description}
                left={props => (
                  <List.Icon 
                    {...props} 
                    icon={selectedFilter === filter.id ? "radiobox-marked" : "radiobox-blank"} 
                    color={selectedFilter === filter.id ? theme.colors.primary : theme.colors.onSurfaceVariant}
                  />
                )}
                onPress={() => handleSelect(filter.id)}
                style={[
                  styles.listItem,
                  selectedFilter === filter.id && { backgroundColor: theme.colors.primaryContainer }
                ]}
              />
              {index < dateFilters.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.actions}>
          <Button 
            mode="text" 
            onPress={onDismiss}
            style={styles.button}
          >
            Cancel
          </Button>
          <Button 
            mode="contained" 
            onPress={() => handleSelect('all')}
            style={styles.button}
          >
            Clear Filter
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 20,
    borderRadius: 16,
    maxHeight: '80%',
  },
  header: {
    padding: 20,
    paddingBottom: 16,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  optionsContainer: {
    maxHeight: 400,
  },
  listItem: {
    paddingVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    gap: 8,
  },
  button: {
    minWidth: 100,
  },
});

export default DateFilterModal;
