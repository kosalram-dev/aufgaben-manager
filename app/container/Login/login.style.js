import { StyleSheet } from 'react-native';
import { colours } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.light
  },
  logoContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  logo: {
    width: 100,
    height: 100
  },
  formContainer: {
    flex: 0.7,
    justifyContent: 'flex-start'
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  signupText: {
    color: '#adadad'
  },
  signupLink: {
    color: '#969696',
    fontWeight: 'bold',
    marginLeft: 3
  },
});

export default styles;
