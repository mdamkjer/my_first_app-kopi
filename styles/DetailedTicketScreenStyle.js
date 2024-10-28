import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 10,
  },
  otherLabel: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    color: '#333',
  },
  otherInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 60,
    textAlignVertical: 'top',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#008000',
    borderRadius: 10,
    padding: 20,
    width: 100,
    height: 100,
    backgroundColor: '#e0f7e0',
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  attachedImage: { 
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  addButton: {
    fontSize: 24,
    color: '#008000',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  activeButton: {
    backgroundColor: '#008000',
  },
  statusButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
