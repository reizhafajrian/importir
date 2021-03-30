import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
export default function CarouselItem({ item,type }) {
  if(type==="info"){
  return (
    <View style={styles.cardView(type)}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textView}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDesc}>{item.desc}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}else{
  return (
    <View style={styles.cardView(type)}>
      <Image style={styles.image} source={item.image} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  cardView: (type)=>({
    flex: 1,
    width: width - 100,
    height: 200,
    backgroundColor: "white",
    marginHorizontal: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
    justifyContent: type==="info"? "flex-start":"center"
  
  }),
  textView: {
    position: "relative",
    bottom: 10,
    marginTop: 26,
    marginStart: 20,
    left: 5,
    height: 130,
    justifyContent: "space-between",
  },
  image: {
    width: 153,
    resizeMode: "contain",
    borderRadius: 10,
    marginStart: 23,
    marginTop: 19,
  },
  itemTitle: {
    color: "black",
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.8,
      height: 0.8,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "normal",
    elevation: 5,
  },
  itemDesc: {
    color: "black",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.8,
      height: 0.8,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 4,
    width: 70,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
