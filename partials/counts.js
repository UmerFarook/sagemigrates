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

       
    }
}

customElements.define('sm-counts',SMCounts)