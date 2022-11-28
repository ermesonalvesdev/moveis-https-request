import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import API from './src/api/api';
import Moveis from './src/components/service';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      moveis: [],
      loading: true
    }
  }

  async componentDidMount(){
    const response = await API.get('r-api/?api=filmes');
    this.setState({
      moveis: response.data,
      loading: false
    })
  }

  render(){

    if(this.state.loading){
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#3186ed" size={'large'}/>
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
          
          <FlatList
          style={styles.flatList}
          data={this.state.moveis}
          keyExtractor={item => item.id.toString()}
          renderItem={ ({item}) => <Moveis data={item} /> }
          />
  
          <StatusBar style="light" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
