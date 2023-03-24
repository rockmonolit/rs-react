import React from 'react';
import Header from '../header';
import Form from '../form/Form';

function FormPage() {
  return (
    <>
      <Header currentPage="Form" />
      <div className="wrapper">
        <h1>Please, fill the form below</h1>
        <Form />
        <div className="cardsContainer formCardsContainer"></div>
      </div>
    </>
  );
}

export default FormPage;
