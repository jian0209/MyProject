import { StyleSheet, Dimensions } from "react-native";
import color from "../stores/color";

export default StyleSheet.create({
    mainBtn: {
        backgroundColor: color.primaryColor,
        borderRadius: 10,
        width: Dimensions.get('screen').width * 0.8,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    }
});