import React, {useContext} from 'react';
import {ScrollView, Text, View, Image, ImageSourcePropType} from 'react-native';
import Header from '../../components/header';
import {MediumText, RegularText} from '../../components/text';
import {styles} from './styles';
import Heart from '../../assets/icons/heart.svg';
import colors from '../../components/colors';
import {wp} from '../../utils/layout';
import {Button} from '../../components/button';
import {ListData} from '../../utils/_Data';
import {AppContext} from '../../types/context';

type Props = {
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

const Details = (props: Props) => {
  const {dispatch} = useContext(AppContext);
  const handleAddToCart = async () => {
    const {params} = props?.route;
    await dispatch({
      type: 'ADD_ITEM',
      payload: {...params},
    });
    props.navigation.navigate('Checkout');
  };

  const {name, price, amount, image, color} = props?.route?.params;
  return (
    <View style={styles.container}>
      <Header back />
      <ScrollView>
        <View>
          <View style={[styles.topView, {backgroundColor: color}]}>
            <Image source={image} style={styles.image} />
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

          <View style={styles.row}>
            {['s', 'm', 'l'].map((a, i) => (
              <View style={styles.size} key={i}>
                <RegularText title={a} style={styles.sizeText} />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bottomView}>
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
        </View>
      </ScrollView>

      <Button title="add to cart" onPress={() => handleAddToCart()} />
    </View>
  );
};

export default Details;

type ListProps = {
  title: string;
  icon: any;
};

const List = ({icon, title}: ListProps) => (
  <View style={styles.list}>
    {icon}
    <RegularText title={title} style={styles.listText} />
  </View>
);
