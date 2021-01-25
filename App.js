import React, { useEffect, useState } from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import LoadingScreen from './src/screens/app/LoadingScreen';
import OnboardingScreen from './src/screens/app/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

    const [loading, setLoading] = useState(true);
    const [currentScreen, setCurrentScreen] = useState(<LoadingScreen />);

    const onStartBtnClicked = () => {
        setLoading(true);
        setCurrentScreen(<AppNavigation />);
        setLoading(false);
    }

    const initUi = async () => {
        const value = await AsyncStorage.getItem('GetStarted');
        if (value == null) {
            setCurrentScreen(<OnboardingScreen onStartBtnClicked={onStartBtnClicked}/>);
            setLoading(false);
        } else {
            setCurrentScreen(<AppNavigation />);
            setLoading(false);
        }
    }

    useEffect(() => {
        setTimeout(async () => {
            initUi();
        }, 3000)
    }, []);

    return loading ? <LoadingScreen /> : currentScreen;
}

export default App;