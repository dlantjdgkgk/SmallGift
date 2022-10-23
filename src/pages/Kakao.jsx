import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ReactLoading from "react-loading";
import { kakaoLogIn } from "../redux/_action/user_action";
import { LoaderWrap } from "./style";
import { axiosKakaoLogin } from "../api/oAuth/kakaoOAuth";

const Kakao = (props) => {
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies([]);
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    code: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    let params = new URL(document.URL).searchParams;
    let newCode = params.get("code");
    console.log(newCode);
    setPayload({ ...payload, code: newCode });

    axiosKakaoLogin(newCode).then((response) => {
      console.log(response);
    });
    //    if (response.payload.success) {
    //      navigate("/");
    //      setCookies("token", `Bearer ${response?.headers?.data?.token}`);
    //    } else {
    //      console.log(response.msg);
    //      navigate("/");
    //    }
    // });
  }, []);

  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoaderWrap>
  );
};

export default Kakao;
