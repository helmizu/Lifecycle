import { StyleSheet } from 'react-native';
import AppStyles from '@config/styles';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 5
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  itemDate: {
    alignSelf: 'center'
  },
  balloon: {
    maxWidth: '75%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: AppStyles.colors.separator
},
  balloonIn: {
    backgroundColor: AppStyles.colors.white,
    borderTopLeftRadius: 0
  },
  balloonOut: {
    borderTopRightRadius: 0
  },
  balloonDate: {
    backgroundColor: AppStyles.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'justify'
  },
  textIn: {
    color: AppStyles.colors.black
  },
  textOut: {
    color: AppStyles.colors.white
  },
  textTime: {
    fontSize: 10,
    marginLeft: 5,
    lineHeight: 12
  },
  timeEmpty: {
    width: 30,
    height: 12,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  textDate: {
    fontSize: 10,
    lineHeight: 12
  },
  readMore: {
    fontStyle: 'italic',
    fontSize: 12,
    alignSelf: 'flex-start',
    width: '88%',
    textAlign: 'left',
    marginTop: 10,
    color: AppStyles.colors.accentColor
  }
});

export default styles;
