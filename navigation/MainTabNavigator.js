import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen';
import PartnerScreen from '../screens/PartnerScreen';
import SettingsScreen from '../screens/SettingsScreen';

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen,
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-search"
    />
  ),
};

const PartnerStack = createStackNavigator({
  Partner: PartnerScreen,
});

PartnerStack.navigationOptions = {
  tabBarLabel: 'Your Partner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-happy'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-person"
    />
  ),
};

export default createBottomTabNavigator({
  DiscoverStack,
  PartnerStack,
  SettingsStack,
});
