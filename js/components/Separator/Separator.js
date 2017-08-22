import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { styles } from './styles';

const Separator = () => (
    <View style={styles.border} />
);

Separator.propTypes = {

};

export default Separator;