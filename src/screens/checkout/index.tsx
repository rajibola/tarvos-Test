import React, {useContext, useEffect, useRef} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import {
  Button,
  CartCard,
  Header,
  ListItem,
  RegularText,
} from '../../components';
import {AppContext} from '../../context/context';
import {styles} from './styles';

const Checkout: React.FC = () => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [animValue]);

  const {state} = useContext(AppContext);

  const total = state.CheckedEvent.sort((a, b) => a.id - b.id).reduce(
    (a, b) => a + b.price * b.total,
    0,
  );

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
          <ListItem name="total amount" value={total} />
          <ListItem name="discount" value={0} />
          <View style={styles.line} />
          <ListItem name="final amount" value={total} />
        </View>
        <Button title="checkout" />
      </Animated.View>
    </View>
  );
};

export default Checkout;
