import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>User Profile</Text>
  </View>
);

const Profile = ({ name }) => (
  <View style={styles.profileContainer}>
    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.profileImage} />
    <Text style={styles.profileName}>{name}</Text>
  </View>
);

const GreetingButton = ({ toggleGreeting }) => (
  <TouchableOpacity style={styles.button} onPress={toggleGreeting}>
    <Text style={styles.buttonText}>Toggle Greeting</Text>
  </TouchableOpacity>
);

const App = () => {
  const [greeting, setGreeting] = useState('');

  const toggleGreeting = () => {
    setGreeting(greeting ? '' : 'Hello! Welcome to React Native');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Profile name="John Doe" />
      <GreetingButton toggleGreeting={toggleGreeting} />
      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    backgroundColor: '#6200ea',
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  greeting: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
