# smallGift

<div align='center'>

```
 소상공인들을 위한 e쿠폰 서비스 플랫폼 😋
```

  <br>
  
[🗳️ smallGift 홈페이지](https://smallGift.pages.dev/)
  
</div>

## 🧑‍💻 프로젝트 소개

### 1️⃣ 가게 관리 서비스

![image](https://user-images.githubusercontent.com/79708688/231369440-e305c771-15aa-405c-b35d-405213746ac7.png)
<br>
<br>
![image](https://user-images.githubusercontent.com/79708688/231369578-3ddbafb2-0750-429b-b732-8e5f2c0494b7.png)
<br>
<br>
![image](https://user-images.githubusercontent.com/79708688/231370090-23146ce3-b770-4cbe-8c9b-39ff3ad757ad.png)



- 사장님은 사업자 등록을 통해 자신의 가게를 등록할 수 있다.
- 상품을 등록할 수 있다
- 자신의 가게 매출을 확인할 수 있다
- 자신의 가게 상품을 관리할 수 있다.


<br>

### 2️⃣ 카테고리별 질문 등록 서비스

어떠한 유형의 질문인지 카테고리를 설정하고 같이 등록해보세요!

<br>


<br>

## 🏠 배포주소

주소 : https://smallgift.pages.dev

<br>
  
  ## 🗳️ 목차

1. [🖥️ 프로젝트 화면](#%EF%B8%8F-프로젝트-화면)
2. [🛠️ 사용 기술](#%EF%B8%8F-사용-기술)
3. [🗂️ 프로젝트 구조](#%EF%B8%8F-프로젝트-구조)
4. [📜 트러블 슈팅](#-트러블-슈팅)

    <br>

# 🖥️ 프로젝트 화면

## 1️⃣ 메인

![Animation](https://user-images.githubusercontent.com/79708688/231338965-72246fd1-63e5-4396-9e19-ecfecead4dcd.gif)

# 🛠️ 사용 기술

## 💻 Web Languages / Libraries

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white)

![ReactRouterDom](https://img.shields.io/badge/React%20Router%20DOM-4A154B.svg?style=for-the-badge&logo=react&logoColor=white) ![Suspense](https://img.shields.io/badge/Suspense-1A2C34.svg?style=for-the-badge&logo=react&logoColor=white)

![StyledComponents](https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
<br>

## 🗂️ 프로젝트 구조

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
 ┃ ┃ ┣ 📜Kakao.tsx
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

## 📜 트러블 슈팅

[📜이슈 목록](https://www.notion.so/4d7ac5b9af814d369a3dc95edd4e88c5)

<br>