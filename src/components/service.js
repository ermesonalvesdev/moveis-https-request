import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Moveis extends Component {

    constructor(props){
        super(props);
        this.state ={}
        
        this.viewMovie = this.viewMovie.bind(this)
    }

    viewMovie(){
        alert(`${this.props.data.sinopse}`)
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.viewMovie}>
                <Image
                    style={styles.moveisFt}
                    source={{uri: this.props.data.foto}}
                />
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#FFF' }}>
                    {this.props.data.nome}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    moveisFt: {
        width: 200,
        height: 300,
    }
});