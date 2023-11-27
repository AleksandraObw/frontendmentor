const shareButton = document.getElementById('share')
const floatingMenu = document.getElementById('floating-menu')

shareButton.addEventListener('click', event => {
    event.preventDefault()
    floatingMenu.classList.toggle('hidden')
    shareButton.classList.toggle('active')
})
