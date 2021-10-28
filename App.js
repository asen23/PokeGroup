/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './src/screens/Home'
import Evolutions from './src/screens/evolution';
import Pokeball from './src/screens/Pokeball'
import Pokedex from './src/screens/Pokedex'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Evolution" component={Evolutions} />
                            <Stack.Screen name="Pokeball" component={Pokeball} />
                            <Stack.Screen name="Pokedex" component={Pokedex} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
}
