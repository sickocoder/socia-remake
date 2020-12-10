import React, { FC } from 'react';
import { Text, Image } from "react-native";
import { ProductTypes } from "./product.types";
import {Container, Divider, ProductTitle, SplitButton, TagInfo} from "./styles";

const Product: FC<ProductTypes> = (props) => {
  return (
    <Container>
      <Image
        source={{ uri: props.image }}
        style={{
          flex: 1,
          resizeMode: 'contain',
          marginBottom: 16
        }}
      />
      <ProductTitle>{props.title}</ProductTitle>
      <Text>${props.price}</Text>
      <Divider />
      <Text style={{ fontWeight: '500', textAlign: 'center', paddingBottom: 4 }}>$10 per unity</Text>
      <SplitButton>
        <Text style={{ color: '#fff' }}>Split</Text>
      </SplitButton>
    </Container>
  );
}


export default Product;