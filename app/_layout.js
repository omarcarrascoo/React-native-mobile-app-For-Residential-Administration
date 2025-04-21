import React from 'react';
import { Stack } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';

const Layout = () => {
    return (
        <Stack initialRouteName="home">
            {/* <Stack.Screen name="home" /> */}
            <Stack.Screen
                name='home'
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
            <Stack.Screen
                name='visitas'
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
        </Stack>
    );
};

export default Layout;
