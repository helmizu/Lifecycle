import React, { Component } from 'react';
import { Platform, Image, StatusBar } from 'react-native';
import { Appbar, withTheme, Menu } from 'react-native-paper';
import PropTypes from 'prop-types';
import AppStyles from '@config/styles';
import metrics from '@config/metrics';
import FeatureInDev from '../../FeatureInDev';
import styles from './styles';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 32 : StatusBar.currentHeight;

class Toolbar extends Component {
    state = {
        visible: false,
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            StatusBar.setBarStyle('light-content');
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('rgba(0,0,0,0.26)');
        }
    }

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false });

    render() {
        const { onBackPress, theme, profile } = this.props;
        const { fonts } = theme;
        const { name: { first = 'john', last = 'doe' } = {}, picture: { thumbnail = 'https://randomuser.me/api/portraits/med/men/21.jpg' } = {} } = profile;
        const fullName = first[0].toUpperCase() + first.slice(1) +
            ' ' + last[0].toUpperCase() + last.slice(1)
        return (
            <Appbar.Header style={styles.toolbar} statusBarHeight={STATUS_BAR_HEIGHT}>
                <Appbar.BackAction color={AppStyles.colors.lightGrey} onPress={onBackPress} />
                <Image
                    source={{ uri: thumbnail }}
                    style={styles.avatar}
                />
                <Appbar.Content
                    title={fullName}
                    titleStyle={[
                        styles.titleStyle,
                        {
                            fontFamily: fonts.regular
                        }
                    ]}
                    subtitleStyle={[
                        styles.subtitleStyle,
                        {
                            fontFamily: fonts.light
                        }
                    ]}
                    subtitle={'Online'}
                />
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                        <Appbar.Action icon="more-vert" color={AppStyles.colors.lightGrey} onPress={this._openMenu} />
                    }
                    statusBarHeight={metrics.navBarHeight}
                    style={{ maxWidth: '90%' }}
                >
                    <FeatureInDev />
                </Menu>
            </Appbar.Header>
        );
    }
}

Toolbar.propTypes = {
    onBackPress: PropTypes.func,
    theme: PropTypes.object,
    profile: PropTypes.object
};

Toolbar.defaultProps = {
    onBackPress: () => { },
    theme: {},
    profile: {}
};

export default withTheme(Toolbar);
