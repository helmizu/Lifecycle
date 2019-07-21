import React, { Component } from 'react';
import { FlatList } from 'react-native';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

import { users } from '../../assets/fake_data';

export default class ActiveList extends Component {
    _onPress = item => {
        const { onPress } = this.props;
        onPress(item)
    }

    _onPressChat = item => {
        const { onPressChat } = this.props;
        onPressChat(item)
    }
    
    renderItem = ({ item }) => {
        return <UserItem item={item} onPress={this._onPress} onPressChat={this._onPressChat} />;
    };

    render() {
        return (
            <FlatList
                data={users.results}
                renderItem={this.renderItem}
                keyExtractor={item => item.login.uuid}
            />
        );
    }
}

ActiveList.propTypes = {
    onPressChat: PropTypes.func,
    onPress: PropTypes.func
};

ActiveList.defaultProps = {
    onPressChat: () => {},
    onPress: () => {}
};
