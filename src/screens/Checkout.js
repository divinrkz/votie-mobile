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
import { ListItem } from "../components/screens/Checkout";

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
            buttonStyle={styles.backBtn}
            icon={{
              name: "chevron-left",
              size: 40,
              color: Colors.green,
            }}
            title=""
          />
        </View>
        <View style={styles.textSummaryView}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <View style={styles.amountDescView}>
            <Text style={styles.amountText}>Frw 16,000</Text>
            <Text style={styles.includeVatText}>Including VAT (18%)</Text>
          </View>
        </View>
        <View style={styles.options}>
          <View style={styles.creditOptionView}>
            <Text style={styles.creditOptionText}>Credit Card</Text>
          </View>
          <View style={styles.momoOptionView}>
            <Text style={styles.momOptionText}>Mobile & Cash</Text>
          </View>
        </View>
      </View>

      <View>
      <FlatList
        data={[
          {key: 'MOMO',name:"MTN Mobile Money",imageUrl:'../../assets/momo.png'},
          {key: 'AIRTEL',name:"Airtel Money",imageUrl:'../../assets/airtel.png'},
          {key: 'CASH',name:"Cash",imageUrl:'../../assets/cash.png'}
        ]}
        renderItem={({item}) => <ListItem name={item.name} imageUrl={item.imageUrl}/>}
      />
      </View>

      <View style={styles.proceedView}>
        <Text style={styles.assText}></Text>
        <TouchableOpacity title="Pay for the order" style={styles.payButton}>
          {/* <Icon
            name="shopping-cart"
            backgroundColor="transparent"
            color="black"
          /> */}
          <Text style={styles.payButtonText}>Pay for the order</Text>
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
    borderRadius: 50,
    backgroundColor: "#FFFF",
  },
  backIconView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFF",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  textSummaryView: {
    paddingTop: 10,
    paddingBottom: 40,
    flexDirection: "row",
    flexWrap: 'wrap',

  },
  amountDescView:{
    marginLeft: 70
  },

  checkoutText:{
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  amountText: {
    fontSize: 20,
    color: Colors.green,
  },
  includeVatText: {
    fontSize: 15,
    fontWeight: "light",
  },
  options: {
    backgroundColor: Colors.green,
    borderRadius: 20,
    marginLeft: 30,
    width: 300,
    height: 70,
    marginBottom: -30,
    marginRight: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  momoOptionView:{
    backgroundColor:Colors.green,
    paddingLeft:20,
    justifyContent: "center",
    justItems: "center",
  },
  creditOptionView: {
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
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
    width: "60%",

    borderRadius: 15,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
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
  backBtn: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});
