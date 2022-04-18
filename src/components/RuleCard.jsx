// CONFIG IMPORTS
import React from 'react';

const RuleCard = ({rule}) => {
  return (
    <div className="rule-card py-3">
      <div className="card-content d-flex flex-column">
        <img src={rule.img} alt={rule.title + " illustration"} className="illustration align-self-center" />
        <h4 className="fw-bold text-white text-center mb-3 pt-2">{rule.title}</h4>
        <p className="mx-3 mb-0 text-white text-center">{rule.description}</p>
      </div>
    </div>
  );
};

export default RuleCard;