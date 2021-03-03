import React from 'react';
import {Text, View} from 'react-native';
import {HeaderStyles as styles} from './styles';
import SearchIcon from '../assets/icons/search.svg';
import ShopIcon from '../assets/icons/shopping-cart.svg';
import Back from '../assets/icons/back-arrow.svg';
import {hp, wp} from '../utils/layout';
import colors from './colors';
import {RegularText} from './text';

type Props = {
  back?: boolean;
  leftText?: string;
};

class Header extends React.Component<Props> {
  render() {
    const {back, leftText} = this.props;
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
            <>
              <Back
                height={wp(16)}
                width={wp(8)}
                fill={colors.black}
                // onPress={() => this.props.navigation.goBack()}
              />
              {leftText && (
                <RegularText title={leftText} style={styles.shoppingText} />
              )}
            </>
          ) : (
            <View style={styles.LeftIconContainer}>
              <View style={styles.leftIcon} />
              <View style={styles.leftIcon} />
            </View>
          )}
        </View>

        {!this.props.leftText && (
          <>
            <View style={styles.centerIcon}>
              <RegularText title="N8" style={styles.iconText} />
            </View>
            <View style={styles.IconContainer}>
              <SearchIcon height={wp(24)} width={wp(24)} fill={colors.black} />
              <ShopIcon height={wp(24)} width={wp(24)} fill={colors.black} />
            </View>
          </>
        )}
      </View>
    );
  }
}

export default Header;
