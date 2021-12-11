function buildContactsPage(){
    /**
     * contatc heading
     */
    const contacts = document.createElement('div');
    contacts.classList.add('contacts_page');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Contact';
    
    contacts.append(pageTitle);

    /**
     * card for each contact
     */
    const contactsList = document.createElement('ol');
    contactsList.classList.add('contacts');
    const contactsArray = [
        {name:'floor',job:'sometimes cooks',phoneNumber:'no phone'},
        {name:'speaker',job:'kinda quiet...',phoneNumber:'too many digits over 7^7 digits long'},
        {name:'noisy fan',job:'makes a nice atmosphere',phoneNumber:"it's already saved in your contacts..."},
    ];
    
    contactsArray.forEach(contact => {
        let contact_card = document.createElement('li');
        contact_card.classList.add('contact_card');
        
        let person = document.createElement('h2');
        person.classList.add('person');
        person.textContent = contact.name;
        contact_card.append(person);

        let occupation = document.createElement('p');
        occupation.classList.add('occupation');
        occupation.textContent = contact.job;
        contact_card.append(occupation);

        let phoneNumber = document.createElement('p');
        phoneNumber.classList.add('phone');
        phoneNumber.textContent = contact.phoneNumber
        contact_card.append(phoneNumber);

        contactsList.append(contact_card);
    });
    

    contacts.append(contactsList);
    return contacts;
}

export{buildContactsPage};