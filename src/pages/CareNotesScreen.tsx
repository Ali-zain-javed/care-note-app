import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

const CreateCareNotesScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ residentName: '', authorName: '', content: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="p-2 ml-[-4px]">
      <Button onClick={() => setIsModalOpen(true)} className="bg-green-600 cursor-pointer">
        + Add Note
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="border border-gray-300 bg-gray-200 p-4 rounded w-[500px] mt-[-90px] ">
          <h2 className="text-xl font-semibold mb-4 bg-gray-300 p-2">Add Care Note</h2>
          <div className="p-4 bg-white">
            <label className="block mb-2 font-semibold">Resident Name:</label>
            <Input
              name="residentName"
              onChange={handleChange}
              className="border border-black p-2 w-full mb-4"
            />

            <label className="block mb-2 font-semibold">Author Name:</label>
            <Input
              name="authorName"
              onChange={handleChange}
              className="border border-black p-2 w-full mb-4"
            />

            <label className="block mb-2 font-semibold">Note Content:</label>
            <TextArea
              name="content"
              onChange={handleChange}
              className="border border-black p-2 w-full mb-4 h-24"
            />

            <div className="flex justify-start space-x-4">
              <Button
                label="Submit"
                onClick={handleSubmit}
                className="bg-green-500 text-white px-6"
              />
              <Button
                label="Cancel"
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-6"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateCareNotesScreen;
