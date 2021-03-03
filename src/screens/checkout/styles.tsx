import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../components/colors';

interface Styles {
  container: ViewStyle;
  // icon: ImageStyle;
  // label: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
