import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const AddForm = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () =>{
        console.log("ok")
        navigation.navigate("home")
    }

  return (
    <View style={styles.container}>
      <Text style={styles.AddText}>AddForm</Text>
      <TextInput
        placeholder="title"
        onChangeText={(e)=>setTitle(e)}
        value={title}
      />
      <TextInput
        placeholder="description"
        onChangeText={(e)=>setDescription(e)}
        value={description}
      />
      <Button onPress={handleSubmit} title="Save" color="#841584" />
    </View>
  )
}

export default AddForm

const styles = StyleSheet.create({
    container:{flex:1, justifyContent:"center", alignItems:'center', backgroundColor:"pink"},
    AddText:{fontSize:30, paddingVertical:30}
})