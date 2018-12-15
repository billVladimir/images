import qs from 'qs';

const CLIENT_ID = '7145fbb1b2671b2';
//const CLIENT_SECRET = '969b57537f6073cb263e77e9bbe231f3bb75a43b';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
        querystring)}`;
  },
};