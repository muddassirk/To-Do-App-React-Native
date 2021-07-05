import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'

const GoalItem = (props) => {
    return (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        // <TouchableHighlight onPress={props.onDelete}>
        // <TouchableNativeFeedback onPress={props.onDelete}> {/* only for android use */}
        // <TouchableWithoutFeedback onPress={props.onDelete}> 
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}> 
            <View style={styles.listStyle} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        color: "#fff",
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem
