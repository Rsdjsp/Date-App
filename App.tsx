/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Form from './src/components/Form';
import {Patient} from './src/types/mainTypes';
import PatientWrapper from './src/components/Patient';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [patients, setPatients] = useState<Patient[] | null>([]);
  const [patient, setPatient] = useState<Patient | null>({} as Patient);
  const [modalPatient, setModalPatient] = useState(false);

  const editPatient = (id: number) => {
    const editedPatient = patients!.find((pat: Patient) => pat.id === id);
    setPatient(editedPatient!);
  };

  const deletePatient = (id: number) => {
    Alert.alert(
      '¿Do you want delete this patient?',
      'A deleted patient cannot be recovered',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Yes, Delete',
          onPress: () => {
            const updatedPatients = patients!.filter(
              patientsState => patientsState.id !== id,
            );
            setPatients(updatedPatients);
          },
        },
      ],
    );
  };

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
      {patients!.length === 0 ? (
        <Text style={styles.noPatients}>No Patients Yet</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={(item: Patient) => item.id as any}
          renderItem={({item}) => {
            return (
              <PatientWrapper
                item={item}
                setVisibleModal={setVisibleModal}
                setPatient={setPatient}
                editPatient={editPatient}
                deletePatient={deletePatient}
                setModalPatient={setModalPatient}
              />
            );
          }}
        />
      )}
      {visibleModal && (
        <Form
          modalVisible={visibleModal}
          setModal={setVisibleModal}
          setPatients={setPatients}
          patients={patients}
        />
      )}
      <Modal visible={modalPatient} animationType="slide">
        <PatientDetails
          patient={patient!}
          setModalPatient={setModalPatient}
          setPatient={setPatient}
        />
      </Modal>
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
  noPatients: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: '600',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
