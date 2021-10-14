const url = require("url");
//const axios = require("axios");
const axios = require("axios-https-proxy-fix"); 
const { URL } = url;
const { verifyJwtToken } = require("./jwt_verify");

// const validReferOrigin = "http://sso.ankuranand.com:3010";
// const ssoServerJWTURL = "http://sso.ankuranand.com:3010/simplesso/verifytoken";
const validReferOrigin = "https://wowgo.io";
const ssoServerJWTURL = "https://wowgo.io/simplesso/verifytoken";

const ssoRedirect = () => {
  return async function(req, res, next) {
    console.log('ssssssssssssssssssssoooooooooooooooooo')
    // check if the req has the queryParameter as ssoToken
    // and who is the referer.
    const { ssoToken } = req.query;
    if (ssoToken != null) {
      console.log('token ', ssoToken)
      // to remove the ssoToken in query parameter redirect.
      const redirectURL = url.parse(req.url).pathname;

      console.log('redirect url', redirectURL)
      
      const proxy = {
        host: 'https://wowgo.io',
        port: '2053'
      };
      
      try {
        const response = await axios.get(
          `${ssoServerJWTURL}?ssoToken=${ssoToken}`,
          {
            headers: {
              Authorization: "Bearer l1Q7zkOL59cRqWBkQ12ZiGVW2DBL"
            }
          }, { proxy }
        );
        //resolve(data)
      } catch (error) {
        console.log('eeeeeeeeeeeeeeeeeeee', error.response) 
        //reject(error)
      }

        
       

       console.log('ddddddddddddddddd', response.data);

        const { token } = response.data;
        const decoded = await verifyJwtToken(token);
        // now that we have the decoded jwt, use the,
        // global-session-id as the session id so that
        // the logout can be implemented with the global session.
        req.session.user = decoded;
       console.log('session session', req.session.user)
      

      return res.redirect(`${redirectURL}`);
    }

    return next();
  };
};

module.exports = ssoRedirect;

