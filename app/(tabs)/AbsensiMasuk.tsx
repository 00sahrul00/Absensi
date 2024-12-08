import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

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
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Absensi Masuk</Text>
      </View>
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
     {/* Tampilan Data yang Sudah Disubmit */}
     <Text style={styles.subtitle}>Data yang Sudah Di-submit:</Text>
      {submittedData.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada data.</Text>
      ) : (
        submittedData.map((item, index) => (
          <View key={index} style={styles.dataContainer}>
            <Text style={styles.dataText}>Nama: {item.nama}</Text>
            <Text style={styles.dataText}>Guru Mapel: {item.guruMapel}</Text>
            <Text style={styles.dataText}>NIM: {item.nim}</Text>
          </View>
        ))
      )}
    </ScrollView>
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
