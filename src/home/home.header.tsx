import React, { FC } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { AppTitle, Header } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeaderView: FC = () => (
  <Header intensity={90}>
    <View>
      <AppTitle>Hi, Jose!</AppTitle>
      <Text>Find here what you are looking for!</Text>
    </View>

    <TouchableOpacity>
      <View
        style={{
          backgroundColor: 'purple',
          width: 18,
          height: 18,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: -6,
          right: -4,
          zIndex: 10
        }}
      >
        <Text style={{ color: '#fff' }}>2</Text>
      </View>
      <MaterialCommunityIcons name="cart-outline" size={27} color="black"/>
    </TouchableOpacity>
  </Header>
);

export default HeaderView;