import React from "react";

const SkillPoint = ({ skill, dataValue }) => {
  return (
    <div className="progress-inner" data-value={dataValue}>
      <span>
        <span className="label">{skill}</span>
        <span className="number">{`${dataValue}%`}</span>
      </span>
      <div className="bar_background">
        <div className="bar">
          <div className="bar-in" style={{width: dataValue + "%"}}/>
        </div>
      </div>
    </div>
  );
};

export default SkillPoint;
