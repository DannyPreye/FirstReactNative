import { View, Text, StyleSheet, Pressable } from "react-native"


export default function GoalItem({ text, onPress, id }) {
    return (
        <View style={styles.listItems} >
            <Pressable android_ripple={{ color: '#ddddd' }} onPress={onPress.bind(this, id)} style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalTest}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    listItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalTest: {
        padding: 8,
        color: 'white'

    }
})