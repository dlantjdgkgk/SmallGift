const CALLBACK_URL = "http://localhost:3000/auth/naver/callback";
const CLIENT_ID = "wNgJBlEnXSUxOciovgF2";
const STATE_STRING = "abc";
const CLIENT_SECRET = "z39F5QlH6O";

export const naverOauthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
