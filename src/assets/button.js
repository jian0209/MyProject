import { StyleSheet, Dimensions } from 'react-native'
import color from '../stores/color'

export default StyleSheet.create({
  mainBtn: {
    backgroundColor: color.primaryColor,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
