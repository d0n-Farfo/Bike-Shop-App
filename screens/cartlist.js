import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function cartlist({navigation}){
    return(
        <View>
            <View style={styles.topnav}>
                <TouchableOpacity onPress={() => {navigation.navigate("home")}}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                    <Text style={styles.cartText}>Cart list</Text>
            </View>
                    <Text style={styles.title2}>(3 items)</Text>
            <View>

            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({

    topnav:{
        flexDirection:"row",
        marginTop:50,
        marginLeft:15,
    },

    cartText:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:120,
    },

    title2:{
        fontSize:18,
        marginLeft:165,
        marginTop:-8,
        color:"gray",
    }
  

});