import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems, createAppContainer} from 'react-navigation';
import * as Font from 'expo-font';

import BenvenutoScreen from './screens/BenvenutoScreen';
import UltimePredicazioniScreen from './screens/UltimePredicazioniScreen';
import InformazioniScreen from './screens/InformazioniScreen';
import CollaborareScreen from './screens/CollaborareScreen';
import {normalize} from "./components/Normalize";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Black':require('./assets/fonts/Roboto-Black.ttf'),
      'Roboto-Bold':require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Light':require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Regular':require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin':require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Medium':require('./assets/fonts/Roboto-Medium.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() { 
    return  (
      this.state.fontLoaded ? (
      <AppContainer/> ) : null
    ) ; 
}
}


const customDrawerComponent = (props) => (
  <SafeAreaView style={{ flex:1, backgroundColor:'#FFF6F6'} }>
    <View style={{height:150, alignItems:'center', justifyContent:'center'}}>
        <Image source={require('./assets/arvoreAI.png')} style={{height:80, width: 80}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({
  Benvenuto: BenvenutoScreen,
  Predicazioni: UltimePredicazioniScreen,
  Informazioni: InformazioniScreen,
  Collaborare: CollaborareScreen
},{
  overlayColor: 'rgba(0, 0, 0, 0.7)',
  contentComponent: customDrawerComponent,
  contentOptions: {
    activeTintColor: '#69BA83',
    labelStyle: { 
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
      fontSize: normalize(18)
    },
  },
})


const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
