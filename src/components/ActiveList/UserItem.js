import React, { Component } from 'react';
import { TouchableRipple, Avatar, IconButton, Card } from 'react-native-paper';
import _ from 'lodash';
import PropTypes from 'prop-types';
import AppStyles from '@config/styles';

export default class UserItem extends Component {
    shouldComponentUpdate(nextProps) {
        if (_.isEqual(this.props.item, nextProps.item)) {
            return false;
        }
        return true;
    }

    _onPress = () => {
        const { onPress, item } = this.props;
        onPress(item);
    };

    _onPressChat = () => {
        const { onPressChat, item } = this.props;
        onPressChat(item);
    }
    
    render() {
        const { name, picture } = this.props.item;
        return (
            <TouchableRipple
                onPress={this._onPress}
                rippleColor="rgba(0, 0, 0, .20)"
            >
                <Card.Title
                    title={name.first[0].toUpperCase() +
                        name.first.slice(1) +
                        ' ' +
                        name.last[0].toUpperCase() +
                        name.last.slice(1)}
                    // titleStyle={styles.userName}
                    left={(props) => <Avatar.Image {...props} source={{ uri: picture.thumbnail }} />}
                    right={(props) => <IconButton {...props} icon="chat" color={AppStyles.colors.accentColor} onPress={this._onPressChat} />}
                />
            </TouchableRipple>
        );
    }
}

UserItem.propTypes = {
    item: PropTypes.object,
    onPressChat: PropTypes.func,
    onPress: PropTypes.func
};

UserItem.defaultProps = {
    item: {},
    onPressChat: () => {},
    onPress: () => {}
};

