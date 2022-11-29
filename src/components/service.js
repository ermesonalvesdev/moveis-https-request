import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default class Moveis extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity>
                <Image
                    style={styles.moveisFt}
                    source={{uri: this.props.data.foto}}
                />
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#FFF' }}>
                    {this.props.data.nome}
                </Text>

                <View style={{
                    width: 300, 
                    height: 250, 
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <Text style={{ fontSize: 16, color: '#FFF', textAlign: 'center' }}>
                    {this.props.data.sinopse}
                </Text>
                <TouchableOpacity style={{
                    width: 150, 
                    height: 50,
                    borderRadius: 25, 
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 20
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>View Movei</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    moveisFt: {
        width: 300,
        height: 450,
        borderRadius: 10,
    }
});