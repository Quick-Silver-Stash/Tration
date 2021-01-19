import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const footerNavigation = createBottomTabNavigator(
    {
        Home: Homescreen,
        Explore: ExploreScreen,
    },
    {
        initialRouteName: 'Home'
    }
);