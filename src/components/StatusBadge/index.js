import React from 'react';
import './style.scss';

const StatusBadge = ({ status }) => {
  let getColor = status => {
    switch (status) {
      case 'In Review':
        return '#c6f6fc';
        break;

      case 'Pending':
        return '#f9fbc0';
        break;

      case 'Approved':
        return '#15ff9c';
        break;

      case 'Denied':
        return 'tomato';
        break;

        return '#eff3f9';
      default:
        break;
    }
  };
  return (
    <div
      style={{
        backgroundColor: getColor(status),
      }}
      className="status-badge"
    >
      {status}
    </div>
  );
};

export default StatusBadge;
