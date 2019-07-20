import React, { Component } from 'react';
import { View } from 'react-native';
import FeatureInDev from '@components/FeatureInDev'
import { SafeAreaView } from 'react-navigation';
// import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';
import AppStyles from '@config/styles';
import PropTypes from 'prop-types';
import styles from './styles';

export default class CameraScreen extends Component {
    /* takePicture = async function() {
        if (this.camera) {
            const options = { quality: 1, base64: true };
            const data = await this.camera.takePictureAsync(options);
            alert('Saved', data.uri);
        }
    }; */

    onPress = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={
                        'We need your permission to use your camera phone'
                    }
                /> */}
                {/* <SafeAreaView style={styles.absoluteView}>
                    <View style={styles.head}>
                        <TouchableOpacity onPress={this.onPress}>
                            <Icon name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        // onPress={this.takePicture.bind(this)}
                        onPress={() => {}}
                        style={styles.capture}
                    >
                        <Icon name="photo-camera" size={75} color="white" />
                    </TouchableOpacity>
                </SafeAreaView> */}
                <TouchableRipple
                    borderless
                    onPress={this.onPress}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={styles.head}
                >
                    <Icon
                        size={30}
                        color={AppStyles.colors.accentColor}
                        name="close"
                    />
                </TouchableRipple>
                <View style={{ alignSelf: 'center', paddingVertical: 50 }}>
                    <FeatureInDev />
                </View>
            </SafeAreaView>
        );
    }
}

CameraScreen.propTypes = {
    navigation: PropTypes.object
};
