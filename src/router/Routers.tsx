import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { lazy, Suspense } from "react";
import Cancellation from "components/Cancellation/CancellationList/CancellationList";
import CancellationDetail from "components/Cancellation/CancellationDetail/CancellationDetail";
import ChangeMemberInfo from "components/MyPage/ChangeMemberInfo/ChangeMemberInfo";

const Main = lazy(() => import("pages/Main"));
const Category = lazy(() => import("pages/Category"));
const Search = lazy(() => import("pages/Search"));
const MyPage = lazy(() => import("pages/MyPage/MyPage"));
const Payment = lazy(() => import("pages/Payment/Payment"));
const Restaurant = lazy(() => import("pages/Restaurant"));
const SearchShop = lazy(() => import("components/Search/SearchShopPage/SearchShopPage"));

const LogIn = lazy(() => import("pages/Login/Login"));
const Kakao = lazy(() => import("pages/Login/Kakao"));
const OrderListCoupon = lazy(() => import("components/MyPage/OrderListCoupon/OrderListCoupon"));

const BottomNav = lazy(() => import("components/Common/BottomNav/BottomNav"));
const Header = lazy(() => import("components/Common/Header/Header"));
const ScrollTop = lazy(() => import("components/Common/ScrollTop/ScrollTop"));
const PaymentCheck = lazy(() => import("components/Payment/PaymentCheck/PaymentCheck"));
const OrderList = lazy(() => import("components/MyPage/OrderList/OrderList"));
const NotFound = lazy(() => import("components/NotFound/NotFound"));
const ChoiceProduct = lazy(() => import("components/MyPage/ChoiceProductList/ChoiceProduct"));
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
                    <Restaurant />
                  </Suspense>
                }
              />
              <Route
                path="/mypage"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<MyPage />} />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/orderlist"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<OrderList />} />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/orderlist/coupon/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<OrderListCoupon />} />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/like"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<ChoiceProduct />} />
                  </Suspense>
                }
              />
              <Route
                path="/payment/check"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<PaymentCheck />} />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/refund"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<Cancellation />} />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/refund/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<CancellationDetail />} />
                  </Suspense>
                }
              />
              <Route
                path="/mypage/modify"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute element={<ChangeMemberInfo />} />
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
                  <PrivateRoute element={<Payment />} />
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
                  <PrivateRoute element={<Search />} />
                </Suspense>
              }
            />
            <Route
              path="/search/shop/:id"
              element={
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute element={<SearchShop />} />
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
