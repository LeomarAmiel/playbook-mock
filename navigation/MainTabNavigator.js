import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen';
import PartnerScreen from '../screens/PartnerScreen';
import ProfileScreen from '../screens/ProfileScreen';

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen,
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="md-search" />
  ),
};

const PartnerStack = createStackNavigator({
  Partner: PartnerScreen,
});

PartnerStack.navigationOptions = {
  tabBarLabel: 'Your Partner',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-happy" />,
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: 'white',
      },
    },
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="md-person" />
  ),
};

export default createBottomTabNavigator({
  DiscoverStack,
  PartnerStack,
  ProfileStack,
});
