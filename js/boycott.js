function hideLow() { 
    // Select all elements with the class 'low'
    const lowItems = document.querySelectorAll('.low');
    
    // Get the button
    const filterBtn = document.querySelector('#filterBtn');

    // Check if the button has the 'active' class
    if (filterBtn.classList.contains('active')) {
        // If it does, remove the 'hidden' class from each element with the class 'low'
        // And remove the 'active' class from the button
        lowItems.forEach(function(item) {
            item.classList.remove('low-hidden');
        });
        filterBtn.classList.remove('active');
    } else {
        // If it doesn't, add the 'hidden' class to each element with the class 'low'
        // And add the 'active' class to the button
        lowItems.forEach(function(item) {
            item.classList.add('low-hidden');
        });
        filterBtn.classList.add('active');
    }
}

function filterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("boycottList");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.remove('hidden');
        } else {
            li[i].classList.add('hidden');
        }
    }
}