import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { lazy, Suspense } from "react";
import Cancellation from "components/Cancellation/Cancellation";
import CancellationDetail from "components/CancellationDetail/CancellationDetail";
import ChangeMemberInfo from "components/ChangeMemberInfo/ChangeMemberInfo";

const Main = lazy(() => import("pages/Main"));
const Category = lazy(() => import("pages/Category"));
const Search = lazy(() => import("pages/Search"));
const MyPage = lazy(() => import("pages/MyPage"));
const Payment = lazy(() => import("pages/Payment"));
const CategoryDetail = lazy(() => import("pages/CategoryDetail"));
const SearchShop = lazy(() => import("pages/SearchShop"));

const LogIn = lazy(() => import("pages/Login"));
const Kakao = lazy(() => import("pages/Kakao"));
const OrderListCoupon = lazy(() => import("components/OrderListCoupon/OrderListCoupon"));

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
    <Router>
      <ScrollTop>
        <Routes>
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Header />
              </Suspense>
            }
          >
            <Route
              element={
                <Suspense fallback={<Spinner />}>
                  <BottomNav />
                </Suspense>
              }
            >
              <Route
                path="/"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Main />
                  </Suspense>
                }
              />
              <Route
                path="/category"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Category />
                  </Suspense>
                }
              />
              <Route
                path="/category/:id/:id/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <CategoryDetail />
                  </Suspense>
                }
              />
              <Route
                path="/mypage"
                element={
                  <Suspense fallback={<Spinner />}>
                    <MyPage />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/orderlist"
                element={
                  <Suspense fallback={<Spinner />}>
                    <OrderList />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/orderlist/coupon/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <OrderListCoupon />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/like"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ChoiceProduct />
                  </Suspense>
                }
              />
              <Route
                path="/payment/check"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PaymentCheck />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/refund"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Cancellation />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/refund/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <CancellationDetail />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/modify"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ChangeMemberInfo />
                  </Suspense>
                }
              />

              <Route
                path="*"
                element={
                  <Suspense fallback={<Spinner />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Header />
              </Suspense>
            }
          >
            <Route
              path="/payment"
              element={
                <Suspense fallback={<Spinner />}>
                  <Payment />
                </Suspense>
              }
            />
            <Route
              path="/auth/kakao/callback"
              element={
                <Suspense fallback={<Spinner />}>
                  <Kakao />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Spinner />}>
                  <LogIn />
                </Suspense>
              }
            />
          </Route>
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <BottomNav />
              </Suspense>
            }
          >
            <Route
              path="/search"
              element={
                <Suspense fallback={<Spinner />}>
                  <Search />
                </Suspense>
              }
            />
            <Route
              path="/search/shop/:id"
              element={
                <Suspense fallback={<Spinner />}>
                  <SearchShop />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ScrollTop>
    </Router>
  );
};

export default Routers;
