import React from 'react';
import Header from '../header/header';
import Form from '../form/form';

function FormPage() {
  return (
    <>
      <Header currentPage="Form" />
      <div className="wrapper">
        <h1>Please, fill the form below</h1>
        <Form />
      </div>
    </>
  );
}

export default FormPage;
