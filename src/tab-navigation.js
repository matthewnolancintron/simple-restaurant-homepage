function buildTabNavigation() {
    //header and navigation
    const headerElement = document.createElement('header');
    const navigationElement = document.createElement('nav');

    function updateActiveInactiveTab(tab){
        console.log(tab);
        if(tab.classList.contains('inactive-tab')){
            //replace inactive with active
            tab.classList.replace('inactive-tab','active-tab');

            //find previously active tab and set to inactive
            tab.parentElement.children.forEach(element => {
                if(element.classList.contains("active-tab")){
                    element.classList.replace('active-tab','inactive-tab');
                }
            });
        }
    }

    const homeTab = document.createElement('div');
    homeTab.textContent = "Home"
    homeTab.classList.add('tab-styles');
    homeTab.classList.add('active-tab');
    homeTab.addEventListener('click', updateActiveInactiveTab);

    const menuTab = document.createElement('div');
    menuTab.textContent = "Menu";
    menuTab.classList.add('tab-styles');
    menuTab.classList.add('inactive-tab');
    menuTab.addEventListener('click',updateActiveInactiveTab);

    const contactsTab = document.createElement('div');
    contactsTab.textContent = 'Contacts';
    contactsTab.classList.add('tab-styles');
    contactsTab.classList.add('inactive-tab');
    contactsTab.addEventListener('click',updateActiveInactiveTab);

    navigationElement.append(homeTab);
    navigationElement.append(menuTab);
    navigationElement.append(contactsTab);
    headerElement.append(navigationElement);
    
    return headerElement;
}

export {buildTabNavigation};