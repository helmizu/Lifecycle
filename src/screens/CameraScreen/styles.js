import { StyleSheet } from 'react-native';
import Metrics from '@config/metrics';
import AppStyles from '@config/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: AppStyles.colors.white
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: AppStyles.colors.grey,
        borderRadius: 75,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    absoluteView: {
        width: Metrics.screenWidth,
        position: 'absolute',
        left: 0,
        top: 50,
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    head: {
        position: 'absolute',
        top: 30,
        left: 10,
        zIndex: 10
    }
});

export default styles;
