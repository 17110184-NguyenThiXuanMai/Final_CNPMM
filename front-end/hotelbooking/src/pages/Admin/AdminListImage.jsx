import React, { useState } from 'react';
import Title from '../../components/HomePage/ListImage/Title';
import UploadForm from '../../components/HomePage/ListImage/UploadForm';
import ImageGrid from '../../components/HomePage/ListImage/ImageGrid';
import Modal from '../../components/HomePage/ListImage/Modal';

function AdminListImage() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default AdminListImage;
