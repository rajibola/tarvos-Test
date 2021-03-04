import React from 'react';
import {View} from 'react-native';
import {RegularText} from './text';
import {ListStyles as styles} from './styles';
import {ListProps} from '../types/types.d';

export const List: React.FC<ListProps> = ({icon, title}) => (
  <View style={styles.list}>
    {icon}
    <RegularText title={title} style={styles.listText} />
  </View>
);
