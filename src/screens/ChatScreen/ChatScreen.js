import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import ChatMessenger from '@components/Messenger';

export default class ChatScreen extends Component {
    state = {
        receiver: {}
    }

    componentDidMount() {
        this._loadReceiver()
    }

    _loadReceiver = async () => {
        const receiver = await _.get(this.props.navigation.state, 'params.receiver', {});
        this.setState({ receiver });
    };

    _onBackPress = () => {
        this.props.navigation.goBack();
    };

    render() {
        const { receiver } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ChatMessenger receiver={receiver} onBackPress={this._onBackPress} />
            </View>
        );
    }
}
