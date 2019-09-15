
//search container content
const searchContainer = document.querySelector('.search-container');
const searchForm = document.createElement('form');
    searchForm.setAttribute('action', '#');
    searchForm.setAttribute('method', 'get');
const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'search');
    searchInput.setAttribute('id', 'search-input');
    searchInput.setAttribute('class', 'search-input');
    searchInput.setAttribute('placeholder', 'Search...');
const searchSubmit = document.createElement('input');
    searchSubmit.setAttribute('type', 'submit');
    searchSubmit.setAttribute('value', '&#x1F50D;');
    searchSubmit.setAttribute('id', 'search-submit');
    searchSubmit.setAttribute('class', 'search-submit');

searchContainer.appendChild(searchForm);
searchForm.appendChild(searchInput);
searchForm.appendChild(searchSubmit);


//gallery content
const gallery = document.querySelector('#gallery');


//modal
const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class', 'modal-container');
const modalCloseBtn = document.createElement('button');
    modalCloseBtn.innerHTML = '<strong>X</strong>';
    modalCloseBtn.setAttribute('type', 'button');
    modalCloseBtn.setAttribute('id', 'modal-close-btn');
    modalCloseBtn.setAttribute('class', 'modal-close-btn');
const modalInfoContainer = document.createElement('div');
    modalInfoContainer.setAttribute('class', 'modal-info-container');
gallery.parentNode.insertBefore(modalContainer, gallery.nextSibling);
modalContainer.appendChild(modalCloseBtn);
modalContainer.appendChild(modalInfoContainer);


