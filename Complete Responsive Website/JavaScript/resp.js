burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
})


// The classList.toggle() method is used to toggle a class on or off for a particular HTML element. When you call element.classList.toggle('className'), it checks if the element currently has the specified class (className). If it does, it removes the class; if it doesn't, it adds the class.

// So, if the class is present, it gets removed, and if it's not present, it gets added. Essentially, it "toggles" the presence of the specified class.

// In the code you provided: