import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';

import styles from './inputBox.style';

const InputBox = props => (
  <>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.container}>
      <TextInput
        style={styles.textContainer}
        onChangeText={props.handleOnChange}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid="transparent"
      />
    </View>
  </>
);

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool
};

InputBox.defaultProps = {
  secureTextEntry: false
};

export default InputBox;
