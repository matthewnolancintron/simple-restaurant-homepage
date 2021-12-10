function buildHomeTabPage(){
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home_page');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('home_heading');

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.textContent = "a simple restaurant";
    restaurantTitle.classList.add('home_title');

    headingContainer.append(restaurantTitle);
    
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('home_review_container');

    const review = document.createElement('p');
    review.textContent = `I like that the restaurant is simple.`;
    review.classList.add('home_review');

    const customer = document.createElement('p');
    customer.textContent = 'a simple person';
    customer.classList.add('home_customer');

    reviewContainer.append(review);
    reviewContainer.append(customer);
    
    /**
     * hours of operation
     */
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('home_hours_container');
    const hours = document.createElement('h2');
    hours.classList.add('home_hours');
    const daysOfTheWeek = document.createElement('ol');
    daysOfTheWeek.classList.add('home_daysOfTheWeek');
    const daysOfTheWeekArray = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    daysOfTheWeekArray.forEach((day)=> {
        let dayElement = document.createElement('li');
        dayElement.textContent = `${day}: ${Math.round(Math.random()*(12-1) + 1)}am - ${Math.round(Math.random()*(12 + 1) + 1)}pm`;
        dayElement.classList.add(day.toLowerCase());
        daysOfTheWeek.append(dayElement);
    });

    hoursContainer.append(hours);
    hoursContainer.append(daysOfTheWeek);


    /**
     * location
     */
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('home_location_container')

    const location = document.createElement('h2');
    location.textContent = 'Location';
    location.classList.add('home_location');
    const address = document.createElement('p');
    address.textContent = 'a simple location';
    address.classList.add('home_address');

    locationContainer.append(location);
    locationContainer.append(address);

    homeContainer.append(headingContainer);
    homeContainer.append(reviewContainer);
    homeContainer.append(hoursContainer);
    homeContainer.append(locationContainer);

    return homeContainer;
}
export {buildHomeTabPage};