import React from 'react';
import {ScrollView, Text, View, ImageSourcePropType, Image} from 'react-native';
import Header from '../../components/header';
import {ListCard} from '../../components/list-card';
import {Data} from '../../utils/_Data';
import {styles} from './styles';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {Data.map((a, i) => (
            <ListCard key={i} {...a} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

type CartProps = {
  title: string;
  icon: any;
  image: ImageSourcePropType;
};

const CartCard = ({icon, title, image}: CartProps) => (
  <View style={styles.list}>
    <View>
      <Image source={image} style={styles.image} />
      <View></View>
    </View>

    <View></View>
  </View>
);

export default Home;
