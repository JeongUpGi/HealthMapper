import React, {useEffect, useState} from 'react';
import {FlatList, Image, Dimensions} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import styled from 'styled-components';
import HeaderBar from '../../../components/Global/HeaderBar';
import Icons from '../../../aseets/Global/Icons';

import HospitalCard from '../../../components/NormalUser/Hospital/HospitalCard';

const {height, width} = Dimensions.get('window');

//추후 병원DB의 위도, 경도로 대체
const testData = [
  {
    id: 1,
    name: '병원 1',
    latitude: 37.46142658,
    longitude: 127.12667541,
  },
  {
    id: 2,
    name: '병원 2',
    latitude: 37.46142777,
    longitude: 127.1299999,
  },
];

const HospitalListScreen = props => {
  //바텀탭 높이
  const bottomTabHeight = useBottomTabBarHeight();
  //병원 정보 (병원 리스트 및 그에 따른 정보_ 현재위치로부터의 거리, 병원위도, 병원경도 포함)
  const healthArr = useSelector(state => state.hospital.healthArr);
  const userLatitude = useSelector(state => state.hospital.userLatitude);
  const userLongitude = useSelector(state => state.hospital.userLongitude);

  const [currentPosition, setCurrentPosition] = useState(null);

  //useEffect를 사용해 병원 리스트 스크린 진입 시 사용자 위치 가져오기(비동기)
  useEffect(() => {
    setCurrentPosition({
      latitude: userLatitude,
      longitude: userLongitude,
    });
  }, []);

  return (
    <Container>
      <HeaderBar.leftCenter
        leadingAction={() => {
          props.navigation.goBack();
        }}
        leadingIcon={<Icons.arrowBack />}
        centerTitle="병원 리스트"
      />
      {/*지도에 현재 위치 표시*/}

      {currentPosition && (
        <HospitalMap
          provider={PROVIDER_GOOGLE}
          region={{
            //현재 내위치를 기준으로 지도 렌더링
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker //현재 내위치
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
          />
          {healthArr.map(
            (
              data, //추후 병원 위도,경도 얻어오면 배열로 렌더링
            ) => (
              <Marker
                key={data.id}
                coordinate={{
                  latitude: data.hLatitude,
                  longitude: data.hLongitude,
                }}
                title={data.name}
                description={data.department}
                onPress={() => console.log(data)}>
                <Image
                  source={require('../../../aseets/Hospital/hospitalMarker.png')}
                  style={{width: 30, height: 30}}
                />
              </Marker>
            ),
          )}
        </HospitalMap>
      )}

      <HospitalListWrapper bottomTabHeight={bottomTabHeight}>
        <FlatList
          data={healthArr}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <HospitalCard
              hospitalName={itemData.item.name}
              hospitalBodyPart={itemData.item.part}
              hospitalDepartment={itemData.item.department}
              hospitalAddress={itemData.item.address}
              onSelectHospital={() => {
                props.navigation.navigate('hospitalDetail', {
                  selectedHospital: itemData.item,
                });
              }}
            />
          )}
        />
      </HospitalListWrapper>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

const HospitalMap = styled(MapView)`
  width: ${width}px;
  height: ${height / 2.5}px;
`;
const HospitalListWrapper = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export default HospitalListScreen;
