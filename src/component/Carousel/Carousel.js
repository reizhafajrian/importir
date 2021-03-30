import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";

import CarouselItem from "./index";
const { width, height } = Dimensions.get("window");

export default function Carousel({ data, type }) {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  if (type === "info") {
    return (
      <View style={styles.container(type)}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `key ${index}`}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem type={type} item={item} />;
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "black",
                  margin: 8,
                  borderRadius: 6,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container(type)}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `key ${index}`}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: (type) => ({
    position: "absolute",
    bottom: type==="info"? -100:-20,
    height: 202,
  }),
});
