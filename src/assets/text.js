import { StyleSheet } from 'react-native'
import color from '../stores/color'

export default StyleSheet.create({
  title: {
    color: color.blackColor,
    fontSize: 24,
    fontWeight: 'bold'
  },
  btnText: {
    color: color.whiteColor,
    fontSize: 16
  },
  notificationText: {
    fontSize: 16,
    color: color.whiteColor
  }
})
