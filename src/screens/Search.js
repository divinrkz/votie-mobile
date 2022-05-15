const SearchPage = () => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          
        />
        <Text style={styles.middleText}>
          or
        </Text>

        <Text style={styles.bottomText}>
          Scan , Pay & Enjoy!
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F7941D",
      alignItems: "center",
      justifyContent: "center",
    },
    input:{
      height: 40,
      marginTop: 20,
      borderWidth: 1,
      padding: 10,
      borderRadius:30
    },
    middleText: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
      fontWeight: "bold",
      fontSize: 12
    },
    bottomText:{
      marginTop: 20,
      fontWeight: "bold",
      fontSize: 12
    }
  });
  