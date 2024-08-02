import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { auth} from '../../my-app/FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = async() => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) alert('Sign In Success');
    }catch (error : any) {
      console.log(error);
      alert('signUp error'+ error.message);
    }
  };

  const handleSignUp = async() => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)

      if (user) alert ( 'Sign Up Success')

    }catch (error : any){
      console.log(error);
      alert('signUp error ' + error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Sign In" onPress={handleSignIn} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

