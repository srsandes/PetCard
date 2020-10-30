import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-top: -30px;
    width: 200px;
    height: 200px;
`;

export const Menu = styled.View`
    width: 100%;
    padding: 70px;
    height: 350px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MenuTexto = styled.Text`
    margin-top: 15px;
    font-weight: bold;
    font-size: 16px;
    color: #237A79;
`;

export const MenuContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`;

export const Voltar = styled.TouchableOpacity`
    margin-top: 50px;
    display: flex;
    width: 100%;
    left: 330px;
`;