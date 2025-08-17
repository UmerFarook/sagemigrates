export class SMCounts extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
            this.render();
    }


    render() {
        this.innerHTML = /*html*/ 
         `
         <section id="pricing" class="pricing-area pricing-fourteen">
         <!--======  Start Section Title Five ======-->
        
         <!--======  End Section Title Five ======-->
         <div class="container">
           <div class="row">
             <div class="col-lg-3 col-md-6 col-12">
               <div class="pricing-style-fourteen">
                 <div class="table-head">
                     <div class="price">
                       <h2 class="amount">
                         <span class="currency"></span>5000<span class="duration">+</span>
                       </h2>
                     </div>
                     <p>Successful Canditaes</p>
                 </div>
               </div>
             </div>
             <div class="col-lg-3 col-md-6 col-12">
               <div class="pricing-style-fourteen">
                 <div class="table-head">
                     <div class="price">
                       <h2 class="amount">
                         <span class="currency"></span>10<span class="duration">+</span>
                       </h2>
                     </div>
                     <p>Countires</p>
                 </div>
               </div>
             </div>
             <div class="col-lg-3 col-md-6 col-12">
               <div class="pricing-style-fourteen">
                 <div class="table-head">
                     <div class="price">
                       <h2 class="amount">
                         <span class="currency"></span>99<span class="duration">%</span>
                       </h2>
                     </div>
                     <p>Visa Success</p>
                 </div>
               </div>
             </div>
             <div class="col-lg-3 col-md-6 col-12">
               <div class="pricing-style-fourteen">
                 <div class="table-head">
                     <div class="price">
                       <h2 class="amount">
                         <span class="currency"></span>100<span class="duration">+</span>
                       </h2>
                     </div>
                     <p>Universities & Colleges</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
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

customElements.define('sm-counts',SMCounts)