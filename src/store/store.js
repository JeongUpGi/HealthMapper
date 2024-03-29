import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import hospitalSlice from './slices/hospitalSlice';
import reviewSlice from './slices/reviewSlice';
import healthSlice from './slices/healthSlice';

// redux 상태관리 store
const store = configureStore({
  reducer: {
    auth: authSlice, //사용자인증 states 및 actions
    hospital: hospitalSlice, //병원 조회 states 및 actions
    review: reviewSlice, //리뷰 등록, 조회 state 및 actions
    health: healthSlice, //사용자 건강기록 등록, 조회, 수정, 삭제 state 및 actions
  },
});

export default store;
