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

const tabNav = buildTabNavigation();
const home = buildHomeTabPage();
//const menu = 
//const contacts = 

//show default active tab page
if(tabNav.firstElementChild.firstElementChild.classList = 'active-tab'){
    console.log('true');
    let content = document.getElementById('content');
    console.log(content);
    content.append(home);
}

for(var tab of tabNav.firstElementChild.children){
    tab.addEventListener('click',(e) => {
        let selectedTab = e.target.textContent;
        console.log(e.target.textContent,'index.js');
        if(selectedTab == 'Home'){
            /**
             * if any content replace it with
             * home content
             * 
             * if no content just place home
             * content
             * 
             * use append
             */
        }

        if(selectedTab == 'Menu'){

        }

        if(selectedTab == 'Contacts'){

        }
    });
}

//
pageLoad(tabNav);