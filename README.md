# UQuiz?

- [GitHub](https://github.com/miloupark/uquiz)
- [Study Log](https://binyard.me/OZ/llog/uquiz.html)
- [React-Hot-Toast](https://react-hot-toast.com/)
- [npm React-Hot-Toast](https://www.npmjs.com/package/react-hot-toast)

<br>

<details>
<summary>🛤️ 라우팅 설정</summary>
<br>

| 주소                | 컴포넌트 | 컨텐츠                   |
| ------------------- | -------- | ------------------------ |
| `/`                 | Home     | 닉네임 설정 페이지(메인) |
| `/quiz/:nickname`   | Quiz     | 퀴즈 풀이 페이지         |
| `results/:nickname` | Results  | 결과 페이지              |

</details>

<details>
<summary>👥 닉네임 설정 페이지 구현</summary>
<br>

- [x] React 컴포넌트를 활용하여 `Home` 컴포넌트에 닉네임 설정 페이지를 구현합니다.
- [x] `Home` 컴포넌트에서는 닉네임을 입력받는 페이지를 구성합니다.
- [x] 사용자는 닉네임을 입력할 수 있는 입력창과 `시작하기` 버튼을 통해 퀴즈를 시작할 수 있습니다.
- [x] 닉네임을 입력하지 않은 상태에서 `시작하기` 버튼을 누를 경우, 닉네임 입력은 필수임을 알리는 경고창이 표시됩니다.
- [x] 닉네임을 정상적으로 입력한 경우, `/quiz/닉네임` 형식의 경로로 라우팅되며 퀴즈 화면으로 이동합니다

<br>

### 단계별로 구현하기

1. `Home.jsx` 파일을 생성하고, `Home` 컴포넌트를 정의합니다.
2. 컴포넌트 내에 페이지 제목(UQuiz), 닉네임 입력창, 시작하기 버튼을 구성합니다.
3. `useState`를 사용하여 닉네임 입력값을 관리할 상태 변수를 생성합니다.
4. 닉네임 입력창에 `onChange` 이벤트를 연결하여, 입력값이 변경될 때 상태를 업데이트하는 함수를 작성합니다.
5. `시작하기` 버튼 클릭 시, 닉네임 입력 여부를 조건으로 다음과 같이 처리합니다:
   - 닉네임이 입력되지 않은 경우: `닉네임을 입력해주세요.`라는 경고창(alert)을 띄웁니다.
   - 닉네임이 입력된 경우: `/quiz/(입력된 닉네임)` 경로로 페이지를 라우팅합니다.

</details>

<details>
<summary>📝 퀴즈 풀이 페이지 구현</summary>
<br>

- 퀴즈 풀이 페이지에서는 한 번에 하나의 문제만 사용자에게 표시됩니다.
- 선택지는 단일 선택만 가능하도록 구성하여, 사용자가 하나의 보기만 선택할 수 있게 합니다.
- `다음` 버튼을 눌렀을 때,
  - 선택한 보기가 있을 경우: 다음 문제로 넘어갑니다.
  - 선택하지 않았을 경우: `선택지를 선택해주세요.`라는 경고창을 띄웁니다.
- 문제를 넘길 때마다 선택 상태는 초기화되어, 이전 선택이 유지되지 않도록 처리합니다.

<br>

### 단계별로 구현하기

1. `Quiz.jsx` 파일을 생성하고, `Quiz` 컴포넌트를 정의합니다.
2. 컴포넌트 내에 문제 텍스트, 선택지 버튼, 다음 버튼을 구성합니다.
3. `useState`를 사용하여 다음과 같은 상태를 관리합니다:
   - `currentIndex`: 현재 문제 번호
   - `selectedOption`: 사용자가 선택한 보기 인덱스
   - `answerCounts` : 사용자가 정답을 맞춘 경우
4. 퀴즈 데이터는 외부 파일(`quizData.js`) 등에서 불러와 `currentIndex`에 해당하는 문제만 화면에 렌더링합니다.
5. 선택지를 클릭하면 `selectedOption` 상태가 해당 보기로 변경되도록 이벤트 핸들러를 작성합니다.
6. `다음` 버튼 클릭 시 다음과 같이 처리합니다:
   - `selectedOption`이 없으면 `선택지를 선택해주세요.`라는 경고창을 띄웁니다.
   - `selectedOption`이 있다면 `currentIndex`를 1 증가시켜 다음 문제를 보여주고, `selectedOption`은 초기화합니다.
   - 문제 답과 선택된 값을 비교하여 `answerCounts`를 1씩 증가시킵니다.
7. 마지막 문제 이후에는 사용자의 닉네임과 점수를 Context에 저장하고 결과 화면(`/results/닉네임`)으로 이동합니다.

</details>
<details>
<summary>📊 결과 페이지 구현</summary>
<br>

- `Result` 컴포넌트에서는 퀴즈가 종료된 후, 사용자의 결과 및 전체 랭킹 정보를 보여주는 페이지를 구성합니다.
- 페이지 진입 시, 현재 사용자 닉네임과 점수를 랭킹 데이터에 등록합니다.
- 화면에는 아래와 같은 정보가 출력됩니다:
  - 현재 사용자의 닉네임과 점수
  - 전체 사용자 중 상위 점수를 기준으로 정렬된 Top 랭킹 리스트
- `다시하기` 버튼을 통해 홈(`/`)으로 이동할 수 있어야 합니다.

<br>

### 단계별로 구현하기

1. `Result.jsx` 파일을 생성하고, `Result` 컴포넌트를 정의합니다.
2. `useContext`를 통해 `RankingContext`로부터 사용자 정보 및 랭킹 관련 상태와 함수를 가져옵니다.
3. `useEffect`를 활용해 컴포넌트 마운트 시 `addRanking(nickname, score)`를 실행하여 랭킹에 현재 사용자 정보를 등록합니다.
4. 닉네임과 점수를 화면에 표시하고, `rankingList`를 점수 기준으로 정렬해 상위 랭킹을 출력합니다.
5. `useNavigate`를 사용하여 “다시하기” 버튼 클릭 시 홈으로 이동하는 기능을 구현합니다.

</details>
<details>
<summary>🚀 배포하기</summary>
<br>

배포에 적합한 Vercel, Netlify 등의 서비스 또는 GitHub Pages, AWS, Firebase Hosting 등을 활용해 배포할 수 있습니다

</details>
<details>
<summary>🎣 Custom Hooks를 활용한 로직 분리하기</summary>
<br>

- React에서는 `useState`, `useEffect` 등 기본 Hook 외에도, 직접 만든 로직 재사용용 Hook인 Custom Hook을 정의할 수 있습니다.
- Custom Hook을 사용하면 로직과 UI를 분리하고, 중복되는 코드나 복잡한 상태 관리를 더 깔끔하게 정리할 수 있습니다.
- 기존 컴포넌트의 로직 중, 상태 관리, 이벤트 처리, 비즈니스 로직 등을 Custom Hook으로 분리해보세요.
- UI 렌더링 로직은 컴포넌트에 유지하고, 로직은 Hook으로 이동하는 것을 목표로 합니다.
- Custom Hook은 `use`로 시작하는 함수 이름으로 정의하고, 필요한 값(상태, 함수 등)을 반환해보세요.
</details>
<details>
<summary>⚠️ 404 NotFound 페이지 구현</summary>
<br>

- 사용자가 잘못된 URL로 접근했을 때, 친절하게 안내해주는 404 Not Found 페이지를 구현해보세요.
- 404 페이지는 사용자 경험을 향상시키고, 서비스의 완성도를 높이는 데 중요한 요소입니다.
- 유효하지 않은 경로에 접근했을 때 렌더링되는 404 페이지 컴포넌트를 작성합니다.
- `react-router-dom`의 `Routes` 구성에서, 마지막에 `<Route path="*">`를 활용하여 모든 예외 경로를 404 페이지로 연결하세요.
- 404 페이지에는 다음과 같은 내용을 포함하고 있습니다.
- `"찾을 수 없는 페이지입니다"` 또는 `"존재하지 않는 경로입니다"`와 같은 안내 문구
- 홈으로 돌아가는 버튼 또는 링크
</details>
