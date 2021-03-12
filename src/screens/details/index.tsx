import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Image, ScrollView, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Heart from '../../assets/icons/heart.svg';
import {
  Button,
  colors,
  Header,
  List,
  MediumText,
  RegularText,
} from '../../components';
import {AppContext} from '../../context/context';
import {DetailsProps} from '../../types/types.d';
import {wp} from '../../utils/layout';
import {ListData} from '../../utils/_Data';
import {styles} from './styles';

const hitSlop = {top: 20, bottom: 20, left: 20, right: 20};

const Details = (props: DetailsProps) => {
  const [oldSize, changeSize] = useState('');
  const [showCircle, switchCircle] = useState(false);
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [animValue]);

  const {dispatch} = useContext(AppContext);
  const handleAddToCart = async () => {
    const {params} = props?.route;
    await dispatch({
      type: 'ADD_ITEM',
      payload: {...params, size: oldSize.toUpperCase()},
    });
    props.navigation.navigate('Checkout');
  };

  const handleSize = (a: string) => {
    changeSize(a);
  };

  const {name, price, amount, image, color, id} = props?.route?.params;
  return (
    <View style={styles.container}>
      <Header back />
      <ScrollView>
        {topContainer()}
        {bottomContainer()}
      </ScrollView>

      <Button
        title={oldSize ? 'continue' : 'add to cart'}
        onPress={() => {
          if (oldSize) {
            handleAddToCart();
          } else {
            switchCircle(true);
          }
        }}
      />

      {showCircle && circleContainer()}
    </View>
  );

  function circleContainer() {
    return (
      <View style={styles.circle}>
        <MediumText title="select size" style={styles.circleHeader} />
        <View style={styles.rowItems}>
          {['s', 'm', 'l'].map((a, i) => (
            <View style={styles.size} key={i} hitSlop={hitSlop}>
              <RegularText
                title={a}
                style={styles.sizeText}
                onPress={() => {
                  handleSize(a);
                  switchCircle(false);
                }}
              />
            </View>
          ))}
        </View>

        <View style={styles.textContainer}>
          <RegularText title="size chart" style={styles.circleText} />
        </View>
      </View>
    );
  }

  function bottomContainer() {
    return (
      <Animated.View
        style={[
          styles.bottomView,
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
          },
        ]}>
        <View style={styles.row}>
          {['s', 'm', 'l'].map((a, i) => (
            <View
              style={[
                styles.size,
                oldSize === a && {
                  backgroundColor: colors.black,
                },
              ]}
              key={i}>
              <RegularText
                title={a}
                style={[
                  styles.sizeText,
                  oldSize === a && {
                    color: colors.white,
                  },
                ]}
              />
            </View>
          ))}
        </View>

        <Text style={styles.details}>
          100% Original Products {'\n'}This item is not returnable. Items like
          inner-wear, personal care, make-up, socks and certain accessories do
          not come under our return policy.
          <Text style={styles.more}> Read More.</Text>
        </Text>

        <View style={styles.spec}>
          <RegularText title="spec" style={styles.specText} />
        </View>

        <View style={styles.listContainer}>
          {ListData.map((a, i) => (
            <List {...a} key={i} />
          ))}
        </View>
      </Animated.View>
    );
  }

  function topContainer() {
    return (
      <View style={[styles.topView, {backgroundColor: color}]}>
        <SharedElement id={`item.${id}.icon`}>
          <Image source={image} style={styles.image} />
        </SharedElement>
        <View style={styles.bottomContainer}>
          <View>
            <MediumText title={name} style={styles.title} />
            <View style={styles.newRow}>
              <RegularText title={`N ${price}`} style={styles.price} />
              <RegularText title={`unisex pack of ${amount}`} />
            </View>
          </View>
          <Heart height={wp(20)} width={wp(20)} fill={colors.black} />
        </View>
      </View>
    );
  }
};

export default Details;
