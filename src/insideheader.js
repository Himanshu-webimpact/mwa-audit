class InAppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="fixed top-0 w-[100%] z-50">
      <div
      class="flex justify-between items-center py-[10px] px-5 bg-[#203145] "
    >
      <nav>
        <div class="flex flex-wrap justify-between items-center">
          <a href="/public/home.html" class="flex items-center">
            <img
              src="../src/assets/welcome/MyWebAudit (1).png"
              class="h-5 mr-3 xl:h-8"
              alt="my web Audit"
              title="My Web Audit"
            />
          </a>
          <button
            id="mega-menu-full-image-button"
            data-collapse-toggle="mega-menu-full-image"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full-image"
            aria-expanded="false"
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
              class="flex flex-col xl:text-sm text-[13px] font-medium lg:flex-row xl:space-x-4 lg:mt-0 space-x-6"
            >
              <li>
                <a
                  href="#"
                  class="block pl-3 pr-4 text-[#fff] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                  >Dashboard</a
                >
              </li>
              <li>
                <button
                  id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  aria-expanded="false"
                  class="flex items-center justify-between w-full pl-3 pr-4 font-medium text-[#fff] border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <a href="#">Lead Widgets</a>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  class="block pl-3 pr-4 text-[#fff] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                  >Report Builder
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block pl-3 pr-4 text-[#fff] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add-ons
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="flex justify-center gap-1 items-center pl-3 pr-4 text-[#fff] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ] md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <img
                    class="w-[15px]"
                    src="../src/assets/dashboard/bonus-resources-icon.svg"
                    alt="Bonus Resources"
                    title="Bonus Resources"
                  />
                  Bonus Resources
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-image-dropdown-2"
                  data-collapse-toggle="mega-menu-full-image-dropdown-2"
                  aria-expanded="false"
                  class="flex items-center justify-between w-full pl-3 pr-4 font-medium text-[#fff] border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <a href="playbooks.html"> Playbooks </a>
                </button>
              </li>
              <li class="">
                <a
                  href="#"
                  class="flex justify-center gap-1 items-center pl-3 pr-4 text-[#fff] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <img
                    class="w-[15px]"
                    src="../src/assets/dashboard/deals-menu-icon.svg"
                    alt="Deals"
                    title="Deals"
                  />

                  Deals
                </a>
              </li>
              <li>
                <button
                  id="dropdownDefaultButton-2"
                  data-dropdown-toggle="dropdown-2"
                  class="text-[#fff] bg-transparent font-medium gap-1 justify-centers text-center flex items-center relative"
                  type="button"
                >
                  <img
                    class="w-[15px]"
                    src="../src/assets/dashboard/gear-solid.svg"
                    alt="Setting"
                    title="Setting"
                  />
                  Settings
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdown-2"
                  class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-56 dark:bg-gray-700 dashboard-dropdown-menu-support !absolute !top-[13px] !left-[60px]"
                >
                  <ul
                    class="py-2 text-sm text-[#297cab] dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton-2"
                  >
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        White Label Branding
                      </a>
                    </li>
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        Email Templates & SMTP
                      </a>
                    </li>
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        Zapier Integration
                      </a>
                    </li>
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        Notifications
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        Get Chrome Extension
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownDefaultButton-3"
                  data-dropdown-toggle="dropdown-3"
                  class="text-[#fff] bg-transparent font-medium justify-center gap-1 text-center flex items-center relative"
                  type="button"
                >
                  <img
                    class="w-[15px]"
                    src="../src/assets/dashboard/help-or-support-icon.svg"
                    alt="Support"
                    title="Support"
                  />
                  Support
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdown-3"
                  class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-56 dark:bg-gray-700 dashboard-dropdown-menu-support !absolute !top-[13px] !left-[60px]"
                >
                  <ul
                    class="py-2 text-sm text-[#297cab] dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton-3"
                  >
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        How to Guides
                      </a>
                    </li>
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        FAQ’s
                      </a>
                    </li>
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        Live Chat
                      </a>
                    </li>
                    <li class="border-b border-[#f2f2f2]">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        Email Us
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="block px-4 py-3 whitespace-nowrap">
                        FB Group
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="">
                <a
                  href="#"
                  class="flex justify-center gap-1 items-center pl-3 pr-4 text-[#fff] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df] dark:hover:bg-gray-700 dark:hover:text-[#0d96df] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="21px"
                    height="12px"
                    viewBox="-1.984 0.139 26 17"
                    enable-background="new -1.984 0.139 26 17"
                    xml:space="preserve"
                  >
                    <path
                      fill="#ffffff"
                      d="M-0.514,4.829c-0.426,0-0.77,0.344-0.77,0.77v6.008c0,0.425,0.344,0.769,0.77,0.769
                      c0.425,0,0.769-0.344,0.769-0.769V5.599C0.255,5.176-0.089,4.829-0.514,4.829L-0.514,4.829z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M15.792,0.34h-3.197c-0.427,0-0.771,0.344-0.771,0.771l0,0v0.695L1.517,4.862
                      C1.191,4.96,0.968,5.26,0.968,5.599c0,0-0.02,5.248-0.015,6.139c-0.001,0.219,0.125,0.638,0.537,0.714l10.332,2.954v0.695
                      c0,0.426,0.346,0.771,0.771,0.771l0,0h3.198c0.425,0,0.77-0.345,0.77-0.771l0,0V1.11C16.562,0.686,16.217,0.34,15.792,0.34
                      L15.792,0.34z M5.802,12.012H5.795l-3.294-0.978V6.174l9.319-2.765v10.386L5.802,12.012z M15.023,15.326h-1.658V1.879h1.662
                      L15.023,15.326z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#ffffff"
                      d="M23.693,8.797c-0.009,0.948-0.135,1.803-0.385,2.627
                      c-0.268,0.885-0.64,1.674-1.108,2.389c-0.116,0.178-0.236,0.355-0.365,0.518c-0.216,0.273-0.634,0.342-0.893,0.152
                      c-0.076-0.059-0.153-0.125-0.213-0.207c-0.154-0.213-0.139-0.494,0.007-0.719c0.23-0.352,0.468-0.697,0.675-1.074
                      c0.294-0.525,0.529-1.109,0.67-1.744c0.088-0.391,0.169-0.787,0.208-1.19c0.038-0.373,0.028-0.755,0.018-1.132
                      c-0.014-0.463-0.09-0.913-0.197-1.356c-0.223-0.913-0.583-1.719-1.054-2.438c-0.199-0.305-0.419-0.587-0.639-0.869
                      c-0.246-0.314-0.15-0.724,0.11-0.908c0.249-0.176,0.517-0.221,0.775-0.046c0.132,0.089,0.259,0.216,0.362,0.359
                      c0.265,0.366,0.53,0.734,0.771,1.129c0.439,0.727,0.771,1.537,0.992,2.424c0.122,0.487,0.201,0.989,0.24,1.498
                      C23.686,8.425,23.688,8.642,23.693,8.797z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#ffffff"
                      d="M20.57,8.733c-0.013,0.717-0.147,1.383-0.392,2.018
                      c-0.163,0.418-0.363,0.803-0.601,1.146c-0.118,0.176-0.274,0.24-0.438,0.271c-0.182,0.037-0.357-0.008-0.525-0.117
                      c-0.231-0.156-0.401-0.541-0.151-0.912c0.377-0.559,0.63-1.209,0.709-1.963c0.062-0.595,0.002-1.174-0.176-1.729
                      c-0.171-0.536-0.414-1.003-0.729-1.396c-0.282-0.352-0.182-0.753,0.085-0.953c0.16-0.118,0.331-0.16,0.514-0.141
                      c0.231,0.021,0.409,0.171,0.565,0.39c0.36,0.503,0.665,1.058,0.868,1.704c0.115,0.366,0.203,0.744,0.229,1.143
                      C20.541,8.371,20.557,8.552,20.57,8.733z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#ffffff"
                      d="M4.748,16.356c-0.567-0.219-1.052-0.537-1.475-0.95
                      c-0.278-0.274-0.517-0.573-0.71-0.896c-0.1-0.162-0.098-0.327-0.067-0.491c0.032-0.181,0.128-0.333,0.272-0.46
                      c0.204-0.172,0.568-0.222,0.779,0.121c0.317,0.516,0.749,0.941,1.323,1.233c0.453,0.229,0.935,0.34,1.438,0.333
                      c0.486-0.006,0.941-0.101,1.361-0.284c0.376-0.164,0.663,0.047,0.731,0.355c0.04,0.185,0.015,0.357-0.063,0.523
                      c-0.096,0.211-0.275,0.335-0.502,0.42c-0.524,0.192-1.07,0.32-1.654,0.324c-0.331,0.003-0.662-0.023-0.989-0.113
                      C5.047,16.433,4.896,16.396,4.748,16.356z"
                    ></path>
                  </svg>

                  Refer a Friend
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="flex items-center justify-center gap-4">
        <button
          id="dropdownDefaultButton-4"
          data-dropdown-toggle="dropdown-4"
          class="text-white bg-transparent font-medium rounded-lg text-sm py-2.5 text-center items-center flex gap-2 relative"
          type="button"
        >
          <h5 class="text-[#fbfbfb] flex items-center flex-nowrap gap-[2px]">
            Products

            <svg
              class="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </h5>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown-4"
          class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-[440px] dashboard-dropdown-menu-notification !absolute !-top-[10px] !-left-[180px]"
        >
          <ul
            class="py-2 text-sm text-[#297cab]"
            aria-labelledby="dropdownDefaultButton-4"
          >
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3">
                <div class="flex justify-start items-center gap-3 px-3">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20.281px"
                    height="22.992px"
                    viewBox="0 0 14.281 18.992"
                    enable-background="new 0 0 14.281 18.992"
                    xml:space="preserve"
                  >
                    <path
                      fill="#297cab"
                      d="M12.057,1.484H9.256c-0.408-1.16-1.678-1.77-2.838-1.362C5.781,0.346,5.28,0.847,5.056,1.484h-2.83
                 C0.998,1.485,0.001,2.48,0,3.709v13.059c0.001,1.229,0.997,2.225,2.226,2.226h9.833c1.227-0.003,2.221-0.999,2.223-2.226V3.709
                 c-0.002-1.229-0.997-2.225-2.227-2.226L12.057,1.484z M6.417,2.968V2.226c0-0.41,0.332-0.742,0.742-0.742
                 c0.41,0,0.741,0.333,0.741,0.742v0.742h1.484v1.446H4.934V2.968H6.417z M12.797,16.768c0,0.409-0.331,0.74-0.74,0.742H2.226
                 c-0.41,0-0.742-0.332-0.742-0.742V3.709c0-0.41,0.333-0.741,0.742-0.742H3.45V5.9h7.419V2.968h1.188
                 c0.409,0.001,0.74,0.333,0.741,0.742L12.797,16.768z M9.986,8.533l1.1,1l-4.754,5.22l-3.138-3.036l1.032-1.066l2.039,1.973
                 L9.986,8.533z"
                    />
                  </svg>
                  <h4 class="text-xl font-[roboto-regural] text-[#297cab]">
                    Audit
                  </h4>
                </div>
                <h6 class="pl-3 mt-3 text-[#283a4f] text-sm leading-[22px]">
                  Build trust faster and close more—and bigger—deals with
                  beautiful, actionable, and easy to understand websites,
                  onpage SEO, GBP and other audits.
                </h6>
              </a>
            </li>
            <li class="border-b border-[#f2f2f2] bg-[#f8f8f8]">
              <a href="#" class="block px-4 py-3">
                <div class="flex justify-start items-center gap-3 px-3">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20.953px"
                    height="23.326px"
                    viewBox="0 0 13.953 21.326"
                    enable-background="new 0 0 13.953 21.326"
                    xml:space="preserve"
                  >
                    <g id="Group" transform="translate(14 1.4)">
                      <path
                        id="Compound_Path"
                        fill="#297cab"
                        d="M-0.686,8.246h-2.352c0.943-0.231,1.604-1.082,1.596-2.053
      C-1.462,4.982-2.459,4.017-3.67,4.036c-1.176,0.019-2.127,0.962-2.157,2.137C-5.838,7.15-5.179,8.007-4.232,8.246h-9.129
      c-0.358,0.04-0.631,0.34-0.638,0.7v1.694c0.001,0.178,0.082,0.346,0.219,0.458l4.764,4.065v4.166c0.005,0.203,0.11,0.39,0.279,0.5
      c0.096,0.061,0.206,0.096,0.319,0.101c0.096-0.001,0.191-0.021,0.279-0.06l2.771-1.4c0.207-0.1,0.338-0.309,0.34-0.538v-2.771
      l4.764-4.065c0.137-0.112,0.217-0.28,0.219-0.458V8.94c-0.007-0.36-0.279-0.66-0.639-0.7V8.246z M-4.632,6.233c0-0.552,0.448-1,1-1
      s1,0.448,1,1c0,0.553-0.448,1-1,1C-4.184,7.232-4.631,6.784-4.632,6.233L-4.632,6.233L-4.632,6.233z M-1.243,10.359l-4.764,4.081
      c-0.138,0.104-0.218,0.267-0.22,0.438v2.691l-1.594,0.777v-3.464c-0.001-0.173-0.083-0.335-0.219-0.438l-4.76-4.086V9.44h11.557
      V10.359z"
                      />
                      <path
                        id="Compound_Path-2"
                        fill="#297cab"
                        d="M-13.462,5.372c0,1.057,0.857,1.914,1.914,1.914s1.914-0.857,1.914-1.914
      s-0.857-1.914-1.914-1.914l0,0C-12.605,3.458-13.462,4.315-13.462,5.372z M-10.831,5.372c0,0.396-0.321,0.718-0.718,0.718
      s-0.718-0.322-0.718-0.718s0.322-0.718,0.718-0.718S-10.831,4.975-10.831,5.372z"
                      />
                      <path
                        id="Compound_Path-3"
                        fill="#297cab"
                        d="M-7.767,0.778c-0.906,0-1.641,0.734-1.641,1.641S-8.673,4.06-7.767,4.06
      s1.641-0.735,1.641-1.641l0,0C-6.126,1.513-6.861,0.778-7.767,0.778z M-7.768,3.118c-0.386,0-0.699-0.313-0.699-0.7
      c0-0.386,0.313-0.699,0.699-0.699c0.386,0,0.7,0.313,0.7,0.699C-7.068,2.805-7.381,3.118-7.768,3.118L-7.768,3.118z"
                      />
                      <path
                        id="Compound_Path-4"
                        fill="#297cab"
                        d="M-3.053,0.108c0-0.718-0.582-1.3-1.301-1.3c-0.717,0-1.299,0.582-1.299,1.3
      c0,0.718,0.582,1.3,1.299,1.3C-3.635,1.408-3.053,0.826-3.053,0.108L-3.053,0.108z M-4.855,0.138c0-0.294,0.238-0.533,0.532-0.533
      c0.297,0,0.534,0.239,0.534,0.533c0,0.296-0.237,0.536-0.534,0.536l0,0C-4.617,0.674-4.855,0.434-4.855,0.138z"
                      />
                    </g>
                  </svg>
                  <h4 class="text-xl font-[roboto-regural] text-[#297cab]">
                    Better Leads
                  </h4>
                </div>
                <h6 class="pl-3 mt-3 text-[#283a4f] text-sm leading-[22px]">
                  Find and build lead lists in minutes of hundreds of local
                  businesses that need your agency services. Then use our data
                  enrichment service to find their contact info.
                </h6>
              </a>
            </li>
            <li class="">
              <a href="#" class="block px-4 py-3">
                <div class="flex justify-start items-center gap-3 px-3">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="22.031px"
                    height="22.279px"
                    viewBox="0 0 22.031 17.279"
                    enable-background="new 0 0 22.031 17.279"
                    xml:space="preserve"
                  >
                    <path
                      fill="#297cab"
                      d="M0.7,4.082c-0.387,0-0.7,0.313-0.7,0.7v5.462c0,0.387,0.313,0.699,0.7,0.699c0.386,0,0.7-0.313,0.7-0.699
                 V4.782C1.4,4.396,1.086,4.082,0.7,4.082L0.7,4.082z"
                    />
                    <path
                      fill="#297cab"
                      d="M15.525,0h-2.907c-0.387,0-0.7,0.313-0.7,0.7l0,0v0.632L2.547,4.111c-0.296,0.089-0.5,0.361-0.5,0.672v5.459
                 c0,0.035,0.003,0.07,0.008,0.105v0.021c0.005,0.029,0.012,0.058,0.021,0.087L4.06,16.79c0.115,0.368,0.508,0.574,0.877,0.459
                 l2.889-0.9c0.369-0.115,0.574-0.508,0.459-0.877L7.302,12.33l4.615,1.369v0.632c0,0.387,0.313,0.7,0.7,0.7l0,0h2.908
                 c0.387,0,0.699-0.313,0.699-0.7l0,0V0.7C16.225,0.314,15.912,0,15.525,0L15.525,0z M6.742,15.218l-1.553,0.486l-1.382-4.415
                 l1.881,0.558L6.742,15.218z M6.442,10.612H6.436L3.442,9.724v-4.42l8.473-2.512v9.442L6.442,10.612z M14.826,13.627h-1.508V1.4
                 h1.512L14.826,13.627z"
                    />
                    <path
                      fill="#297cab"
                      d="M20.991,11.431l-3.028-1.514c-0.349-0.167-0.767-0.02-0.934,0.329c-0.162,0.341-0.026,0.748,0.308,0.923
                 l3.028,1.514c0.342,0.179,0.766,0.047,0.944-0.296s0.046-0.766-0.296-0.945C21.006,11.439,20.998,11.435,20.991,11.431z"
                    />
                    <path
                      fill="#297cab"
                      d="M17.65,5.188c0.109,0,0.216-0.025,0.313-0.073L20.991,3.6c0.343-0.179,0.476-0.602,0.296-0.944
                 c-0.174-0.334-0.582-0.47-0.922-0.308l-3.028,1.514c-0.346,0.174-0.485,0.594-0.313,0.939C17.143,5.038,17.386,5.189,17.65,5.188z"
                    />
                    <path
                      fill="#297cab"
                      d="M21.331,6.814h-2.528c-0.387,0-0.699,0.313-0.699,0.7s0.313,0.7,0.699,0.7l0,0h2.528
                 c0.387,0,0.7-0.313,0.7-0.7S21.718,6.814,21.331,6.814z"
                    />
                  </svg>
                  <h4 class="text-xl font-[roboto-regural] text-[#297cab]">
                    Projects
                  </h4>
                </div>
                <h6 class="pl-3 mt-3 text-[#283a4f] text-sm leading-[22px]">
                  The intelligent way to analyze a site for hundreds of data
                  points across multiple categories from technical issues, and
                  SEO, to website accessibility. Identify growth insights, and
                  drive results.
                </h6>
              </a>
            </li>
          </ul>
        </div>
        <button
          id="dropdownDefaultButton-5"
          data-dropdown-toggle="dropdown-5"
          class="text-white bg-transparent font-medium rounded-lg text-sm py-2.5 text-center items-center flex gap-2 relative"
          type="button"
        >
          <img
            class="w-[17px]"
            src="../src/assets/dashboard/bell-regular.svg"
            alt="Notification"
            title="Notification"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown-5"
          class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-[348px] border border-[#c1c1c1] !absolute !-top-[5px] !-left-[120px] dashboard-dropdown-menu-notification"
        >
          <ul
            class="py-2 text-sm text-[#297cab]"
            aria-labelledby="dropdownDefaultButton-5"
          >
            <li class="border-b border-[#f2f2f2] pb-2">
              <a
                href="#"
                class="px-4 py-[6px] whitespace-nowrap flex justify-between items-center"
              >
                <div
                  class="flex justify-center gap-2 items-center text-sm font-[roboto-medium] text-[#070707]"
                >
                  <svg
                    class="w-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="black"
                  >
                    <path
                      d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                      fill="black"
                    />
                  </svg>
                  Notifications
                </div>
                <div>
                  <img
                    class="w-[10px]"
                    src="../src/assets/dashboard/check-double-solid.svg"
                    alt=""
                    title=""
                  />
                </div>
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a
                href="#"
                class="px-4 py-3 whitespace-nowrap flex justify-start items-center gap-4"
              >
                <div>
                  <div class="bg-[#1885f2] rounded-full py-[6px] px-[8px]">
                    <img
                      class="w-[15px] rounded-full"
                      src="../src/assets/dashboard/play-solid.svg"
                      alt=""
                      title=""
                    />
                  </div>
                </div>
                <div>
                  <h5 class="text-[#070707] text-sm">
                    Audit re-ran for www.ftni.com
                  </h5>
                  <h6
                    class="text-[#90949c] mt-[2px] text-xs font-[roboto-light]"
                  >
                    3 weeks ago
                  </h6>
                </div>
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a
                href="#"
                class="px-4 py-3 whitespace-nowrap flex justify-start items-center gap-4"
              >
                <div>
                  <div class="bg-[#1885f2] rounded-full py-[6px] px-[8px]">
                    <img
                      class="w-[15px] rounded-full"
                      src="../src/assets/dashboard/check-solid.svg"
                      alt=""
                      title=""
                    />
                  </div>
                </div>
                <div>
                  <h5 class="text-[#070707] text-sm">
                    Audit completed for www.ftni.com
                  </h5>
                  <h6
                    class="text-[#90949c] mt-[2px] text-xs font-[roboto-light]"
                  >
                    3 weeks ago
                  </h6>
                </div>
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a
                href="#"
                class="px-4 py-3 whitespace-nowrap flex justify-start items-center gap-4"
              >
                <div>
                  <div class="bg-[#1885f2] rounded-full py-[6px] px-[8px]">
                    <img
                      class="w-[15px] rounded-full"
                      src="../src/assets/dashboard/play-solid.svg"
                      alt=""
                      title=""
                    />
                  </div>
                </div>
                <div>
                  <h5 class="text-[#070707] text-sm">
                    Audit ran for www.ftni.com
                  </h5>
                  <h6
                    class="text-[#90949c] mt-[2px] text-xs font-[roboto-light]"
                  >
                    3 weeks ago
                  </h6>
                </div>
              </a>
            </li>
            <li class="">
              <a
                href="#"
                class="block px-4 py-[6px] whitespace-nowrap text-center text-[#607d9a]"
              >
                View All Notifications
              </a>
            </li>
          </ul>
        </div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-transparent font-medium rounded-lg text-sm py-2.5 text-center items-center flex gap-2 relative"
          type="button"
        >
          <img
            class="w-[30px]"
            src="../src/assets/welcome/952663d4294b0b7c21c5548147b090f7.png"
            alt="Michael"
            title="Michael"
          />
          <h5 class="text-[#fbfbfb] flex items-center flex-nowrap gap-[2px]">
            Michael
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </h5>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-56 !absolute !-top-[10px] !-left-[17px] dashboard-dropdown-menu-notification"
        >
          <ul
            class="py-2 text-sm text-[#297cab]"
            aria-labelledby="dropdownDefaultButton"
          >
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap"
                >Account & Billing</a
              >
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                My Team
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                SMTP Settings
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                Add-ons
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                White Label Settings
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                My Members
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                Payment Method &amp; Invoices
              </a>
            </li>
            <li class="border-b border-[#f2f2f2]">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                Refer A Friend, Get 10%
              </a>
            </li>
            <li class="">
              <a href="#" class="block px-4 py-3 whitespace-nowrap">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    `;
  }
}

customElements.define("insideheader-component", InAppHeader);
