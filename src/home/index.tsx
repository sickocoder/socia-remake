import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Constants from "expo-constants";

import { Container} from './styles';
import { ProductTypes } from "../elements/product/product.types";

import { BottomNavigationView, Product } from "../elements";
import HeaderView from "./home.header";



const HomePage: FC = () => {
  const [data, setData] = useState<Array<ProductTypes>>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=> res.json())
      .then((response: Array<ProductTypes>) => setData(response));
  }, [setData])

  return (
    <Container>
      <HeaderView />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: Constants.statusBarHeight + 88,
          paddingBottom: Constants.statusBarHeight + 48
        }}
        contentContainerStyle={{
          padding: 8,
          paddingTop: 8
        }}
        horizontal={false}
        data={data}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Product {...item} />}
      />

      <BottomNavigationView />
    </Container>
  );
}

export default HomePage;
