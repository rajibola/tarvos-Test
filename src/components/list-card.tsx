import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import {MediumText, RegularText} from './text';
import {CardStyles as styles} from './styles';
import {wp, hp} from '../utils/layout';
import colors from './colors';
import {useNavigation} from '@react-navigation/native';
import Heart from '../assets/icons/heart.svg';

const mask = require('../assets/images/mask1.png');

interface props extends TouchableOpacityProps {
  name?: string;
  amount?: number;
  price?: number;
  color?: string;
  onPress?: () => void;
  image?: any;
  id?: number;
  size?: string;
  total: number;
}

export const ListCard: React.FC<props> = ({
  name,
  price,
  amount,
  image,
  color,
  id,
  size,
  total,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color}]}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('Details', {
          image,
          price,
          amount,
          color,
          name,
          id,
          size,
          total,
        })
      }>
      <Image source={image} style={styles.image} />
      <View style={styles.bottomContainer}>
        <View>
          <MediumText title={name} style={styles.title} />
          <View style={styles.row}>
            <RegularText title={`N ${price}`} style={styles.price} />
            <RegularText title={`unisex pack of ${amount}`} />
          </View>
        </View>
        <Heart height={wp(20)} width={wp(20)} fill={colors.black} />
      </View>
    </TouchableOpacity>
  );
};
