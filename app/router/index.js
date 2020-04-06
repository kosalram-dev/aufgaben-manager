import React from 'react';
import { View, Text } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from '../container/Splash/splash-screen';
import LoginScreen from '../container/Login/login.screen';
import CreateTaskScreen from '../container/CreateTask/create-task-screen';
import TaskScreen from '../container/Task/task-screen';
import CompletedTasksScreen from '../container/CompletedTasks/completed-tasks-screen';
import styles from '../styles/global.style';
import { colours } from '../styles/theme';
import { store } from '../store/index';
import { switchTitle } from '../action/userAction';

const modifyHeader = title => {
  store.dispatch(switchTitle(title));
};

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'modal'
  }
);

const AppStack = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Task: {
        screen: TaskScreen,
        navigationOptions: {
          tabBarOnPress: ({ defaultHandler }) => {
            defaultHandler();
            modifyHeader('Tasks');
          },
          tabBarLabel: <Text style={styles.label}>To Do</Text>,
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{ color: tintColor }]} size={25} name="tasks" />
            </View>
          )
        }
      },
      CompletedTasks: {
        screen: CompletedTasksScreen,
        navigationOptions: {
          tabBarOnPress: ({ defaultHandler }) => {
            defaultHandler();
            modifyHeader('Completed Tasks');
          },
          tabBarLabel: <Text style={styles.label}>Done</Text>,
          tabBarIcon: ({ tintColor }) => (
            <View>
              <MaterialIcon style={[{ color: tintColor }]} size={25} name="done-all" />
            </View>
          )
        }
      }
    },
    {
      initialRouteName: 'Task',
      activeColor: colours.primaryColor,
      inactiveColor: colours.dark,
      barStyle: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        shadowOpacity: 0.4,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
      }
    }
  )
);

const RootStack = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Auth: AuthStack,
    App: AppStack,
    CreateTask: {
      screen: CreateTaskScreen
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    mode: 'modal',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
