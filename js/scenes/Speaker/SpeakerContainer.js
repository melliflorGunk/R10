import React, { Component } from 'react';

import Loader from '../../components/Loader';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        if (this.state.isLoading) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Speaker />
            );
        }
    }
}

export default SpeakerContainer;