import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/app/HomeScreen';
import OnboardingScreen from '../screens/app/OnboardingScreen';
import TransactionScreen from '../screens/transactions/TransactionScreen';
import MyHeader from '../components/MyHeader';

const Stack = createStackNavigator();

const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Onboarding"
            headerMode="screen"
        >
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{
                    title: 'Awesome app',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerLeft: null
                    // header: () => <MyHeader title='Home'/>
                }}
            />
            <Stack.Screen
                name="Transactions"
                component={TransactionScreen}
                options={{
                    title: 'Transaction List Page',
                    headerLeft: null
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigation;