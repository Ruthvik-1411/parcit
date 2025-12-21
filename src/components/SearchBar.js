import { StyleSheet, View } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';

const SearchBar = ({ value, onChangeText, onFilterPress }) => {
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
      <IconButton 
        icon="calendar-search" 
        onPress={onFilterPress} 
        style={styles.filterBtn} 
      />
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
  }
});

export default SearchBar;
