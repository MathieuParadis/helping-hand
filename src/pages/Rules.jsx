// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import RuleBox from '../components/Rulebox';

// DATA IMPORTS
import rules from '../data/Rules';

const Rules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rules bg2 margin-mobile">
      <div className="container d-flex justify-content-center mx-0 w-100">
        <div className="box border-radius-5 p-3 my-3">
          <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">How it works</h1>
          { 
            rules.rulespage.map((rule) => {
              return (
                <RuleBox rule={rule} key={rule.description} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Rules;
