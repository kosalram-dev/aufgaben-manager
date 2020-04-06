import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TextInput
} from 'react-native';
import { connect } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { switchTitle } from '../../action/userAction';
import { createTask } from '../../action/taskAction';
import Header from '../../components/header/header.component';

import styles from './create-task-screen.style';
import { colours } from '../../styles/theme';

const CreateTaskScreen = props => {
  const {
    changeTitle, title, navigation, createNewTask
  } = props;

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [doesTaskSubmitted, setDoesTaskSubmitted] = useState(false);
  const [addTitle, setaddTitle] = useState('Swipe To Add');

  useEffect(() => {
    changeTitle('Add New Task');
  });

  const _renderThumbIconComponent = () => (
    <View style={styles.thumbContainer}>
      {
        doesTaskSubmitted
          ? <FeatherIcon size={28} color={colours.light} name="check" />
          : <Ionicon size={28} color={colours.light} name="md-arrow-forward" />
      }
    </View>
  );

  const saveTask = () => {
    const data = {
      id: Date.now(),
      title: task,
      description,
      doesTaskCompleted: false
    };
    createNewTask(data);
    setDoesTaskSubmitted(true);
    setaddTitle('Success');
    setTimeout(() => {
      navigation.navigate('App');
    }, 2000);
  };

  return (
    <>
      <Header title={title} showIcons={false} enableBack navigation={navigation} />
      <View style={[styles.container]}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Task</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setTask(value)}
            value={task}
            placeholder="Enter the task name"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setDescription(value)}
            value={description}
            placeholder="Enter the description"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.buttonContainer}>
          <SwipeButton
            disabled={false}
            swipeSuccessThreshold={70}
            containerStyle={styles.addButton}
            title={addTitle}
            titleColor={colours.primaryColor}
            resetAfterSuccessAnimDuration={500}
            onSwipeFail={() => {
              setDoesTaskSubmitted(false);
              setaddTitle('Swipe To Add');
              console.warn('Submitted failed!');
            }}
            onSwipeSuccess={() => saveTask()}
            railFillBorderColor={colours.light}
            thumbIconComponent={_renderThumbIconComponent}
            thumbIconBackgroundColor={colours.primaryColor}
            thumbIconBorderColor={colours.primaryColor}
            railBackgroundColor={colours.light}
            railBorderColor={colours.primaryColor}
            />
        </View>
      </View>
    </>
  );
};

CreateTaskScreen.propTypes = {
  title: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
  navigation: PropTypes.any.isRequired,
  createNewTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  title: state.user.title,
  tasks: state.task.tasks
});

const mapDispatchToProps = dispatch => ({
  changeTitle: data => dispatch(switchTitle(data)),
  createNewTask: data => dispatch(createTask(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTaskScreen);

