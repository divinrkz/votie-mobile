import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export default function RestaurantMenuCart({ navigation, route }) {
    const { params } = route;
    let menu = params.menu;

    const [products, setProducts] = React.useState<Array<any>>([]);

    useEffect(() => {
    // fetch products from the server
    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });
        setProducts([
            {
                id: 1,
                name: 'Kalfir Lime Vodka, Lemongrass, Ginger, Citrus',
                author: 'Tom Yummy - 12.5',
                price: 'FRW 5000',
                amount: 2,
            },
            {
                id: 2,
                name: 'Kalfir Lime Vodka, Lemongrass, Ginger, Citrus',
                author: 'Tom Yummy',
                price: 'FRW 5000',
                amount: 2,
            },
            {
                id: 3,
                name: 'Kalfir Lime Vodka, Lemongrass, Ginger, Citrus',
                author: 'Tom Yummy',
                price: 'FRW 5000',
                amount: 2,
            },
        ]);
    }, []);

    let total =
    'FRW ' +
    products.reduce((acc, curr) => {
        return (
            acc +
        curr.amount *
          parseInt(
              (curr.price + '')
                  .replace('FRW ', '')
                  .replace(',', '')
                  .replace(' ', '')
          )
        );
    }, 0);

    const increment = (id: number) => {
        let newProducts = products.map((product) => {
            if (product.id === id) {
                product.amount++;
            }
            return product;
        });
        setProducts(newProducts);
    };

    const decrement = (id: number) => {
        let newProducts = products.map((product) => {
            if (product.id === id) {
                product.amount--;
            }
            return product;
        });
        newProducts = newProducts.filter((product) => product.amount > 0);
        setProducts(newProducts);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="dark" />
                <Text style={styles.headerText}>Choose Kigali</Text>
                <Text style={styles.subheaderText}>{menu}</Text>

                <View style={styles.productsContainer}>
                    {products.map((product) => {
                        return (
                            <View key={product.id} style={styles.product}>
                                <View></View>
                                <View>
                                    <Text style={styles.productName}>{product.name}</Text>
                                    <Text style={styles.productAuthor}>{product.author}</Text>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.productPrice}>{product.price}</Text>
                                        <View style={styles.priceActions}>
                                            <Icon
                                                name="minus"
                                                size={18}
                                                color="rgb(247,148,29)"
                                                onPress={() => decrement(product.id)}
                                            />
                                            <Text style={styles.priceAmount}>{product.amount}</Text>
                                            <Icon
                                                name="plus"
                                                size={18}
                                                color="rgb(247,148,29)"
                                                onPress={() => increment(product.id)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 20,
                    }}
                >
                    <Text
                        style={{ marginRight: 10 }}
                        onPress={() => navigation.navigate('Dashboard')}
                    >
            More drinks
                    </Text>
                    <Icon name="arrow-right" size={25} color="rgb(247,148,29)" />
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>Total</Text>
                    <Text style={styles.productPrice}>{total}</Text>
                </View>

                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Checkout', { products })}
                >
                    <View
                        style={{
                            backgroundColor: 'rgb(247,148,29)',
                            borderRadius: 20,
                            paddingVertical: 20,
                            marginTop: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>
              Proceed to checkout
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        minHeight: (height * 90) / 100,
        padding: 10,
        width,
    },
    headerText: {
        color: '#000',
        fontSize: 26,
        fontWeight: '900',
        textAlign: 'right',
    },
    priceActions: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    priceAmount: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    product: {
        backgroundColor: 'rgb(248,248,251)',
        borderRadius: 20,
        marginTop: 20,
        padding: 20,
    },
    productAuthor: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 8,
    },
    productName: {
        color: 'grey',
    },
    productPrice: {
        color: 'rgb(247,148,29)',
        fontWeight: 'bold',
    },
    productsContainer: {},
    subheaderText: {
        color: '#F7941D',
        fontSize: 30,
        textAlign: 'right',
    },
});
