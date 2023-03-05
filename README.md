# smallGift

## 🧑‍💻 프로젝트 소개

소상공인들을 위한 e쿠폰 서비스 플랫폼 😋

<br>

## 🏠 배포주소

주소 : [smallGift](https://smallgift.pages.dev/)

<br>
  <br>

## 🎰 기능 소개

<br>

개발 완성 및 예정 기능 목록 : [기능 목록](https://github.com/soohyun-dev/Randomly/wiki/%EB%A7%8C%EB%93%A0-%EA%B8%B0%EB%8A%A5-%EB%AA%A9%EB%A1%9D)

<br>

### 1. 질문 랜덤 분배

- 면접 질문을 랜덤으로 각 팀원들에게 골고루 분배해주는 기능
- 각 팀원은 자신에게 부여된 질문을 확인할 수 있다.

<img src="https://user-images.githubusercontent.com/81623931/215723339-c5df4423-7865-4439-a9f5-dfbfb24ed1df.png" width="800" height="400"/>
<img src="https://user-images.githubusercontent.com/81623931/215723636-c77ee672-1b01-4bc6-9a87-bd5a3ec2193c.png" width="800" height="400"/>

<br>

### 2. 질문 생성, 수정, 삭제 기능

- 스터디에 활용할 질문을 질문 리스트에 등록할 수 있다.
- 질문 리스트에 등록된 질문을 수정할 수 있다.
- 질문 리스트에 등록된 질문을 삭제할 수 있다.

<img src="https://user-images.githubusercontent.com/81623931/215789486-34a0d541-d882-42c9-b7f1-918e1ceb5b44.png" width="800" height="400"/>

<br>

### 3. 참여자 생성, 수정, 삭제 기능

- 스터디에 참여할 참여자를 등록할 수 있다.
- 참여자 리스트에 등록된 참여자 이름을 수정할 수 있다.
- 참여자 리스트에 등록된 참여자를 삭제할 수 있다.

<img src="https://user-images.githubusercontent.com/81623931/215791138-e9c0a19b-797c-445d-929c-8c174f9a9f6e.png" width="800" height="400"/>

<br>

### 4. 로그인, 로그아웃 기능

- 본 서비스에 로그인을 할 수 있다.
- 로그인 방법은 구글 로그인과 자체 이메일,비밀번호 로그인이다.
- 로그인 정보는 새로고침을 해도 유지된다.
- 로그아웃을 하면 로그인한 정보가 사라진다.

<br>

### 5. Q&A 페이지 기능

<br>

#### 공지사항

<br>

<img src="https://user-images.githubusercontent.com/81623931/217126904-63f59cc3-1a21-4185-baa8-9a3930524eae.png" width="800" height="350"/>

<br>

- 해당 페이지에서 본 서비스의 공지사항 글을 확인할 수 있다.
- 공지사항 글은 관리자로 지정된 유저만 글을 올리고 수정하고 삭제할 수 있다.
  <br>

#### Q&A

- Q&A 페이지 에서는 본 서비스를 이용하는 유저가 관리자에게 질문을 남길 수 있다.
  <br>

#### 남길 말

- 본 서비스에 로그인 한 유저는 남길 말 페이지를 통해 자유로운 글을 남길 수 있다.
  <br>

## 🛠️ 사용 기술

- React
- TypeScript
- CSS in JS (Styled-Components)
- CloudFlare                                                   |
<br>

## 패키지 구조

<pre>
📦src
 ┣ 📂Components
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜LoginBox.tsx
 ┃ ┣ 📂ManageInterview
 ┃ ┃ ┣ 📜ManageQuestion.tsx
 ┃ ┃ ┣ 📜MangageUser.tsx
 ┃ ┃ ┣ 📜QuestionTable.tsx
 ┃ ┃ ┣ 📜types.ts
 ┃ ┃ ┗ 📜UserTable.tsx
 ┃ ┣ 📂Memo
 ┃ ┃ ┗ 📜Memo.tsx
 ┃ ┣ 📂Notice
 ┃ ┃ ┣ 📜Notice.tsx
 ┃ ┃ ┣ 📜NoticeList.tsx
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂Q&A
 ┃ ┃ ┣ 📜Comment.tsx
 ┃ ┃ ┣ 📜QA.tsx
 ┃ ┃ ┣ 📜QAComment.tsx
 ┃ ┃ ┣ 📜QAList.tsx
 ┃ ┃ ┣ 📜types.ts
 ┃ ┃ ┗ 📜WriteComment.tsx
 ┃ ┣ 📂StopWatch
 ┃ ┃ ┗ 📜Stopwatch.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┗ 📜Nav.tsx
 ┣ 📂features
 ┃ ┗ 📜userSlice.js
 ┣ 📂Hooks
 ┣ 📂Page
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜login.tsx
 ┃ ┣ 📂Manage
 ┃ ┃ ┣ 📜Manage.tsx
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂MyPage
 ┃ ┃ ┗ 📜Mypage.tsx
 ┃ ┣ 📂Notice
 ┃ ┃ ┣ 📜NoticePosting.tsx
 ┃ ┃ ┣ 📜types.ts
 ┃ ┃ ┗ 📜WriteNotice.tsx
 ┃ ┣ 📂Play
 ┃ ┃ ┣ 📜PlayInterview.tsx
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂Q&A
 ┃ ┃ ┣ 📜QAPage.tsx
 ┃ ┃ ┣ 📜QAPosting.tsx
 ┃ ┃ ┗ 📜WriteQA.tsx
 ┃ ┗ 📜Main.tsx
 ┣ 📂store
 ┃ ┗ 📜store.js
 ┣ 📂Utils
 ┃ ┣ 📜getTime.tsx
 ┃ ┗ 📜MakeNums.tsx
 ┣ 📜App.tsx
 ┣ 📜firebase.tsx
 ┣ 📜GlobalStyle.tsx
 ┗ 📜index.tsx
</pre>

<br>

## 개발 기록

[📜이슈 목록](https://github.com/soohyun-dev/Randomly/issues?q=is%3Aissue+is%3Aclosed)

<br>
