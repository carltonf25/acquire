import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import AppContext from '../../AppContext';
import { useSpring, animated } from 'react-spring';
import editIcon from '../../assets/img/edit-icon.png';

// components
import InfoCard from './InfoCard';
import MetricCard from './MetricCard';
import EditModal from './EditModal';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'August',
    Stock: 20,
  },
  {
    name: 'September',
    Stock: 23,
  },
  {
    name: 'October',
    Stock: 22,
  },
  {
    name: 'November',
    Stock: 28,
  },
  {
    name: 'December',
    Stock: 30,
  },
  {
    name: 'January',
    Stock: 32,
  },
  {
    name: 'February',
    Stock: 36.3,
  },
];

const TargetDetails = () => {
  let { id } = useParams();
  const appContext = useContext(AppContext);
  const { targets, setTargets } = appContext;

  // component state
  let [modalOpen, setModalOpen] = useState(false);

  // format numbers with commas
  let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // retrieve target with ID matching URL parameter
  let target = targets.filter(t => {
    return t.id === id;
  });
  // grab target from filtered array
  target = target[0];

  const slideLeft = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -100 },
  });
  return (
    <animated.div style={slideLeft}>
      {modalOpen && <EditModal setModalOpen={setModalOpen} target={target} />}
      <div className="details-page">
        <div className="card-block">
          <InfoCard
            name={target.name}
            status={target.status}
            contact={target.contact}
          />
          <MetricCard metric={numberWithCommas(target.grossProfit)} title="GROSS PROFIT" />
          <MetricCard metric={numberWithCommas(target.cashFlow)} title="CASH FLOW" />
          <MetricCard metric={numberWithCommas(target.stockPrice)} title="STOCK PRICE" />
          <button
            className="btn secondary edit-btn"
            onClick={() => setModalOpen(true)}
          >
            EDIT
          </button>
        </div>
        <div className="target-summary">
          <h2>Summary</h2>
          <p>{target.summary}</p>
        </div>
        <div className="chart-container">
          <h2>Stock Price</h2>
          <ResponsiveContainer height={300} width="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Stock"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </animated.div>
  );
};

export default TargetDetails;
