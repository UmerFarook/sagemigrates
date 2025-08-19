export class SMMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }


  render() {
    this.innerHTML = /*html*/
      `
         <div id="navbarNine">
         <ul class="navbar-nav me-auto">
           <li class="nav-item">
             <a class="page-scroll active" href="#hero-area">Home</a>
           </li>
           <li class="nav-item">
             <a class="page-scroll" href="#services">Services</a>
              <ul class="sub-menu">
                <li class="nav-item">
                  <a class="" href="/pages/services/australia.html">Australia</a>
                  <ul class="sub-menu">
                  <h6 class="menu-title">Program Offered</h6>
                      <li class="nav-item">
                        <a class="page-scroll" href="#migrate"> Subclass 482</a>
                      </li>
                      <li class="nav-item">
                      <a class="page-scroll" href="#contact">Subclass 189</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Subclass 186</a>
                      </li>
                    
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Subclass 190</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Open work permit<br> ( spouse sponsorship visa)</a>
                      </li>
                    </ul>
                </li>
                <li class="nav-item">
                 <a class="" href="/pages/services/canada.html">Canada</a>
                 <ul class="sub-menu">
                 
                 <h6 class="menu-title">Program Offered</h6>

                      <li class="nav-item">
                        <a class="page-scroll" href="#migrate"> Express entry </a>
                      </li>
                      <li class="nav-item">
                      <a class="page-scroll" href="#contact">PNP</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">AIP</a>
                      </li>
                    
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">RNIP</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">AIPP</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">LMIA</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Student visa </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">PR spouse sponsorship </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Visit visa</a>
                      </li>
                    </ul>
                </li>
                <li class="nav-item">
                  <a class="" href="/pages/services/europe.html">Europe</a>
                  <ul class="sub-menu">
                 
 



                 <h6 class="menu-title">Program Offered</h6>

                      <li class="nav-item">
                        <a class="page-scroll" href="#migrate">  Luxemburg work permit  </a>
                      </li>
                      <li class="nav-item">
                      <a class="page-scroll" href="#contact">Netherlands work permit </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Germany work permit  </a>
                      </li>
                 </ul>




                </li>
               
                <li class="nav-item">
                  <a class="" href="/pages/services/newzealand.html">Newzealand</a>
                  <ul class="sub-menu">
                  <h6 class="menu-title">Program Offered</h6>
                      <li class="nav-item">
                        <a class="page-scroll" href="#migrate"> Tourist Visa</a>
                      </li>
                      <li class="nav-item">
                      <a class="page-scroll" href="#contact">Working Holiday Visa</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Essential Skills Work Visa</a>
                      </li>
                    
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Essential Skills Work Visa</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Working Visa for Partnership</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Skilled Migrant Residence Visa</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Residence from Work Visa</a>
                      </li>
                    </ul>
                 </li>
              </ul>
           </li>

           <li class="nav-item">
             <a class="page-scroll" href="#migrate">Migrate</a>
           </li>
           <li class="nav-item">
             <a class="page-scroll" href="#contact">Contact</a>
           </li>
         </ul>
       </div>
        `;


  }
}

customElements.define('sm-menu', SMMenu)