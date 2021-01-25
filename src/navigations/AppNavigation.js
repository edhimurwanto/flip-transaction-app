import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/app/HomeScreen';
import TransactionScreen from '../screens/transactions/TransactionScreen';
import DetailTransactionScreen from '../screens/transactions/DetailTransaction';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'green',
            allowFontScaling: true,
            labelStyle: {
                marginBottom: 4,
                fontSize: 11
            },
            iconStyle: {
                marginTop: 4
            }
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => <TabIcon name="home" color={color} size={24} />
            }}
        />
        <Tab.Screen
            name="Transactions"
            component={TransactionScreen}
            options={{
                tabBarLabel: 'Transactions',
                tabBarIcon: ({ color }) => <TabIcon name="activity" color={color} size={24} />,
            }}
        />
    </Tab.Navigator>
)

const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Flip Transactions"
        >
            <Stack.Screen
                name="Home"
                component={HomeBottomTabs}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Transactions"
                component={TransactionScreen}
                options={{
                    title: 'Transaction List Page',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="DetailTransaction"
                component={DetailTransactionScreen}
                options={{
                    title: 'Detail Transaction'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigation;