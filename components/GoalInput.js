import { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

export default function GoalInput({ addGoalHandler, goalInputHandler, value, visible, onClose }) {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput value={value} style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your Course Goal' />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button onPress={addGoalHandler} title='Add Goal' color='#5e0acc' />
                    </View>
                    <View style={styles.buttonView}>
                        <Button onPress={onClose} title='Cancel' color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
        borderRadius: 6
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    buttonView: {
        width: 100,
        marginHorizontal: 8

    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})



