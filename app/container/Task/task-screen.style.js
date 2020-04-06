import { StyleSheet, Dimensions, Platform } from 'react-native';
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
  taskCard: {
    backgroundColor: colours.cardBackgroundColor,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: colours.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
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
  divider: {
    borderWidth: 0.8,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: colours.lightText
  },
  fab: {
    backgroundColor: colours.primaryColor,
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colours.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    ...Platform.select({
      ios: {
        bottom: 100,
      },
      android: {
        bottom: 70,
      }
    })
  },
  emptyList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: (height - 200)
  }
});

export default styles;
