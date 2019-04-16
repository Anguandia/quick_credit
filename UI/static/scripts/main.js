//show elements relevant to particular page from general html
function showPage(group, parents){
    for(var parent of parents){
        var elements = document.getElementById(parent).children;
        for(var element of elements){
            var classes = element.getAttribute('class');
            if(classes.split(' ').includes(group)){
            } else {
                element.style.display = 'none';
            }
        }
    }
}

var index_page = document.getElementsByClassName('index_page');
index_page.onload = showPage('index', ['menu', 'auth']);
