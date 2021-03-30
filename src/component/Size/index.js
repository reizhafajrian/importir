import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'


export default function Size({data}) {
    const [active,setActive]=React.useState(false)

    const onPress=()=>{
        if(!active){
            setActive(true)
        }
        else{
            setActive(false)
        }
    }


    return (
        <View style={{padding:15}}>
            <TouchableOpacity style={styles.btnSize(active)} onPress={onPress}>
              <Text style={styles.textActive(active)}>{data}</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    btnSize:(active)=>({
        width:45,
        height:45,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#B4B4B4",
        borderWidth:1,
        borderRadius:8,
        backgroundColor:active===true?"black":"white",
       
      }),
      textActive:(active)=>({
        color:active===true? "white":"grey"
      })
})
