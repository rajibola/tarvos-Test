import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {wp, hp} from '../utils/layout';
import colors from './colors';

export const CartStyles = StyleSheet.create({
  controlText: {
    fontSize: hp(16),
    lineHeight: hp(19),
  },
  line: {
    height: 1,
    backgroundColor: '#00000033',
    marginBottom: hp(27),
    marginTop: hp(14),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(13),
  },
  totalValue: {
    fontSize: hp(20),
    lineHeight: hp(24),
  },
  totalTitle: {
    fontSize: hp(16),
    lineHeight: hp(19),
    textTransform: 'capitalize',
  },
  bottomTitle: {
    fontSize: hp(16),
    lineHeight: hp(19),
    textTransform: 'capitalize',
    marginBottom: hp(24),
  },
  bottomText: {
    height: hp(178 + 137),
    paddingHorizontal: wp(25),
  },
  control: {
    height: wp(89),
    width: wp(35),
    borderWidth: 1,
    borderRadius: wp(35),
    borderColor: '#0000001A',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(14),
    paddingBottom: hp(4),
  },
  size: {
    marginBottom: hp(8),
  },
  remove: {
    color: colors.red,
    textTransform: 'uppercase',
    lineHeight: hp(20),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(5),
  },
  price: {
    fontSize: hp(16),
    lineHeight: hp(19),
    marginRight: wp(5),
  },
  title: {
    fontSize: hp(20),
    lineHeight: hp(24),
    marginBottom: hp(5),
  },
  image: {
    width: wp(73),
    resizeMode: 'contain',
  },
  imageContainer: {
    width: wp(100),
    height: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(30),
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    marginTop: hp(25),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export const ButtonStyles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontSize: hp(16),
    lineHeight: hp(21),
    textTransform: 'uppercase',
  },
  container: {
    height: hp(57),
    paddingHorizontal: wp(36),
    backgroundColor: colors.black,
    position: 'absolute',
    zIndex: 10,
    bottom: hp(26),
    alignSelf: 'center',
    width: wp(342),
    borderRadius: wp(57),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CardStyles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    borderWidth: 1,
    width: hp(24),
    height: hp(24),
  },
  title: {
    fontSize: hp(20),
    lineHeight: hp(24),
  },
  price: {
    fontSize: hp(16),
    lineHeight: hp(29),
    marginRight: wp(14),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: hp(135),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    height: hp(262),
    justifyContent: 'space-between',
    paddingHorizontal: wp(30),
    paddingTop: hp(30),
    paddingBottom: hp(20),
  },
});

export const HeaderStyles = StyleSheet.create({
  back: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  shoppingText: {
    fontSize: hp(16),
    lineHeight: hp(21),
    textTransform: 'capitalize',
    marginLeft: wp(21),
  },
  iconText: {
    fontSize: hp(20),
    color: colors.white,
    lineHeight: hp(47),
  },
  LeftIconContainer: {
    height: hp(9),
    justifyContent: 'space-between',
  },
  centerIcon: {
    width: hp(60),
    height: hp(60),
    backgroundColor: colors.black,
    alignSelf: 'center',
    borderRadius: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer: {
    height: hp(9),
    justifyContent: 'space-between',
    width: wp(78),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    width: wp(17.93),
    height: hp(2),
    backgroundColor: colors.black,
    borderRadius: hp(2),
  },
  container: {
    backgroundColor: 'white',
    height: hp(60 + 18 + 15),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(30),
    justifyContent: 'space-between',
    borderBottomWidth: hp(18),
    borderTopWidth: hp(15),
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export const TextStyles = StyleSheet.create({
  RegularText: {
    fontSize: hp(12),
    lineHeight: hp(16),
    color: colors.black,
    fontFamily: 'rubik-regular',
  },

  medium: {
    fontSize: hp(12),
    lineHeight: hp(16),
    color: colors.black,
    fontFamily: 'rubik-medium',
  },
});
