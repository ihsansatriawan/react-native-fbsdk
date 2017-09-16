import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FBSDK from 'react-native-fbsdk'

const { LoginButton, AccessToken } = FBSDK

export default class App extends Component {


  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }} >
        <Text>
          Haloo
        </Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data)
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    )
  }
}