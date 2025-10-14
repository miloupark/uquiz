import { create } from "zustand";
import { persist } from "zustand/middleware";
import { formatDateTime } from "../utils/date";

// 🧩 useResultStore: 퀴즈 결과를 관리하는 스토어
const useResultStore = create(
  // persist로 감싸면 새로고침해도 데이터가 localStorage에 남는다.
  persist(
    (set) => ({
      results: [],

      // 결과 추가 함수
      addRanking: (nickname, score, id) =>
        set((state) => ({
          results: [
            ...state.results,
            {
              id: id ?? crypto.randomUUID(), // 고유 ID 생성
              nickname,
              score,
              playedAt: formatDateTime(),
            },
          ],
        })),

      // 전체 결과 초기화 함수
      resetResults: () => set({ results: [] }),
    }),

    // persist option
    { name: "result-scores" } // localStorage key
  )
);

export default useResultStore;
