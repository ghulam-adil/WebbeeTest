import React, { useState } from 'react';
import { View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';

import styles from './styles';

const DropdownButton = ({ title, onSelectItem, options }) => {
    const [visible, setVisible] = useState(false);

    const handleOnSelect = (value) => {
        if (onSelectItem) {
            onSelectItem(value);
        }
    }

    return (
        <View style={styles.container}>
            <DropDown
                label={title}
                mode="outlined"
                visible={visible}
                showDropDown={() => setVisible(true)}
                onDismiss={() => setVisible(false)}
                value={title}
                setValue={handleOnSelect}
                list={options}

            />
        </View>
    );
};

export default DropdownButton;
