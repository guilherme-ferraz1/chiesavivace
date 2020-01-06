import React, {Component} from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, ImageBackground, TouchableOpacity} from "react-native";
import openMap from 'react-native-open-maps';
import { Linking } from 'expo';
import {Header, Left, Icon, Body, Right, Card} from 'native-base'

import GlobalStyles from "./../components/GlobalStyles";
import {normalize} from "./../components/Normalize"


class InformazioniScreen extends Component{

    _handleOpenWithLinking = (parametro) => {
        Linking.openURL(parametro);
      }

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icon name="ios-information-circle" style={{fontSize:24, color: tintColor}} />
        )
    }

    _goToChiesa() {
        openMap({ latitude: 45.718130, longitude:9.707840, zoom: 20});
      }
    

    render(){
        return (
            <View style={GlobalStyles.droidSafeArea}>
                <Header style={{backgroundColor: '#FFF6F6'}}>
                        <Left style={{flex:1}}>
                            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                        </Left>
                        <Body style={{flex:1}}>
                            <Image
                            style={{height: 60, width: 150}}
                            source={require('./../assets/vivaceAI.png')}
                            />
                        </Body>
                        <Right style={{flex:1}}/>
                </Header>
                    <View style={{flex:1, backgroundColor:'rgba(105, 186, 131, 0.1)', margin: 30, borderRadius: 16, borderWidth: 1.5 , borderColor: 'rgba(105, 186, 131, 0.2)', justifyContent:'space-around', alignItems:'center', }}>
                        <Text style={{fontFamily: 'Roboto-Regular', fontSize: normalize(30), color: 'black'}}>
                            Domenica Gospel
                        </Text>
                        <Text style={{fontFamily: 'Roboto-Light', fontSize: normalize(18), color: 'black', textAlign:'center', paddingHorizontal: 10}}>
                        Piazza del Berasgliere 5,
                        Torre Boldone, Bergamo.
                        Centro polivalente (Sala civica). 
                        </Text>
                        <Text style={{fontFamily: 'Roboto-Medium', fontSize: normalize(36), color: 'black'}}>
                            17:00
                        </Text>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this._goToChiesa} style={{borderWidth:1, borderColor:'black', borderRadius:16, paddingHorizontal: 16, flexDirection:'row', paddingVertical:4, alignItems: 'center' }}>
                                <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(22), textAlign:'center'}}> 
                                Visualizza l'indirizzo
                                </Text>
                                <Icon name="ios-pin" style={{paddingLeft: 8}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'space-around', paddingBottom: 25,}}>
                            <TouchableOpacity onPress={() => this._handleOpenWithLinking('https://www.instagram.com/chiesa_vivace/')} style={{borderWidth:1, borderColor:'#C0C0C0', borderRadius:16, paddingHorizontal: 19, flexDirection:'row', paddingVertical:4, alignItems: 'center' }}>
                                <Icon name="logo-instagram" style={{paddingRight: 8,}}/> 
                                <Text style={{fontFamily:'Roboto-Light', fontSize: normalize(20), textAlign:'center'}}> 
                                 @chiesa_vivace
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._handleOpenWithLinking('https://www.youtube.com/user/prAdvaldo/featured')} style={{borderWidth:1, borderColor:'#C0C0C0', borderRadius:16, paddingHorizontal: 16, flexDirection:'row', paddingVertical:4, alignItems: 'center' }}>
                                <Icon name="logo-youtube" style={{paddingRight: 10,}}/>
                                <Text style={{fontFamily:'Roboto-Light', fontSize: normalize(22), textAlign:'center'}}> 
                                Chiesa Vivace
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._handleOpenWithLinking('https://www.facebook.com/chiesavivace/')} style={{borderWidth:1, borderColor:'#C0C0C0', borderRadius:16, paddingHorizontal: 16, flexDirection:'row', paddingVertical:4, alignItems: 'center' }}>
                                <Icon name="logo-facebook" style={{paddingRight: 8,}}/>
                                <Text style={{fontFamily:'Roboto-Light', fontSize: normalize(22), textAlign:'center'}}> 
                                @chiesavivace
                                </Text>
                            </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

export default InformazioniScreen;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#FFEFEF'
    }
})
