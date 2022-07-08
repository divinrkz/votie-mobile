import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CandidateShower from '../components/showers/CandidateShower';
import { API_URL, get } from '../services';

export default function CandidatesScreen() {
    const [candidates, setCandidates] = useState([])

    const getCandidates = async () => {
        try {
            let res = await fetch(API_URL + '/candidates', await get());
            console.log(res)
            let data = await res.json();
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
                <Text style={{fontSize: 20}}>Candidates</Text>
                <ScrollView>
                    <View style={{marginTop: 30}}>
                        {candidates.map((candidate: any) => (
                            <View key={candidate._id} style={{marginBottom: 30}}>
                                 <CandidateShower candidate={candidate} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
    },
    textLogo: {
        fontSize: 24
    }
});