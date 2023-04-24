# smallGift

<div align='center'>

```
 소상공인들을 위한 e쿠폰 서비스 플랫폼 😋
```
</div>

## 🏠 배포주소

주소 : https://smallgift.pages.dev

<br>
  
  ## 🗳️ 목차
1. [🧑‍💻 프로젝트 소개](#%EF%B8%8F-프로젝트-소개)
2. [🖥️ 프로젝트 시연 영상](#%EF%B8%8F-프로젝트-시연-)
3. [🛠️ 사용 기술](#%EF%B8%8F-사용-기술)
4. [🗂️ 프로젝트 구조](#%EF%B8%8F-프로젝트-구조)
5. [📜 트러블 슈팅](#-트러블-슈팅)

    <br>

# 🧑‍💻 프로젝트 소개

### 1️⃣ 가게 관리 서비스

![image](https://user-images.githubusercontent.com/79708688/231369440-e305c771-15aa-405c-b35d-405213746ac7.png)
<br>
<br>
<br>
<br>
![image](https://user-images.githubusercontent.com/79708688/231369578-3ddbafb2-0750-429b-b732-8e5f2c0494b7.png)
<br>
<br><br>
<br>
![image](https://user-images.githubusercontent.com/79708688/231370090-23146ce3-b770-4cbe-8c9b-39ff3ad757ad.png)
<br>
<br><br>
<br>
![image](https://user-images.githubusercontent.com/79708688/231371249-e322d5b9-4e45-472e-a602-94c0b0a1fe49.png)
<br>
<br>

- 사장님은 사업자 `등록`을 통해 자신의 가게를 `등록`할 수 있다.
- 상품을 `등록`할 수 있다
- 자신의 `가게 매출`을 확인할 수 있다
- 자신의 `가게 상품`을 관리할 수 있다.

<br>

### 2️⃣ e쿠폰 서비스
![image](https://user-images.githubusercontent.com/79708688/232657826-bf2b3332-3938-4d88-94a1-9c870b72d7d6.png)
<br>
<br>
- `카테고리별`, `지역구별`, `지역별`로 `가게 검색`이 가능하다
- 지역별 인기있는 `기프티콘`을 볼 수 있다
- `지역 설정을` 통한 `가게 검색`이 가능하다
<br>
<br>

![image](https://user-images.githubusercontent.com/79708688/232658031-fb46a0ed-63a8-4921-87a5-8603ad62f4ae.png)
<br>
<br>
- 원하는 `가게의 메뉴`를 다른 사용자들에게 `공유`가 가능하다
- 가게의 `원하는 메뉴`를 다른 사람에게 `선물 및 찜`이 가능하다.
<br>
<br>

![image](https://user-images.githubusercontent.com/79708688/232658213-909e7dcd-58f2-470c-b85b-3f693378132b.png)
<br>
<br>
- 메뉴를 구입한 후 `쿠폰 번호`를 통해 `기프티콘`을 사용할 수 있다.
- 음식 `키워드`를 통해 `가게 검색`이 가능하다
- `마이페이지`에서 `정보 수정`이 가능하다
- `최근 주문 내역`, `찜한 상품`, `취소/환불내역`을 볼 수 있다.

<br>
<br>

# 🖥️ 프로젝트 시연 영

## 1️⃣ 메인

![Animation](https://user-images.githubusercontent.com/79708688/231338965-72246fd1-63e5-4396-9e19-ecfecead4dcd.gif)

## 2️⃣ 가게페이지 및 결제 페이지

![촬영2](https://user-images.githubusercontent.com/79708688/232289740-27e53296-45e2-48b2-bf5c-3cc4cb5a3756.gif)

## 3️⃣ 검색 페이지

![촬영23](https://user-images.githubusercontent.com/79708688/232290184-cf4d4826-b5ba-4cd7-acc6-797c196fb92b.gif)

## 4️⃣ 마이 페이지

![촬영234](https://user-images.githubusercontent.com/79708688/232310522-90edc36a-625c-46d1-a730-970b881c595b.gif)

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

[📜이슈 목록](https://laced-ironclad-2c9.notion.site/655b855e150c4557a142e79d3276bd5a)

<br>
