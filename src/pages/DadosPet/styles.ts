import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #237A79;
    margin-top: 20px;
    margin-bottom: 30px;
    font-weight: bold;
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
    margin-top: -50px;
`;

export const Voltar = styled.TouchableOpacity`
    margin-top: -150px;
    display: flex;
    width: 100%;
    align-items: flex-start;
`;

export const NomePet = styled.Text`
    font-size: 18px;
    color: #163B39;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const TextoInfo = styled.Text`
    font-size: 18px;
    font-weight: 400;
`;
