import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function CandidateShower({candidate}) {
  
    return (
        <View >
            <View style={styles.view}> 
                <Image style={styles.tinyLogo} source={{uri: candidate.profileImage || `https://ui-avatars.com/api/?background=4C73C9&color=fff&name=${candidate.names}`}}/>
                <View style={{flexShrink: 1}}>
                    <Text style={{fontSize: 18, color: '#5A5A5A', fontWeight: 'bold', marginBottom: 5}}>{candidate.names}</Text>
                    <Text style={{color: '#5A5A5A'}}>{candidate.missionStatement}</Text>
                </View>
            </View>
            <View style={{
                    height: 1,
                    marginTop: 14,
                    backgroundColor: '#E9E9E9',
                    alignSelf: 'stretch'
                }} />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    view: {
        flexDirection: 'row',
        },
    tinyLogo: {
      width: 80,
      marginRight: 10,
      borderRadius: 50,
      height: 80,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  