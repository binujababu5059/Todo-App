import React, {useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button, ScrollView,TouchableOpacity} from 'react-native'

export default function App (){
    const [getText , setText] = useState (" ");
    const [getList , setList] = useState([])

    const addItem = () =>{
        setList([...getList,
            {key:Math.random().toString(), data:getText} ]);
        setText('');
    }

    const removeItem = (itemKey) =>{
        // var list = getList.filter(item => item.key != itemKey)
        // setList(list);
         setList(list => getList.filter(item => item.key != itemKey))
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>TODO APP</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                           placeholder = "Enter Item"
                           onChangeText = {text => setText(text)}
                           value= {getText} />
               
                <Button title="ADD"
                        onPress= {addItem}/>
            </View>
            <View style={{marginTop:20}}>
                <Text styles={{fontSize:15}}>{getText}</Text>
            </View>
            <ScrollView style={styles.scrollview}>
                {getList.map((item) =>
               <TouchableOpacity
                 key={item.key}
                 activeOpacity = {0.7}
                 onPress = {() => removeItem(item.key)}>
                    <View style={styles.scrollviewItem}>
                        <Text style={styles.scrollviewText}>{item.data}</Text>
                        <View style ={styles.button}>
                            <Text style={styles.crosstext}>X</Text>
                        </View>
                    </View>
                </TouchableOpacity> 
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        // justifyContent:'center',
        alignItems:'center',
        paddingTop:25
    },
    title:{
        fontSize:40,
        color:'red'
    },
    inputContainer:{
        flexDirection:'row',
        width:'70%',
        justifyContent: 'space-between',
        marginTop:30,
        alignItems:'center'
        
    },
    textInput:{
        borderColor:'blue',
        // borderWidth:3,
        // borderRadius:10,
        borderBottomWidth: 2,
        width:'70%',
        fontSize: 16,
        padding: 10
    
    },
    scrollview:{
        width:'100%'
    },
    scrollviewItem:{
        backgroundColor:"orange",
        alignSelf:'center',
        padding: 10,
        margin: 5,
        width:'90%',
        borderRadius:10,
        flexDirection: 'row',
        justifyContent:'space-between'
       
    },
    scrollviewText:{
        fontSize:25,
        color:'white'
    },
    button:{
        backgroundColor: 'gray',
        borderRadius: 50,
        width:30,
        padding: 5,
        justifyContent:'center',
        alignItems: 'center'

    },
    crosstext:{
        fontSize:25,
        color:'red',
        fontWeight:'bold'
    }
})