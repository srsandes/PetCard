import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, BotaoTexto} from './styles';

interface BtnProps extends TouchableOpacityProps {
    name?: string;
}

const Button: React.FC<BtnProps> = ({children, ...rest}) => {
    return (
        <Container {...rest} >
            <BotaoTexto>{children}</BotaoTexto>
        </Container>
    )
}

export default Button;