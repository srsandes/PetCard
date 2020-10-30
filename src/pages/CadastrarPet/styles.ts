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

export const CreateAccountButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
    margin-left: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    margin-top: 120px;
`;

export const ErrorText = styled.Text`
    color: red;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-end;
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
    margin-top: -60px;
`;

export const ContainerForm = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

export const ContentForm = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;

export const Voltar = styled.TouchableOpacity`
    margin-top: 50px;
    display: flex;
    width: 100%;
    align-items: flex-start;
`;