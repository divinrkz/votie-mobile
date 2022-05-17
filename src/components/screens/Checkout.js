import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Icon,
  Image,
} from "react-native";
import Colors from "../../../util/colors"
import { Button } from "react-native-elements";


export const ListItem=({imgUrl,name})=>{
    return(
      <View style={styles.container}>
        <View style={styles.imageView}>
           <Image source={require('../../../assets/'+imgUrl)} style={styles.imageStyle}/>
        </View>
        <View style={styles.textDescView}>
          <Text style={styles.imgText}>{name}</Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
     container: {
         marginTop:25,
         marginBottom:10,
         flexDirection: "row",
         flexWrap: "wrap",
         width: "100%"
     },
     imgText:{
      fontSize:20,
     },
     imageView:{
         width: "50%",
     },
     textDescView:{
         justifyContent: "center",
         width: "50%"
     },
     imageStyle:{
         width:150,
         height:80
     }
  })
