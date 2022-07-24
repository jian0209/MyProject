import { Dimensions, StyleSheet } from 'react-native'
import color from '../stores/color'

export const { height, width } = Dimensions.get('window')

export const global = StyleSheet.create({
  horizontalLine: {
    borderWidth: 1,
    borderColor: color.primaryColor,
    flex: 1,
    height: height * 0.001
  }
})
