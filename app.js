//ServiceWorker registration begin

if ("serviceWorker" in navigator) {
  console.log("Service worker supported!");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Service Worker Registered!"))
      .catch((err) => console.log("Service Worker: Error: ${err}"));
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    var button = document.querySelector(".install-btn");
    button.removeAttribute("hidden");
    button.addEventListener("click", () => {
      event.prompt();
      button.setAttribute("hidden", true);
    });
  });
}

//sw.js reg. end
