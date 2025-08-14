export class SMHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
            this.render();
    }


    render() {
        this.innerHTML = /*html*/ 
         `
        <section class="navbar-area navbar-nine">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="index.html">
                  <img class="logo"src="assets/images/logo-gold-horizontal.png" alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                  aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                  <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                      <a class="page-scroll active" href="#hero-area">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#services">Services</a>
                    </li>
    
                    <li class="nav-item">
                      <a class="page-scroll" href="#migrate">Migrate</a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
    
                <div class="navbar-btn d-none d-lg-inline-block">
                  <a class="menu-bar" href="#side-menu-left"><i class="lni lni-menu"></i></a>
                </div>
              </nav>
              <!-- navbar -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </section>
    
      <!--====== NAVBAR NINE PART ENDS ======-->
    
      <!--====== SIDEBAR PART START ======-->
    
      <div class="sidebar-left">
        <div class="sidebar-close">
          <a class="close" href="#close"><i class="lni lni-close"></i></a>
        </div>
        <div class="sidebar-content">
          <div class="sidebar-logo">
            <a href="index.html"><img class="mw-80" src="assets/images/logo-gold-alone.png" alt="Logo" /></a>
          </div>
          <h4 class="gold-text  mt-10">SAGE MIGRATES</h4>
          <p class="text">Your global journey begins here</p>
          <!-- logo -->
          <div class="sidebar-menu">
            <h5 class="menu-title">Quick Links</h5>
            <ul>
              <li><a href="javascript:void(0)">About Us</a></li>
              <li><a href="javascript:void(0)">Our Team</a></li>
              <li><a href="javascript:void(0)">Latest News</a></li>
              <li><a href="javascript:void(0)">Contact Us</a></li>
            </ul>
          </div>
          <!-- menu -->
          <div class="sidebar-social align-items-center justify-content-center">
            <h5 class="social-title">Follow Us On</h5>
            <ul>
              <li>
                <a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i class="lni lni-youtube"></i></a>
              </li>
            </ul>
          </div>
          <!-- sidebar social -->
        </div>
        <!-- content -->
      </div>
      <div class="overlay-left"></div>
        `;

        const navbarTogglerNine = this.querySelector(".navbar-nine .navbar-toggler");
        const sidebarLeft = this.querySelector(".sidebar-left");
        const overlayLeft = this.querySelector(".overlay-left");
        const sidebarClose = this.querySelector(".sidebar-close .close");
        const sideMenuLeftNine = this.querySelector(".navbar-nine .menu-bar");

        // === Navbar toggler click ===
        navbarTogglerNine.addEventListener("click", () => {
            navbarTogglerNine.classList.toggle("active");
        });

        // === Left sidebar toggle (overlay click) ===
        overlayLeft.addEventListener("click", () => {
            sidebarLeft.classList.toggle("open");
            overlayLeft.classList.toggle("open");
        });

        // === Close button click ===
        sidebarClose.addEventListener("click", () => {
            sidebarLeft.classList.remove("open");
            overlayLeft.classList.remove("open");
        });

        // === Menu bar click ===
        sideMenuLeftNine.addEventListener("click", () => {
            sidebarLeft.classList.add("open");
            overlayLeft.classList.add("open");
        });
    }
}

customElements.define('sm-header',SMHeader)