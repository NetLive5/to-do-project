import React from "react";
import { Text, View, StyleSheet,TouchableHighlight} from "react-native";
import { CheckBox } from "react-native-elements";



const ToDoItem=({idx,name,isChecked,toggleCheackedToDo})=>{
    return(
        <TouchableHighlight underlayColor='transparent'
        onPress={()=>toggleCheackedToDo(idx)}>
        <View style={styles.item} onPress={()=> toggleCheackedToDo(idx)}>
            
            <CheckBox checked={isChecked}/>

            <Text style={styles.name}>{name}</Text>
         </View>

         </TouchableHighlight>


       
    )
}
const styles = StyleSheet.create({
    item: {
        borderRadius: 10,
        backgroundColor:'#ffffff',
        alingItems:'centre',
        padding: 10,
        shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 5,  
},
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
  width:'90%',
  marginHorizontal:'5%',
  marginBottom:10,
  flexDirection:'row',
        
    },
    name: {
        fontSize: 18,
        marginLeft: 5,
        textAlign:'left',
        marginTop: 11,
        
        
    },
})

export default ToDoItem