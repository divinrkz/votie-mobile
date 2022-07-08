import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { API_URL, get } from '../services';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VotesScreen() {
    const [candidates, setCandidates] = useState([])

    const getCandidates = async () => {
        try {
            let res = await fetch(API_URL + '/votes', await get());
            console.log(res)
            let data = await res.json();
            console.log(data)
            setCandidates(data.data)
            
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCandidates()
    }, [])

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={{fontSize: 20}}>Votes</Text>
                {candidates.map((candidate: any) => (
                    <View key={candidate._id}>
                        <Text>{candidate.names}</Text>
                    </View>
                ))}
            </SafeAreaView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,

    },
    textLogo: {
        fontSize: 24
    }
});