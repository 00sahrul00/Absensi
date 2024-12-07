import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AbsensiMasuk = () => {
  const [nama, setNama] = useState('');
  const [guruMapel, setGuruMapel] = useState('');
  const [nim, setNim] = useState('');
  const [submittedData, setSubmittedData] = useState([]); // State untuk menyimpan data yang sudah di-submit

  const handleSubmit = () => {
    if (!nama || !guruMapel || !nim) {
      Alert.alert('Error', 'Harap isi semua data!');
      return;
    }

  // Simpan data ke dalam state submittedData
  setSubmittedData([...submittedData, { nama, guruMapel, nim }]);

   // Simulasi penyimpanan data
   console.log('Data Absensi:', { nama, guruMapel, nim });

    Alert.alert('Data Tersimpan', `Nama: ${nama}\nGuru Mapel: ${guruMapel}\nNIM: ${nim}`);
    // Di sini Anda bisa mengirim data ke server atau menyimpannya ke storage lokal

       // Setelah submit, reset input (opsional)
       setNama('');
       setGuruMapel('');
       setNim('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi Masuk</Text>

      <Text style={styles.label}>Nama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Nama"
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.label}>Guru Mapel:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Guru Mapel"
        value={guruMapel}
        onChangeText={setGuruMapel}
      />

      <Text style={styles.label}>NIM:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan NIM"
        keyboardType="numeric"
        value={nim}
        onChangeText={setNim}
      />

      <Button title="Submit" onPress={handleSubmit} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default AbsensiMasuk;
