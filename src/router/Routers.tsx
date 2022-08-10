import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "pages/Main";
import Shop from "pages/Shop";
import Category from "pages/Category";
import Search from "pages/Search";
import MyPage from "pages/MyPage";
import RestaurantDetail from "pages/RestaurantDetail";
import BottomNav from "components/BottomNav/BottomNav";
import Header from "components/Header/Header";
import ScrollTop from "components/Header/ScrollTop/ScrollTop";
import Payment from "pages/Payment";
import PaymentCheck from "components/PaymentCheck/PaymentCheck";
import OrderList from "components/OrderList/OrderList";
import ChoiceProduct from "components/ChoiceProduct/ChoiceProduct";

const Routers = () => {
  return (
    <Router>
      <ScrollTop>
        <Routes>
          <Route element={<Header />}>
            <Route element={<BottomNav />}>
              <Route path="/" element={<Main />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/category" element={<Category />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/orderlist" element={<OrderList />} />
              <Route path="/mypage/like" element={<ChoiceProduct />} />
              <Route path="/restaurantdetail" element={<RestaurantDetail />} />
              <Route path="/payment/check" element={<PaymentCheck />} />
            </Route>
          </Route>
          <Route element={<Header />}>
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route element={<BottomNav />}>
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </ScrollTop>
    </Router>
  );
};

export default Routers;
