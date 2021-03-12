import React, {FC, useContext, useState} from 'react';
import {View, Image} from 'react-native';
import {CartStyles as styles} from './styles';
import Plus from '../assets/icons/plus.svg';
import Minus from '../assets/icons/minus.svg';
import {wp} from '../utils/layout';
import {AppContext} from '../context/context';
import {CartProps} from '../types/types.d';
import {colors, MediumText, RegularText} from '.';

export const CartCard: FC<CartProps> = ({...props}) => {
  const {name, amount, size, price, image, color, id, total} = props;
  const {dispatch, state} = useContext(AppContext);
  const hitSlop = {top: 20, bottom: 20, left: 50, right: 50};

  const reduce = () => {
    dispatch({
      type: 'REDUCE_QUANTITY',
      payload: {id},
    });
  };

  const add = () => {
    const payload = {...props};
    dispatch({
      type: 'ADD_ITEM',
      payload,
    });
  };

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {id},
    });
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.leftView}>
        <View style={[styles.imageContainer, {backgroundColor: color}]}>
          <Image source={image} style={styles.image} />
        </View>

        <View>
          <MediumText title={name} style={styles.title} />
          <View style={styles.priceRow}>
            <RegularText title={`Rs ${price}`} style={styles.price} />
            <RegularText title={`unisex pack of ${amount}`} />
          </View>
          <RegularText title={`size : ${size}`} style={styles.size} />
          <RegularText
            title="remove"
            style={styles.remove}
            onPress={removeItem}
          />
        </View>
      </View>

      <View style={styles.control}>
        <Plus
          height={wp(14)}
          width={wp(14)}
          fill={colors.black}
          onPress={add}
          hitSlop={hitSlop}
        />
        <RegularText title={`${total}`} style={styles.controlText} />
        <Minus
          height={wp(14)}
          width={wp(14)}
          fill={colors.black}
          onPress={reduce}
          hitSlop={hitSlop}
        />
      </View>
    </View>
  );
};
