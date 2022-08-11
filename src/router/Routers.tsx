import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "pages/SignUp";
import LogIn from "pages/Login";
import Kakao from "pages/Kakao";
import Naver from "pages/Naver";
import Find from "pages/Find";
import Main from "pages/Main";
import Shop from "pages/Shop";
import Category from "pages/Category";
import Search from "pages/Search";
import MyPage from "pages/MyPage";
import CategoryRestaurant from "pages/CategoryRestaurant";
import BottomNav from "components/BottomNav/BottomNav";
import Header from "components/Header/Header";
import ScrollTop from "components/ScrollTop/ScrollTop";

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
              <Route path="/categoryRestaurant" element={<CategoryRestaurant />} />
            </Route>
          </Route>
          <Route element={<BottomNav />}>
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth/kakao/callback" element={<Kakao />} />
          <Route path="/auth/naver/callback" element={<Naver />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/find" element={<Find />} />
        </Routes>
      </ScrollTop>
    </Router>
  );
};

export default Routers;
