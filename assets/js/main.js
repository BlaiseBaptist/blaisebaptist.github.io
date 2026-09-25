let h1 = document.querySelectorAll("h1")
for (let elm of h1) {
    elm.innerHTML += "char"
}
//debuggign class regex awesome
let normalizePath = (path) => path.replace(/\/index\.html$/, "/")
let currentPath = normalizePath(window.location.pathname)

for (let link of document.querySelectorAll("header a")) {
    let linkPath = normalizePath(new URL(link.href, document.baseURI).pathname)

    if (linkPath === currentPath) {
        link.removeAttribute("href")
        link.setAttribute("aria-current", "page")
        link.setAttribute("aria-disabled", "true")
        link.classList.add("current-page")
    }
}