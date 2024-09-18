import React from 'react';

function Alert({ alert }) {
  if (!alert) {
    return null; 
  }

  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      <strong>{alert.message}</strong>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;
