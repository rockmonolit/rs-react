import React from 'react';
import Header from './header/header';

function ErrorPage() {
  return (
    <>
      <Header currentPage="404" />
      <div className="wrapper">
        <h1>404</h1>
        <h1>Something went wrong</h1>
      </div>
    </>
  );
}

export default ErrorPage;
