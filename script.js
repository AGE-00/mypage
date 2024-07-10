window.onload = function () {
  document.getElementById("spread").animate(
    {
      height: 0,
      opacity: 0.1
    },
    {
      fill: "forwards",
      duration: 1000,
      easing: "ease-in"
    }
  );
};
