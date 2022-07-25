import * as React from "react";
import { useEffect, useState } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  MarkerAnimated,
} from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import { locations } from "./Locations.js";
import CustomMarker from "./CustomMarker.js";
import { dataBase } from "./api/base.js";

export default function App() {
  const [Destination, setDestination] = useState("  ");
  const [parkingLots, setParkingLots] = useState();
  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app6PE5rMIkIIqPNZ/Projects?view=Grid%20view",
      {
        headers: { Authorization: "Bearer keyjbCfsSdhIhQFsh" },
      }
    )
      .then((res) => {
        return res.json(); // Promise gaekchae
      })
      .then((json) => {
        setParkingLots(json.records);
        console.log(json); // prints json화된 data from server
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headersMain}>
        <Text style={styles.boldText}>Yamchae Parking</Text>
      </View>

      <View style={styles.headersSub}>
        <Text>Search Here: </Text>
        <TextInput
          style={styles.input}
          placeholder="e.g Jamsil Free Parking Lot"
          onChangeText={(val) => setDestination(val)}
        />
        <Text> Destination: {Destination} </Text>
      </View>

      <MapView
        style={styles.map}
        startRe
        gion={{
          latitude: 37.5665,
          longitude: 126.978,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.5665,
            longitude: 126.978,
          }}
          pinColor="#ff9933"
          draggable={true}
        >
          <Callout>
            <Text>You Are Here</Text>
          </Callout>
        </Marker>

        <Circle
          center={{
            latitude: 37.5665,
            longitude: 126.978,
          }}
          radius={4000}
          strokeColor="black"
          fillColor={"rgba(500,300,200,0.45)"}
        />

        {locations.map((pin) => (
          <Marker
            coordinate={{
              latitude: pin.latitude,
              longitude: pin.longitude,
            }}
            title={pin.title}
          >
            <CustomMarker item={pin} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  headersMain: {
    backgroundColor: "#ff6600",
    marginTop: "25%",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: "30",
    marginTop: "20%",
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 8,
    width: 200,
  },
  headersSub: {
    marginBottom: 8,
    marginTop: 5,
  },
  /*box: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  image: {
    width: 130,
    height: 100, 
  }, */
});

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
