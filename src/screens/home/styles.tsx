import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../components/colors';

type Styles = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
