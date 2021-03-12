import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {colors, MediumText, RegularText} from '.';
import Heart from '../assets/icons/heart.svg';
import {ListCardProps} from '../types/types.d';
import {wp} from '../utils/layout';
import {CardStyles as styles} from './styles';

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
      <SharedElement id={`item.${props.id}.icon`}>
        <Image source={props.image} style={styles.image} />
      </SharedElement>
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
