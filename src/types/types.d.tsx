import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type NavigationParamList = {
  Home: undefined;
  Details: {item: ListCardProps};
  Checkout: undefined;
};

export type TextComponentProps = {
  title?: string;
  style?: TextStyle | {};
  onPress?: () => void;
};

export type ButtonProps = {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
};

export type HeaderProps = {
  back?: boolean;
  leftText?: string;
  navigation?: any;
  onPress?: () => void;
};

export type ListCardProps = {
  name?: string;
  amount?: number;
  price?: number;
  color?: string;
  onPress?: () => void;
  image?: any;
  id?: number;
  size?: string;
  total: number;
};

export type ListItemProps = {
  name: string;
  value: number;
};

export type ListProps = {
  title: string;
  icon: any;
};

export type Dipatch =
  | {type: 'REMOVE_ITEM'; payload: {id: number}}
  | {type: 'REDUCE_QUANTITY'; payload: {id: number}}
  | {
      type: 'ADD_ITEM';
      payload: CartProps;
    };

export type DetailsStyleProps = {
  container: ViewStyle;
  image: ImageStyle;
  topView: ViewStyle;
  sizeText: TextStyle;
  size: ViewStyle;
  row: ViewStyle;
  bottomView: ViewStyle;
  details: TextStyle;
  more: TextStyle;
  spec: ViewStyle;
  specText: TextStyle;
  listContainer: ViewStyle;
  bottomContainer: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  price: TextStyle;
  newRow: TextStyle;
  circle: ViewStyle;
  circleHeader: TextStyle;
  rowItems: ViewStyle;
  circleText: TextStyle;
  textContainer: ViewStyle;
};

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

export type CheckoutProps = {
  container: ViewStyle;
  cartContainer: ViewStyle;
  leftView: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  price: TextStyle;
  amount?: TextStyle;
  size?: TextStyle;
  remove: TextStyle;
  priceRow: ViewStyle;
  textContainer?: ViewStyle;
  control: ViewStyle;
  bottomText: ViewStyle;
  bottomTitle: TextStyle;
  line: ViewStyle;
  controlText: TextStyle;
};
