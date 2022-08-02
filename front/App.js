import React ,{ useState }  from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { Button,Input } from 'react-native-elements';
import ToDoItem from './ToDoItems';


export default function App() {
  const [name , setName] = useState('')
  const [todos, setTodos] = useState([
    {
      _id: 0,
      name: 'купить мак ',
      isChecked: true,
    },
  ])
  const onPressNameHandler = () => {
    
     
      setTodos(prev =>[...prev,{_id: todos.length, name, isChecked:false}])
      setName('')
    
  }
  const toggleCheackedToDo = idx =>{
    const newArray = [].concat(todos)
    newArray[idx].isChecked=!newArray[idx].isChecked

    setTodos(newArray)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToDo приложение</Text>
      <StatusBar style="auto" />
      
     
      {todos &&
      todos.map((todo, idx) => (
        <ToDoItem
        key={`_todo_${todo._id}`}
        idx={idx}
        name={todo.name}
        isChecked={todo.isChecked}
        toggleCheackedToDo={toggleCheackedToDo}
        />
      ))}


      <View style={styles.actions}>
      

      <Input style={styles.input}
      value={name}
      onChangeText={setName}
      placeholder='Название'
      />


      <Button style={styles.button} onPress={onPressNameHandler} title='Добавить'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#e9eaee',
    paddingTop: '13%',
    color:'#222',
    
  },

  heading:{
    fontSize: 30,
    textAlign:'center',
    fontWeight:'700',
    marginBottom: '10%',
  },

  input:{
   borderRadius: 15,
   shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 5,
},
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,

  width:'70%',
  marginHorizontal: '15%',
  marginVertical: 15,
  paddingHorizontal: 15,
  paddingVertical: 15,
  fontSize: 18,
},


button:
{
marginHorizontal: '15%',
fontSize:18,
width:'70%',
},
});
