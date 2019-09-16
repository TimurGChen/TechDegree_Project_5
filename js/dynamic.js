/**
 * adds elements and functionality that dynamically changes/hides/shows elements
 * according to user action
 */


/**
 * convert the employee data from json to employee info displayed
 * on the gallery div as "cards". Each card generates a customized
 * modal with detail info regarding that employee.
 * @param {json} - data - employee information fetched from server 
 */
employeeHTML = data => {

    //capitalize a string
    cap = str => {
        let first = str[0].toUpperCase();
        let rest = str.slice(1).toLowerCase();
        return first + rest;
    }

    /**
     * generate one employee info card, and append to DOM,
     * each card refreshes and displays the modal on click
     * @param {object} - information regarding one employee
     */
    genCard = person => {
        const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class', 'card');
        const imgDiv = document.createElement('div');
            imgDiv.setAttribute('class', 'card-img-container');
            imgDiv.innerHTML = `<img class="card-img" src="${person.picture.large}" alt="profile picture">`;
        const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-info-container');
            infoDiv.innerHTML = `
            <h3 id="name" class="card-name cap">${cap(person.name.first)} ${cap(person.name.last)}</h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${cap(person.location.city)}, ${cap(person.location.state)}</p>    
            `;

        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(infoDiv);
        gallery.appendChild(cardDiv);

        cardDiv.addEventListener('click', () => {
            refreshModal(person);
            modalContainer.style.display = '';
        });
    }

    /**
     * refreshes the modal by extracting more information from 'person' obj
     * @param {object} person - information regarding one employee
     */
    refreshModal = person => {
        //parses messy info
        const city = cap(person.location.city);
        const state = /$[a-zA-Z]{2}^/.test(person.location.state) ? person.location.state.toUpperCase : cap(person.location.state);
        const street = cap(person.location.street).replace(/\s([A-Za-z])/g, (match, p1) => {
            return ` ${p1.toUpperCase()}`;
        });
        const birthday = person.dob.date.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/, (match, p1, p2, p3) => {
            return `${p2}/${p3}/${p1.replace(/\d{2}(\d{2})/, '$1')}`;
        });

        modalInfoContainer.innerHTML = `
            <img class="modal-img" src="${person.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${cap(person.name.first)} ${cap(person.name.last)}</h3>
            <p class="modal-text">${person.email}</p>
            <p class="modal-text cap">${cap(person.location.city)}</p>
            <hr>
            <p class="modal-text">${person.phone}</p>
            <p class="modal-text">${street}, ${city}, ${state} ${person.location.postcode}</p>
            <p class="modal-text">Birthday: ${birthday}</p>
        `;
    }

    const employeeList = data.results;
    employeeList.forEach(person => genCard(person));
} 


/**
 * displays employee info cards matched with search input value only
 */
updateGallery = () => {
    const key = searchInput.value.toLowerCase();
    const nameHeaderList = document.querySelectorAll('#name');
    nameHeaderList.forEach(nameHeader => {
        const name = nameHeader.textContent.toLowerCase();
        if(name.indexOf(key) === -1) {
            nameHeader.parentElement.parentElement.style.display = 'none';
        } else {
            nameHeader.parentElement.parentElement.style.display = '';
        }
    })
}


/**
 * adds event listener to the search box to dynamically display matching
 * employee info card on gallery
 */
searchInput.addEventListener('input', updateGallery);
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    updateGallery();
})

/**
 * fetches data of 12 random employees from English-speaking countries
 */
fetch('https://randomuser.me/api/?results=12&nat=au,ca,gb,ie,nz')
    .then(response => response.json())
    .then(employeeHTML)
    .catch(err => console.log(`Looks like there is a humongous problem: ${err}`));