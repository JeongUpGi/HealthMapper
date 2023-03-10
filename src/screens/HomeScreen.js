import React from 'react';
import {View, Text, Button} from 'react-native';

import styled from 'styled-components';

import HeaderBar from '../components/Global/HeaderBar';

const HomeScreen = props => {
  return (
    <Container>
      <HeaderBar.centerOnly centerTitle="HomeScreen" />
      <Text>This is a HomeScreen!</Text>
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
  color: black;
`;

export default HomeScreen;
