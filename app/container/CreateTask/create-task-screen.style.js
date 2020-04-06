import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../styles/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputWrapper: {
    display: 'flex',
    margin: 15,
    borderBottomColor: colours.lightText,
    borderBottomWidth: 0.2
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 5,
    height: 40,
    fontSize: 16
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    flex: 1,
    width
  },
  addButton: {
    width,
    height: 40,
    display: 'flex',
    flex: 1,
  },
  thumbContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colours.primaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
