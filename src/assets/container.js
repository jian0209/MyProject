import { StyleSheet, Dimensions } from 'react-native'
import color from '../stores/color'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notification: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('screen').width * 0.05,
    paddingVertical: Dimensions.get('screen').height * 0.01,
    borderRadius: 10,
    backgroundColor: color.lightPrimaryColor
  }
})
