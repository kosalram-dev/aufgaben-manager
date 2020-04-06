import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, FlatList, Alert
} from 'react-native';
import { connect } from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/header/header.component';
import { getPendingTasks, completeTask } from '../../action/taskAction';

import styles from './task-screen.style';

const TaskScreen = props => {
  const {
    fetchPendingTasks, pendingTasks, navigation, title, finishTask
  } = props;

  const onScreenFocus = () => {
    fetchPendingTasks();
  };

  useEffect(() => {
    props.navigation.addListener('didFocus', onScreenFocus);
  }, []);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(pendingTasks);
  }, [pendingTasks]);

  const handleSubmit = task => {
    Alert.alert(
      'Complete Task',
      `Do you want to complete ${task.title}?`,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => finishTask(task.id) },
      ],
      { cancelable: false }
    );
  };

  const _renderTasks = task => {
    if (!task.doesTaskCompleted) {
      return (
        <TouchableOpacity
          onLongPress={() => handleSubmit(task)}
          style={styles.taskCard}
          activeOpacity={0.5}
        >
          <View style={styles.cardTitle}>
            <Text style={styles.title}>{task.title}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardBody}>
            <Text style={styles.normal}>{task.description}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  const switchToCreateTask = () => {
    navigation.navigate('CreateTask');
  };

  return (
    <>
      <Header title={title} showIcons={false} {...props} />
      <View style={[styles.container]}>
        {
          tasks && tasks.length > 0
            ? (
              <View
                style={styles.listContainer}
                >
                <FlatList
                  data={tasks}
                  renderItem={({ item }) => _renderTasks(item)}
                  keyExtractor={item => item.id}
                  />
              </View>
            )
            : (
              <View style={styles.emptyList}>
                <Text>No Task Found.</Text>
              </View>
            )
        }
        <TouchableOpacity
          onPress={switchToCreateTask}
          activeOpacity={0.8}
          style={styles.fab}
        >
          <AntDesignIcon size={28} color="#FFF" name="plus" />
        </TouchableOpacity>
      </View>

    </>
  );
};

TaskScreen.propTypes = {
  title: PropTypes.string.isRequired,
  pendingTasks: PropTypes.array.isRequired,
  navigation: PropTypes.any.isRequired,
  fetchPendingTasks: PropTypes.func.isRequired,
  finishTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  title: state.user.title,
  pendingTasks: state.task.pendingTasks
});

const mapDispatchToProps = dispatch => ({
  fetchPendingTasks: () => dispatch(getPendingTasks()),
  finishTask: id => dispatch(completeTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskScreen);

