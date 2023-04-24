import React, {useState, useEffect, useCallback} from 'react';
import {Dimensions, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components';
import HeaderBar from '../../../components/Global/HeaderBar';
import Icons from '../../../aseets/Global/Icons';

import SignupInputForm from '../../../components/Auth/SignupInputForm';
import ClassSelector from '../../../components/Auth/ClassSelector';
import AgreeTermsButtons from '../../../components/Auth/AgreeTermsButtons';
import {signUp} from '../../../store/slices/authSlice';

const {height} = Dimensions.get('window');

const SignupScreen = props => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userClass, setUserClass] = useState('');
  const [error, setError] = useState(null);
  const [isTotalAgree, setTotalAgree] = useState(false);
  const [isSignupActive, setSignupActive] = useState(true);

  const dispatch = useDispatch();

  //회원가입 핸들러
  const signupHandler = useCallback(async () => {
    setError(null);
    // 클라이언트에서 1차 검증
    if (!isTotalAgree || !userClass || !userId || !userPw || !userName) {
      setSignupActive(false);
      return Alert.alert('회원가입 실패', '경고문구를 확인해주시기 바랍니다', [
        {
          text: '확인',
        },
      ]);
    }
    try {
      await dispatch(signUp({userId, userPw, userName, userClass})).unwrap();
      return Alert.alert('회원가입 성공', '로그인 화면으로 이동합니다', [
        {
          text: '확인',
          onPress: () => props.navigation.navigate('login'),
        },
      ]);
    } catch (error) {
      setError(error.message);
    }
  }, [dispatch, isTotalAgree, userId, userPw, userName, userClass]);

  useEffect(() => {
    if (error) {
      Alert.alert('회원가입 실패', error, [
        {
          text: '확인',
        },
      ]);
      setSignupActive(false);
    }
  }, [error]);

  return (
    <Container>
      <HeaderBar.leftCenter
        leadingAction={() => {
          props.navigation.goBack();
        }}
        leadingIcon={<Icons.arrowBack />}
        centerTitle="회원가입"
      />
      <ScrollWrapper>
        <AuthWrapper>
          <ClassSelectForm>
            <FormTitle>권한</FormTitle>
            <ClassSelector
              isSelectedValue={userClass}
              setSelectedValue={setUserClass}
            />
          </ClassSelectForm>
          {(userClass === '') & !isSignupActive ? (
            <ErrorText>권한을 선택해주세요</ErrorText>
          ) : null}
          <SignupInputForm
            active={isSignupActive || userId}
            formTitle="아이디"
            autoCapitalize="none"
            placeholder="아이디를 입력해주세요."
            isPasswordForm={false}
            onChangeText={text => {
              setUserId(text);
            }}
          />
          {(userId === '') & !isSignupActive ? (
            <ErrorText>올바른 아이디를 입력해주세요</ErrorText>
          ) : null}
          <SignupInputForm
            active={isSignupActive || userPw}
            formTitle="패스워드"
            autoCapitalize="none"
            placeholder="비밀번호를 입력해주세요."
            isPasswordForm={true}
            onChangeText={text => {
              setUserPw(text);
            }}
          />
          {(userPw === '') & !isSignupActive ? (
            <ErrorText>올바른 비밀번호를 입력해주세요</ErrorText>
          ) : null}
          <SignupInputForm
            active={isSignupActive || userName}
            formTitle="닉네임"
            autoCapitalize="none"
            placeholder="닉네임을 입력해주세요."
            isPasswordForm={false}
            onChangeText={text => {
              setUserName(text);
            }}
          />
          {(userName === '') & !isSignupActive ? (
            <ErrorText>올바른 닉네임을 입력해주세요</ErrorText>
          ) : null}
          <AgreeTermsButtons
            onPressTextButton={value => {
              props.navigation.navigate('terms', {value});
              console.log(value);
            }}
            isTotalActive={isTotalAgree}
            setTotalActive={setTotalAgree}
            signUp={isSignupActive}
          />
          {!isTotalAgree & !isSignupActive ? (
            <ErrorText>전체 동의를 해주세요</ErrorText>
          ) : null}
          <SignupButtonWrapper activeOapcity={0.5} onPress={signupHandler}>
            <SignupButtonText>회원가입</SignupButtonText>
          </SignupButtonWrapper>
        </AuthWrapper>
      </ScrollWrapper>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;
const ScrollWrapper = styled.ScrollView``;
const AuthWrapper = styled.KeyboardAvoidingView`
  padding-horizontal: 30px;
  margin-top: ${height / 40}px;
  margin-bottom: ${height / 10}px;
`;
const ClassSelectForm = styled.View``;
const FormTitle = styled.Text`
  margin-top: ${height / 35}px;
  margin-vertical: 8px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  font-size: ${RFValue(15)}px;
`;

const SignupButtonWrapper = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.patientColor};
  justify-content: center;
  align-items: center;
  padding: 13px;
  border-radius: 30px;
  margin-top: ${height / 30}px;
`;
const SignupButtonText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: ${props => props.theme.colors.gray6};
`;
const ErrorText = styled.Text`
  color: ${props => props.theme.colors.alertColor};
  font-size: ${RFValue(12)}px;
`;
export default SignupScreen;