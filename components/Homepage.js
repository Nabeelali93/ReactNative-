import React from 'react';
import { SafeAreaView, View, FlatList,Image, StyleSheet, Text, StatusBar ,ScrollView, Button } from 'react-native';
import Swiper from 'react-native-swiper';




const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const users=["Hussain Memon","Ali","Nabeel","bilal","Wasil","Shakor","Umair","shuaib","Anwar","sajid","kashif"]
const images = [
  { id: 1, uri: 'https://images.unsplash.com/photo-1682707072922-b7753db5d06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
  { id: 2, uri: 'https://images.unsplash.com/photo-1682536460259-b40cef108baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
  { id: 3, uri: 'https://images.unsplash.com/photo-1682595167681-888983414521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
];


const Homepage= (props) => {

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={DATA}
        renderItem={({item})=><Text style={styles.item}>{item.title}</Text>}
        keyExtractor={item=>item.id}
      /> */}
 

<View style={styles.container}>

      <Swiper
        dotColor="#ffffff"
        activeDotColor="lightgreen"
        showsPagination={true}

        style={{ height: 300, zIndex:3}}
      >
        {images?.map((image) => (
          <View key={image?.id} style={styles.slide}>
            <Image source={{ uri: image?.uri }} style={styles.image} />
          </View>
        ))}
      </Swiper>
   


      <ScrollView style={{zIndex:-1, flex:50}}>

{
  users.map((v,i)=><Text key={i} style={styles.item}>{v}</Text>)
}

<Button
      title="go to home page"
     onPress={()=>props.navigation.navigate("Slider")}
     
    />
</ScrollView>   




</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#0b7bdb',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 15
  },
 
  slide: {
    flex: 1,
   
  
    
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
});

export default Homepage ;