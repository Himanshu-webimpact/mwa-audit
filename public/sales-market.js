const salesFeatures = [
    {
        audit:"Reviews, Trust Factors & CTA's",
        starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
      
    },
    {
        audit:"Notifications & Link Tracking",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
     {
        audit:"Email Templates",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
       
    },
    {
        audit:"Email Lead Nurturing",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",

    },
    {
        audit:"Personalize Audit Points & Messaging",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:" Embeddable Website Audit Form ",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Embeddable ROI Calculator Form",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
    
    },
    {
        audit:"     Chat App Integration     ",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
    
    },
    {
        audit:"3rd Party Integrations W/ Zapier",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        
    },
    {
        audit:"Remarketing Pixels",
       starter:"https://ywusq.s3-us-west-2.amazonaws.com/img/cross-icon.svg",
        pro:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
        agency:"https://ywusq.s3-us-west-2.amazonaws.com/img/green-checkmark.svg",
     
    },
  

  ];
  
  const salesData = document.getElementById("sales-feature-container");
  
  const features = salesFeatures
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
  
    salesData.innerHTML = features;