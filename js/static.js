/**
 * Create elements that will not be recreated or deleted due
 * to user interaction to the site;
 * also select elements for ease of referencing 
 */

/**
 * add the search bar elements, along with attributes
 * required for styling
 */
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
    searchSubmit.setAttribute('value', '\u{1F50D}');
    searchSubmit.setAttribute('id', 'search-submit');
    searchSubmit.setAttribute('class', 'search-submit');

searchContainer.appendChild(searchForm);
searchForm.appendChild(searchInput);
searchForm.appendChild(searchSubmit);


/**
 * selects the gallery for future references
 */
const gallery = document.querySelector('#gallery');


/**
 * add the modal elements with required attributes for styling;
 * also add functionalities to buttons to close and navigate from
 * one employee info modal to the next
 */

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
    }); //hides the modal when clicked
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

gallery.parentNode.insertBefore(modalContainer, gallery.nextSibling);
modalContainer.appendChild(modal);
modalContainer.appendChild(modalBtnContainer);
modal.appendChild(modalCloseBtn);
modal.appendChild(modalInfoContainer);
modalBtnContainer.appendChild(prevBtn);
modalBtnContainer.appendChild(nextBtn);

/**
 * react by displaying previous visible employee on the modal on click;
 * skips previous hidden employee with the prevVisible function (useful
 * when the user opens modal after filtering)
 */
prevBtn.addEventListener('click', () => {
    const cardList = document.querySelectorAll('div.card');
    const modalEmail = modalInfoContainer.children[2].textContent; //extracts the email on the modal
    let modalCard;
    for(let i=0; i<cardList.length; i++) {
        const curCard = cardList[i];
        const cardEmail = curCard.children[1].children[1].textContent; //extracts the email of the current card being review
        if(modalEmail === cardEmail) {
            modalCard = curCard;//matching the modal with employee card
            break;
        }
    };

    let newModalCard = modalCard.previousElementSibling;
    prevVisible = () => {
        if(newModalCard === null) {
            return modalCard; //when modal is already displaying the first visible employee
        } else if (newModalCard.style.display === 'none') {
            newModalCard = newModalCard.previousElementSibling; //previous employee card is hidden, so look for the "pre-previous" one
            return prevVisible();
        } else {
            return newModalCard; //previous employee card is available and visible
        }
    }
    newModalCard = prevVisible();
    newModalCard.click(); //simulate the click on the previous visible card
})


/**
 * similar to the handler above, it displays next visible employee
 * information on the modal
 */
nextBtn.addEventListener('click', () => {
    const cardList = document.querySelectorAll('div.card');
    const modalEmail = modalInfoContainer.children[2].textContent; //extracts email on modal
    let modalCard;
    for(let i=0; i<cardList.length; i++) {
        const curCard = cardList[i];
        const cardEmail = curCard.children[1].children[1].textContent; //extracts email on current card
        if(modalEmail === cardEmail) {
            modalCard = curCard; //match card and modal
            break;
        }
    };

    let newModalCard = modalCard.nextElementSibling;
    nextVisible = () => {
        if(newModalCard === null) {
            return modalCard; //when modal is displaying the last visible employee info
        } else if (newModalCard.style.display === 'none') {
            newModalCard = newModalCard.nextElementSibling; //when the next employee card is hidden, go look for the "next-next" employee card
            return nextVisible();
        } else {
            return newModalCard; //next employee card is available and visible
        }
    }
    newModalCard = nextVisible();
    newModalCard.click(); //simulate the click on the next visible employee card
})


