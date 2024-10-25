import React from 'react';
import { View, Text, Image, StatusBar, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

import Boats from './components/Boats.js';

const AllBoats = () => {
  return (
      <ScrollView>
        <StatusBar hidden={true}/>
        <Text style={{ marginBottom: 10 }}>
          GetABoat - For Sale
        </Text>
        <Boats
            name="SEA RAY 500 SUNDANCER"
            icon_name="sailboat"
            description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            poster={require('./img/sea_ray.jpg')}
        />
        <Boats
            name="FOUR WINNS HORIZON 180"
            icon_name="sailboat"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            poster={require('./img/four_winns.jpg')}
        />
        <Boats
            name="FLIPPER 640 ST"
            icon_name="sailboat"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            poster={require('./img/flipper.jpg')}
        />
        <Boats
            name="FLIPPER 640 ST"
            icon_name="sailboat"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            poster={require('./img/flipper.jpg')}
        />
        <Boats
            name="PRINCESS V48"
            icon_name="sailboat"
            description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            poster={require('./img/princess.jpg')}
        />
        <Boats
            name="BAYLINER 175 BOWRIDER"
            icon_name="sailboat"
            description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            poster={require('./img/bayliner.jpg')}
        /><Boats
          name="FAIRLINE TARGA 47"
          icon_name="sailboat"
          description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
          poster={require('./img/fairline.jpg')}
      />
      </ScrollView>
  );
};

export default AllBoats;
