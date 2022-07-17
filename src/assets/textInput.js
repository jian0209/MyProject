import { StyleSheet, Dimensions } from "react-native";
import color from "../stores/color";

export default StyleSheet.create({
    main: {
        backgroundColor: color.lightPrimaryColor,
        borderRadius: 10,
        width: Dimensions.get('screen').width * 0.8,
        color: color.whiteColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16
    }
});