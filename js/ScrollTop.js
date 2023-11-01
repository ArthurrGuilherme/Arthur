window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.BalaoScroll')
        scroll.classList.toggle('active', window.scrollY > 200)
})