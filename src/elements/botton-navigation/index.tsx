import { BottomNavigation, BottomNavigationItem } from "./styles";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import React from "react";

export default function BottomNavigationView() {
  return <BottomNavigation intensity={90}>
    <BottomNavigationItem>
      <AntDesign name="laptop" size={24} color="purple"/>
      <Text style={{color: "purple", fontWeight: "700"}}>Home</Text>
    </BottomNavigationItem>
    <BottomNavigationItem>
      <AntDesign name="tago" size={24} color="black"/>
      <Text>Deals</Text>
    </BottomNavigationItem>
    <BottomNavigationItem>
      <MaterialIcons name="money" size={24} color="black"/>
      <Text>Bugdeting</Text>
    </BottomNavigationItem>
    <BottomNavigationItem>
      <Feather name="search" size={24} color="black"/>
      <Text>Search</Text>
    </BottomNavigationItem>
    <BottomNavigationItem>
      <Feather name="user" size={24} color="black"/>
      <Text>Settings</Text>
    </BottomNavigationItem>
  </BottomNavigation>;
}