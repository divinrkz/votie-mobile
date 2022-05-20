import { FontAwesome, Feather } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SearchScreen() {
    return (
        <SafeAreaView
            style={{
                backgroundColor: "#F7941D",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 15,
                }}
            >
                <Feather name="search" size={24} color={'#000'} />
                <TextInput placeholder="Search Your Prefeered Restaurant" />
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        marginTop: 50,
                    }}
                >
                    Or
                </Text>
            </View>
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <FontAwesome name="qrcode" size={100} color="black" />
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        marginTop: 50,
                    }}
                >
                    Scan Pay & Enjoy
                </Text>
            </View>
        </SafeAreaView>
    );
}