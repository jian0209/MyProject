import { StyleSheet } from 'react-native'
import color from '../stores/color'
import { height, width } from './global'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: height * 0.1,
    paddingHorizontal: width * 0.1
  },
  centerContainer: {
    justifyContent: 'center',
    flex: 1
  },
  notification: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    borderRadius: 10,
    backgroundColor: color.lightPrimaryColor
  },
  notificationView: {
    bottom: height * 0.1,
    position: 'absolute',
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
