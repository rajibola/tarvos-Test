import React from 'react';
import {Text, View} from 'react-native';
import {HeaderStyles as styles} from './styles';
import SearchIcon from '../assets/icons/search.svg';
import ShopIcon from '../assets/icons/shopping-cart.svg';
import {hp, wp} from '../utils/layout';
import colors from './colors';
import {RegularText} from './text';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.IconContainer}>
          <View style={styles.LeftIconContainer}>
            <View style={styles.leftIcon} />
            <View style={styles.leftIcon} />
          </View>
        </View>
        <View style={styles.centerIcon}>
          <RegularText title="N8" style={styles.iconText} />
        </View>
        <View style={styles.IconContainer}>
          <SearchIcon height={wp(24)} width={wp(24)} fill={colors.black} />
          <ShopIcon height={wp(24)} width={wp(24)} fill={colors.black} />
        </View>
      </View>
    );
  }
}

export default Header;
