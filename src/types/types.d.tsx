import React from 'react';
import {ImageSourcePropType} from 'react-native';

export type CartProps = {
  name: string;
  amount: number;
  size: string;
  price: number;
  image: ImageSourcePropType;
  color: string;
  id: number;
  total: number;
};

export type DetailsProps = {
  route: {
    params: {
      name: string;
      price: number;
      amount: number;
      image: ImageSourcePropType;
      color: string;
      id: number;
      size: string;
      total: number;
    };
  };
  navigation: any;
};
