import mailchimp from '@mailchimp/mailchimp_marketing';
//const {Client, Config, Subscriber} = mailchimp;

mailchimp.setConfig({
    apiKey: "921202ad2d2abbacb36e0ca991f37e5e-us10",
    server: "us10",
  });

  const listId = "10c822c562";
  export async function run(subscribingUser) {
    try{    
      const response = await mailchimp.lists.setListMember(listId,"subscriber_hash",{
      email_address: subscribingUser.email,
      //status: "subscribed",
      status_if_new: "subscribed",
      merge_fields:{
        NAME: subscribingUser.name,
        MESSAGE: subscribingUser.message,
      },
    });
  
      return (`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
    
  }
catch(error){
  console.log(error.status);
}
  }
