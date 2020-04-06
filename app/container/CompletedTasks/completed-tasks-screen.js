import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, TouchableOpacity, Animated, Alert
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { switchTitle } from '../../action/userAction';
import Header from '../../components/header/header.component';
import { getCompletedTasks, undoTask } from '../../action/taskAction';

import styles from './completed-tasks-screen.style';

const CompletedTasksScreen = props => {
  const {
    completedTasks, title, fetchCompletedTasks, moveTaskToUndone, navigation
  } = props;

  const onScreenFocus = () => {
    fetchCompletedTasks();
  };

  useEffect(() => {
    props.navigation.addListener('didFocus', onScreenFocus);
  }, []);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(completedTasks);
  }, [completedTasks]);

  const RightActions = (progress, dragX, task) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    });
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Undo Task',
              `Do you want to undo the ${task.title}?`,
              [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => moveTaskToUndone(task.id) },
              ],
              { cancelable: false }
            );
          }}
        >
          <View
            style={{ flex: 1, backgroundColor: '#ff808d', justifyContent: 'center' }}>
            <Animated.Text
              style={{
                color: 'white',
                paddingHorizontal: 10,
                fontWeight: '600',
                transform: [{ scale }]
              }}>
              <AntDesignIcon size={30} color="#FFF" name="delete" />
            </Animated.Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const _renderTasks = task => {
    if (task.doesTaskCompleted) {
      return (
        <Swipeable renderRightActions={(progress, dragX) => RightActions(progress, dragX, task)}>
          <View style={styles.taskCard}>
            <View style={styles.cardTitle}>
              <Text style={styles.title}>{task.title}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.normal}>{task.description}</Text>
            </View>
          </View>
          <View style={styles.divider} />
        </Swipeable>
      );
    }
  };

  return (
    <>
      <Header title={title} showIcons={false} />
      <View style={[styles.container]}>
        {
          tasks && tasks.length > 0
            ? (
              <View
                style={styles.listContainer}
              >
                <FlatList
                  style={styles.swipeList}
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
      </View>
    </>
  );
};

CompletedTasksScreen.propTypes = {
  completedTasks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
  fetchCompletedTasks: PropTypes.func.isRequired,
  moveTaskToUndone: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  title: state.user.title,
  completedTasks: state.task.completedTasks
});

const mapDispatchToProps = dispatch => ({
  changeTitle: data => dispatch(switchTitle(data)),
  fetchCompletedTasks: () => dispatch(getCompletedTasks()),
  moveTaskToUndone: id => dispatch(undoTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompletedTasksScreen);
