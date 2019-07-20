import { StyleSheet } from 'react-native';
import AppStyles from '@config/styles';
import { isIphoneX } from '@lib/isIphoneX';

const styles = StyleSheet.create({
    container: {
        height: isIphoneX() ? 74 : 50,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: AppStyles.colors.grey,
        paddingBottom: isIphoneX() ? 24 : 0
    },
    customContainer: {
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: AppStyles.colors.grey,
        paddingBottom: 0
    },
    btn: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        overflow: 'hidden'
    },
    btnSend: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: AppStyles.colors.accentColor
    },
    input: {
        height: 36,
        borderRadius: 24,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: AppStyles.colors.grey,
        marginVertical: 8,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        flex: 1
    }
});
export default styles;
