import React from 'react';
import {View, Text, Button} from 'react-native';

import styled from 'styled-components';

import HeaderBar from '../components/Global/HeaderBar';
import Palette from '../constants/Palette';

const HomeScreen = props => {
  return (
    <Container>
      <HeaderBar.leftCenter
        leadingAction={() => {
          props.navigation.goBack();
        }}
        leadingIcon={<Icons.arrowBack />}
        centerTitle="HomeScreen"
      />
      <Text>현재 입력한 계정의 ID는 {props.route.params.userId}입니다.</Text>
      <ButtonWrapper
        onPress={() => {
          props.navigation.navigate('test');
        }}>
        <ButtonText>다음 화면 이동</ButtonText>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.SafeAreaView``;
const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 50px;
  background-color: lightgray;
  align-items: center;
  padding: 40px;
  border-radius: 50px;
`;
const ButtonText = styled.Text`
  color: ${props => props.theme.colors.patientColor};
`;

export default HomeScreen;
