import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const convertNumber = () => {
    const num = parseInt(input, 10);
    if (!isNaN(num)) {
      setBinary(num.toString(2));
      setDecimal(num.toString(10));
      setHexadecimal(num.toString(16).toUpperCase());
    } else {
      setBinary('');
      setDecimal('');
      setHexadecimal('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number System Conversion</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Convert" onPress={convertNumber} />
      <View style={styles.results}>
        <Text>Binary: {binary}</Text>
        <Text>Decimal: {decimal}</Text>
        <Text>Hexadecimal: {hexadecimal}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  results: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
});
