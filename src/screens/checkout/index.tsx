import React, {useContext, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/header';
import {MediumText, RegularText} from '../../components/text';
import {Data} from '../../utils/_Data';
import {styles} from './styles';
import {Button} from '../../components/button';
import {AppContext} from '../../types/context';
import {CartCard} from '../../components/cartCard';

const Checkout = () => {
  const {dispatch, state} = useContext(AppContext);
  console.log(state.CheckedEvent);

  const total = state.CheckedEvent.reduce((a, b) => a + b.price, 0);

  return (
    <View style={styles.container}>
      <Header leftText="shopping cart" />
      <ScrollView>
        {state.CheckedEvent.map((a, i) => (
          <CartCard key={i} {...a} />
        ))}
      </ScrollView>
      <View style={styles.bottomText}>
        <RegularText title="cart details" style={styles.bottomTitle} />
        <View style={styles.row}>
          <RegularText title="total amount" style={styles.totalTitle} />
          <MediumText title={`Rs ${total}`} style={styles.totalValue} />
        </View>
        <View style={styles.row}>
          <RegularText title="discount" style={styles.totalTitle} />
          <MediumText title="Rs 0" style={styles.totalValue} />
        </View>

        <View style={styles.line} />

        <View style={styles.row}>
          <RegularText title="final amount" style={styles.totalTitle} />
          <MediumText title="Rs 0" style={styles.totalValue} />
        </View>
      </View>
      <Button title="checkout" />
    </View>
  );
};

export default Checkout;
