import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../styles/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    width,
    height: (height - 210)
  },
  swipeList: {
    flex: 1,
    display: 'flex'
  },
  taskCard: {
    backgroundColor: colours.cardBackgroundColor,
    padding: 10
  },
  cardTitle: {
    display: 'flex',
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardBody: {
    display: 'flex',
    padding: 10
  },
  normal: {
    fontSize: 14,
    color: colours.lightText
  },
  emptyList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: (height - 200)
  },
  divider: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colours.primaryColor
  }
});

export default styles;
