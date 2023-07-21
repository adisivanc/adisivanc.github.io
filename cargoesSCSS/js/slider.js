        // Menu scrolling logic
        const menuItems = document.querySelectorAll(".navItem");
        const sections = document.querySelectorAll(".section");
        const observerOptions = {
            root: null,
            threshold: 0,
            rootMargin: '-50% 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            let lastActiveMenu = null;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetName = entry.target.dataset.name;
                    lastActiveMenu = targetName;
                    if (targetName === "section01") {
                        document.getElementById('logo').classList.remove('logoTemp');
                        document.getElementById('menu').classList.add('menuTemp');
                    } else {
                        document.getElementById('logo').classList.add('logoTemp');
                        document.getElementById('menu').classList.remove('menuTemp');
                    }
                }
            });
            menuItems.forEach(item => item.classList.remove("active"));
            const activeMenuItem = document.querySelector(`[data-target="${lastActiveMenu}"]`);
            if (activeMenuItem) {
                activeMenuItem.classList.add("active");
                setTimeout(() => {
                    activeMenuItem.scrollIntoView();
                }, 500);
            }
        }, observerOptions);
        sections.forEach((section) => {
            observer.observe(section);
        });
        
        window.addEventListener('scroll', function() {
            if (window.innerWidth < 992) {
                if (window.scrollY > 10) {
                    document.getElementById('scrollUpSec').classList.remove('hidden');
                } else {
                    document.getElementById('scrollUpSec').classList.add('hidden');
                }
            } else {
                document.getElementById('scrollUpSec').classList.remove('hidden');
            }
            if (window.scrollY > 10) {
                document.getElementById('header').classList.add('header-box');
            } else {
                document.getElementById('header').classList.remove('header-box');
            }
        });
        
        window.addEventListener('load', function() {
            const logoContainer = document.getElementById("logoSlides");
            const popupLogoContainer = document.getElementById("popupLogoSlides");
            const logoList = logoContainer.querySelectorAll('div');
            for (let i = 0; i < logoList.length * 2; i++) {
                logoContainer.appendChild(logoList[i % 5].cloneNode(true));
                popupLogoContainer.appendChild(logoList[i % 5].cloneNode(true));
            }
            logoContainer.style.width = '3000px';
            popupLogoContainer.style.width = '3000px';
        });
        
        
        function handleClickNav(navNum) {
            const activeList = queryAll(document, ".navItem") || [];
            activeList.forEach(element => {
                element.classList.remove("active");
            })
            const ele = document.getElementsByClassName("navItem")[navNum-2];
            if (ele) {
                ele.classList.add("active");
                const section = document.getElementById('section0'+navNum);
                if (section) {
                    section.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }
        }
        
        function handleScrollDown(sectionNum) {
            const section = document.getElementById('section0'+sectionNum);
            section.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        
        function handleScrollTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        
        function handleTryForFree() {
            window.open("https://flow.cargoes.com/welcome", "_blank");
        }
        
        function handleSelectFeature(index) {
            const imageList = queryAll(document, ".feature-image") || [];
            const list = queryAll(document, ".list-item") || [];
            list.forEach(element => {
                element.classList.remove("active");
            });
            imageList.forEach(element => {
                element.classList.add("hidden");
            });
        
            const activeItem = document.getElementById('list-item'+index);
            const activeImage = document.getElementById('feature-image'+index);
            activeItem.style.opacity = 0;
            activeImage.style.opacity = 0;
            setTimeout(() => {
                activeItem.classList.add('active');
                activeImage.classList.remove('hidden');
                activeItem.style.opacity = 1;
                activeImage.style.opacity = 1;
            }, 100);
        }
        
        function handleShowPopup(show) {
            if (!show) {
                document.getElementById("bookPopup").classList.add("hidePopup");
                document.getElementsByTagName("body")[0].classList.remove("popupVisible");
                resetFormData();
            } else {
                document.getElementById("bookPopup").classList.remove("hidePopup");
                document.getElementsByTagName("body")[0].classList.add("popupVisible");
                document.getElementById("successAlert").style.display = 'none';
                document.getElementById("errorAlert").style.display = 'none';
                document.getElementById("formContainer").style.display = 'block';
            }
        }
        
        var currentIndex = 0;
        
        function goToSlide(index) {
            const sliderContainer = document.querySelector('.slider-container');
            const slides = document.querySelectorAll('.slide');
            const slideWidth = slides[0].clientWidth;
            sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
            currentIndex = index;
        }
        
        window.addEventListener('resize', () => {
            goToSlide(currentIndex);
        })
        
        function goToNextSlide() {
            const slides = document.querySelectorAll('.slide');
            if (currentIndex === slides.length - 1) {
                goToSlide(0);
            } else {
                goToSlide(currentIndex + 1);
            }
        }
        
        function goToPrevSlide() {
            const slides = document.querySelectorAll('.slide');
            if (currentIndex === 0) {
                goToSlide(slides.length - 1);
            } else {
                goToSlide(currentIndex - 1);
            }
        }

        
        setInterval(function(){
            var nextBtn = document.getElementById("nextBtn");
            nextBtn.click();
        },3500);