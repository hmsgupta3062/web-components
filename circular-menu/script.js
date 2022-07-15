function menu_open_func() {
    document.getElementById('menu-button').classList.add('menu-close');
    document.querySelectorAll('.menu-item').forEach((element, index) => {
        element.classList.add('menu-item-' + (index + 1))
    });
}

function menu_close_func() {
    document.getElementById('menu-button').classList.remove('menu-close');
    document.querySelectorAll('.menu-item').forEach((element, index) => {
        element.classList.remove('menu-item-' + (index + 1))
    });
}

function menu_toggle_func() {
    document.getElementById('menu-button').classList.toggle('menu-close');
    document.querySelectorAll('.menu-item').forEach((element, index) => {
        element.classList.toggle('menu-item-' + (index + 1))
    });
}