import { StyleSheet } from 'react-native';
import AppStyles from '@config/styles';

const styles = StyleSheet.create({
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        overflow: 'hidden',
        marginLeft: 8
    },
    action: {
        margin: 4
    },
    titleStyle: {
        fontWeight: '300',
        fontSize: 16
    },
    subtitleStyle: {
        fontWeight: '300',
        fontSize: 12
    },
    toolbar: {
        backgroundColor: AppStyles.colors.white,
        elevation: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: AppStyles.colors.separator
    }
});
export default styles;
