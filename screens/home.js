import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Bikeframe from "../components/frame";

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

            <View>
                <FlatList
                    data={categories}
                    renderItem={({item}) => {
                        return <Category name={item.name} />;
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={StyleSheet.bikes}>
            
                <FlatList
                    data={BikeFrames}
                    renderItem={({item}) => {
                        return (
                            <Bikeframe
                                bikename={item.bikename}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                    horizontal={false}
                    numColumns={2}
                />
            </View>  

        
        
    </View>;
}
const categories = [
    {id: '1a', name: 'All'},
    {id: '2', name: 'Roadbike'},
    {id: '3', name: 'Mountain'},
    {id: '4', name: 'Urban'},
  ];
  
  const Category = ({name}) => {
    return (
      <View style={styles.categorytab}>
        <Text style={styles.categoryText}>{name}</Text>
      </View>
    );

   
  };

  
  const BikeFrames = [
    {
      id: '1',
      bikename: 'Santa Cruzz Bike',
      price: '1,700.00',
      image: require('../assets/blue.png'), 
    },

    {
      id: '2',
      bikename: 'Polygod Bike',
      price: '1,500.00',
      image: require('../assets/polygod.png'),
    },
    
    {
      id: '3',
      bikename: 'Mongoose Bike',
      price: '1,200.00',
      image: require('../assets/red.png'),
    },
    
    {
      id: '4',
      bikename: 'H2R Bike',
      price: '60,980.00',
      image: require('../assets/h2r1000.png'),
    },
    
  ];


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

    categorytab: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: '#e6e6e6',
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 12,
        marginTop: 25,

      },
      categoryText: {
        fontSize: 20,
        color: 'gray',

      },

      

});

