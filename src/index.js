{
  ("use strict");
  // const num = "大吉";

  const num = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];

  const target = document.getElementById("target");
  let random = Math.floor(Math.random() * num.length);

  target.addEventListener("click", () => {
    target.textContent = num[random];
  });

  target.addEventListener("mousedown", () => {
    target.className = "pushed";
  });

  target.addEventListener("mouseup", () => {
    target.className = "";
  });
}
