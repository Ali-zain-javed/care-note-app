import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const CreateCareNotesScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-2 ml-[-4px]">
      <Button onClick={() => setIsModalOpen(true)} className="bg-green-600 cursor-pointer">
        + Add Note
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="text-2xl">Care Notes</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Modal>
    </div>
  );
};

export default CreateCareNotesScreen;
