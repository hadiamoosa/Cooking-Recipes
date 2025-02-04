document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    let slider = document.querySelector('.slider_ha .list_ha');
    let items = document.querySelectorAll('.slider_ha .list_ha .item_ha');
    let next = document.getElementById('next_ha');
    let prev = document.getElementById('prev_ha');
    let dots = document.querySelectorAll('.slider_ha .dots_ha li');

    let lengthItems = items.length - 1;
    let active = 0;

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';

        let last_active_dot = document.querySelector('.slider_ha .dots_ha li.active_ha');
        if (last_active_dot) {
            last_active_dot.classList.remove('active_ha');
        }
        dots[active].classList.add('active_ha');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => { next.click(); }, 3000);
    }

    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }

    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }

    let refreshInterval = setInterval(() => { next.click(); }, 3000);

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        })
    })

    window.onresize = function(event) {
        reloadSlider();
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev_recipes');
    const nextBtn = document.getElementById('next_recipes');
    const recipeWrapper = document.querySelector('.recipe-wrapper_ha');
    const recipeCards = document.querySelectorAll('.recipe-card_ha');
    let offset = 0;
    const slideWidth = recipeCards[0].offsetWidth;
    const numVisible = 2; // Number of recipes visible at a time
    const totalWidth = slideWidth * recipeCards.length/2;
    let isAnimating = false; // Prevent multiple clicks
    const maxOffset = totalWidth - (slideWidth * numVisible)/2; // Max offset before empty space

    function updateNavigation() {
        // Update arrow visibility
        prevBtn.style.display = offset > 0 ? 'block' : 'none';
        nextBtn.style.display = offset < maxOffset ? 'block' : 'none';
    }

    function slideTo(newOffset) {
        if (isAnimating) return; // Prevent multiple clicks

        isAnimating = true;
        recipeWrapper.style.transition = 'transform 0.5s ease'; // Smooth transition
        recipeWrapper.style.transform = `translateX(-${newOffset}px)`;

        setTimeout(() => {
            isAnimating = false;
            recipeWrapper.style.transition = 'none'; // Remove transition for the next slide
        }, 500); // Match the transition duration

        offset = newOffset; // Update offset
        updateNavigation(); // Update navigation arrows visibility
    }

    nextBtn.addEventListener('click', function() {
        let newOffset = offset + slideWidth * numVisible;
        if (newOffset >= totalWidth) {
            newOffset = maxOffset; // Show last visible cards
        }
        slideTo(newOffset);
    });

    prevBtn.addEventListener('click', function() {
        let newOffset = offset - slideWidth * numVisible;
        if (newOffset < 0) {
            newOffset = 0; // Show first visible cards
        }
        slideTo(newOffset);
    });

    // Initialize arrow visibility
    updateNavigation();

    // Auto-slide functionality
    let autoSlideInterval = setInterval(() => {
        if (nextBtn.style.display !== 'none') {
            nextBtn.click();
        }
    }, 5000); // Auto-slide every 5 seconds

    recipeWrapper.addEventListener('mouseover', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on hover
    });

    recipeWrapper.addEventListener('mouseout', () => {
        autoSlideInterval = setInterval(() => {
            if (nextBtn.style.display !== 'none') {
                nextBtn.click();
            }
        }, 5000); // Resume auto-slide after hover
    });
});

