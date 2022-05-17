import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Icon,
  Image,
  FlatList,
} from "react-native";
import Colors from "../../util/colors";
import { Button } from "react-native-elements";
import { ListItem } from "../components/screens/Checkout";

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
          <View style={styles.checkoutPayOptionView}>
            <Text style={styles.checkoutText}>Checkout</Text>
            <Image source={require("../../assets/visa.png")} style={styles.visaIcon}/>
          </View>
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

      <View style={styles.listView}>
        <FlatList
          data={[
            { key: "MOMO", name: "MTN Mobile Money", imageUrl: "momo.png" },
            { key: "AIRTEL", name: "Airtel Money", imageUrl: "airtel.png" },
            { key: "CASH", name: "Cash", imageUrl: "cash.png" },
          ]}
          renderItem={({ item }) => (
            <ListItem name={item.name} imgUrl={item.imageUrl} />
          )}
        />
      </View>

      <View style={styles.proceedView}>
        <Text style={styles.assText}>
          We will send you an order details to your email after the successfull
          payment
        </Text>

        <View style={styles.bottomTools}>
          <Button
            title="Pay for the order"
            buttonStyle={styles.payButton}
            icon={{
              name: "lock",
              size: 30,
              color: "#FFFF",
            }}
          >
            <Text style={styles.payButtonText}>Pay for the order</Text>
          </Button>
          <View style={styles.btmLine}></View>
        </View>
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
    borderWidth: 0.5,
    shadowColor: Colors.green,
    shadowOpacity: 1,
    shadowRadius: 10,
    width: "90%",
    marginRight: "10%",
    borderRadius: 50,
    backgroundColor: "#FFFF",
  },
  checkoutPayOptionView:{
    flexDirection: "row",
    flexWrap: "wrap"
  },
  visaIcon:{
    marginTop: 12,
    marginLeft:5,
   width: 30,
   height: 20
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
    flexWrap: "wrap",
  },
  amountDescView: {
    marginLeft: 45,
  },
  listView: {
    marginTop: 60,
    paddingLeft: 30,
  },
  checkoutText: {
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
  momoOptionView: {
    backgroundColor: Colors.green,
    paddingLeft: 20,
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
    marginTop: 15,
    borderWidth: 1,
    backgroundColor: Colors.green,
    padding: "3%",
    width: 350,
    height: 60,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 15,
  },
  btmLine: {
    marginTop: 10,
    fontWeight: "bold",
    width: 200,
    height: 7,
    borderRadius: 10,
    backgroundColor: "black",
  },
  bottomTools: {
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});
