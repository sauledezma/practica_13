import React from 'react'
import { Text } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
    return <Text>Este es  {route.params.name}'s profile</Text>;
  };

export default ProfileScreen