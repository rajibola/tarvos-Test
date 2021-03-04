import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import Header from '../../components/header';
import {MediumText, RegularText} from '../../components/text';
import {Data} from '../../utils/_Data';
import {styles} from './styles';
import {Button} from '../../components/button';
import {AppContext} from '../../context/context';
import {CartCard} from '../../components/cartCard';

const Checkout = () => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [animValue]);

  const {dispatch, state} = useContext(AppContext);
  console.log(state.CheckedEvent);

  const total = state.CheckedEvent.reduce((a, b) => a + b.price * b.total, 0);

  return (
    <View style={styles.container}>
      <Header leftText="shopping cart" />
      <Animated.View
        style={[
          {
            opacity: animValue,
            transform: [
              {
                translateY: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 1],
                }),
              },
            ],
            flex: 1,
          },
        ]}>
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
            <MediumText title={`Rs ${total}`} style={styles.totalValue} />
          </View>
        </View>
        <Button title="checkout" />
      </Animated.View>
    </View>
  );
};

export default Checkout;
