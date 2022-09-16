import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, TextInput, Image, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [goalText, setGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function goalInputHandler(enteredText) {
    setGoalText(enteredText)


  }
  function deleteGoal(id) {
    setCourseGoals(prev => {
      return prev.filter((item) => item.id !== id)
    })
  }
  function addGoalHandler() {
    goalText && setCourseGoals(prev => [...prev, { text: goalText, id: Math.random().toString() }])
    setGoalText("")
    setModalIsVisible(false)

  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer} >
        <Button title='Add New Goal' color='#5e08cc' onPress={() => setModalIsVisible(true)} />
        <GoalInput visible={modalIsVisible} onClose={() => setModalIsVisible(false)} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} value={goalText} />
        <View style={styles.goalsContainer} >
          {/* Flatlist is import for data you're getting from an api */}
          <FlatList data={courseGoals} keyExtractor={(item, i) => {
            return item.id
          }}
            alwaysBounceVertical={false} renderItem={itemData => {
              return (
                <GoalItem text={itemData.item.text} onPress={deleteGoal} id={itemData.item.id} />
              )
            }} />


        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,

  },


  goalsContainer: {
    flex: 5,

  },


});
