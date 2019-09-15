
//generate each employee's card in gallery div
employeeHTML = data => {
    //capitalize the string input
    cap = str => {
        let first = str[0].toUpperCase();
        let rest = str.slice(1).toLowerCase();
        return first + rest;
    }
    //generate one employee info card, and append to DOM
    genCard = person => {
        const cardDiv = document.createElement('div');
        const imgDiv = document.createElement('div');
            imgDiv.innerHTML = `<img class="card-img" src="${person.picture.large}" alt="profile picture">`;
        const infoDiv = document.createElement('div');
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
            modalContainer.style.display = 'block';
        });
    }

    //generate modal
    refreshModal = person => {
        const city = cap(person.location.city);
        const state = /$[a-zA-Z]{2}^/.test(person.location.state) ? person.location.state.toUpperCase : cap(person.location.state);
        const street = cap(person.location.street).replace(/\s([A-Za-z])/g, ` ${'$1'.toUpperCase()}`);
        modalInfoContainer.innerHTML = `
            <img class="modal-img" src="${person.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${cap(person.name.first)} ${cap(person.name.last)}</h3>
            <p class="modal-text">${person.email}</p>
            <p class="modal-text cap">${cap(person.location.city)}</p>
            <hr>
            <p class="modal-text">${person.phone}</p>
            <p class="modal-text">${street}, ${city}, ${state} ${person.location.postcode}</p>
            <p class="modal-text">Birthday: ${person.dob.date}</p>
        `;//fix date & address length & cap issues
    }

    const employeeList = data.results;
    console.log(employeeList);
    employeeList.forEach(person => genCard(person));
} 



fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(employeeHTML)
    .catch(err => console.log(`Looks like there is a Huuuuuuuge problem: ${err}`));