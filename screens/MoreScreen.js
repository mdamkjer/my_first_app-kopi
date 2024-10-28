import React from 'react';
import { View, Text } from 'react-native';
import MoreItem from '../components/MoreItem';
import { styles } from '../styles/MoreScreenStyle';

const MoreScreen = () => {
  const options = [
    { id: '1', title: 'User Profile' },
    { id: '2', title: 'FAQ\'s' },
    { id: '3', title: 'Language' },
    { id: '4', title: 'Terms and conditions' },
    { id: '5', title: 'Logout' },
  ];

  const handleOptionPress = (title) => {
    console.log(`${title} pressed`);
    // Here you could navigate or handle each option click as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>More</Text>
      {options.map(option => (
        <MoreItem
          key={option.id}
          title={option.title}
          onPress={() => handleOptionPress(option.title)}
        />
      ))}
    </View>
  );
};

export default MoreScreen;