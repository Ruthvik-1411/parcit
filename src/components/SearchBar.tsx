import { StyleSheet, View } from 'react-native';
import { Searchbar, IconButton, Badge, useTheme } from 'react-native-paper';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
  isFilterActive?: boolean;
}

const SearchBar = ({ value, onChangeText, onFilterPress, isFilterActive = false }: SearchBarProps) => {
  const theme = useTheme();
  
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search titles, URLs, summaries..."
        onChangeText={onChangeText}
        value={value}
        style={styles.searchbar}
        inputStyle={styles.input}
        elevation={0} // Flat look as per wireframe
      />
      <View>
        <IconButton 
          icon="calendar-search" 
          onPress={onFilterPress} 
          style={styles.filterBtn}
          iconColor={isFilterActive ? theme.colors.primary : undefined}
        />
        {isFilterActive && (
          <Badge size={8} style={[styles.badge, { backgroundColor: theme.colors.primary }]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    gap: 8,
  },
  searchbar: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    height: 48,
  },
  input: {
      minHeight: 0, // Fix for some android versions
  },
  filterBtn: {
    margin: 0,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default SearchBar;
