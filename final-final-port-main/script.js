function myFunction() {
    document.getElementById("skillsDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        dropdowns.map(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            };
        })
    }
}

/*
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var btnanimation = document.getElementsByClassName("dropbtn");
        btnanimation.map(btnrotate =>{
            if (btnrotate.classList.contains('dropbtn-active')) {
                btnrotate.classList.remove('dropbtn-active');
            };
        })
    }
}
*/