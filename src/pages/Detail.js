import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  LogBox
} from "react-native";
import { IMGVans } from "../assets";
import Button from "../component/Button";
import Carousel from "../component/Carousel/Carousel";

import Size from "../component/Size";

const data = [
  {
    image: IMGVans,
    title: "Introducing",
    desc: "Vans",
  },
  {
    image: IMGVans,
    title: "vans",
    desc: "contoh",
  },
];
const dataNomor = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
export default function Detail() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  return (
   
    <View style={styles.page} showsVerticalScrollIndicator={false}>
       <ScrollView style={{marginBottom:90}} showsVerticalScrollIndicator={false}>
      <View style={styles.boxing}>
        <View style={styles.groupTop} />
        <Carousel type="image" data={data} />
      </View>
      <View style={styles.viewPrice}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 30, color: "black" }}>
            $150
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 23, color: "grey" }}>
            Vans
          </Text>
        </View>
        <View style={styles.btnView}>
          <Button type={"favorite"} />
          <View style={{ width: 9 }} />
          <Button type={"share"} />
        </View>
      </View>
      <SafeAreaView style={{flex: 1}}>
      <ScrollView
        horizontal
        style={{ flexGrow: 0 }}
        showsHorizontalScrollIndicator
      >
        <View style={{ marginStart: 20 }}>
          <FlatList
            keyExtractor={(item, index) => `key ${index}`}
            contentContainerStyle={styles.listImage}
            data={data}
            renderItem={({ _, item }) => (
              <Image style={styles.image} source={item.image} />
            )}
          />
        </View>
      </ScrollView>
      </SafeAreaView>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 23, color: "grey" }}>
          Select Size
        </Text>
        <FlatList
          keyExtractor={(item, index) => `key ${index}`}
          contentContainerStyle={styles.list}
          data={dataNomor}
          numColumns={5}
          renderItem={({ _, item }) => <Size data={item} />}
        />
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 23, color: "grey" }}>
          Description
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: 18, color: "grey",marginTop:20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc
          augue, placerat et enim at, luctus euismod nisi. Donec venenatis
          mattis semper. Nunc iaculis lorem elit. Sed sed posuere erat, non
          vehicula est. Fusce elit tellus, sodales in libero vitae, maximus
          iaculis tellus. Suspendisse eget libero a nibh finibus malesuada ut ut
          lacus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Etiam semper enim sit amet viverra
          gravida. Curabitur et finibus nisi, ut convallis ipsum. Proin
          consectetur ex ac sem viverra sodales. Quisque lorem diam, egestas non
          auctor vel, blandit quis magna. Curabitur efficitur, quam eget
          bibendum commodo, nisi mi fermentum ante, non egestas ex magna et
          erat. Maecenas diam libero, dignissim ut bibendum sit amet, sodales
          tempus sapien. Vivamus commodo, elit in condimentum sollicitudin, ante
          lectus auctor tortor, eget maximus sem nisl a elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Suspendisse eget est nunc.
        </Text>
      </View>
      </ScrollView>
      <View style={styles.floatOpacity}/>
      <View style={styles.float}>
        <TouchableOpacity style={{backgroundColor:"#E5E5E5",width:142,height:59,alignItems:"center",justifyContent:"center",borderRadius:10}}>
          <Text style={{fontWeight:"bold"}}>Add To Cart</Text>
        </TouchableOpacity>     
        <TouchableOpacity style={{backgroundColor:"#9366E0",width:142,height:59,alignItems:"center",justifyContent:"center",borderRadius:10}}>
          <Text style={{color:"white",fontWeight:"bold"}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  image: {
    width: 100,
    height: 75,
    resizeMode: "contain",
  },
  boxing: {
    backgroundColor: "#884BFF",
    height: 210,
    borderBottomEndRadius: 26,
    borderBottomStartRadius: 26,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  groupTop: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginTop: 42,
  },
  viewPrice: {
    marginTop: 30,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnView: {
    flexDirection: "row",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  listImage: {
    flexDirection: "row",
    
  },
  btnSize: (active) => ({
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#B4B4B4",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: active === true ? "black" : "white",
  }),
  textActive: (active) => ({
    color: active === true ? "white" : "grey",
  }),
  float:{
    position: 'absolute',
    backgroundColor:"white",
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    left:0,
    flexDirection:"row",
    justifyContent:"space-around",
    paddingBottom:10,
  
  }, floatOpacity:{
    position: 'absolute',
    backgroundColor:"white",
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    left:0,
    flexDirection:"row",
    justifyContent:"space-around",
    height:89,
    backgroundColor:"white",
    opacity:0.7
  }

});
