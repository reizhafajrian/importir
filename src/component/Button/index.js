import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

import {ICCamera, ICLove, ICShare} from '../../assets/index'

export default function Button({type,icon,name,onPress}) {

    if(type==="btn_camera"){
        return (
            <TouchableOpacity style={style.btnCamera} onPress={onPress}>
               <ICCamera/>
            </TouchableOpacity>
        )
    }else if(type==="button"){
        return (
            <TouchableOpacity>
                <Text>{name}</Text>
            </TouchableOpacity>
        )
    }else if(type==="favorite"){
        return (
            <TouchableOpacity style={style.btnFavorite}>
                <ICLove/>
            </TouchableOpacity>
        )
    }
    else if(type==="share"){
        return (
            <TouchableOpacity style={style.btnFavorite}>
                <ICShare/>
            </TouchableOpacity>
        )
    }
    else if(type==="viewall"){
        return (
            <TouchableOpacity style={style.btnViewAll}>
                <Text style={{color:"white"}}>View All</Text>
            </TouchableOpacity>
        )
    }
   
}
const style=StyleSheet.create({
    btnCamera:{
        backgroundColor:"white",
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:7
    },
    btnFavorite:{
        width:35,
        height:35,
        backgroundColor:"#F1F1F1",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },btnViewAll:{
        width:69,
        height:34,
        backgroundColor:"#7E3CFA",
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    }
})
