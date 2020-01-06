import React, {Component} from "react";
import {Text, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground, Dimensions } from "react-native";

import {Header, Left, Icon, Body, Right, View} from 'native-base';
import GlobalStyles from "./../components/GlobalStyles";
import {BackgroundCarousel} from "./../components/BackgroundCarousel";
import {normalize} from "./../components/Normalize"

const images = [
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/68519374_775035426299711_5498761610191175680_o.jpg?_nc_cat=102&_nc_ohc=zDJ-_SSHd_MAQk9Di15Z8EXm7axXKEuX058RWMbEj3J7aIyPVtyGFRPHg&_nc_ht=scontent-mxp1-1.xx&oh=610352821446e9ef87a6eea13c43356c&oe=5E73457B",
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/67962671_779173999219187_6603760866141667328_o.jpg?_nc_cat=100&_nc_ohc=yxKrn6arrQQAQkGahZA1fvoGzd-ARvBKGQ-rXEu68m0w5cXJ1FAlT0VCw&_nc_ht=scontent-mxp1-1.xx&oh=2f6dbb727d888687c9f2a88002e1cafd&oe=5E706002",
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/67828212_773089106494343_2143775480610816000_o.jpg?_nc_cat=109&_nc_ohc=qozj5S4xqdoAQlc8m75Nmg_d70cV-Rkn8OG3kj6FYdJe5fUvHJgzvn5iw&_nc_ht=scontent-mxp1-1.xx&oh=56c544bf3a505062be2c8ffcd9883225&oe=5E795282",
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/67971527_774935092976411_468338257751441408_o.jpg?_nc_cat=104&_nc_ohc=RXS1D9Xhe2gAQnJyC93d6YR7AM-xJ7ZkOx9T_t8zhlaxi9S80UMFa9WJg&_nc_ht=scontent-mxp1-1.xx&oh=3e176377ce9a65fec6098437a0bcddc8&oe=5E7D3873",
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/66788392_760720457731208_2431546192182640640_n.jpg?_nc_cat=102&_nc_ohc=RP6WojhuKF0AQku4KMvoLI38ss9lHUm5wkiBhVNKSomODDVAlrLUbKf-g&_nc_ht=scontent-mxp1-1.xx&oh=38ad754e51e89d70b74bdf807dd2bf98&oe=5E7B36E5",
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/73320661_852752888527964_6166731670142582784_n.jpg?_nc_cat=102&_nc_ohc=jjmKO3LJyzoAQk3Hz_JbqXiTUChPo6YlHuJ3VBn5dwlQwlN_cVRq44reQ&_nc_ht=scontent-mxp1-1.xx&oh=a2a88e7a2984be2383a10e9d78b1f5c0&oe=5E8A0902",
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/79540061_2785760331444952_331098277229363200_n.jpg?_nc_cat=101&_nc_ohc=bXljfcCmF-QAQm7JzoV7abJGgku8lj91llaUEOI2fCVTewhjD1z1ZUyTQ&_nc_ht=scontent-mxp1-1.xx&oh=d651a4b27f04c843d2369a08e9a8de9c&oe=5E74D48F"
  ];

class BenvenutoScreen extends Component{

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icon name="home" style={{fontSize:24, color: tintColor}} />
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
                    <ScrollView style={{ paddingTop:20}}>
                        <BackgroundCarousel images={images} style={{ }}/>
                        <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(28), marginTop:15,  marginLeft: 25}}>
                            Chi siamo?
                        </Text>
                        <Text style={{marginTop: 20, fontFamily:'Roboto-Light', fontSize:normalize(18), marginRight: 20, marginLeft: 25}}>
                        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por 
                        estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro
                        </Text>
                        <Text style={{ fontFamily:'Roboto-Regular', fontSize: normalize(28), marginTop: 20,  marginLeft: 25}}>
                            Perchè Vivace?
                        </Text>
                        <Text style={{marginTop: 20, fontFamily:'Roboto-Light', fontSize:normalize(18), marginRight: 20,  marginLeft: 25}}>
                        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por 
                        estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro
                        </Text>
                        <Text style={{fontFamily:'Roboto-Regular', fontSize: normalize(28), marginTop:20,  marginLeft: 25}}>
                            Dove trovarci?
                        </Text>
                        <Text style={{marginTop: 20, fontFamily:'Roboto-Light', fontSize:normalize(18), marginRight: 20, marginBottom: 40,  marginLeft: 25}}>
                        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por 
                        estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro
                        </Text>
                    </ScrollView>
            </View>
        );
    }
}

export default BenvenutoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
