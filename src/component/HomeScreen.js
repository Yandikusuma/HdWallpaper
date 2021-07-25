import React from "react"
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
  Animated
} from "react-native"



const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width
const Item_Width = Dev_Width-(0.6*Dev_Width)

import Icon from "react-native-vector-icons/AntDesign"
import Carousel from 'react-native-snap-carousel';

import { createClient } from 'pexels';
const client = createClient('563492ad6f9170000100000162a53bd7783646a8a1adac96fca6e51c');

export default class HomeScreen extends React.Component{

    slide = () => {
    Animated.spring(this.state.x, {
      toValue: 0,
      useNativeDriver:"true",
      speed:0.2
    }).start();
    this.setState({
      visible: true,
    });
  };

    constructor(props){
        super(props);
        this.state = {
          activeIndex:1,
          carouselItems:[],
          selectedIndex:1,
          searchQuery:"",
          visible: false,
          x: new Animated.Value(-100),
          categories:[            
            {
              "title":"Food",
              "img_url":"https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"4k Wallpaper",
              "img_url":"https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Beautiful Girl Asian",
              "img_url":"https://images.pexels.com/photos/2014871/pexels-photo-2014871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Forest",
              "img_url":"https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Music",
              "img_url":"https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Aquarium",
              "img_url":"https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
              "title":"Cars",
              "img_url":"https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Football Player",
              "img_url": "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Animals",
              "img_url":"https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
              "title":"Love Wallpaper",
              "img_url":"https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Underwater",
              "img_url":"https://images.pexels.com/photos/3405555/pexels-photo-3405555.png?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Romance",
              "img_url":"https://images.pexels.com/photos/812258/pexels-photo-812258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Art",
              "img_url":"https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Quote",
              "img_url":"https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Games",
              "img_url":"https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Motivation",
              "img_url":"https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
            },

            {
              "title":"Nature",
              "img_url":"https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Jungle",
              "img_url":"https://images.pexels.com/photos/1583207/pexels-photo-1583207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Sports",
              "img_url":"https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Space",
              "img_url":"https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Dark",
              "img_url":"https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"City",
              "img_url":"https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Welcome",
              "img_url":"https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Technology",
              "img_url":"https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Flowers",
              "img_url":"https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Red",
              "img_url":"https://images.pexels.com/photos/1441099/pexels-photo-1441099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Think",
              "img_url":"https://images.pexels.com/photos/5668885/pexels-photo-5668885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Google",
              "img_url":"https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Dangerous",
              "img_url":"https://images.pexels.com/photos/3536235/pexels-photo-3536235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Warehouse",
              "img_url":"https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Fruits",
              "img_url":"https://images.pexels.com/photos/5968231/pexels-photo-5968231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"London",
              "img_url":"https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Places",
              "img_url":"https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Abstract",
              "img_url":"https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
              "title":"Design",
              "img_url":"https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Leaf",
              "img_url":"https://images.pexels.com/photos/2559931/pexels-photo-2559931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Dubai",
              "img_url":"https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              "title":"Cartoon",
              "img_url":"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
          ]
        }
    }

    FindImages=()=>{
      const query = "Landscapes"
      client.photos.search({ query , per_page: 20 }).then(photos => {
        this.setState({ carouselItems : photos })
        this.setState({ carouselItems : this.state.carouselItems['photos'] })
      })
    }

    componentDidMount(){
     this.slide()
     this.FindImages()
    }

    _renderItemCatogories=({item,index})=>{
      return(
          <TouchableOpacity style={{ 
            height:"90%",
            width:Dev_Width-(0.6*Dev_Width),
            backgroundColor:"transparent",borderRadius:15,justifyContent:"center",alignItems:"center"}} 
            onPress={()=>this.props.navigation.navigate("FullCatogery",{ "query" : item.title })}
              >
              <ImageBackground 
                source={{uri:item.img_url}} 
                style={{height:"100%",width:"100%",borderRadius:15,justifyContent:"flex-end"}} 
                imageStyle={{borderRadius:15}}
              >
              <Text style={{marginBottom:"10%",marginLeft:"10%",color:"#FFF",fontWeight:"bold",fontSize:18}}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
      )
    }

  renderSeparator = () => (
    <View
      style={{
        width: 20,
      }}
    />
  );  

    _renderItem=({item,index})=>(
          <TouchableOpacity style={{ height:"100%",width:"100%",borderRadius:15,justifyContent:"center",alignItems:"center"}} 
            onPress={()=>this.props.navigation.navigate("ImageDisplay",{
              "id":item["id"]
            })}>
            <Image source={{uri:item['src']['medium']}} style={{height:"100%",width:"100%",borderRadius:15}}/>
          </TouchableOpacity>
    )


  render(){
    return(
      <View style={styles.container}>
	<StatusBar translucent backgroundColor="transparent" />
      <View style={{height:"100%",width:"100%"}}>
          <ImageBackground
            source={{uri:"https://i.postimg.cc/dQgjCZhx/Faire-le-mur-Quatre-si-cles-de-papiers-peints.jpg"}} 
            style={styles.MainBackground_View}
            imageStyle={{height:"100%",width:"100%",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <View style={{height:"100%",width:"100%",alignItems:"center",paddingTop:StatusBar.currentHeight}}>
              <Animated.View style={{height:"45%",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"5%",
              transform: [{translateX:this.state.x}]              
              }}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#FFF"}}> Check Out All The High   </Text>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#FFF"}}> Quality Wallpaper's  </Text>
              </Animated.View>
              <Animated.View style={{...styles.SearchBox_Main_Style,transform: [{translateX:this.state.x}]}}>
              <TextInput 
                style={{height:"90%",width:"75%",marginLeft:"5%",color:"#FFF"}} 
                placeholder="Search For Free Wallpaper" 
                placeholderTextColor="gray" 
                value={this.state.searchQuery}
                onChangeText={(value)=>this.setState({ searchQuery : value })}
              />
                <TouchableOpacity style={{height:"80%",width:"15%",justifyContent:"center",alignItems:"center"}} 
                  onPress={()=>this.props.navigation.navigate("FullCatogery",{ "query" : this.state.searchQuery })}>
                  <Icon name="search1" color="#FFF" size={15}/>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </ImageBackground>

      <View style={{height:"10%",justifyContent:"center",width:"100%"}}>
        <Text style={{fontSize:18,color:"#FFF",fontWeight:"bold",marginLeft:"5%"}}>Top Pick's For You !</Text>
      </View>

      <View style={{height:"20%"}}>
        <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={Dev_Width}
              itemWidth={Item_Width}
              renderItem={this._renderItem}
              bounces={true} 
              keyExtractor={(item, index) => item.key}
              activeSlideAlignment={"center"}
              autoplay={true}
              loop={true}
          />
          </View>


          <View style={{height:"10%",justifyContent:"center",width:"100%"}}>
            <Text style={{fontSize:18,color:"#FFF",fontWeight:"bold",marginLeft:"5%"}}>Categories</Text>
          </View>

          <View style={{height:"25%",width:"100%",justifyContent:"center",alignItems:"center"}}>
	        <FlatList
                style={{
                height:"100%",width:"93%"}}
                data={this.state.categories}
                keyExtractor={({ _id }, index) => _id}
                renderItem={this._renderItemCatogories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSeparator}
                alwaysBounceHorizontal={true}
                bounces={true}
              />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width:Dev_Width,
    backgroundColor:"#222222",
  },
  MainBackground_View:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
  },
  SearchBox_Main_Style: {
    marginTop: "5%",
    height: "20%", 
    width: "80%", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#222222", 
    borderRadius: 10, 
    flexDirection: "row"
  }
})