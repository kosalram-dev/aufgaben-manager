import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../styles/theme';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width,
    height: 80,
    flex: 0.12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  icon: {
    color: colours.light
  },
  backButton: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colours.light,
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center'
  }
});

export default styles;
