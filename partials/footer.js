export class SMFooter extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
            this.render();
    }


    render() {
        this.innerHTML = /*html*/ 
         `
        <footer class="footer-area footer-eleven">
        <!-- Start Footer Top -->
        <div class="footer-top">
          <div class="container">
            <div class="inner-content">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                  <!-- Single Widget -->
                  <div class="footer-widget f-about">
                    <div class="logo">
                      <a href="index.html">
                        <img src="assets/images/logo-gold-alone.png" width="200" alt="#" class="img-fluid" />
                      </a>
                    </div>
                    <h3 class="gold-text mt-20 ">SAGE CONSULTANCY</h3>
                    <p>
                      Your global journey begins here
                    </p>
                    <p class="copyright-text">
                      <span>© 2024 Sage Consultancy</span>
    
                    </p>
                  </div>
                  <!-- End Single Widget -->
                </div>
                <div class="col-lg-2 col-md-6 col-12">
                  <!-- Single Widget -->
                  <div class="footer-widget f-link">
                    <h5>Solutions</h5>
                    <ul>
                      <li><a href="privacy_policy.html">Privacy Policy</a></li>
                      <li><a href="javascript:void(0)">Analytics</a></li>
                      <li><a href="javascript:void(0)">Commerce</a></li>
                      <li><a href="javascript:void(0)">Insights</a></li>
                    </ul>
                  </div>
                  <!-- End Single Widget -->
                </div>
                <div class="col-lg-2 col-md-6 col-12">
                  <!-- Single Widget -->
                  <div class="footer-widget f-link">
                    <h5>Support</h5>
                    <ul>
                      <li><a href="javascript:void(0)">Pricing</a></li>
                      <li><a href="javascript:void(0)">Documentation</a></li>
                      <li><a href="javascript:void(0)">Guides</a></li>
                      <li><a href="javascript:void(0)">API Status</a></li>
                    </ul>
                  </div>
                  <!-- End Single Widget -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <!-- Single Widget -->
                  <div class="footer-widget newsletter">
                    <h5>Subscribe</h5>
                    <p>Subscribe to our newsletter for the latest updates</p>
                    <form action="#" method="get" target="_blank" class="newsletter-form">
                      <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                      <div class="button">
                        <button class="sub-btn">
                          <i class="lni lni-envelope"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <!-- End Single Widget -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/ End Footer Top -->
      </footer>
        `;
    }
}

customElements.define('sm-footer',SMFooter)