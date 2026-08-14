import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadUsuarioScreen from '../telas/cad-usuario';
import RecSenhaScreen from '../telas/recSenha';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
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
       component={HomeScreen} 
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
       options={{ title: 'Cadastro de Usuário'}}
       />
    </Stack.Navigator>
  );
}

export default RootStack;