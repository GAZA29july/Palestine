function mobileNav() { 
    const body = document.querySelector('body')
    const header = document.querySelector('header')

    body.classList.toggle('no-scroll');
    header.classList.toggle('active');
}

// When the user scrolls the page
window.onscroll = function() {
    scrollStatus()
};

function scrollStatus() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



const myNum = document.querySelectorAll('.count');
let speed = 400;

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const myCount = entry.target;
            let target_count = parseInt(myCount.dataset.count, 10); // Ensure target_count is a number
            let init_count = parseInt(myCount.innerText, 10); // Ensure init_count is a number
            let new_increment_num = Math.ceil(target_count / speed);

            const updateNumber = () => {
                const distance = target_count - init_count; // Calculate remaining distance
                let step = Math.min(distance, new_increment_num); // Adjust step not to overshoot
                init_count += step;
                myCount.innerText = init_count;

                if (init_count < target_count) {
                    setTimeout(updateNumber, 1);
                } else {
                    myCount.innerText = target_count; // Ensure final number is exactly target_count
                }
            }

            updateNumber();
            observer.unobserve(myCount);
        }
    });
}, { threshold: 0.5 });

myNum.forEach(num => {
    observer.observe(num);
});


        //     const deaths = document.querySelector('#deaths');
        //     let deathsdata = deaths.dataset.count;
        //     const injured = document.querySelector('#injured');
        //     let injureddata = injured.dataset.count;

        // const dataObserver = new IntersectionObserver((entries, observer) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             setTimeout(() => {
        //                 setInterval(() => {
        //                     deathsdata++;
        //                     deaths.textContent = deathsdata;
        //                 }, 7000); // 1000 milliseconds = 1 second
                    
        //                 setInterval(() => {
        //                     injureddata++;
        //                     injured.textContent = injureddata;
        //                 }, 3000); // 1000 milliseconds = 1 second
        //             }, "400");

        //             observer.unobserve(deaths);
        //         }
        //     });
        // }, { threshold: 0.5 });

        // dataObserver.observe(deaths);
