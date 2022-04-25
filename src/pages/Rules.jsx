// CONFIG IMPORTS
import React, {useEffect} from 'react';
import RuleBox from '../components/Rulebox';

// COMPONENTS IMPORTS
import RuleCard from '../components/RuleCard';

// DATA IMPORTS
import rules from '../data/Rules';

const Rules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rules bg2 margin-mobile">
      <div className="container d-flex justify-content-center">
        <div className="box border-radius-5 p-3 my-3">
          <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">How it works</h1>

          { 
            rules.rulespage.map((rule) => {
              return (
                <RuleBox rule={rule} key={rule.description} />
              )
            })
          }





          {/* <ul>
            <li className="mb-2">Can't ask for money or donations</li>
            <li className="mb-2">All help is free. Nobody gets paid, ever</li>
            <li className="mb-2">The "ask" has to be well defined in advance. Anyone signing up to help you has to know exactly what they are getting into</li>
            <li className="mb-2">Spammers or salesmen abusing the platform get banned</li>
            <li className="mb-2">Reviewing how the encounter went is mandatory for everyone involved</li>
            <li className="mb-2">People's identities should be verified to ensure accountability and prevent abuse</li>
            <li className="mb-2">The one getting the help has to participate and help the helpers in every way they can</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Rules;
