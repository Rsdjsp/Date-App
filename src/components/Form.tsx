/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface Props {
  modalVisible: boolean;
  setModal: (modal: boolean) => void;
}

export default function Form({modalVisible, setModal}: Props) {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>New Date</Text>
          <Pressable
            style={styles.pressable}
            onLongPress={() => setModal(false)}>
            <Text style={styles.pressableText}>X Cancel</Text>
          </Pressable>
          <View style={styles.view}>
            <Text style={styles.label}> Patient Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient Name"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.label}> Owner Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner Name"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.label}> Owner Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.label}> Owner Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner Phone"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={10}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.label}> Input Date</Text>
            <View style={styles.containerDate}>
              <DatePicker
                date={date}
                locale="es"
                onDateChange={newDate => setDate(newDate)}
              />
            </View>
          </View>
          <View style={styles.view}>
            <Text style={styles.label}>Pet Symptoms</Text>
            <TextInput
              style={styles.input}
              placeholder="Pet Symptoms"
              placeholderTextColor={'#666'}
              keyboardType="default"
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={6}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
    marginBottom: 10,
  },
  boldTitle: {
    fontWeight: '900',
  },
  view: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,

    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
    marginBottom: 15,
  },
  containerDate: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  pressable: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  pressableText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
