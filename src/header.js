class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
        <nav
         class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900  m-auto lg:py-3 fixed top-0 w-[100%] z-50 "
       >
         <div
           class="flex flex-wrap justify-between items-center mx-auto xl:max-w-screen-xl  py-2.5   container px-[15px]"
         >
           <a href="/public/home.html" class="flex items-center">
             <img
               src="../src/assets/logo/MyWebAudit Logo in Dark Gray.png"
               class="h-7 mr-3 xl:h-10"
               alt="my web audit Logo"
               title="My Web Audit"
             />
           </a>
           <button
             id="mega-menu-full-image-button"
             data-collapse-toggle="mega-menu-full-image"
             type="button"
             class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
             aria-controls="mega-menu-full-image" aria-expanded="false"
           >
             <span class="sr-only">Open main menu</span>
             <svg
               class="w-6 h-6"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 fill-rule="evenodd"
                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                 clip-rule="evenodd"
               ></path>
             </svg>
           </button>
           <div
             id="mega-menu-full-image"
             class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
           >
             <ul
               class="flex flex-col mt-4 xl:text-[15px] text-[13px] font-medium lg:flex-row xl:space-x-7   lg:mt-0 space-x-6"
             >
               <li>
                 <a
                   href="/public/success-stories.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df] md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   aria-current="page"
                   >Success Stories</a
                 >
               </li>
               <li>
                 <button
                 id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  aria-expanded="false"
                   class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b  border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                 >
                 <a href="/public/sample.html"> Sample Reports</a>
                   <svg
                     class="w-4 h-4 ml-1"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fill-rule="evenodd"
                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                       clip-rule="evenodd"
                     ></path>
                   </svg>
                 </button>
               </li>
               <li>
                 <a
                   href="/public/price.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >Pricing</a
                 >
               </li>
               <li>
                 <a
                   href="/public/feature.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >Features</a
                 >
               </li>
               <li>
                 <a
                   href="/public/about.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >About</a
                 >
               </li>
               <li>
                 <button
                   id="mega-menu-full-image-dropdown-2"
                   data-collapse-toggle="mega-menu-full-image-dropdown-2"
                  aria-expanded="false"
                   class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                 >
                 <a href="/public/close-more-sale.html">Uses Cases</a>
                   <svg
                     class="w-4 h-4 ml-1"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fill-rule="evenodd"
                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                       clip-rule="evenodd"
                     ></path>
                   </svg>
                 </button>
               </li>
               <li>
                 <a
                   href="blog.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700  "
                   >Blog</a
                 >
               </li>
               <li>
                 <a
                   href="login.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >Login</a
                 >
               </li>
             </ul>
           </div>
         </div>   
      
       </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);

{
  /* <div id="mega-menu-full-image-dropdown" class="absolute left-[30%] z-20">
<div
  class="flex max-w-[980px]  py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3  box-shadow-header-mega-menu rounded items-start bg-[#fff]"
>
  <ul
    class="hidden mb-4 space-y-20 md:mb-0 md:block border-[#e0e6e999] border-r pl-5 pr-6 py-3 w-[33%]"
    aria-labelledby="mega-menu-full-image-button"
  >
    <li>
      <a href="website-audit-template.html" class="">
        <div class="flex justify-center gap-4 items-center">
          <img
            src="../src/assets/mega-menu/website-audit-template-min.png"
            alt=""
          />
          <div>
            <h5
              class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
            >
              Website Audit
            </h5>
            <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Comprehensive assessment to help 2X website leads.
            </h6>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="digital-competitive.html" class="">
        <div class="flex justify-center gap-4 items-center">
          <img
            src="../src/assets/mega-menu/digital-competitive-analysis-report-min.png"
            alt=""
          />
          <div>
            <h5
              class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
            >
              Digital Competitive Intelligence Analysis Audit
            </h5>
            <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Strategically deliver value and build trust with your
              prospects and clients.
            </h6>
          </div>
        </div>
      </a>
    </li>
  </ul>
  <ul
    class="hidden mb-4 space-y-14 md:mb-0 md:block border-[#e0e6e999] border-r pl-5 pr-6 py-3 w-[33%]"
    aria-labelledby="mega-menu-full-image-button"
  >
    <li>
      <a href="google-business-profile-audit.html" class="">
        <div class="flex justify-center gap-4 items-center">
          <img
            src="../src/assets/mega-menu/website-audit-template-min.png"
            alt=""
          />
          <div>
            <h5
              class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
            >
              Google Business Profile Audit
            </h5>
            <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              GBP Audit is perfect for generating an actionable
              checklist of recommended on optimization strategies.
            </h6>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="e-commerce-website-audit.html" class="">
        <div class="flex justify-center gap-4 items-center">
          <img
            src="../src/assets/mega-menu/digital-competitive-analysis-report-min.png"
            alt=""
          />
          <div>
            <h5
              class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
            >
              E-commerce Website Audit
            </h5>
            <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Use our comprehensive assessment to boost conversions 25%
              or more!
            </h6>
          </div>
        </div>
      </a>
    </li>
  </ul>
  <ul
    class="hidden mb-4 space-y-14 md:mb-0 md:block pl-5 pr-6 py-3 w-[33%]"
    aria-labelledby="mega-menu-full-image-button"
  >
    <li>
      <a href="on-page-seo-audit.html" class="">
        <div class="flex justify-center gap-4 items-center">
          <img
            src="../src/assets/mega-menu/website-audit-template-min.png"
            alt=""
          />
          <div>
            <h5
              class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
            >
              On Page SEO Audit
            </h5>
            <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Generate dozens of actionable on page SEO insights in
              minutes.
            </h6>
          </div>
        </div>
      </a>
    </li>
    <li class="flex justify-center mx-auto">
        <button
        type="button"
        onclick="window.location.href='sample.html';"
        class="py-3 !mt-5 !ml-0 text-xs  font-[roboto-regural] rounded-sm border-[#1b75bb] border text-[#1b75bb]  btn-slider-animation"
      >
      View All Audit Reports
      </button>
    </li>
  </ul>
</div>
</div>
<div id="mega-menu-full-image-dropdown-2" class="absolute right-[10%] z-20">
<div
class="flex max-w-[660px] px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6 box-shadow-header-mega-menu rounded items-start justify-between bg-[#fff]"
>
<ul
  class="hidden mb-4 space-y-10 md:mb-0 md:block border-[#e0e6e999] border-r pl-3 pr-6 py-3 w-[49%]"
  aria-labelledby="mega-menu-full-image-dropdown-2"
>
  <li>
    <a href="close-more-sale.html" class="">
      <div class="flex justify-center gap-4 items-center">
        <img
          src="../src/assets/mega-menu/close-more-sales-help-min.png"
          alt=""
        />
        <div>
          <h5
            class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
          >
            
          Sales and Authority-Building
                      
          </h5>
          <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Close more sales by showing your expertise and delivering value with audits.
          </h6>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="webinars-and-workshops.html" class="">
      <div class="flex justify-center gap-4 items-center">
        <img
          src="../src/assets/mega-menu/webinars-and-workshops-help-min.png"
          alt=""
        />
        <div>
          <h5
            class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
          >
            
          Webinars &amp; Workshops
                      
          </h5>
          <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Engage attendees with impressive, personalized, high-value audits.
          </h6>
        </div>
      </div>
    </a>
  </li>
</ul>
<ul
  class="hidden mb-4 space-y-10 md:mb-0 md:block  pl-3 pr-6 py-3 w-[49%]"
  aria-labelledby="mega-menu-full-image-button"
>
  <li>
    <a href="lead-generation.html" class="">
      <div class="flex justify-center gap-4 items-center">
        <img
          src="../src/assets/mega-menu/lead-generation-help-min.png"
          alt=""
        />
        <div>
          <h5
            class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
          >
          Lead Generation
                      
          </h5>
          <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Stand out by delivering beautiful, readable, easy-to-understand audits.
          </h6>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="retainers-and-care-plans.html" class="">
      <div class="flex justify-center gap-4 items-center">
        <img
          src="../src/assets/mega-menu/retainers-and-care-plans-help-min.png"
          alt=""
        />
        <div>
          <h5
            class="font-[roboto-medium] text-[15px] text-[#21323b] mb-[6px]"
          >
          
          Retainers &amp; Care Plans
                      
          </h5>
          <h6 class="text-gray-500 font-[roboto-regural] text-sm">
              Sell more retainers, care plans, and service packages with audits.
          </h6>
        </div>
      </div>
    </a>
  </li>
</ul>

</div>
</div> */
}
