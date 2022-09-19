import { useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(37.62197524055062, 127.16017523675508);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      let link = "http://www.naver.com/";
      window.open(link);
    });
  };

  return <div id="map" style={{ width: "100%", height: "144px" }} />;
};

export default KakaoMap;
