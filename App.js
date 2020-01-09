import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Permisissions from 'expo-permissions';
import { Platform } from 'react-native'; 


class App extends React.Component{

    componentWillMount(){
        // get expo push token
        let token = Notifications.getExpoPushTokenAsync();

        Alert.alert('Token', token);
    } 

    render(){
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!!!</Text>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;