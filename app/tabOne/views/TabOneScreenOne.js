'use strict'
import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Image, ImageBackground, ActivityIndicator, Text } from 'react-native'
import { ThemeProvider, Button } from 'react-native-material-ui';
import { MKTextField } from 'react-native-material-kit';
import { uiTheme } from '../../store.js'
// import { SummonerScreen } from './summoner.js'

export default class TabOneScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {animating: false};
    this.handleChange = this.handleChange.bind(this);
    this._onSearch = this._onSearch.bind(this);
  }

  _onSearch() {
    const parent = this;
    this.setState({ animating: true })
    fetch('http://localhost:3000/summoner/'+this.state.summoner_name, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      parent.props.navigator.push({
        title: parent.state.summoner_name,
        component: SummonerScreen,
        passProps: {
          match_data: responseJson.match_data, 
          summoner_ranks: responseJson.summoner_ranks,
          champ_masteries: responseJson.champ_masteries,
          navigator: parent.props.navigator
        }
      });
      this.setState({ animating: false })
    })
  }

  handleChange(e) {
    this.setState({ summoner_name: e });
  }

  render() {
    return ( 
      <ThemeProvider uiTheme={uiTheme}>
        <View style={{flex:1, flexDirection:'column', backgroundColor: '#a4cefd'}}>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={styles.contentContainer}>
              <Image source={require("./../../../assets/images/logo.png")} style={styles.homeLogo} />
              <MKTextField onChangeText={ this.handleChange } style={styles.summonerSearchField} textInputStyle={{color: '#ddd'}} placeholder="Summoner Name..." />
              <Button raised primary text="Search" onPress={this._onSearch} />
              <ActivityIndicator animating={this.state.animating} color='#555' size="large"/>
            </View>
          </View>
        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'transparent',
    flex: 0.92
  },
  summonerSearchField: {
    marginBottom: 8,
    width: 200
  },
  homeLogo: {
    width: 200,
    height: 120,
    resizeMode: 'contain'
  }
});