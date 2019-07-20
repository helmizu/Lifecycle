import React, { Component } from 'react';
import { View, TextInput, Keyboard, Platform } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '@config/styles';
import styles from './styles';

export default class InputModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.keyboardDidShowListener = Keyboard.addListener(
                'keyboardWillShow',
                this._keyboardDidShow
            );
            this.keyboardDidHideListener = Keyboard.addListener(
                'keyboardWillHide',
                this._keyboardDidHide
            );
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'ios') {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
    }

    _keyboardDidShow = () => {
        this.setState({
            keyboardShown: true
        });
    };

    _keyboardDidHide = () => {
        this.setState({
            keyboardShown: false
        });
    };

    render() {
        const { onPressAdd } = this.props;
        return (
            <View
                style={
                    this.state.keyboardShown
                        ? styles.customContainer
                        : styles.container
                }
            >
                <TouchableRipple
                    borderless
                    onPress={onPressAdd}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={styles.btn}
                >
                    <Icon
                        size={30}
                        color={AppStyles.colors.accentColor}
                        name="add"
                    />
                </TouchableRipple>
                <TouchableRipple
                    borderless
                    onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={styles.btn}
                >
                    <Icon size={24} color={AppStyles.colors.grey} name="mic" />
                </TouchableRipple>
                <TextInput
                    label="text"
                    value={this.state.text}
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    underlineColorAndroid="transparent"
                    multiline
                    placeholder="Type a message"
                />
                <TouchableRipple
                    borderless
                    onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={styles.btnSend}
                >
                    <Icon
                        size={20}
                        color={AppStyles.colors.white}
                        name="send"
                    />
                </TouchableRipple>
            </View>
        );
    }
}
