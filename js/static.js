
//search container content
const glass = '\u{1F50D}';
console.log(glass);
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
    searchSubmit.setAttribute('value', glass);
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
    modalContainer.style.display = 'none';
const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
const modalCloseBtn = document.createElement('button');
    modalCloseBtn.innerHTML = '<strong>X</strong>';
    modalCloseBtn.setAttribute('type', 'button');
    modalCloseBtn.setAttribute('id', 'modal-close-btn');
    modalCloseBtn.setAttribute('class', 'modal-close-btn');
    modalCloseBtn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
const modalInfoContainer = document.createElement('div');
    modalInfoContainer.setAttribute('class', 'modal-info-container');

const modalBtnContainer = document.createElement('div');
    modalBtnContainer.setAttribute('class', 'modal-btn-container');
const prevBtn = document.createElement('button');
    prevBtn.setAttribute('type', 'button');
    prevBtn.setAttribute('id', 'modal-prev');
    prevBtn.setAttribute('class', 'modal-prev btn');
    prevBtn.textContent = 'Prev';
const nextBtn = document.createElement('button');
    nextBtn.setAttribute('type', 'button');
    nextBtn.setAttribute('id', 'modal-next');
    nextBtn.setAttribute('class', 'modal-next btn');
    nextBtn.textContent = 'Next';

// <div class="modal-btn-container">
//     <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
//     <button type="button" id="modal-next" class="modal-next btn">Next</button>
// </div>


gallery.parentNode.insertBefore(modalContainer, gallery.nextSibling);
modalContainer.appendChild(modal);
modalContainer.appendChild(modalBtnContainer);
modal.appendChild(modalCloseBtn);
modal.appendChild(modalInfoContainer);
modalBtnContainer.appendChild(prevBtn);
modalBtnContainer.appendChild(nextBtn);



