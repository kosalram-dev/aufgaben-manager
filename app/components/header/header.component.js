import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from './header.style';

const Header = props => {
  const {
    title, showIcons = true, enableBack, navigation
  } = props;

  const goBack = () => {
    console.warn('========');
    navigation.navigate('App');
  };
  return (
    <View style={styles.container}>
      {showIcons && <Icon style={styles.icon} size={20} name="bars" />}
      {enableBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={goBack}
          activeOpacity={0.8}
        >
          <IonIcon style={styles.icon} size={24} name="ios-arrow-back" />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
      {showIcons && <Icon style={styles.icon} size={20} name="search" />}
    </View>
  );
};

Header.defaultProps = {
  enableBack: false,
  navigation: {}
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showIcons: PropTypes.bool.isRequired,
  enableBack: PropTypes.bool,
  navigation: PropTypes.any
};

export default Header;
