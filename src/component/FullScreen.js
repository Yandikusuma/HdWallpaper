import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl
} from "react-native"

const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width
import { InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize} from '@react-native-firebase/admob';

import { createClient } from 'pexels';
const client = createClient('563492ad6f9170000100000162a53bd7783646a8a1adac96fca6e51c');
import AppConfig from '../config/AppConfig';
//const adUnitId = __DEV__ ? 'ca-app-pub-1522283443067312/5949099863' : TestIds.BANNER ;


export default class FullScreen extends React.Component{

    FindImages=(query,page_no)=>{
      this.setState({ refreshing : true})
      client.photos.search({ query , per_page: 100 , page:page_no}).then(photos => {
        this.setState({ carouselItems : photos })
        this.setState({ carouselItems : this.state.carouselItems['photos'] })
        this.setState({ refreshing :false })
      });
    }
    // showInterstitialAd = () => {
	// 	// Create a new instance
	// 	const interstitialAd = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);
	
	// 	// Add event handlers
	// 	interstitialAd.onAdEvent((type, error) => {
	// 		if (type === AdEventType.LOADED) {
	// 			interstitialAd.show();
	// 		}
	// 	});
	
	// 	// Load a new advert
	// 	interstitialAd.load();
	// }


    constructor(props){
        super(props);
        this.state = {
          carouselItems:[ ],
          query:this.props.route.params.query,
          refreshing:false
      }
    }

    componentDidMount(){
      this.FindImages(this.state.query,1)
    }
    
  render(){
    return(
      <SafeAreaView style={styles.container}>
      <View style={styles.FlatList_Container}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={this.state.carouselItems}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={()=>this.FindImages(this.state.query,2)} 
               title="Refreshing" 
               titleColor="#FFF" 
               colors={["gray","orange"]}
            />
           }
          renderItem={({item}) => {
            return (
              <TouchableOpacity 
               style={{height:Dev_Height-(0.7*Dev_Height),width:"48%",borderRadius:15,justifyContent:"center",alignItems:"center"}} 
               onPress={()=>this.props.navigation.navigate("ImageDisplay",{
              "id":item["id"]
            })}
               >
                <Image source={{uri:item['src']['medium']}} style={{height:"95%",width:"95%",borderRadius:15}} />
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={()=>{
            return(
              <View style={{height:10}} />
            )
          }}
      />
        {/* <BannerAd
         unitId={AppConfig.ADMOD_APP_ID}
         size={BannerAdSize.SMART_BANNER}
        /> */}
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width:Dev_Width,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222222",
    paddingTop:StatusBar.currentHeight
  },
  FlatList_Container:{
    height:"100%",
    width:"95%"
  }
})