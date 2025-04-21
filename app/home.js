import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { COLORS, SIZES } from '../constants/theme';
import { Stack, useRouter } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';
import EventListerSmallCard from '../components/eventsLister/EventListerSmallCard';
import AnnauncementLister from '../components/announcementLister/AnnauncementLister';
import MainFooter from '../components/common/footer/MainFooter';
import { setTokenInStorage } from '../redux/setToken.redux';
import { getNextEvents } from '../redux/eventosRedux';

const Home = () =>{
    const [myEvents, setMyEnvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter()



    const fetchData = async () => {
        const myEventsData = await getNextEvents()
        setMyEnvents(myEventsData)
        setLoading(false)
    };
    const readyApp = async() =>{
        try {
            console.log("Setting the app");
            await setTokenInStorage()
            
        } catch (error) {
            console.warn(error);
        }
    }

    useEffect(()=> {
        setLoading(true)
        readyApp()
        fetchData()
    },[])
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
            {/* <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            /> */}
            <View showsVerticalScrollIndicator={false} style={styles.container}>
               <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Próximos eventos</Text>
                        <TouchableOpacity onPress={()=>{router.push('/calendario')}}><Text style={styles.link}>Ver Calendario</Text></TouchableOpacity>
                    </View>
                    <EventListerSmallCard events={myEvents}/>
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
