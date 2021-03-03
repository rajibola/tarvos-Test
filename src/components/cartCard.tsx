import React, {useContext, useState} from 'react';
import {View, ImageSourcePropType, Image} from 'react-native';
import {CartStyles as styles} from './styles';
import Plus from '../assets/icons/plus.svg';
import Minus from '../assets/icons/minus.svg';
import {wp} from '../utils/layout';
import {AppContext} from '../types/context';
import colors from './colors';
import {MediumText, RegularText} from './text';

type CartProps = {
  name: string;
  amount: number;
  size?: string;
  price: number;
  image: ImageSourcePropType;
  color: string;
  id: number;
  total: number;
};

export const CartCard = ({
  name,
  image,
  amount,
  size,
  price,
  color,
  id,
  total,
}: CartProps) => {
  const [count, setCount] = useState(1);
  const {dispatch, state} = useContext(AppContext);
  console.log(state.CheckedEvent);
  if (!count) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {id},
    });
  }

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
          onPress={() => setCount(count + 1)}
        />
        <RegularText title={`${count}`} style={styles.controlText} />
        <Minus
          height={wp(14)}
          width={wp(14)}
          fill={colors.black}
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
};
