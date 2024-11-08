import { StyleSheet, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.header}>GETABOAT-FOR SALE</Text>
            <View style={styles.boatContainer}>
                <View style={styles.titleContainer}>
                    <Icon name={icon_name} size={20} color="#ffffff" />
                    <Text style={styles.title}>{name}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
                <Image source={poster} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        margin: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    boatContainer: {
        backgroundColor: '#f0f0f0',
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
        borderRadius: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 3,
        marginBottom: 10,
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
    },
    description: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginBottom: 10,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
});

export default Boats;


