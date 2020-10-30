import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon: string; 
}

const Input: React.FC<InputProps> = ({name, icon,onBlur,...rest}) => (
        <Container>
            <Icon name={icon} size={20} color="#2F7A77"/>
            <TextInput 
            onBlur={onBlur}
            keyboardAppearance="dark"
            placeholderTextColor="#2F7A77"
            {...rest}
            />
        </Container>
)

export default Input;