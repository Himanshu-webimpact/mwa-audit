class InAppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="bg-[#203145] px-[15px] py-[10px]">
        <h6 class="text-[10px] text-[#fff] text-center">
          © 2023 My Web Audit.
          <a href="privacy.html" title="Privacy Policy">Privacy Policy</a> |
          <a href="terms-and-condition.html" title="Terms and Conditions"
            >Terms and Conditions</a
          >
        </h6>
      </div>
    `;
  }
}

customElements.define("insidefooter-component", InAppFooter);
