import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',

            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
            }
        },
    }, {
        defaultNavigationOptions: {
            //headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#7D40E3',
            },
        },
    })
);

export default Routes;