import React, { useState } from 'react';
import {
  View,
  Alert,
  KeyboardAvoidingView,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../../action/userAction';

import styles from './login.style';
import InputBox from '../../components/InputBox/inputBox.component';
import Button from '../../components/Button/button.component';

const Login = props => {
  const { navigation, loginUser } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginUser(
      {
        email,
        password,
      },
      action => {
        if (action === 'login') {
          navigation.navigate('App');
        } else {
          Alert.alert('Invalid credential!');
        }
      },
    );
  };

  const handleSignup = () => {
    // Todo navigate to sign-up screen
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled
      >
      <View
        style={styles.logoContainer}
      >
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <InputBox
          label="Email"
          placeholder="Enter Your Email"
          value={email}
          handleOnChange={value => setEmail(value)}
          secureTextEntry={false}
        />
        <InputBox
          label="Password"
          placeholder="Enter Your Password"
          value={password}
          handleOnChange={value => setPassword(value)}
          secureTextEntry
        />
        <Button
          onPress={handleLogin}
          title="Login"
        />
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Text style={styles.signupLink} onPress={handleSignup}>Click here</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state) {
  return {
    userData: state.user.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data, cb) => dispatch(loginUser(data, cb)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
