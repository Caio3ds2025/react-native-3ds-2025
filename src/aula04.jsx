import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-web";

class App extends Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text></Text>
                    <TouchableOpacity>
                        <Icon name={isOpenMenu ? 'cloese' : 'menu'} size={30} color="000"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'violet', 
    },

    texto: {
        color: 'white',
    }
})