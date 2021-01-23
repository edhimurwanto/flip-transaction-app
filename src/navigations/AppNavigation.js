import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import TransactionScreen from '../screens/transactions/TransactionScreen';

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