import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native'; 
import { initnotify, getToken } from 'expo-push-notification-helper';

class App extends React.Component{

    componentDidMount(){

        /*const { status: existingStatus } = Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );

        let finalStatus = existingStatus;

        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
            Alert.alert('Token', 'Não deu permissão');
            return;
        }

        // get expo push token
        let token = Notifications.getExpoPushTokenAsync();*/

        initnotify().then(async (data) => {
            if (data) {
                Alert.alert('Token', await getToken());
            } else {
                Alert.alert('Token', 'Sem permissão');
            }

            // Alert.alert('Token', 'Final code');

        })

        
    } 

    render(){
        return (
            <View style={styles.container}>
                <Text>React Notification</Text>
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