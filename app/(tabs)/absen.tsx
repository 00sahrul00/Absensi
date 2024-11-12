import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Absensi-Guru</Text>
      </View>

      {/* Attendance Buttons */}
      <TouchableOpacity style={styles.presentButton} onPress={() => router.push('/HADIR')}>
        <Text style={styles.buttonText}>HADIR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.absentButton}>
        <Text style={styles.buttonText}>IZIN</Text>
      </TouchableOpacity>

      {/* Switch Account Link */}
      <Text style={styles.switchAccountText}>ganti akun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', 
    marginBottom: 20,
  },
  userName: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  userFullName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
  },
  presentButton: {
    flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingVertical: 15,
      backgroundColor: '#4CAF50',
      borderColor: '#4CAF50',
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: 10,
  },
  absentButton: {
    flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingVertical: 15,
      backgroundColor: '#FFFFFF',
      borderColor: '#4CAF50',
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  switchAccountText: {
    fontSize: 14,
    color: '#666666',
    textDecorationLine: 'underline',
  },
});
