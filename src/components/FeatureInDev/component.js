import React from 'react';
import { View, Image, Text } from 'react-native';
import IMAGES from '@config/images';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={IMAGES.build} />
        <Text style={styles.textStyleBold}>Feature in Development</Text>
        <Text style={styles.textStyles}>We will update and send further information if this feature is ready to use</Text>
      </View>
    );
  }
}
