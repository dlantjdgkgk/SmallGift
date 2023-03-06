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




#### 공지사항

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
