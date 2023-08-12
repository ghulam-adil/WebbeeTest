import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

import styles from './styles';

const CustomTextInput: React.FC<TextInputProps> = (props) => {
    return (
        <TextInput
            {...props}
            mode="outlined"
            style={[styles.textInput, props?.style]}
        />
    )
}

export default CustomTextInput;