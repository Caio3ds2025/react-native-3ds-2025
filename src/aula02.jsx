import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Animated, Easing} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

//cria component animated para aceitar cores animadas
const  AnimatedIcon = Animated.createAnimatedComponent(Icon);

class TelaPlanta extends Component{
    render(){
        return(
            <View style={ styles.container }>

            </View>
        );
    }
}

export default TelaPlanta;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'violet',
        alignItems: 'center',
        justifyContent: 'center'
    },
})