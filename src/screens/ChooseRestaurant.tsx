import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Restaurant = ({ navigatation }) => {
  const contents = [
    { id: "12", name: "dsfa", address: "sdfa", phone: "dsfa", email: "dsfa" },
  ];
  return (
    <ScrollView>
      <View>
        {contents.map((c) => (
          <TouchableOpacity
            key={c.id}
            onPress={() => {
              navigatation.navigate("RestaurantMenu", { restaurant: c });
            }}
          >
            <View style={styles.container}>
              <Image
                style={styles.containerImage}
                source={{ uri: "https://picsum.photos/200/300/?blur" }}
              />
              <View style={styles.top}>
                <Text style={styles.heading}>{c.name}</Text>
                <Text style={styles.p}>
                  {c.address}, {c.phone},{c.email}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default function ChooseRestaurant({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 20,
              borderBottomColor: "#777",
              borderBottomWidth: 1,
            }}
          >
            <Text>Search ...</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.mainHeader}>Nearby Restaurants</Text>
        <View>
          <Restaurant navigatation={navigation} />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#D2D2CF",
    borderRadius: 10,
    width: 370,
    height: 80,
    marginLeft: 20,
    marginBottom: 20,
    opacity: 0.9,
  },
  heading: {
    color: "#000",
    fontSize: 20,
    marginLeft: 20,
  },
  containerImage: {
    width: 70,
    height: 68,
    borderRadius: 15,
    marginLeft: 4,
    marginTop: 10,
  },
  p: {
    color: "#000",
    fontSize: 14,
    marginLeft: 20,
  },
  mainHeader: {
    marginLeft: 20,
    color: "#F7941D",
    marginBottom: 40,
    marginTop: 50,
    fontSize: 18,
  },
  mainView: {
    paddingBottom: 100,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },
  top: {
    marginTop: 10,
  },
});
