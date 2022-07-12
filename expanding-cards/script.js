document.getElementById('ec-container').addEventListener('mouseover', (event) => {
    event.target.classList.add('ec-active');
});

document.getElementById('ec-container').addEventListener('mouseout', (event) => {
    event.target.classList.remove('ec-active');
});