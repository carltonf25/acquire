import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './style.scss';
import TargetContext from '../../TargetContext';
import TargetCard from './TargetCard';
import DeleteModal from './DeleteModal';

export const TargetList = () => {
  const appContext = useContext(TargetContext);
  const { targets, setTargets } = appContext;

  let [modalOpen, setModalOpen] = useState(false);
  let [selectedTarget, setSelectedTarget] = useState(null);

  const deleteTarget = (id) => {
    let targetsCopy = [...targets];

    let newTargetsArray = targetsCopy.filter(target => {
      return target.id !== id
    });

    setTargets(newTargetsArray);
    setModalOpen(false);
  }

  const openModal = async (target) => {
    await setSelectedTarget(target);
    await setModalOpen(true);
  }


  const slideLeft = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -100 },
  });
  return (

    <>
      {modalOpen && <DeleteModal deleteTarget={deleteTarget} target={selectedTarget} setModalOpen={setModalOpen} />}
      <animated.div style={slideLeft}>
        <div className="wrapper">
          <h1>Your Targets</h1>
          <div className="target-card-container">
            {targets.map(target => (
              <TargetCard openModal={openModal} target={target} />
            ))}
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default TargetList;
