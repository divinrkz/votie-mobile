import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Icon,
  Image,
} from "react-native";
import Colors from "../../util/colors";
import { Button } from "react-native-elements";



const items = [
  { imageUrl: "", name: "MTN Mobile Money" },
  { imageUrl: "", name: "Airtel Money" },
  { imageUrl: "", name: "Cash" },
];
export default function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.backIconView}>
          <Button
            icon={{
              name: "left",
              size: 15,
              color: Colors.green,
            }}
            title="Button with icon object"
          />
        </View>
        <View style={styles.textSummaryView}>
            <Text style={styles.checkoutText}>
               Checkout
            </Text>
            <View>
                <Text style={styles.amountText}>Frw 16,000</Text>
               <Text style={styles.includeVatText}>Including VAT (18%)</Text>
            </View>
        </View>
        <View style={styles.options}>
          <View style={styles.creditOption}>
            <Text style={styles.creditOptionText}>Credit Card</Text>
          </View>
          <Text style={styles.momOptionText}>Mobile & Cash</Text>
        </View>
      </View>

      <View></View>

      <View style={styles.proceedView}>
        <Text style={styles.assText}></Text>
        <TouchableOpacity title="Pay for the order" style={styles.authButton}>
          <Image
            source={require("../../assets/fb.png")}
            style={styles.authImage}
          />
          <Text style={styles.authButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>

        <View style={styles.btmLine}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
  summary: {
    width: "90%",
    marginRight: "10%",
    borderRadius: "50",
    alignItems: "center",
  },
  backIconView:{
    marginTop: 10,
    marginBottom:10
  },
  textSummaryView:{
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10
  },
  amountText:{
   fontSize:20,
   color:Colors.green,
  },
  includeVatText:{
       fontSize:8,
       fontWeight: "light"
  },
  options: {
    backgroundColor: Colors.green,
    borderRadius: "20",
    marginLeft: "30",
    marginRight: "30",
  },
  creditOption: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20",
    padding: "20",
  },
  creditOptionText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  momOptionText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  payButton: {
    borderWidth: 1,
    backgroundColor: Colors.green,
    padding: "3%",
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  proceedView: {
    textAlign: "center",
    justifyContent: "center",
  },
  assText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 5,
  },
  btmLine: {
    fontWeight: "bold",
    width: "200",
    height: "40",
    backgroundColor: "black",
  },
});
