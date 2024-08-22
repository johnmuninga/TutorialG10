import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';

const Tab = createBottomTabNavigator();
export const Authentication = createContext();

const Tabs = () => {
    const [form, setForm] = useState([]);
    const [data, setData] = useState([]);

    function Submit() {
        setData(prevData => {
            const updatedData = [...prevData, form];
            console.log(updatedData); 
            return updatedData;
        });
        setForm([]); 
    }

    return (
        <Authentication.Provider value={{ form, setForm, Submit, data }}>
            
            <Tab.Navigator>
                <Tab.Screen name="compA" component={ComponentA} />
                <Tab.Screen name="compB" component={ComponentB} />
                <Tab.Screen name="compC" component={ComponentC} />
                <Tab.Screen name="compD" component={ComponentD} />
            </Tab.Navigator>
            
        </Authentication.Provider>
    );
};

export default Tabs;
