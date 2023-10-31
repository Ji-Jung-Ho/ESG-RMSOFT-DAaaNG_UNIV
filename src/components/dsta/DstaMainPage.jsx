import React, { useState } from 'react';
import DstaMainModal from './DstaMainModal';

export default function DstaMainPage() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main id='main'>
      <div className="container">
        <h2>d스타 메인</h2>
        <button onClick={openModal}>모달 열기</button>
      </div>
      {isModalOpen && <DstaMainModal closeModal={closeModal} />}
    </main>
  );
};





