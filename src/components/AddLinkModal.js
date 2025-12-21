import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, TextInput, Button, IconButton, useTheme } from 'react-native-paper';

const AddLinkModal = ({ visible, onDismiss, onSave }) => {
  const [url, setUrl] = useState('');
  const theme = useTheme();

  const handleSave = () => {
    if (url) {
      onSave(url);
      setUrl('');
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.title}>Add to Parcit</Text>
          <IconButton icon="close" size={20} onPress={onDismiss} />
        </View>

        <Text variant="bodyMedium" style={styles.label}>Paste Link</Text>
        <TextInput
          mode="outlined"
          placeholder="https://..."
          value={url}
          onChangeText={setUrl}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button 
            mode="contained" 
            onPress={handleSave} 
            style={styles.button}
            icon="creation" // Sparkles icon
            buttonColor={theme.colors.primary}
        >
          Enrich & Save
        </Button>
        
        <Text variant="bodySmall" style={styles.helperText}>
            Uses Gemini Flash to extract title, tags, and summary and enrich the link.
        </Text>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 4,
  },
  helperText: {
      marginTop: 12,
      textAlign: 'center',
      color: '#888',
  }
});

export default AddLinkModal;
