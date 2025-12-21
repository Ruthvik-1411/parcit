import { ScrollView, StyleSheet, View } from 'react-native';
import { Chip, useTheme } from 'react-native-paper';

const FilterBar = ({ filters, selectedFilter, onSelectFilter }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {filters.map((filter) => {
            const isSelected = selectedFilter === filter.id;
            return (
                <Chip
                    key={filter.id}
                    selected={isSelected}
                    onPress={() => onSelectFilter(filter.id)}
                    style={[
                        styles.chip, 
                        isSelected ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.surface }
                    ]}
                    textStyle={isSelected ? { color: '#fff' } : { color: theme.colors.onSurface }}
                    showSelectedOverlay
                    mode="outlined"
                >
                    {filter.label}
                </Chip>
            );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    borderRadius: 20,
  },
});

export default FilterBar;
