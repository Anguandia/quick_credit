//show elements relevant to particular page from general html
//take in an array of parent elements(parents) some of whose
//children are to be displayed for specific pages if any of their classes is/are in the array of required classes
function showPage(required, parents){
    //add class universal to any required class's array
    required.push('universal');
    for(var parent of parents){
        var elements = document.getElementById(parent).children;
        for(var element of elements){
            //get an array of classnames of each child element
            var classes = element.getAttribute('class');
            //check if atleast a class name of current element is aamong the classes required for display
            if(classes.split(' ').filter(value=>required.includes(value)).length>0){
                //keep menu expansion icon hidden on largescreens
                if(element.getAttribute('id')!='options'){
                    //display elements in each block as desired
                    if(parent=='auth'){
                        element.style.display = 'inline';
                    } else if(parent=='menu'){
                        element.style.display = 'block';
                    } else {
                        element.style.display = 'initial';
                    }
                }
            }
        }
    }
}

var index_page = document.getElementsByClassName('index_page');
// index_page.onload = showPage('index', ['menu', 'auth']);

/*slide in and out menu pane to expand, overlapping main content
on smaller screens*/
var menu = document.getElementById('menu');
var icon = document.getElementById('iconcontainer');
function openMenu(){
    //only expand on screens smaller than 420px width
    if(window.innerWidth<620){
        if(window.innerWidth>window.innerHeight){
            menu.style.width = '50%';
        } else {
            menu.style.height = 'inherit';
            document.getElementById('options').style.display = 'none';
        }
    }
}

// slide out menu pane
function closeMenu(){
    if(window.innerWidth<620 && window.innerWidth>240){
        if(window.innerWidth>window.innerHeight){
            menu.style.width = '10%';
        } else {
            menu.style.height = '5%';
            document.getElementById('options').style.display = 'block';
        }
    }
}

//togle display of menu on click of icon
function showMenu(){
    menu.style.width = '50%';
    if(menu.style.display=='block'){
        menu.style.display = 'none';
    } else {
        menu.style.display ='block';
        openMenu();
    }
}

menu.onmouseover = openMenu;
menu.onmouseout = closeMenu;
icon.onclick = showMenu;

/*combine signup and sign in to avoid codeduplication
use javascript to redirect andload appropriate form*/
function redir(){
    //push current url to local storage
    localStorage.setItem('ref', 'signin.html');
    //redirect to signup page
    window.location.href = 'signup.html';
}

 /*check if page has been referred to from signin page or not an accordingly invoke pageload call with appropriate arguments*/
 function checkAuth(){
     //check if redirect from signin page
     if(localStorage.getItem('ref')=='signin.html'){
         //show signin form and clear storge for next load
         showPage(['signin', 'index'], ['signupform', 'menu', 'auth']);
         localStorage.removeItem('ref');
        } else {
        //load signup page
         showPage(['signup', 'index'], ['signupform', 'menu', 'auth']);
     }
 }
