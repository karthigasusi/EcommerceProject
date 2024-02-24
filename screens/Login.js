import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const users = [
      {username: 'karthi', password: 'aditi'},
      {username: 'susmi', password: 'prani'},
      {username: 'Kittu', password: 'Admin'},
      {username: 'Guest', password: '12345'},
    ];
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    const matchedUser = users.find(
      user =>
        user.username === trimmedUsername && user.password === trimmedPassword,
    );
    if (matchedUser) {
      navigation.navigate('HomePage');
    } else if (trimmedUsername === '' || trimmedPassword === '') {
      alert('Please enter both username and password.');
    } else {
      alert('Invalid username or password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../src/images/try.jpg')}>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: 150, width: 150, borderRadius: 75, marginTop: 75}}
            source={require('../src/images/sevu.png')}
          />
          <Text style={{fontSize: 35, color: '#f0f000', textShadowColor:'#000', textShadowRadius:0,  fontWeight: 'bold', marginTop:10,}}>
          கிட்டு சேவு
          </Text>
        </View>
        <Text style={styles.title}>Login with email</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            style={styles.toggleText}
            source={
              showPassword
                ? require('../src/images/eye.png')
                : require('../src/images/eye-on.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{color: '#fff', marginTop: 10}}>
          Don't have an account{' '}
          <Text style={{textDecorationLine: 'underline'}}>Register</Text>
        </Text>
        <View>
          <Text style={{color: '#fff', marginTop: 70}}>Forgot Password?</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
  },
  Header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
  toggleText: {
    height: 20,
    width: 20,
    left: 120,
    bottom: 50,
    zIndex: 999,
  },
});

export default Login;
