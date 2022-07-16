import { Route } from "react-router";
import { lazy, Suspense } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Routers from "router/Routers";

const App = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default App;
