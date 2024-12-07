import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function LoginScreen() {

  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>HADIRyuk</Text>
        <Text style={styles.subLogo}>Absen Guru</Text>
      </View>
      
      {/* Login Form Section */}
      <View style={styles.form}>
        <Text style={styles.instruction}>Silahkan login menggunakan akun Guru</Text>
        {/* Email Input */}
        <TextInput 
          style={styles.input} 
          placeholder="Masukkan email atau nomor hp" 
          placeholderTextColor="#B0B0B0"
        />

        {/* Password Input */}
        <TextInput 
          style={styles.input} 
          placeholder="Masukkan password" 
          placeholderTextColor="#B0B0B0" 
          secureTextEntry
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Lupa password ?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/Homescreen")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <Text style={styles.registerText}>
        Belum punya akun? <Text style={styles.registerLink}>Daftar</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  subLogo: {
    fontSize: 16,
    color: '#A52A2A',
  },
  form: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  instruction: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#333',
  },
  forgotPassword: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#A52A2A',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    color: '#66666',
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: '#4CA50',
    fontWeight: 'bold',
},
});
