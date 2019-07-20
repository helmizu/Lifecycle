import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
      numberOfLines: 20
    };
    this._onLayout = this._onLayout.bind(this);
  }

  _onPress = item => {
    const { onPress } = this.props;
    return onPress(item);
  };

  _renderBubbleIn = () => {
    const { text, date } = this.props;
    const { readMore, numberOfLines } = this.state;
    return (
      <View>
        <View style={[styles.item, styles.itemIn]}>
          <View style={[styles.balloon, styles.balloonIn]}>
            <Text allowFontScaling={false}
              numberOfLines={numberOfLines}
              style={[styles.text, styles.textIn]}
              onLayout={this._onLayout}
              
            >
              {text}
            </Text>
            {readMore && (
              <Text allowFontScaling={false} style={styles.readMore} onPress={this._onPressReadMore}>
                {I18n.t('readMore')}
              </Text>
            )}
            {date && (
              <Text allowFontScaling={false} style={[styles.textTime, styles.textIn]}>
                {moment(date)
                  .local()
                  .format('HH:mm')}
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  _renderBubbleOut = () => {
    const { text, date } = this.props;
    const { readMore, numberOfLines } = this.state;
    return (
      <View>
        <View style={[styles.item, styles.itemOut]}>
          <LinearGradient
            start={{ x: -0.18, y: 1 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.27, 1]}
            colors={['#8f93fc', '#76b7fb', '#51b9fb']}
            style={[styles.balloon, styles.balloonOut]}
          >
              <Text allowFontScaling={false}
                numberOfLines={numberOfLines}
                style={[styles.text, styles.textOut]}
                onLayout={this._onLayout}
              >
                {text}
              </Text>
              {readMore && (
                <Text allowFontScaling={false} style={styles.readMore} onPress={this._onPressReadMore}>
                  {I18n.t('readMore')}
                </Text>
              )}
              {date && (
                <Text allowFontScaling={false} style={[styles.textTime, styles.textOut]}>
                  {moment(date)
                    .local()
                    .format('HH:mm')}
                </Text>
              )}
          </LinearGradient>
        </View>
      </View>
    );
  };

  _renderDate = () => {
    const { date } = this.props;
    if (!date) {
      return null;
    }
    return (
      <View style={[styles.item, styles.itemDate]}>
        <View style={[styles.balloon, styles.balloonDate]}>
          <Text allowFontScaling={false} style={[styles.textDate, styles.textOut]}>
            {moment(date)
              .local()
              .calendar(null, {
                sameDay: `[${I18n.t('today')}]`,
                lastDay: `[${I18n.t('yesterday')}]`,
                lastWeek: 'dddd, DD/MM/YYYY',
                sameElse: 'DD/MM/YYYY'
              })}
          </Text>
        </View>
      </View>
    );
  };

  _onLayout = ({
    nativeEvent: {
      layout: { height }
    }
  }) => {
    const { numberOfLines } = this.state;
    if (height >= 300 && !!numberOfLines) {
      this.setState({ readMore: true });
    }
  };

  _onPressReadMore = () => this.setState({ numberOfLines: 0, readMore: false });

  render() {
    const { messageOut, type = '' } = this.props;
    if (type === 'date') {
      return this._renderDate();
    }
    return !messageOut ? this._renderBubbleIn() : this._renderBubbleOut();
  }
}

Component.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  type: PropTypes.string,
  messageOut: PropTypes.bool
};

Component.defaultProps = {
  onPress: () => {},
  text: '',
  date: new Date(),
  type: '',
  messageOut: true
};
