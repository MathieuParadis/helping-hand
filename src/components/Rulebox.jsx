import React from 'react';

const RuleBox = ({rule}) => {
  const {description} = rule
  return (
    <div className="rule-box">
      <p>{description}</p>
    </div>
  );
};

export default RuleBox;