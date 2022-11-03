import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Cancellation from "components/Cancellation/Cancellation";
import CancellationDetail from "components/CancellationDetail/CancellationDetail";
import ChangeMemberInfo from "components/ChangeMemberInfo/ChangeMemberInfo";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const Main = lazy(() => import("pages/Main"));
const Category = lazy(() => import("pages/Category"));
const Search = lazy(() => import("pages/Search"));
const MyPage = lazy(() => import("pages/MyPage"));
const Payment = lazy(() => import("pages/Payment"));
const Alert = lazy(() => import("pages/Alert"));
const CategoryDetail = lazy(() => import("pages/CategoryDetail"));
const ChangePwd = lazy(() => import("pages/ChangePwd"));

const LogIn = lazy(() => import("pages/Login"));
const Kakao = lazy(() => import("pages/Kakao"));
const Naver = lazy(() => import("pages/Naver"));
const FindID = lazy(() => import("pages/FindID"));
const FindPassword = lazy(() => import("pages/FindPassword"));
const FindPasswordAfter = lazy(() => import("pages/FindPasswordAfter"));

const BottomNav = lazy(() => import("components/BottomNav/BottomNav"));
const Header = lazy(() => import("components/Header/Header"));
const ScrollTop = lazy(() => import("components/Header/ScrollTop/ScrollTop"));
const PaymentCheck = lazy(() => import("components/PaymentCheck/PaymentCheck"));
const OrderList = lazy(() => import("components/OrderList/OrderList"));
const NotFound = lazy(() => import("components/NotFound/NotFound"));
const ChoiceProduct = lazy(() => import("components/ChoiceProduct/ChoiceProduct"));
const Spinner = lazy(() => import("elements/Spinner"));

const Routers = (): JSX.Element => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <ScrollTop>
          <Routes>
            <Route element={<Header />}>
              <Route element={<BottomNav />}>
                <Route path="/" element={<Main />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category/:id" element={<CategoryDetail />} />
                <Route path="/mypage" element={<PrivateRoute element={<MyPage />} />} />
                <Route path="/mypage/orderlist" element={<PrivateRoute element={<OrderList />} />} />
                <Route path="/mypage/like" element={<PrivateRoute element={<ChoiceProduct />} />} />
                <Route path="/payment/check" element={<PrivateRoute element={<PaymentCheck />} />} />
                <Route path="/mypage/refund" element={<PrivateRoute element={<Cancellation />} />} />
                <Route path="/mypage/refund/:id" element={<PrivateRoute element={<CancellationDetail />} />} />
                <Route path="/mypage/modify" element={<PrivateRoute element={<ChangeMemberInfo />} />} />
                <Route path="/change/password" element={<PrivateRoute element={<ChangePwd />} />} />
              </Route>
            </Route>

            <Route element={<Header />}>
              <Route path="/payment" element={<PrivateRoute element={<Payment />} />} />
              <Route path="/auth/kakao/callback" element={<PublicRoute element={<Kakao />} />} />
              <Route path="/auth/naver/callback" element={<PublicRoute element={<Naver />} />} />
              <Route path="/login" element={<PublicRoute element={<LogIn />} />} />
              <Route path="/find/id" element={<PublicRoute element={<FindID />} />} />
              <Route path="/find/password" element={<PublicRoute element={<FindPassword />} />} />
              <Route path="/find/password/after" element={<PublicRoute element={<FindPasswordAfter />} />} />
            </Route>
            <Route element={<BottomNav />}>
              <Route path="/search" element={<Search />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollTop>
      </Router>
    </Suspense>
  );
};

export default Routers;
