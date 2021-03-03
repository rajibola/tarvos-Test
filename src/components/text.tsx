import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {TextStyles as styles} from './styles';

interface Props extends TextProps {
  title?: string;
  style?: TextStyle;
  onPress?: () => void;
}

const RegularText: React.FC<Props> = ({title, style, onPress}) => (
  <Text style={[styles.RegularText, style]} onPress={onPress}>
    {title}
  </Text>
);

const MediumText: React.FC<Props> = ({title, style, onPress}) => (
  <Text style={[styles.medium, style]} onPress={onPress}>
    {title}
  </Text>
);

export {RegularText, MediumText};
