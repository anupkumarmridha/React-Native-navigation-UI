import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

const Bottom = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='Screen1' component={Screen1}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
                    tabBarColor: '#123456'
                }}
            />
            <Bottom.Screen name='Screen2' component={Screen2}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="favorite" size={24} color={color} />,
                    tabBarColor: '#654321'
                }}
            />
            <Bottom.Screen name='Screen3' component={Screen3}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />,
                    tabBarColor: '#000000'
                }}
            />
        </Bottom.Navigator>
    )
}

export default BottomNavigator
