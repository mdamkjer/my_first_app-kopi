import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 12,
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
});
