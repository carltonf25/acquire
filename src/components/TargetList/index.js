import React, { useContext, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.scss';
import AppContext from '../../AppContext';
import TargetCard from './TargetCard';
import DeleteModal from './DeleteModal';

export const TargetList = () => {
  const appContext = useContext(AppContext);
  const { targets, setTargets, toastMessage } = appContext;

  let [modalOpen, setModalOpen] = useState(false);
  let [selectedTarget, setSelectedTarget] = useState(null);

  const deleteTarget = id => {
    let targetsCopy = [...targets];

    let newTargetsArray = targetsCopy.filter(target => {
      return target.id !== id;
    });

    setTargets(newTargetsArray);
    setModalOpen(false);
    toastMessage('Target deleted successfully 👍');
  };

  const openModal = target => {
    setSelectedTarget(target);
    setModalOpen(true);
  };

  const slideLeft = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -100 },
  });

  return (
    <>
      <div className="wrapper">
        {modalOpen && (
          <DeleteModal
            deleteTarget={deleteTarget}
            target={selectedTarget}
            setModalOpen={setModalOpen}
          />
        )}
        <animated.div style={slideLeft}>
          <h1>Your Targets</h1>
          <div className="target-card-container">
            {targets.map(target => (
              <TargetCard openModal={openModal} target={target} />
            ))}
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default TargetList;
