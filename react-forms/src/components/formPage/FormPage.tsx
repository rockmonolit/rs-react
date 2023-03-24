import React from 'react';
import Header from '../header';
import Form from '../form/Form';
import FormModal from './FormModal';

function FormPage() {
  return (
    <>
      <Header currentPage="Form" />
      <div className="wrapper">
        <h1>Please, fill the form below</h1>
        <FormModal />
        <Form />
        <div className="cardsContainer formCardsContainer"></div>
      </div>
    </>
  );
}

export default FormPage;
