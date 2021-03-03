import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import colors from '../../components/colors';
import {hp, wp} from '../../utils/layout';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  topView: ViewStyle;
  sizeText: TextStyle;
  size: ViewStyle;
  row: ViewStyle;
  bottomView: ViewStyle;
  details: TextStyle;
  more: TextStyle;
  spec: ViewStyle;
  specText: TextStyle;
  list: ViewStyle;
  listText: TextStyle;
  listContainer: ViewStyle;
  bottomContainer: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  price: TextStyle;
  newRow: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  newRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  listContainer: {
    paddingBottom: hp(35),
  },
  listText: {
    fontSize: hp(16),
    lineHeight: hp(21),
    marginLeft: wp(25),
    marginBottom: hp(32),
  },
  list: {
    flexDirection: 'row',
  },
  specText: {
    fontSize: hp(16),
  },
  spec: {
    width: wp(56),
    height: hp(24),
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
    marginBottom: hp(30),
  },
  more: {
    color: colors.red,
  },
  details: {
    fontSize: hp(16),
    lineHeight: hp(25),
    display: 'flex',
    fontFamily: 'rubik-regular',
    marginBottom: hp(23),
  },
  bottomView: {
    paddingVertical: hp(49),
    paddingHorizontal: wp(30),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(36),
    position: 'absolute',
    bottom: -wp(19),
    zIndex: 5,
  },
  sizeText: {
    fontSize: hp(16),
    lineHeight: hp(21),
    textTransform: 'uppercase',
  },
  size: {
    width: wp(38),
    height: wp(38),
    backgroundColor: colors.white,
    borderRadius: wp(38),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(15),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    height: hp(268),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  topView: {
    height: hp(432),
    backgroundColor: colors.grey,
    justifyContent: 'space-between',
    paddingHorizontal: wp(30),
    paddingVertical: hp(30),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
