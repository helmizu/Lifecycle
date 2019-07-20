import React, { Component } from 'react';
import SplashScreen from './SplashScreen';

class SplashScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SplashScreen {...this.props} />;
    }
}

export default SplashScreenContainer;
