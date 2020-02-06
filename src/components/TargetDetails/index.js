import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../../mockTargetData';
import './style.scss';

// components
import InfoCard from './InfoCard';
import MetricCard from './MetricCard';

const TargetDetails = () => {
  let [target, setTarget] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let getTarget = () => {
      let target = mockData.filter(target => {
        return target.id === Number(id);
      });
      setTarget(target[0]);
    };

    getTarget();
  }, []);

  return (
    <div className="details-page">
      <div className="card-block">
        <InfoCard
          name={target.name}
          status={target.status}
          contact={target.contact}
        />
        <MetricCard metric={target.grossProfit} title="GROSS PROFIT" />
        <MetricCard metric={target.cashFlow} title="CASH FLOW" />
        <MetricCard metric={target.stockPrice} title="STOCK PRICE" />
      </div>
      <div className="target-summary">
        <h2>Summary</h2>
        <p>{target.summary}</p>
      </div>
      <div className="chart-container">
        <h3>CHART HERE</h3>
      </div>
    </div>
  );
};

export default TargetDetails;
