import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../telas/home';
import PerfilScreen from '../telas/perfil';
import ItemScreen from '../telas/itens';


const Tab = createBottomTabNavigator();
export default 

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}