import React, { Component } from 'react';
import { View } from 'react-native';
import FeatureInDev from '@components/FeatureInDev'
import styles from './styles';

export default class PeopleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FeatureInDev />
            </View>
        );
    }
}
