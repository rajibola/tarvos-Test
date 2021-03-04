import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HeaderStyles as styles} from './styles';
import SearchIcon from '../assets/icons/search.svg';
import ShopIcon from '../assets/icons/shopping-cart.svg';
import Back from '../assets/icons/back-arrow.svg';
import {wp} from '../utils/layout';
import colors from './colors';
import {RegularText} from './text';
import {useNavigation} from '@react-navigation/native';
import {HeaderProps} from '../types/types.d';

export const Header: React.FC<HeaderProps> = (props) => {
  const navigation = useNavigation();
  const {back, leftText} = props;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.IconContainer,
          leftText !== undefined && {
            width: wp(120),
            justifyContent: 'flex-start',
          },
        ]}>
        {back || leftText ? (
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <Back height={wp(16)} width={wp(8)} fill={colors.black} />
            {leftText && (
              <RegularText title={leftText} style={styles.shoppingText} />
            )}
          </TouchableOpacity>
        ) : (
          <View style={styles.LeftIconContainer}>
            <View style={styles.leftIcon} />
            <View style={styles.leftIcon} />
          </View>
        )}
      </View>

      {!props.leftText && (
        <>
          <View style={styles.centerIcon}>
            <RegularText title="N8" style={styles.iconText} />
          </View>
          <View style={styles.IconContainer}>
            <SearchIcon height={wp(24)} width={wp(24)} fill={colors.black} />
            <ShopIcon
              height={wp(24)}
              width={wp(24)}
              fill={colors.black}
              onPress={() => navigation.navigate('Checkout')}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Header;
