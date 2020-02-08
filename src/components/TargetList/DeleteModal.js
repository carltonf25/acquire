import React from 'react';
import { useSpring, animated } from 'react-spring';

const DeleteModal = ({ deleteTarget, target, setModalOpen }) => {

    const slideDown = useSpring({
        to: { opacity: 1, marginTop: 0 },
        from: { opacity: 0, marginTop: -500 },
    });

    return (
        <div className="overlay">
            <animated.div style={slideDown} className="modal delete-confirm">
                <h2>Are you sure you want to delete {target.name}?</h2>
                <button className="btn primary delete" onClick={() => deleteTarget(target.id)}>Yes, I'm sure</button>
                <button className="btn secondary" onClick={() => setModalOpen(false)}>Nevermind!</button>
            </animated.div>
        </div>
    )
}

export default DeleteModal;