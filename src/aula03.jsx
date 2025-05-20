import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

class Aula03 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'blueviolet',
        }
    }
    changeColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.setState({backgroundColor: randomColor});
    }
    
    render() {

        

        return(
            <View style={ styles.container }>
                <TouchableOpacity style={[styles.botao, {backgroundColor: this.backgroundColor}]}
                onPress={ this.changeColor}
                >
                    <Text style={styles.textbotao}>Toque para trocar a cor do fundo</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Aula03;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'violet',
    },

    botao: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
    },

    textbotao: {
        color: 'white',
        fontWeight: 'bold'
    }
})