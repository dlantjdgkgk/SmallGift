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


### 1. 질문 랜덤 분배



<img src="https://user-images.githubusercontent.com/81623931/215723339-c5df4423-7865-4439-a9f5-dfbfb24ed1df.png" width="800" height="400"/>
<img src="https://user-images.githubusercontent.com/81623931/215723636-c77ee672-1b01-4bc6-9a87-bd5a3ec2193c.png" width="800" height="400"/>

<br>

### 2. 질문 생성, 수정, 삭제 기능



<img src="https://user-images.githubusercontent.com/81623931/215789486-34a0d541-d882-42c9-b7f1-918e1ceb5b44.png" width="800" height="400"/>

<br>

### 3. 참여자 생성, 수정, 삭제 기능



<img src="https://user-images.githubusercontent.com/81623931/215791138-e9c0a19b-797c-445d-929c-8c174f9a9f6e.png" width="800" height="400"/>

<br>

### 4. 로그인, 로그아웃 기능



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

  <br>

#### 남길 말

- 
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
 ┣ 📂api
 ┃ ┣ 📂oAuth
 ┃ ┃ ┗ 📜kakaoOAuth.js
 ┃ ┗ 📜setting.ts
 ┣ 📂assets
 ┃ ┗ 📂img
 ┃ ┃ ┣ 📜Alarm.png
 ┃ ┃ ┣ 📜Arrow.png
 ┃ ┃ ┣ 📜ArrowBlack.png
 ┃ ┃ ┣ 📜Back.png
 ┃ ┃ ┣ 📜banner.png
 ┃ ┃ ┣ 📜BusinessHours.png
 ┃ ┃ ┣ 📜Cafe.png
 ┃ ┃ ┣ 📜CafeImage.png
 ┃ ┃ ┣ 📜Cancel.png
 ┃ ┃ ┣ 📜Chinese.png
 ┃ ┃ ┣ 📜food.png
 ┃ ┃ ┣ 📜foodThumbnail.png
 ┃ ┃ ┣ 📜Italy.png
 ┃ ┃ ┣ 📜Japan.png
 ┃ ┃ ┣ 📜Kakao.png
 ┃ ┃ ┣ 📜kakao_oauth.png
 ┃ ┃ ┣ 📜Korea.png
 ┃ ┃ ┣ 📜Like.png
 ┃ ┃ ┣ 📜Loading.png
 ┃ ┃ ┣ 📜Locate.png
 ┃ ┃ ┣ 📜LocateWhite.png
 ┃ ┃ ┣ 📜Logo.png
 ┃ ┃ ┣ 📜Message.png
 ┃ ┃ ┣ 📜naver_oauth.png
 ┃ ┃ ┣ 📜NotData.png
 ┃ ┃ ┣ 📜pageError.png
 ┃ ┃ ┣ 📜PhoneNumber.png
 ┃ ┃ ┣ 📜RestaurantInfo.png
 ┃ ┃ ┣ 📜RestaurantMenu.png
 ┃ ┃ ┣ 📜SelectArrow.png
 ┃ ┃ ┣ 📜shadow.png
 ┃ ┃ ┣ 📜Share.png
 ┃ ┃ ┣ 📜Success.png
 ┃ ┃ ┣ 📜Top.png
 ┃ ┃ ┗ 📜Whole.png
 ┣ 📂components
 ┃ ┣ 📂Category
 ┃ ┃ ┣ 📜CategoryPageSection.tsx
 ┃ ┃ ┣ 📜CategoryRestaurant.tsx
 ┃ ┃ ┣ 📜data.ts
 ┃ ┃ ┣ 📜SelectedCategory.tsx
 ┃ ┃ ┣ 📜style.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂BottomNav
 ┃ ┃ ┃ ┣ 📜BottomNav.tsx
 ┃ ┃ ┃ ┣ 📜data.ts
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂ScrollTop
 ┃ ┃ ┃ ┗ 📜ScrollTop.tsx
 ┃ ┣ 📂KakaoAPI
 ┃ ┃ ┣ 📂KakaoAdress
 ┃ ┃ ┃ ┗ 📜KakaoAdress.tsx
 ┃ ┃ ┣ 📂KakaoMap
 ┃ ┃ ┃ ┗ 📜KakaoMap.tsx
 ┃ ┃ ┗ 📂KakaoShare
 ┃ ┃ ┃ ┣ 📜GifticonShare.tsx
 ┃ ┃ ┃ ┣ 📜ProductShare.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂MainPageCategory
 ┃ ┃ ┃ ┣ 📜datas.ts
 ┃ ┃ ┃ ┣ 📜MainPageCategory.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂MainPageGifticon
 ┃ ┃ ┃ ┣ 📜MainPageGifticon.tsx
 ┃ ┃ ┃ ┣ 📜style.ts
 ┃ ┃ ┃ ┗ 📜types.ts
 ┃ ┃ ┗ 📂MainPageRestaurant
 ┃ ┃ ┃ ┣ 📜MainPageRestaurant.tsx
 ┃ ┃ ┃ ┣ 📜style.ts
 ┃ ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂AreaModal
 ┃ ┃ ┃ ┣ 📜AreaModal.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂CategoryModal
 ┃ ┃ ┃ ┣ 📜CategoryModal.tsx
 ┃ ┃ ┃ ┣ 📜style.ts
 ┃ ┃ ┃ ┗ 📜types.ts
 ┃ ┃ ┗ 📂Portal
 ┃ ┃ ┃ ┗ 📜Portal.tsx
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂CancellationDetail
 ┃ ┃ ┃ ┣ 📜CancellationDetail.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂CancellationList
 ┃ ┃ ┃ ┣ 📜CancellationList.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂ChangeMemberInfo
 ┃ ┃ ┃ ┣ 📜ChangeMemberInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂ChoiceProduct
 ┃ ┃ ┃ ┣ 📜ChoiceProduct.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂ChoiceProductList
 ┃ ┃ ┃ ┣ 📜ChoiceProductList.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂MemberInfo
 ┃ ┃ ┃ ┣ 📜MemberInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂OrderList
 ┃ ┃ ┃ ┣ 📜OrderList.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂OrderListCoupon
 ┃ ┃ ┃ ┣ 📜OrderListCoupon.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂RecentOrder
 ┃ ┃ ┃ ┣ 📜RecentOrder.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📜NotFound.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂Payment
 ┃ ┃ ┣ 📂PaymentCheck
 ┃ ┃ ┃ ┣ 📜PaymentCheck.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂ProductInfo
 ┃ ┃ ┃ ┣ 📜MenuType.ts
 ┃ ┃ ┃ ┣ 📜ProductInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂SenderInfo
 ┃ ┃ ┃ ┣ 📜SenderInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂Restaurant
 ┃ ┃ ┣ 📂RestaurantBestMenu
 ┃ ┃ ┃ ┣ 📜RestaurantBestMenu.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂RestaurantDetailInfo
 ┃ ┃ ┃ ┣ 📜RestaurantDetailInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂RestaurantInfo
 ┃ ┃ ┃ ┣ 📜RestaurantInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂RestaurantMenuInfo.tsx
 ┃ ┃ ┃ ┣ 📜RestaurantMenuInfo.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂RestaurantSection
 ┃ ┃ ┃ ┣ 📜RestaurantSection.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂Search
 ┃ ┃ ┣ 📂SearchPage
 ┃ ┃ ┃ ┣ 📜PopularSearch.tsx
 ┃ ┃ ┃ ┣ 📜SearchPage.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂SearchShopPage
 ┃ ┃ ┃ ┣ 📜RecommendActions.tsx
 ┃ ┃ ┃ ┣ 📜SearchShopPage.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📂SVG
 ┃ ┃ ┣ 📜AlarmSVG.tsx
 ┃ ┃ ┣ 📜BackSVG.tsx
 ┃ ┃ ┣ 📜LikeSVG.tsx
 ┃ ┃ ┗ 📜LoginSVG.tsx
 ┣ 📂constants
 ┃ ┣ 📜BottomNav.ts
 ┃ ┣ 📜Category.ts
 ┃ ┗ 📜selectList.ts
 ┣ 📂elements
 ┃ ┗ 📜Spinner.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useDaumPost.tsx
 ┣ 📂pages
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜Kakao.jsx
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📜MyPage.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂Payment
 ┃ ┃ ┣ 📜Payment.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📜Category.tsx
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜Restaurant.tsx
 ┃ ┗ 📜Search.tsx
 ┣ 📂router
 ┃ ┣ 📜PrivateRoute.tsx
 ┃ ┗ 📜Routers.tsx
 ┣ 📂styles
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜colors.ts
 ┃ ┃ ┗ 📜fonts.ts
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┣ 📜hookFormUtil.ts
 ┃ ┣ 📜isLogin.tsx
 ┃ ┣ 📜kakaoOAuthUtil.ts
 ┃ ┗ 📜throttle.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜theme.ts
</pre>

<br>

## 개발 기록

[📜이슈 목록]

<br>
