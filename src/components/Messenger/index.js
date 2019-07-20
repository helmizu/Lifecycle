import React, { Component } from 'react';
import {
    View,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList
} from 'react-native';
import { Modal, Card, Title, Paragraph, Button, Avatar, Text } from 'react-native-paper';
import Toolbar from './Toolbar';
import BubbleChat from './BubbleChat';
import InputModule from './InputModule';
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
]
const user = 'me';

export default class Messenger extends Component {
    state = {
        visible: false
    }

    _showModal = () => this.setState({ visible: true });
    _hideModal = () => this.setState({ visible: false });

    onBackPress = () => {
        this.props.onBackPress();
    };

    dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    renderItem = ({ item, index }) => {
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
        return (
            <View style={{ flex: 1 }}>
                <Toolbar onBackPress={this.onBackPress} />
                <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
                    <FlatList
                        style={{ flex: 1, backgroundColor: "#fafbff" }}
                        data={message.reverse()}
                        renderItem={this.renderItem}
                        inverted
                        keyExtractor={(_item, index) => index.toString()}
                        initialNumToRender={20}
                    />
                </TouchableWithoutFeedback>
                <Modal visible={visible} onDismiss={this._hideModal}>
                    <Card style={{ margin: 10 }}>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                        <Card.Content>
                            <Text>Card title</Text>
                            <Text>Card content</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button onPress={this._hideModal}>Cancel</Button>
                            <Button onPress={this._hideModal}>Ok</Button>
                        </Card.Actions>
                    </Card>
                </Modal>
                <InputModule onPressAdd={this._showModal} />
                {Platform.OS === 'ios' && <KeyboardSpacer />}
            </View>
        );
    }
}
