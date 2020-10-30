import {FontAwesome5} from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background: #ABFBF7;
    border-radius: 10px;
    margin-bottom: 8px;
    padding: 0 16px;

    flex-direction: row;

    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #237A79;
    font-size: 16px;

`;

export const Icon = styled(FontAwesome5)`
    margin-right: 16px;
`;