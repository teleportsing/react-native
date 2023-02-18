import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.indexText}>
      <Image
            style={styles.logo}
            source={require("../assets/upwork/upwork-logo.png")}
          />
      </View>
      
      <View style={styles.indexText}>
        <Text style={styles.title}>
        Never miss an opportunity.
        </Text>
        <Text style={styles.describe}>
        Easily find work , chat ,  and collaborate on the go.
        </Text>
      </View>
      <View style={styles.indexButton}>
        <Button  
          onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            Log In
          </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 154,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  indexLog: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
    margin: 0
  },
  logo: {
    height: 150,
    width: 200,
    resizeMode: "contain",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  indexSearch: {
    height: 150,
    width: '100%',
   
    resizeMode: "contain",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  indexText: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    width: '60%',
    flex: 0.8,
    color: "#333333",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    flexWrap: 'wrap'
  },
  describe: {
    width: '76%',
    flex: 0.8,
    paddingVertical: 1,
    color: "#111",
    textAlign: "center",
    fontSize: 16
  },
  indexButton: {
    width: '76%',
    flex: 0.8,
    paddingVertical: 1,
    color: "#111",
    textAlign: "center",
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});

export default WelcomeScreen;
