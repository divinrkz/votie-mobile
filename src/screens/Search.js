const SearchPage = () => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          
        />
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
    }
  });
  