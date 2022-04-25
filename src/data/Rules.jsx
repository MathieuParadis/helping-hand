// ASSETS IMPORTS
import free_service_illustration from '../assets/images/rules/free_service.svg';
import donation_illustration from '../assets/images/rules/donation.svg';
import id_check_illustration from '../assets/images/rules/id_check.svg';
import define_need_illustration from '../assets/images/rules/define_need.svg';
import be_proactive_illustration from '../assets/images/rules/be_proactive.svg';
import report_abuse_illustration from '../assets/images/rules/report_abuse.svg';

const rules = {
  homepage: [
    {
      title: "Free service",
      description: "Subscribing to the Helping Hand app, as well as using our service is completely free. Volunteers cannot ask for money or donations.",
      img: free_service_illustration,
    },
    {
      title: "Donation",
      description: "If you want to give back to the community but are unable to do so, we encourage you to donate to your local associations or charitities such as the Red Cross.",
      img: donation_illustration,
    },
    {
      title: "Identity check",
      description: "To ensure the safety of all our users, we verify the identity of all our applicants.",
      img: id_check_illustration,
    },
    {
      title: "Define your need",
      description: "While asking for help, well defined your need in advance. Anyone volunteering to help you has to understand exactly what the request is about.",
      img: define_need_illustration,
    },
    {
      title: "Be proactive and participate",
      description: "Receiving help is an active job. Be proactive, participate and help the volunteer(s) in every way possible.",
      img: be_proactive_illustration,
    },
    {
      title: "Report abuse",
      description: "To keep our platform and users safe, we have set up a strong policy against misbehaviour and abuses. Spammers will be reported and banned.",
      img: report_abuse_illustration,
    },
  ],
  rulespage: [
    {
      description: "Helping Hand is a local charity that does not aim to make money. Subscribing to our app as well as using our service is and will remain free",
    },
    {
      description: "Volunteers cannot ask for money or donations. Offering your time to help others means, you shares core values with us, such as generosity, love and respect, that are beyond money.",
    },
    {
      description: "If you want to help but are concerned of not being able to help, do not worry. There is always a way. Contact the person in need and engage the conversation to figure out a solution.",
    },
    {
      description: "If you want to give back to the community, but are unable to do so, we encourage you to donate to your local associations or charitities such as the Red Cross.",
    },
    {
      description: "To ensure the safety of all our users, we verify the identity of all our applicants.",
    },
    {
      description: "While asking for help, well defined your need in advance. Anyone volunteering to help you has to understand exactly what the request is about.",
    },
    {
      description: "Receiving help is an active job. Be proactive, participate and help the volunteer(s) in every way possible.",
    },
    {
      description: "Remember, be patient! We are all human beings. All volunteers genuinely want to help but not everyone contacting you might be able to do so.",
    },
    {
      description: "The safety of our users is our top priority. Aggresive and dangerous behaviors are not tolerated. Offenders will be reported and banned.",
    },
  ],

};

export default rules;