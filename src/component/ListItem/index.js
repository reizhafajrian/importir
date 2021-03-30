import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback } from "react-native";

import Svg, { Path } from "react-native-svg";
import { ICLove, IMGVans } from "../../assets";

export default function ListItem({ Move }) {
  const [click, setClick] = React.useState(false);

  const onPress = () => {
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={Move}
        style={{  marginTop: 10 }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center"}}
        >
          <View style={{ position: "absolute", zIndex: 3, top: 5, right: 5 }}>
            <TouchableWithoutFeedback>
              <TouchableOpacity style={styles.btnLove} onPress={onPress}>
                {click === true ? (
                  <Svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M15 0.5L18.5 4L18 8.5L9.5 17L4 12L1.5 8.5L0.5 5.5L1.5 2.5L4 0.5H7L9.5 3L12 1L15 0.5Z"
                      fill="red"
                    />
                    <Path
                      d="M9.49998 16.9039C9.22949 16.9039 8.96871 16.8059 8.76548 16.6279C7.99792 15.9567 7.25791 15.326 6.60502 14.7697L6.60169 14.7668C4.68751 13.1356 3.03456 11.7269 1.88446 10.3392C0.598822 8.78782 0 7.31693 0 5.71006C0 4.14886 0.535331 2.70855 1.50728 1.65427C2.49082 0.587517 3.84038 0 5.30779 0C6.40454 0 7.40896 0.346741 8.29306 1.03051C8.73924 1.37566 9.14367 1.79807 9.49998 2.29078C9.85643 1.79807 10.2607 1.37566 10.707 1.03051C11.5911 0.346741 12.5956 0 13.6923 0C15.1596 0 16.5093 0.587517 17.4928 1.65427C18.4648 2.70855 19 4.14886 19 5.71006C19 7.31693 18.4013 8.78782 17.1157 10.339C15.9656 11.7269 14.3127 13.1354 12.3989 14.7665C11.7448 15.3237 11.0036 15.9554 10.2343 16.6282C10.0313 16.8059 9.77033 16.9039 9.49998 16.9039ZM5.30779 1.11299C4.15494 1.11299 3.09587 1.57309 2.32542 2.40863C1.54351 3.25678 1.11284 4.42921 1.11284 5.71006C1.11284 7.06151 1.61512 8.27017 2.7413 9.62901C3.8298 10.9425 5.44883 12.3222 7.32343 13.9198L7.32691 13.9227C7.98227 14.4812 8.72518 15.1144 9.49839 15.7905C10.2762 15.1131 11.0203 14.4789 11.677 13.9195C13.5514 12.3219 15.1703 10.9425 16.2588 9.62901C17.3848 8.27017 17.8871 7.06151 17.8871 5.71006C17.8871 4.42921 17.4564 3.25678 16.6745 2.40863C15.9042 1.57309 14.845 1.11299 13.6923 1.11299C12.8478 1.11299 12.0724 1.38145 11.3878 1.91084C10.7776 2.38283 10.3526 2.97948 10.1034 3.39696C9.9753 3.61164 9.74974 3.73978 9.49998 3.73978C9.25022 3.73978 9.02466 3.61164 8.89652 3.39696C8.64748 2.97948 8.22246 2.38283 7.61219 1.91084C6.92755 1.38145 6.15217 1.11299 5.30779 1.11299Z"
                      fill="#B4B4B4"
                    />
                  </Svg>
                ) : (
                  <ICLove />
                )}
              </TouchableOpacity>
            </TouchableWithoutFeedback>
          </View>
          <Image source={IMGVans} style={styles.image} />
        </View>
        <Text style={{ color: "grey", fontFamily: "bold" }}>Vans</Text>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: "#F1F1F1",
            width: 60,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#979797" }}>8 colors</Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>$150</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 226,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    padding: 4,
    marginEnd: 10,
  },
  image: {
    resizeMode: "contain",
    width: 120,
    zIndex: 1,
  },
  btnLove: {
    width: 50,
    height: 50,
  
    alignItems: "center",
    justifyContent: "center",

  },
});
