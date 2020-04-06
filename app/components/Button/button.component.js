import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './button.style';

const Button = props => (
  <>
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  </>
);

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
