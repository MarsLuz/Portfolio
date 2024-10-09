document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('top').textContent = 'Welcome to the Forum';
});

let postCount = 0;

function postFunction() {
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        return;
    }

    postCount++;
    
    switch (postCount) {
        case 1:
            document.getElementById('topic').textContent = message;
            break;
        case 2:
            document.getElementById('reply1').textContent = message;
            break;
        case 3:
            document.getElementById('reply2').textContent = message;
            break;
    }
    
    document.getElementById('message').value = ''; 
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('top').textContent = 'Welcome to the Forum';
});

function clearFunction() {
    document.getElementById('topic').textContent = '';
    document.getElementById('reply1').textContent = '';
    document.getElementById('reply2').textContent = '';
    document.getElementById('message').value = '';
    postCount = 0; 
}