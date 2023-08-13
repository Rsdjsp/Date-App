import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {
  const pressHandler = () => {
    console.log('you press the button');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        date admin <Text>pet shop</Text>
      </Text>
      <Pressable style={styles.btnNewDate} onPress={pressHandler}>
        <Text style={styles.btnText}>New Date</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: 'bold',
  },
  btnNewDate: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
