/**
 * run npx webpack --watch
 * to not have to rerun webpack evertime
 * a change is made.
 * 
 * or 
 * 
 * run npx webpack to update a single time
 */
import {pageLoad} from "./page-load.js";
import {buildTabNavigation} from "./tab-navigation.js"
import { buildHomeTabPage } from "./home-tab.js";
import { buildMenuTabPage } from "./menu-tab.js";
import { buildContactsPage } from "./contact-tab.js";
import './style.css';


const tabNav = buildTabNavigation();
const home = buildHomeTabPage();
const menu = buildMenuTabPage();
const contacts = buildContactsPage();
console.log(contacts);

//show default active tab page
if(tabNav.firstElementChild.firstElementChild.classList = 'active-tab'){
    let content = document.getElementById('content');
    content.append(home);
}

for(var tab of tabNav.firstElementChild.children){
    tab.addEventListener('click',(e) => {
        let content = document.getElementById('content');
        
        let isActiveTab = Boolean(e.target.classList);
                
        if(isActiveTab){
            switch (e.target.textContent) {
                case 'Home':
                    //only add if it's not in the content div
                    if(content.firstElementChild.classList != 'home_page'){
                        //remove other page
                        content.replaceChild(home,content.firstElementChild);
                    }
                    break;
                case 'Menu':
                    if(content.firstElementChild.classList != "menu_page"){
                        content.replaceChild(menu,content.firstElementChild);
                    }
                    break;
                case 'Contacts':
                    if(content.firstElementChild.classList != "contacts_page"){
                        content.replaceChild(contacts,content.firstElementChild);
                    }
                default:
                    console.log('?')
                    break;
            }
            //content.append()
        }
        
    });
}

//
pageLoad(tabNav);