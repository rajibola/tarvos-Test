import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {wp, hp} from '../utils/layout';
import colors from './colors';

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
