const table = [
    {
        audit:"Website Audit",
        starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
     
    },
    {
        audit:"Landing Page Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
     
    },
     {
        audit:"Audit Chrome Extension",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
     
    },
    {
        audit:"E-commerce Website Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Website Accessibility Assessment Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"On Page SEO Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Page Speed Insights Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Lead Magnet: Page Speed",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Lead Magnet: Website",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Competitive Analysis Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"ROI Calculator & Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Google Analytics KPI Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"WP Technical Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Google Business Profile Audit",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg ",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },

  ];
  
  const container = document.getElementById("audit-report-container");
  
  const content = table
    .map(
      (item) => `   
      <tr class="">
      <td class="w-[600px] py-4" colspan="1">${item.audit}</td>
      <td class="w-[250px] " colspan="1"><img
        src="${item.starter}"
        alt="image-right"
        class="mx-auto "
      /></td>
      <td class="w-[290px] py-4" colspan="1"><img
        src="${item.pro}"
        alt="image-right"
        class="mx-auto"
      /></td>
      <td class="w-[290px] py-4" colspan="1"><img
        src="${item.agency}"
        alt="image-right"
        class="mx-auto"
      /></td>
    </tr>
    `
    )
    .join("");
  
  container.innerHTML = content;
  