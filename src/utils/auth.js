const Auth = {
  bearerAuthHeader(key) {
    return `Bearer ${key}`;
  },

  authHeader(accessToken, userAgent) {
    return {
      'Content-Type': 'application/json',
      'Authorization': Auth.bearerAuthHeader(accessToken),
      'User-Agent': userAgent,
    };
  }
}

module.exports = Auth;