import React, {Component} from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, ImageBackground, FlatList, Clipboard, ActivityIndicator } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler"
import {Header, Left, Icon, Body, Right} from 'native-base'
import { Linking } from 'expo';

import GlobalStyles from "./../components/GlobalStyles";
import {normalize} from "./../components/Normalize"
import LinkFetch from "./../components/LinkFetch"




class UltimePredicazioneScreen extends Component{
  

    copyToClipboard = async (n) => {
        await Clipboard.setString(n)
        alert('Il tuo link è stato copiato!');
    }

    _handleOpenWithLinking = (parametro) => {
        Linking.openURL(parametro);
      }

    constructor(props){
        super(props);
        this.state = { isLoading: true}
      }
    
      componentDidMount(){
        return fetch(LinkFetch)
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icon name="ios-videocam" style={{fontSize:normalize(24), color: tintColor}} />
        ),
        title: 'Ultime Predicazione'
    }


    renderVideo = video => {
        return(
            <View style={{marginVertical: 20,marginHorizontal: 20,borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 16, height: 170, alignItems:'center', backgroundColor: 'rgba(105, 186, 131, 0.1)'}}>
                        <View style={{}}>
                            <Text style={{ alignSelf:'center', marginTop: 10, fontFamily: 'Roboto-Regular', fontSize: normalize(24)}}> {video.title}</Text> 
                            <Text style={{ alignSelf:'center', marginTop: 5, fontFamily: 'Roboto-Light', fontSize: normalize(16)}}> {video.pregador}</Text>    
                            <Text style={{ alignSelf:'center', marginTop: 5, fontFamily: 'Roboto-Light', fontSize: normalize(16)}}> {video.data}</Text>
                        </View>        
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <TouchableOpacity onPress={() => this._handleOpenWithLinking(video.link)} style={{borderRadius: 16, borderWidth:1, borderColor:'black', padding: 5 ,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                                <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(20), marginLeft: 5}}>
                                    Guardare
                                </Text>
                                <Icon name="ios-play-circle" style={{fontSize:30, paddingHorizontal: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => this.copyToClipboard(video.link)} style={{borderRadius: 16, borderWidth:1, borderColor:'black', padding: 5 ,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(20), marginLeft:5 }}>
                                     Condividi
                                </Text>
                                <Icon name="md-share" style={{fontSize:30, paddingHorizontal: 10, marginLeft: 5}}/>
                            </TouchableOpacity>
                        </View>                                  
            </View>
        )
    }

    render(){

        if (this.state.isLoading) {
            return(
                <View style={GlobalStyles.droidSafeArea}>
                    <Header style={{backgroundColor: '#FFF6F6'}}>
                            <Left style={{flex:1}}>
                            </Left>
                            <Body style={{flex:1}}>
                                <Image
                                style={{height: 60, width: 150}}
                                source={require('./../assets/vivaceAI.png')}
                                />
                            </Body>
                            <Right style={{flex:1}}/>
                    </Header>
                    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                        <ActivityIndicator size="large"/>
                    </View>
                </View>
              )
            }

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
                    <View style={{flex: 1, marginTop: 15}}>
                        <Text style={{fontFamily: 'Roboto-Light', fontSize: normalize(28), alignSelf:'center', justifyContent:'center', marginBottom:15}}> 
                            Ultime Predicazione
                        </Text>
                        <FlatList
                                data={this.state.dataSource}
                                renderItem={({item}) => this.renderVideo(item)}
                                keyExtractor={({id}, index) => id}
                                />
                    </View>
            </View>
        );
    }
}

export default UltimePredicazioneScreen;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#FFEFEF'
    }
})
