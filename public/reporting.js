const ReportingFeatures = [
    {
        audit:"	White Label Reporting",
        starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
      
    },
    {
        audit:"HTML Reports",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
     {
        audit:"Mobile Friendly Reports",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
       
    },
    {
        audit:"Audit Storage (90 days)",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",

    },
    {
        audit:"Add Your Own Audit Points",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Create Your Own Report Template",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Export to Google Doc",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
    
    },
    {
        audit:"Export to PDF",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
    
    },
    {
        audit:"Export to Excel",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Export to PowerPoint",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
     
    },
    {
        audit:"   White Label Domain  ",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
       
    },

  ];
  
  const reportingData = document.getElementById("reporting-feature-container");
  
  const data = ReportingFeatures
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
        class="mx-auto "
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
  
    reportingData.innerHTML = data;
  