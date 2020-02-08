import React from 'react';
import style from './style.scss';

const StatusBadge = ({ status }) => {
  let getColor = status => {
    let colorScheme;
    switch (status) {
      case 'In Review':
        colorScheme = 'inReview';
        break;

      case 'Pending':
        colorScheme = 'pending';
        break;

      case 'Approved':
        colorScheme = 'approved';
        break;

      case 'Denied':
        colorScheme = 'denied';
        break;

      default:
        break;
    }
    console.log(style.pending);
    return colorScheme;
  };
  return (
    <div
      className={`status-badge + ${getColor(status)}`}
    >
      {status}
    </div>
  );
};

export default StatusBadge;
