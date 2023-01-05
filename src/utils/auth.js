const Auth = {
  bearerAuthHeader(key) {
    return `Bearer ${key}`;
  },

  authWithBasicHeader(accessToken, userAgent, contentType) {
    return {
      'Content-Type': contentType,
      'Authorization': Auth.bearerAuthHeader(accessToken),
      'User-Agent': userAgent,
    };
  }
}

module.exports = Auth;