const usernameForm = document.querySelector('.username-form');
    usernameInput = document.querySelector('.username-input');
    usernameDiv = document.querySelector('.username-div');
    usernameSpan = document.querySelector('.username-span');

function usernameFormSubmit(event) {
    event.preventDefault();
    const usernameInputValue = usernameInput.value;
    if(usernameInputValue === null) {
        alert('값이 입력되지 않았습니다.')
    } else {
        localStorage.setItem('username', usernameInputValue);
        showUsername(usernameInputValue);
    }
}

function usernameInputEnterPress(event) {
    if(event.keyCode === 13) {
        usernameForm.submit();
    }
}

function showUsername(username) {
    usernameForm.classList.remove('showing');
    usernameForm.classList.add('not-showing');
    usernameDiv.classList.remove('not-showing');
    usernameDiv.classList.add('showing');
    usernameSpan.innerText = username;
}

function getUsername() {
    const username = localStorage.getItem('username');
    if(username === null) {
        usernameForm.addEventListener('submit', usernameFormSubmit);
        usernameInput.addEventListener('keypress', usernameInputEnterPress);
    } else {
        showUsername(username);
    }
}

function init() {
    getUsername();
}
init();