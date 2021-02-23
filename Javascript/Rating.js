function selectItem (event) {
    var stars = document.getElementsByClassName("active")

    if (stars.length > 0) {
        for(i=0;i<stars.length;i++) {
            stars[i].classList.remove("active")
        }
    }

    event.target.classList.add("active")
    
}