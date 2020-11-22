function submitForm(e) {
    alert('Form submitted Sucessfully');
    e.preventDefault();
}

function showMenu() {
    document.querySelector('.nav-items').style.display = 'flex';
    document.querySelector('.toggle').style.display = 'none';
    document.querySelector('.toggle-close').style.display = 'flex';
}

function hideMenu() {
    document.querySelector('.nav-items').style.display = 'none';
    document.querySelector('.toggle').style.display = 'flex';
    document.querySelector('.toggle-close').style.display = 'none';
}