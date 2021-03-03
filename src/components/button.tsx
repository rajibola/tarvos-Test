import React from 'react';
import {
  TouchableOpacityProps,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  Text,
} from 'react-native';

import {ButtonStyles as styles} from './styles';
import {RegularText} from './text';

interface props extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

export const Button: React.FC<props> = ({
  style,
  title,
  titleStyle,
  ...rest
}) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
    {/* <Text style={styles.title}>{title}</Text> */}
    <RegularText title={title} style={styles.buttonText} />
  </TouchableOpacity>
);
