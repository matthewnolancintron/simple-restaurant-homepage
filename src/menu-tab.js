function buildMenuTabPage(){
    const menu = document.createElement('div');
    menu.classList.add('menu_page');
    const menuHeadingContainer = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuHeadingContainer.append(menuTitle);

    const drinksContainer = document.createElement('div');
    const drinksTitle = document.createElement('h2');
    drinksTitle.textContent = 'Drinks';
    
    const foodContainer = document.createElement('div');
    const foodTitle = document.createElement('h2');
    foodTitle.textContent = 'Foods';
    
    const foodRecipeList = document.createElement('ol');
    const foodRecipeListArray = [
        {title:'apple, plain', description:'just an apple washed and at room temp...'},
        {title:'rice with salt',description:'whatever rice that is available with salt'},
        {title:'spicy fish',description:'cheap in season fish, with heat that adds flavor and not overpowering'},
    ];

    foodRecipeListArray.forEach((food) => {
        let foodCard = document.createElement('li');
        foodCard.classList.add('foodCard');

        let recipie = document.createElement('h3');
        recipie.textContent = `${food.title}`;

        let description = document.createElement('p');
        description.textContent = `${food.description}`;

        foodCard.append(recipie);
        foodCard.append(description);

        foodRecipeList.append(foodCard);
    });

    foodContainer.append(foodRecipeList);

    const drinksList = document.createElement('ol');
    const drinksListArray = [
        {title:'water room temp', description:'clean drinking water'},
        {title:'green tea',description:'maybe, sencha?(sometime matcha) warm not too hot'},
    ];

    drinksListArray.forEach((drink) => {
        let drinkCard = document.createElement('li');
        drinkCard.classList.add('drinkCard');

        let drinkName = document.createElement('h3');
        drinkName.textContent = `${drink.title}`;

        let description = document.createElement('p');
        description.textContent = `${drink.description}`;

        drinkCard.append(drinkName);
        drinkCard.append(description);

        drinksList.append(drinkCard);
    });


    drinksContainer.append(drinksList);

    menu.append(menuHeadingContainer);
    menu.append(foodContainer);
    menu.append(drinksContainer);
    
    return menu;
}

export{buildMenuTabPage};
