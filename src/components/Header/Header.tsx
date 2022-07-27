import * as Styled from "./style";

const Header = () => {
  return (
    <>
      <Styled.HeaderWrapper>
        <div className="logo">Logo</div>
        <div>
          <button type="button">Mys</button>
        </div>
      </Styled.HeaderWrapper>
      <Styled.Navbar />
    </>
  );
};

export default Header;
