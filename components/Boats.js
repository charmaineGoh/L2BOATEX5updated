import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={icon_name} size={24} color="#000" />
                <Text style={{ fontWeight: 'bold', fontSize: 18}}>{name}</Text>
            </View>
            <Text>
                {description}
            </Text>
            <Image source={poster} style={{ width: '100%', height: 500, marginBottom: 20}} />
        </View>
    );
};

export default Boats;
