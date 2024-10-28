import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TicketsScreen from './screens/TicketsScreen';
import TicketDetailsScreen from './screens/TicketDetailsScreen'; 
import MoreScreen from './screens/MoreScreen';
import SupportScreen from './screens/SupportScreen';
import CreateTicketScreen from './screens/CreateTicketScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tickets" component={TicketsScreen} />
        <Stack.Screen name="TicketDetails" component={TicketDetailsScreen} /> 
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="CreateTicket" component={CreateTicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
