const REST_API_KEY = "a865c4442f6a8a5ad97d0b11c0d1e379";
const REDIRECT_KEY = process.env.REACT_APP_REDIRECT_KEY;

export const kakaOauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_KEY}&response_type=code`;
