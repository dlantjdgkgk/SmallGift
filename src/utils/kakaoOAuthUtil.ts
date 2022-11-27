const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_KEY = process.env.REACT_APP_REDIRECT_KEY;

export const kakaOauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_KEY}&response_type=code`;
