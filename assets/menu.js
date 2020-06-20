document.querySelector('.menu_btn').onclick = () => {
    if (document.getElementById('menu').className === "") {
        document.getElementById('menu').classList.add('res_menu')
    }
    else {
        document.getElementById('menu').classList.remove('res_menu')
    }
}
window.addEventListener('resize', () => {
    if (document.getElementById('menu').className !== "") {
       

    document.getElementById('menu').classList.remove(document.getElementById('menu').classList) 
    }
})