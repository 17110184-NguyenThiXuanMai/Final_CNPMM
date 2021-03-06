import React, { useState } from 'react';
import Title from '../../components/HomePage/Title';
import ImageGrid from '../../components/HomePage/ListImage/ImageGrid';
import Modal from '../../components/HomePage/ListImage/Modal';
import ButtonFilter from '../../components/HomePage/ListImage/ButtonFilter';

function ListImage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="booking">
      <div className="container">
      <Title title="Photo Library" />
      <ButtonFilter />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      </div>
    </div>
  );
}

export default ListImage;
