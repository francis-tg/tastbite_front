import React from 'react';

const ListItemWithCheckbox = ({ className, keyName, value }) => {
  return (
    <li key={keyName} className={className}>
      <label className="custom-checkbox-label">
        <input type="checkbox" className="custom-checkbox-input" />
        
        <span className="custom-checkbox-checkmark"></span>
        {`${keyName}: ${value}`}
      </label>
    </li>
  );
};

export default ListItemWithCheckbox;
