import React from 'react';
import {View} from 'react-native';
import {ListItemProps as Props} from '../types/types.d';
import {ListItemStyles as styles} from './styles';
import {MediumText, RegularText} from './text';

export const ListItem: React.FC<Props> = ({name, value}) => (
  <View style={styles.row}>
    <RegularText title={name} style={styles.totalTitle} />
    <MediumText title={`Rs ${value}`} style={styles.totalValue} />
  </View>
);
