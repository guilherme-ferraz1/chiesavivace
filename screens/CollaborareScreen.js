import React, {Component} from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, ImageBackground } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { Linking } from 'expo';
import {Header, Left, Icon, Body, Right} from 'native-base'
import { TouchableOpacity } from "react-native-gesture-handler";

import GlobalStyles from "./../components/GlobalStyles";
import {normalize} from "./../components/Normalize"

_handleOpenWithLinking = () => {
    Linking.openURL('https://www.paypal.com');
  }

class Collaborare extends Component{

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icon name="heart" style={{fontSize:24, color: tintColor}} />
        )
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
                    <View style={{flex:1, marginLeft:20}}>
                        <Text style={{fontFamily: 'Roboto-Regular', fontSize: normalize(28), marginTop: 20, margin: 15}}>
                            Perchè collaborare?
                        </Text>
                        <Text style={{fontFamily: 'Roboto-Light', fontSize: normalize(18), marginTop: 3, margin: 15,}}>
                            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o 
                            texto padrão usado por estas indústrias desde o ano de 1500, batata frita e assada zubilei zubileu.
                        </Text>
                    </View>
                    <View style={{backgroundColor:'rgba(105, 186, 131, 0.1)', flex:1.7, margin: 30, borderRadius: 16, borderWidth: 1.5 , borderColor: '#rgba(105, 186, 131, 0.2)', justifyContent:'space-around', alignItems:'center'}}>
                        <View style={{flex:1, justifyContent:'space-around'}}>
                            <Text style={{fontFamily:'Roboto-Medium', fontSize: normalize(30)}}>
                                ACCOUNT NUMBER
                            </Text>
                            <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(18), flexDirection: 'column'}}>
                                INFORMATION INFORMATION
                            </Text>
                            <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(18), flexDirection: 'column'}}>
                                INFORMATION INFORMATION
                            </Text>
                            <Text style={{fontFamily:'Roboto-Light', fontSize: normalize(18)}}>
                                INFORMATION INFORMATION
                            </Text>         
                        </View>
                        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                            <TouchableOpacity onPress={_handleOpenWithLinking} style={{borderWidth: 1, borderColor: 'black', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 16}}>   
                                <Entypo name="paypal" style={{fontSize: 80, color:'#7B68EE'}}/>
                            </TouchableOpacity> 
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize:normalize(18), paddingTop: 10}}>
                                Donazione via PAYPAL
                            </Text>
                        </View>
                    </View>
            </View>
        );
    }
}

export default Collaborare;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#FFEFEF'
    }
})
