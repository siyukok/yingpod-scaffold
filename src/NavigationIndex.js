import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Image} from 'react-native';
import {Colors} from './common/CommonStyles';
import SecondPage from './pages/SecondPage';
import {store} from './config/reduxConfig';
import HomePage from './pages/HomePage';

const TabScreens = createBottomTabNavigator(
	{
		Main: {
			screen: HomePage,
			navigationOptions: () => ({
				tabBarLabel: '首页',
				tabBarIcon: (item) => {
					let uri = item.focused ? require('../src/asset/images/tab01_on.png') : require('../src/asset/images/tab01.png');
					return (
						<Image source={uri}/>
					);
				}
			}),
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.ThemeColor,
			activeBackgroundColor: Colors.WHITE,
			inactiveTintColor: Colors.NINE_GREY,
			inactiveBackgroundColor: Colors.WHITE
		}
	}
);

const RootStack = createStackNavigator(
	{
		Home: TabScreens,
		Second:SecondPage
	},
	{
		headerMode: 'none',
	}
);

class NavigationIndex extends Component {

	render() {
		return (
			<Provider store={store}>
				<RootStack/>
			</Provider>
		);
	}
}

export default NavigationIndex;