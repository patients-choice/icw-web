// Function to load components (header and footer)
document.addEventListener('DOMContentLoaded', function() {
    // Create containers for header and footer
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';

    // Add meta tags for credits
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = 'ICW Group';
    document.head.appendChild(metaAuthor);
    
    const metaGenerator = document.createElement('meta');
    metaGenerator.name = 'generator';
    metaGenerator.content = 'ICW Group - https://theicwgroup.com';
    document.head.appendChild(metaGenerator);
    
    // Embedded header content
    const headerContent = `
    <!-- Header Start -->
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->

    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src="img/logo-header.png" alt="ICW Logo" height="50">
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="about.html" class="nav-item nav-link">About Us</a>
                <a href="service.html" class="nav-item nav-link">Services</a>
                <a href="team.html" class="nav-item nav-link">Leadership</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a href="subsidiaries.html" class="dropdown-item">Subsidiaries</a>
                        <a href="research.html" class="dropdown-item">Clinical Research</a>
                        <a href="infrastructure.html" class="dropdown-item">Infrastructure & Engineering</a>
                        <a href="news.html" class="dropdown-item">News & Impact</a>
                        <a href="careers.html" class="dropdown-item">Careers</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact Us</a>
            </div>
            <a href="contact.html" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get In Touch<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    <!-- Navbar End -->
    <!-- Header End -->`;

    // Embedded footer content
    const footerContent = `
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Address</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>7205 NW 19th Street, Suite 201</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Miami, FL 33126</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>786-882-8346</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@theicwgroup.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Links</h4>
                    <a class="btn btn-link" href="about.html">About Us</a>
                    <a class="btn btn-link" href="service.html">Services</a>
                    <a class="btn btn-link" href="team.html">Leadership</a>
                    <a class="btn btn-link" href="subsidiaries.html">Subsidiaries</a>
                    <a class="btn btn-link" href="research.html">Clinical Research</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Services</h4>
                    <a class="btn btn-link" href="service.html">On-Site Clinical Services</a>
                    <a class="btn btn-link" href="service.html">Modular Infrastructure</a>
                    <a class="btn btn-link" href="research.html">Clinical Research</a>
                    <a class="btn btn-link" href="service.html">Home Healthcare</a>
                    <a class="btn btn-link" href="service.html">Environmental Services</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Newsletter</h4>
                    <p>Stay updated with our latest news and services.</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Innovative Centers for Wellness (ICW)</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="index.html">Home</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>`;

    // Insert the header and footer content
    const headerElement = document.querySelector('[data-component="header"]');
    if (headerElement) {
        headerContainer.innerHTML = headerContent;
        headerElement.replaceWith(headerContainer);
    }

    const footerElement = document.querySelector('[data-component="footer"]');
    if (footerElement) {
        footerContainer.innerHTML = footerContent;
        footerElement.replaceWith(footerContainer);
    }

    // Initialize navigation functionality
    initializeNavigation();
});

function initializeNavigation() {
    // Update active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    dropdownItems.forEach(item => item.classList.remove('active'));
    
    // Remove active class from dropdown toggle
    const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
    dropdownToggles.forEach(toggle => toggle.classList.remove('active'));
    
    // Add active class to current page link
    const allLinks = [...navLinks, ...dropdownItems];
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            // If it's a dropdown item, also activate its parent dropdown
            if (link.classList.contains('dropdown-item')) {
                const dropdownParent = link.closest('.dropdown');
                if (dropdownParent) {
                    const toggle = dropdownParent.querySelector('.dropdown-toggle');
                    if (toggle) toggle.classList.add('active');
                }
            }
        }
    });
} 