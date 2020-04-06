import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.primaryColor
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colours.light
  }
});

class SplashScreen extends Component {
  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Login');
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Aufgaben Manager</Text>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.any.isRequired
};

export default SplashScreen;
