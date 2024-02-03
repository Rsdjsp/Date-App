/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Dispatch} from 'react';
import {Patient} from '../types/mainTypes';
import {Text, View, StyleSheet, Pressable} from 'react-native';

interface Props {
  item: any;
  setVisibleModal: (modal: boolean) => void;
  setModalPatient: (modal: boolean) => void;
  setPatient: Dispatch<Patient>;
  editPatient: (id: number) => void;
  deletePatient: (id: number) => void;
}

export default function PatientWrapper({
  item,
  setModalPatient,
  setVisibleModal,
  setPatient,
  editPatient,
  deletePatient,
}: Props) {
  const {id, patient, date} = item;
  return (
    <Pressable
      onLongPress={() => {
        setModalPatient(true);
        setPatient(item);
      }}>
      <View style={styles.contenedor}>
        <Text style={styles.label}>Patient:</Text>
        <Text style={styles.texto}>{patient}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onLongPress={() => {
              setModalVisible(true);
              patientEditar(id);
            }}>
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => patientEliminar(id)}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});
