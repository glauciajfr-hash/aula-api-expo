import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadUsuarioScreen from '../telas/cad-usuario';
import RecSenhaScreen from '../telas/recSenha';
import TabNavigator from '../tabNavigator';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          },
      }}
    >
        <Stack.Screen 
         name="login"
         component={LoginScreen}
         options={{ title: 'Login'}}
         screenOptions={{
    
  }}
        />
      <Stack.Screen
       name="home"
       component={TabNavigator} 
       options={{ title: 'Home'}}
       />
      <Stack.Screen 
       name="cadUsu" 
       component={CadUsuarioScreen} 
       options={{ title: 'Cadastro de Usuário'}}
       />
       <Stack.Screen 
       name="recSenha" 
       component={RecSenhaScreen} 
       options={{ 
        title: 'Recuperação de senha',
        headerStyle: {
         backgroundColor: '#f4df1e',
        },
        headerTintColor: '#ff0000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
       />
    </Stack.Navigator>
  );
}

export default RootStack;