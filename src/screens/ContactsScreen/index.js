import React, { Component } from 'react';
import { View } from 'react-native';
import { Modal, Card } from 'react-native-paper';
import ActiveList from '@components/ActiveList';
import FeatureInDev from '@components/FeatureInDev';
import styles from './styles';

export default class ContactsScreen extends Component {
    state = {
        visible: false,
        profile: {}
    }
    
    _showModal = item => this.setState({ visible: true, profile: item });

    _hideModal = () => this.setState({ visible: false, profile: {} });

    _onPressChat = item => {
        const { navigation } = this.props;
        navigation.navigate('ChatScreen', { receiver: item });
    }

    render() {
        const { visible } = this.state;
        return (
            <View style={styles.container}>
                <ActiveList onPress={this._showModal} onPressChat={this._onPressChat} />
                <Modal visible={visible} onDismiss={this._hideModal}>
                    <Card style={{ marginHorizontal: 30 }}>
                        <FeatureInDev />
                    </Card>
                </Modal>
            </View>
        );
    }
}
