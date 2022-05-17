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
import Colors from "../../util/colors";
import { Button } from "react-native-elements";


export const ListItem=({imgUrl,name})=>{
    return(
      <View style={styles.container}>
        <View style={styles.imageView}>
           <Image source={imgUrl} />
        </View>
        <View style={styles.textDescView}>
          <Text>{name}</Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
     container: {
         flexDirection: "row",
         flexWrap: "wrap",
         width: "100%"
     },
     imageView:{
         width: "50%",
     },
     textDescView:{
         width: "50%"
     }
  })
