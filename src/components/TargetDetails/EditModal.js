import React, { useState, useContext, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AppContext from '../../AppContext';

const EditModal = ({ target, setModalOpen }) => {
  const slideDown = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
  });

  let [name, setName] = useState(target.name);
  let [summary, setSummary] = useState(target.summary);
  let [contact, setContact] = useState(target.contact);
  let [status, setStatus] = useState(target.status);
  let [grossProfit, setGrossProfit] = useState(target.grossProfit);
  let [cashFlow, setCashFlow] = useState(target.cashFlow);
  let [stockPrice, setStockPrice] = useState(target.stockPrice);
  let [yearEstablished, setYearEstablished] = useState(target.yearEstablished);
  const id = target.id;

  const appContext = useContext(AppContext);

  const { targets, setTargets, toastMessage } = appContext;

  const handleSubmit = async e => {
    e.preventDefault();

    let targetsCopy = [...targets];

    let editedTarget = {
      id,
      name,
      summary,
      contact,
      yearEstablished,
      status,
      grossProfit,
      cashFlow,
      stockPrice,
    };

    let targetIndex = targetsCopy.findIndex(t => t.id === id);
    targetsCopy[targetIndex] = editedTarget;

    setTargets(targetsCopy);
    setModalOpen(false);
    toastMessage(`Target updated successfully 👍`);
  };

  const closeOnClickOutside = () => {
    let modalOverlay = document.querySelector('.overlay');

    modalOverlay.addEventListener('click', event => {
      if (event.target.className === 'overlay') {
        setModalOpen(false);
      }
    });
  };

  useEffect(() => {
    closeOnClickOutside();
  }, []);

  return (
    <div className="overlay">
      <animated.div style={slideDown} className="modal edit-modal">
        <button className="close-btn" onClick={() => setModalOpen(false)}>×</button>
        <div className="form-container">
          <form>
            <h3>Basic info:</h3>
            <label>Name</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label>Year Established</label>
            <br />
            <input
              type="text"
              value={yearEstablished}
              onChange={e => setYearEstablished(e.target.value)}
            />
            <label>Contact</label>
            <input
              type="text"
              value={contact}
              onChange={e => setContact(e.target.value)}
            />
            <label>Summary</label>
            <textarea
              value={summary}
              onChange={e => setSummary(e.target.value)}
            />
            <label>Status</label>
            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option>Select a status</option>
              <option>In Review</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Denied</option>
            </select>
            <h3>Key Metrics:</h3>
            <label>Gross Profit: </label>
            <br />
            <input
              type="text"
              value={grossProfit}
              onChange={e => setGrossProfit(e.target.value)}
            />
            <br />
            <label>Cash Flow: </label>
            <input
              type="text"
              value={cashFlow}
              onChange={e => setCashFlow(e.target.value)}
            />
            <br />
            <label>Stock Price: </label>
            <input
              type="text"
              value={stockPrice}
              onChange={e => setStockPrice(e.target.value)}
            />
            <br />
            <input
              type="submit"
              value="Update Target"
              className="btn primary"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </animated.div>
    </div>
  );
};

export default EditModal;
