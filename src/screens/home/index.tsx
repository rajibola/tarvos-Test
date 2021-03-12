import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, ListCard} from '../../components';
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
