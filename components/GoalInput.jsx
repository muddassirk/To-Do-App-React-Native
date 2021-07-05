import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoals, setEnteredGoals] = useState('')


    const goalInputHandler = (enteredText) => {
        setEnteredGoals(enteredText)
    }

    const onAddHandler = () => {
        props.onAddGoal(enteredGoals)
        setEnteredGoals('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course goal'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoals}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD GOAL" onPress={onAddHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '50%'
    },
    button: {
        width: '40%'
    }

})
export default GoalInput
