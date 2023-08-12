import { StyleSheet } from 'react-native';
import { vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 8,
        width: vw * 95
    },
    contentContainer: {

    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
    },
    categoryNameInput: {
        // width: 325,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    fieldTypeText: {
        fontWeight: "500",
        color: 'purple',
        textTransform: "uppercase",
    },
    footerRowContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});

export default styles;
