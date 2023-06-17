function getCookieValue(cookieName) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${cookieName}=`)) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null;
  }

  function parseJwtPayload(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = atob(base64);
      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  }
