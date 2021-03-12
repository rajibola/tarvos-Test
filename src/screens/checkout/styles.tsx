import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/layout';
import {CheckoutProps as Styles} from '../../types/types.d';
import {colors} from '../../components';

export const styles = StyleSheet.create<Styles>({
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
