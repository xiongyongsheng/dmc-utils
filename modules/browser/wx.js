export function isWeiXin() {
  return navigator.userAgent.includes("MicroMessenger");
}
export function isQYWeiXin() {
  return navigator.userAgent.includes("wxwork");
}
export function wxAuth({
  appId,
  corpId,
  agentId,
  redirectUri,
  qyRedirectUri,
  state,
  scope = "snsapi_base",
  oauth2 = "https://open.weixin.qq.com/connect/oauth2/authorize",
  responseType = "code",
  urlSearch = location.search,
} = {}) {
  // 是否是微信环境
  if (isWeiXin()) {
    // 是否是企业微信环境
    const isWXWork = isQYWeiXin();
    if (!state) {
      const urlParams = new URLSearchParams(urlSearch);
      state = urlParams.get("state") || "STATE";
    }
    redirectUri = encodeURIComponent(isWXWork ? qyRedirectUri : redirectUri);
    location.replace(
      `${oauth2}?appid=${
        isWXWork ? corpId : appId
      }&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&agentid=${agentId}&state=${state}#wechat_redirect`
    );
    return Promise.resolve("Location.replace success!");
  } else {
    return Promise.reject("Non-WeChat environment!");
  }
}
