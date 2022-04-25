import React from 'react';

const RuleBox = ({rule}) => {
  const {description} = rule
  return (
    <div className="rule-box d-flex align-items-center p-3 mb-5">
      <p className="m-0">{description}</p>
    </div>
  );
};

export default RuleBox;