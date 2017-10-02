'use strict'
import React from 'react'
import { ThemeProvider, Button } from 'react-native-material-ui';
import { MKTextField } from 'react-native-material-kit';
import { uiTheme } from '../../store.js'
import { StyleSheet, View, Image, ImageBackground, ActivityIndicator, Text } from 'react-native'

export default class TabThreeScreenOne extends React.Component {
  render(){
    return(
      <ThemeProvider uiTheme={uiTheme}>
        <View style={{flex:1, flexDirection:'column', backgroundColor: '#a4cefd'}}>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={styles.contentContainer}>
              <MKTextField textInputStyle={{color: '#ddd'}} placeholder="Summoner Name..." />
              <Button raised primary text="Add Summoner" />
            </View>
          </View>
        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'transparent',
    flex: 0.92
  }
});