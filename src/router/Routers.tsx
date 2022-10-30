import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Cancellation from "components/Cancellation/Cancellation";
import CancellationDetail from "components/CancellationDetail/CancellationDetail";
import ChangeMemberInfo from "components/ChangeMemberInfo/ChangeMemberInfo";

const Main = lazy(() => import("pages/Main"));
const Category = lazy(() => import("pages/Category"));
const Search = lazy(() => import("pages/Search"));
const MyPage = lazy(() => import("pages/MyPage"));
const Payment = lazy(() => import("pages/Payment"));
const Alert = lazy(() => import("pages/Alert"));
const CategoryDetail = lazy(() => import("pages/CategoryDetail"));

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
                <Route path="/alert" element={<Alert />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/orderlist" element={<OrderList />} />
                <Route path="/mypage/like" element={<ChoiceProduct />} />
                <Route path="/payment/check" element={<PaymentCheck />} />
                <Route path="/mypage/refund" element={<Cancellation />} />
                <Route path="/mypage/refund/:id" element={<CancellationDetail />} />
                <Route path="/mypage/modify" element={<ChangeMemberInfo />} />
              </Route>
            </Route>
            <Route element={<Header />}>
              <Route path="/payment" element={<Payment />} />
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
