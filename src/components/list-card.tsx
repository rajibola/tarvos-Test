import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {MediumText, RegularText} from './text';
import {CardStyles as styles} from './styles';
import {wp} from '../utils/layout';
import colors from './colors';
import {useNavigation} from '@react-navigation/native';
import Heart from '../assets/icons/heart.svg';
import {ListCardProps} from '../types/types.d';

export const ListCard: React.FC<ListCardProps> = ({...props}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: props.color}]}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('Details', {
          ...props,
        })
      }>
      <Image source={props.image} style={styles.image} />
      <View style={styles.bottomContainer}>
        <View>
          <MediumText title={props.name} style={styles.title} />
          <View style={styles.row}>
            <RegularText title={`N ${props.price}`} style={styles.price} />
            <RegularText title={`unisex pack of ${props.amount}`} />
          </View>
        </View>
        <Heart height={wp(20)} width={wp(20)} fill={colors.black} />
      </View>
    </TouchableOpacity>
  );
};
