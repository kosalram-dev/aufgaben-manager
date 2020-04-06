import { StyleSheet } from 'react-native';
import { colours } from '../../styles/theme';

const styles = StyleSheet.create({
  label: {
    marginVertical: 10,
    marginHorizontal: 25
  },
  textContainer: {
    height: 50,
  },
  container: {
    backgroundColor: colours.light,
    height: 50,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: colours.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  }
});

export default styles;
