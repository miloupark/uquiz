import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { formatDateTime } from '../utils/date';

// 🐻 Zustand 스토어 (퀴즈 결과 히스토리)
// 1. 닉네임별 퀴즈 결과를 저장
// 2. 각 시도는 {nickname, score, playedAt} 형태로 attempts 배열에 쌓기
// 3. 동일 닉네임이 사용된다면?
// - 구분을 퀴즈 제출 시간으로
// - 덮어쓰기/누적은 고려하지 않음

const useResultStore = create(
  persist(
    (set) => ({
      results: [],

      // 결과 저장
      addResult: (nickname, score) =>
        set((state) => ({
          results: [
            ...state.results,
            { nickname, score, playedAt: formatDateTime() },
          ],
        })),

      // 결과 초기화
      resetResults: () => set({ results: [] }),
    }),
    { name: 'result-scores' } // localStorage key
  )
);

export default useResultStore;
