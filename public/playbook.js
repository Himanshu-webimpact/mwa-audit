const playbooks = [
  {
    src: "../src/assets/playbooks/Generating-Leads-From-Groups-like-LinkedIn-FB-Playbook-with-icon.jpeg",
    heading: " Generating Leads From Groups like LinkedIn &amp; FB Playbook",
    para: "Follow this playbook to learn how to generate leads from groups like FB, LinkedIn, and other online communities.",
  },
  {
    src: "../src/assets/playbooks/annual-client-meeting-playbook-og.jpeg",
    heading: "  Annual Client Meeting Playbook ",
    para: "Follow this playbook to learn how to run quarterly and, or annual client meetings to help them get more results and help you generate more revenue.",
  },
  {
    src: "../src/assets/playbooks/better-leads-playbook.jpeg",
    heading: "  Better Leads Playbook ",
    para: "Follow this playbook to help you build lead lists in minutes of hundreds of local businesses that need your agency services.",
  },
  {
    src: "../src/assets/playbooks/generate-leads-from-agency-website.jpeg",
    heading:
      "  Generate leads from your Agency website (Launching March 2023) ",
    para: "Follow this playbook to learn how to optimize your website to convert 2-4X more visitors into leads.",
  },
  {
    src: "../src/assets/playbooks/get-featured-on-podcast.jpeg",
    heading: "  Get Featured on Podcasts (Launching March 2023) ",
    para: "This playbook covers a proven system for finding, pitching and getting featured on podcasts. Start building more authority and generating more leads.",
  },
];

const container = document.getElementById("playbooks-container");

const content = playbooks
  .map(
    (item) => `   
    <div class="w-[44.5%] my-7">
    <div class="playbooks-list">
      <img
        class="border border-[#e8e8e8] relative z-20 rounded-lg"
        src="${item.src}"
        alt="agency-playbook"
      />
    </div>
    <h2
      class="mt-11 text-[#000f28] text-2xl font-[poppins-medium]"
    >
     ${item.heading}
    </h2>
    <p class="mt-5 text-base font-[roboto-light] text-[#004053]">
      ${item.para}
    </p>
    <button
      type="button"
      onclick="window.location.href='#';"
      class="py-3 !mt-5 !ml-0 text-sm font-medium text-gray-900 rounded-sm border-[#1b75bb] border text-[#1b75bb] w-[150px] btn-slider-animation"
    >
      View Playbook
    </button>
  </div> 
    `
  )
  .join("");

container.innerHTML = content;
