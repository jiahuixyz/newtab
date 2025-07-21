//js
import "./data/imgData.js";
import "./data/mottoData.js";
import "./js/util.js";
import "./js/index.js";
import "./js/gist.js";
import "./js/wallpaper.js";
import "./js/motto.js";
//css
import "./css/index.css"
import "./css/note.css"

// 注册 serviceWorker
// 处理兼容性问题
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("sw 注册成功");
      })
      .catch(() => {
        console.error("sw 注册失败");
      });
  });
}