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

const tabNav = buildTabNavigation();
//place content to be added into pageLoad function
pageLoad(tabNav);

console.log('is this working?');