import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import Form from './src/components/Form';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const pressHandler = () => {
    setVisibleModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        date admin <Text>pet shop</Text>
      </Text>
      <Pressable style={styles.btnNewDate} onPress={pressHandler}>
        <Text style={styles.btnText}>New Date</Text>
      </Pressable>
      <Form modalVisible={visibleModal} setModal={setVisibleModal} />
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
