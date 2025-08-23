
             AOS.init({
            duration: 1000,
            once: true,
        });
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // Testimonial carousel
        let currentTestimonial = 0;
        const testimonials = 4;
        const testimonialCarousel = document.getElementById('testimonial-carousel');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        const prevTestimonialBtn = document.getElementById('prev-testimonial');
        const nextTestimonialBtn = document.getElementById('next-testimonial');

        function updateTestimonialCarousel() {
            testimonialCarousel.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            testimonialDots.forEach((dot, index) => {
                if (index === currentTestimonial) {
                    dot.classList.remove('bg-luxury-300');
                    dot.classList.add('bg-gold-500', 'active');
                } else {
                    dot.classList.remove('bg-gold-500', 'active');
                    dot.classList.add('bg-luxury-300');
                }
            });
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials;
            updateTestimonialCarousel();
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials) % testimonials;
            updateTestimonialCarousel();
        }

        nextTestimonialBtn.addEventListener('click', nextTestimonial);
        prevTestimonialBtn.addEventListener('click', prevTestimonial);

        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                updateTestimonialCarousel();
            });
        });

        // Auto-rotate testimonials every 5 seconds
        setInterval(nextTestimonial, 5000);

    document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.getElementById('gallery-carousel');
        const cards = carousel.querySelectorAll('.card-clone');
        const originalCardCount = cards.length;

        // Clone the cards to create a seamless loop
        for (let i = 0; i < originalCardCount; i++) {
            const clone = cards[i].cloneNode(true);
            carousel.appendChild(clone);
        }

        let currentSlide = 0;
        const slideInterval = 3000;

        function getCardWidth() {
            if (!cards[0]) return 0;
            const cardElement = cards[0];
            const cardStyle = window.getComputedStyle(cardElement);
            const cardWidth = cardElement.offsetWidth;
            const cardMarginLeft = parseInt(cardStyle.marginLeft) || 0;
            const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
            return cardWidth + cardMarginLeft + cardMarginRight;
        }

        function updateCarousel() {
            const slideWidth = getCardWidth();
            carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

            // Seamless loop: If we've scrolled past the original set of cards, jump back
            if (currentSlide >= originalCardCount) {
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    currentSlide = 0;
                    carousel.style.transform = `translateX(0)`;
                }, 500);
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                }, 600);
            }
        }

        setInterval(() => {
            currentSlide++;
            updateCarousel();
        }, slideInterval);
    });


        document.addEventListener('DOMContentLoaded', () => {
        const faqToggles = document.querySelectorAll('.faq-toggle');

        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const icon = toggle.querySelector('span');

                // Toggle the 'hidden' class on the content
                content.classList.toggle('hidden');

                // Toggle the icon rotation
                icon.classList.toggle('rotate-45');
                
                // Add a smooth transition for open/close
                if (!content.classList.contains('hidden')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        });
    });
