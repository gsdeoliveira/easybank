body = document.querySelector("body")
burger_icon = document.querySelector(".burger-icon")
burger_container = document.querySelector(".burger-container")
burger_navigation = document.querySelector(".burger-navigation")
menu_desktop = document.querySelector(".top nav")
menu_desktop_btn = document.querySelector(".top a.button")


burger_icon.addEventListener("click", () => {
    burger_svg = document.querySelector(".burger-icon svg.icon")

    if (burger_svg.getAttribute("burger") == 'close') {
        body.style.overflow = 'hidden'
        burger_icon.innerHTML = '<svg burger="open" class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>'
        burger_container.style.opacity = '.5'
        burger_navigation.style.display = 'flex'
    }

    else {
        
        body.style.overflow = 'auto'
        burger_icon.innerHTML = '<svg burger="close" class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>'
        burger_container.style.opacity = '0'
        burger_navigation.style.display = 'none'
    }

})
