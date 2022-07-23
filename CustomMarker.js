import React from "react";
import { View, StyleSheet, Image } from "react-native";

const CustomMarker = ({ item }) => {
  return (
    <View style={styles.roundMarker}>
      <Image style={styles.roundImage} source={{ uri: item.image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  roundMarker: {
    height: 25,
    width: 25,
    backgroundColor: "white",
    borderRadius: 15,
  },
  roundImage: {
    height: 25,
    width: 25,
    borderRadius: 15,
  },
});

export default CustomMarker;
