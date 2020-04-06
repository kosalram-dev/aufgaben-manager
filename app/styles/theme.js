import { StyleSheet } from 'react-native';

export const colours = {
  primaryColor: '#FF3247',
  secondaryColor: '#2ecffa',

  dark: '#000',
  light: '#FFF',
  success: '#2A9A63',

  cardBackgroundColor: '#fbfafa',
  lightText: '#9FA0AB'
};

const darkColours = {
  primaryColor: '#000000',
  textColor: '#ffffff'
};

const lightColours = {
  primaryColor: '#ffffff',
  textColor: '#000000'
};

export const theme = StyleSheet.create({
  darkTheme: {
    backgroundColor: darkColours.primaryColor,
    color: darkColours.textColor
  },
  lightTheme: {
    backgroundColor: lightColours.primaryColor,
    color: lightColours.textColor
  }
});
