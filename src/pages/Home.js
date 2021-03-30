import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IMGVans } from "../assets";
import Button from "../component/Button";
import InputSearch from "../component/InputSearch";
import Carousel from "../component/Carousel/Carousel";
import Category from "../component/Category";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "../component/ListItem";
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

export default function Home({ navigation }) {
  const Move = () => {
    navigation.navigate("Detail");
  };
  return (
    <ScrollView style={style.page} showsVerticalScrollIndicator={false}>
      <View style={style.boxing}>
        <View style={style.groupTop}>
          <Text style={style.textTitle}>SHOPIN</Text>
          <InputSearch width={154} height={40} />
          <View style={{ width: 6 }} />
          <Button type="btn_camera" />
        </View>
        <Carousel type="info" data={data} />
      </View>
      <View style={{ height: 130 }} />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 50,
          justifyContent: "space-between",
        }}
      >
        <Category title={`Category`} />
        <Category title={`Compare`} />
        <Category title={`Sales Event`} />
        <Category title={`Offers`} />
      </View>
      <View style={{ height: 40 }} />

      <View style={style.containerBottom}>
        <View style={{height:30}}/>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 35,
            alignItems: "center",
        
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 23 }}>New Arivals</Text>
          <Button type="viewall" />
        </View>
        <ScrollView
          style={{ flexGrow: 0 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignSelf: "flex-start",
            }}
          >
            <ListItem Move={Move} />
            <ListItem Move={Move} />
            <ListItem Move={Move} />
            <ListItem Move={Move} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
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
  textTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 26,
    marginEnd: 60,
  },
  groupTop: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginTop: 42,
  },
  containerBottom: {
    backgroundColor: "#F4F4F4",
    height: 370,
    borderRadius: 26,
  },
});
