import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginScreen = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login işlemleri burada yapılacak
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View className="flex-1 bg-[#1a237e] p-5 justify-center">
      <View className="items-center mb-8">
        <Image
          source={require('../../assets/images/illust-1.png')}
          className="w-52 h-52"
        />
      </View>
      
      <Text className="text-2xl font-bold text-white text-center mb-2">
        Welcome Back!
      </Text>
      <Text className="text-base text-gray-300 text-center mb-8">
        Please Log into your existing account
      </Text>

      <TextInput
        className="bg-[#2a337e] rounded-full px-4 py-4 mb-4 text-white text-base"
        placeholder="Your Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="bg-[#2a337e] rounded-full px-4 py-4 mb-4 text-white text-base"
        placeholder="Your Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-[#00BFA5] rounded-full py-4 items-center mt-2"
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-bold">Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;






