function buildTabNavigation() {
    //header and navigation
    const headerElement = document.createElement('header');
    headerElement.classList.add('tab_nav_header')

    const navigationElement = document.createElement('nav');
    navigationElement.classList.add('tab_nav');

    function updateActiveInactiveTab(e){
        console.log(e.target);
        if(e.target.classList.contains('inactive-tab')){
            //find previously active tab and set to inactive
            for (var tab of e.target.parentElement.children){
                if(tab.classList.contains("active-tab")){
                    tab.classList.replace('active-tab','inactive-tab');
                }
            }
            //replace selected tab's inactive with active
            e.target.classList.replace('inactive-tab','active-tab');
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