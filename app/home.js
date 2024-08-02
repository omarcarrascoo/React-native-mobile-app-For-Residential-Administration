import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { COLORS, SIZES } from '../constants/theme';
import { Stack, useRouter } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';
import EventListerSmallCard from '../components/eventsLister/EventListerSmallCard';
import AnnauncementLister from '../components/announcementLister/AnnauncementLister';
import MainFooter from '../components/common/footer/MainFooter';

const Home = () =>{
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter()

    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/challenges');
                setChallenges(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching challenges:', error);
                setError('Error fetching challenges');
                setLoading(false);
            }
        };

    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
                <Text>{error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
            <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
            <View showsVerticalScrollIndicator={false} style={styles.container}>
               <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Próximos eventos</Text>
                        <TouchableOpacity onPress={()=>{router.push('/calendario')}}><Text style={styles.link}>Ver Calendario</Text></TouchableOpacity>
                    </View>
                    <EventListerSmallCard/>
               </View>
               <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Anuncios recientes</Text>
                        <TouchableOpacity onPress={()=>{router.push('/cupones')}}><Text style={styles.link}>Ver mas</Text></TouchableOpacity>
                    </View>
                    <AnnauncementLister/>
               </View>
            </View>
            <MainFooter/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: SIZES.large,
        paddingTop: SIZES.small
    },
    subSection:{
        paddingTop:20,
    },
    subtitleContainer:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginBottom: SIZES.large
    },
    subtitle:{
        fontSize:SIZES.medium,
        color:COLORS.MainText,
    },
    link:{
        color:COLORS.MainPurple,
       textDecorationLine:'underline',
    }

})


export default Home;
