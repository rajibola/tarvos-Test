import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/header';
import {ListCard} from '../../components/list-card';
import {Data} from '../../utils/_Data';
import {styles} from './styles';

const Home: React.FC = () => {
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
};

export default Home;
