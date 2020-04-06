import { StyleSheet } from 'react-native';
import { colours } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.primaryColor,
    height: 50,
    margin: 20,
    borderRadius: 10,
    shadowColor: colours.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colours.light,
    fontWeight: '600',
    fontSize: 18
  }
});

export default styles;
