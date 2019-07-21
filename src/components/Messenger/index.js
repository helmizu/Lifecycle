import React, { Component } from 'react';
import {
    View,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList
} from 'react-native';
import { Modal, Card } from 'react-native-paper';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import BubbleChat from './BubbleChat';
import InputModule from './InputModule';
import FeatureInDev from '../FeatureInDev';
import KeyboardSpacer from '../KeyboardSpacer';

const message = [
    {
        text: 'Hello',
        sender: 'me',
        receiver: 'you',
        date: new Date(),
        isRead: true
    },
    {
        text: 'Hei broo',
        sender: 'you',
        receiver: 'me',
        date: new Date(),
        isRead: true
    },
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        sender: 'you',
        receiver: 'me',
        date: new Date(),
        isRead: true
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sender: 'me',
        receiver: 'you',
        date: new Date(),
        isRead: true
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sender: 'me',
        receiver: 'you',
        date: new Date(),
        isRead: true
    }
].reverse()
const user = 'me';

export default class Messenger extends Component {
    state = {
        visible: false
    }

    _showModal = () => this.setState({ visible: true });

    _hideModal = () => this.setState({ visible: false });

    _onBackPress = () => {
        this.props.onBackPress();
    };

    _dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    _renderItem = ({ item, index }) => {
        const { date = '', sender = '', text = '', type = '' } = item;
        return (
            <View style={{ marginHorizontal: 5 }}>
                <BubbleChat
                    key={index}
                    type={type}
                    text={text}
                    date={date}
                    messageOut={sender === user}
                />
            </View>
        )
    };

    render() {
        const { visible } = this.state;
        const { receiver } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Toolbar profile={receiver} onBackPress={this._onBackPress} />
                <TouchableWithoutFeedback onPress={this._dismissKeyboard}>
                    <FlatList
                        style={{ flex: 1, backgroundColor: "#fafbff" }}
                        data={message}
                        renderItem={this._renderItem}
                        inverted
                        keyExtractor={(_item, index) => index.toString()}
                        initialNumToRender={20}
                    />
                </TouchableWithoutFeedback>
                <InputModule onPressAdd={this._showModal} />
                {Platform.OS === 'ios' && <KeyboardSpacer />}
                <Modal visible={visible} onDismiss={this._hideModal}>
                    <Card style={{ marginHorizontal: 30 }}>
                        <FeatureInDev />
                    </Card>
                </Modal>
            </View>
        );
    }
}

Messenger.propTypes = {
    onBackPress: PropTypes.func,
    receiver: PropTypes.object,
};

Messenger.defaultProps = {
    onBackPress: () => { },
    receiver: {},
};
