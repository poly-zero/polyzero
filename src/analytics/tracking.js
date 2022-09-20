import ReactGA from "react-ga4";

const pageTracking = (location) => {
  // Google Analytics 測定 ID を入力して設定
  ReactGA.initialize("G-5M2J27JMXQ");
  ReactGA.send({
    hitType: "pageview",
    // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
    page: location.pathname + location.search,
  });
};

const loginTracking = (method) => {
  ReactGA.initialize("G-5M2J27JMXQ");
  ReactGA.event("login", { method });
};

export { pageTracking, loginTracking };
