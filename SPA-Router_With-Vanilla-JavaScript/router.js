// Location Cahnge the function
const route = (event) => {
    //  Capture th eclick event
    event = event || window.event;
    event.preventDefault();
    // HIstory API push the third argument to update the window
    window.history.pushState({}, "", event.target.href);
    handlelocation();
};

// Define the path
// <a> link and file path
const routes = {

    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
};



// This is calling the app as navigation
const handlelocation  = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;


};

window.onpopstate = handlelocation;

// call global route function
window.route = route;

handlelocation();