import React from "react";

const PatientCard = ({ patient, onView }) => {
  return (
    <div className="patient-card" role="button" onClick={onView} tabIndex={0} onKeyDown={(e)=>{ if(e.key=== 'Enter') onView(); }}>
      <h3>{patient.name}</h3>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Contact:</strong> {patient.contact}</p>
      <p><strong>Email:</strong> {patient.email}</p>
      <p><strong>Address:</strong> {patient.address}</p>
      <button
        className="view-btn"
        onClick={(e) => {
          e.stopPropagation(); // prevent double trigger
          onView();
        }}
        aria-label={`View details for ${patient.name}`}
      >
        View Details
      </button>
    </div>
  );
};

export default PatientCard;
