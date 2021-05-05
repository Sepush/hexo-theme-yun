function initPjax() {
  new Pjax({
    selectors: ["title", ".js-Pjax", "main", "aside"],
  });
}

/**
 * 使用 PJAX 成功时触发
 */
function onPjaxSuccess() {
  isHome();
  Yun.utils.renderKatex();
}

/**
 * 判断是否为主页，以决定是否显示侧边栏
 */
function isHome() {
  if (window.location.pathname === CONFIG.root) {
    document.body.classList.add("is-home");
  } else {
    document.body.classList.remove("is-home");
  }
}

document.addEventListener("DOMContentLoaded", initPjax);
document.addEventListener("DOMContentLoaded", isHome);
document.addEventListener("pjax:success", onPjaxSuccess);
