import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function home(){
    return <View>

                <View style= {styles.TopView}>
                    <FontAwesome5 name="grip-lines" size={24} color="black" />
                        <View style={styles.bikeview}> 
                            <Fontisto name="bicycle" size={24} color="black" />
                        </View> 

                         <View style={styles.bellsearchview}>
                            <AntDesign name="search1" size={24} color="black" />
                                <View style={styles.bellview}>
                                    <Fontisto name="bell" size={24} color="black" /> 
                                </View>
                        </View>                       
                </View>

                <View style={styles.TopNav}>
                        <Text style={styles.TitleText}>The World's </Text>
                        <Text style={styles.BestBike}>Best Bikes</Text>
                </View>

                <View>
                    <Text style={styles.Catview}>Categories</Text>
                </View>

                <View style={styles.catTabs}>
                    <TouchableOpacity style={styles.allbutton}>
                        <Text style={styles.allview}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Roadtab}>
                        <Text style={styles.roadbike}>Roadbike</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mounttab}>
                        <Text style={styles.mountain}>Mountain</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.urbantab}>
                        <Text style={styles.urban}>Urban</Text>
                    </TouchableOpacity>
                </View>
        
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  
    },

    TitleText:{
        fontSize:20,
        marginTop:4,
        marginLeft:20,
        color:"gray",

    },

    BestBike:{
        fontSize:25,
        fontWeight:"bold",
        color:"#ff792f",
    },

    TopNav:{
        marginTop:25,
        flexDirection:"row",
    },

    TopView:{
        flexDirection:"row",
        marginTop:60,
        marginLeft:22,
    },

    bikeview:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:143,
    },

    bellsearchview:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:100,
    },

    bellview:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:18,
    },

    Catview:{
        fontSize:22,
        marginTop:30,
        marginLeft:20,
        fontWeight:"bold",
    },

    catTabs:{
        flexDirection:"row",

    },

    allview:{
        fontSize:18,
        color:"gray",
    },

    allbutton:{
        marginTop:20,
        marginLeft:10,
        backgroundColor: "#e6e6e6",
        padding: 15,
        borderRadius: 12,
        flexDirection: "row",
        width: 70,
        justifyContent: "center",
    },
    roadbike:{
        fontSize:18,
        color:"gray",
    
    },

    Roadtab:{
        marginTop:20,
        marginLeft:15,
        backgroundColor: "#e6e6e6",
        padding: 15,
        borderRadius: 12,
        flexDirection: "row",
        width: 130,
        justifyContent: "center",
    },

    mountain:{
        fontSize:18,
        color:"gray",
    
    },

    mounttab:{
        marginTop:20,
        marginLeft:15,
        backgroundColor: "#e6e6e6",
        padding: 15,
        borderRadius: 12,
        flexDirection: "row",
        width: 130,
        justifyContent: "center",
    },

    urban:{
        fontSize:18,
        color:"gray",
    
    },

    urbantab:{
        marginTop:20,
        marginLeft:15,
        backgroundColor: "#e6e6e6",
        padding: 15,
        borderRadius: 12,
        flexDirection: "row",
        width: 130,
        justifyContent: "center",
    },

});    