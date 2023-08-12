import { StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';

interface Styles {
    container: ViewStyle;
    contentContainer: ViewStyle;
    button: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1, backgroundColor: colors.white,
        height: vh * 100, width: vw * 100

    },
    contentContainer: {
        // alignItems: 'center'
    },
    button: {
        // position: 'absolute', bottom: 0, right: 0, left: 0,
    }
});

export default styles;