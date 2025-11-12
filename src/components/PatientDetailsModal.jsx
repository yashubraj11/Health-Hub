import React, { useState } from "react";
import "../CSS/PatientDetailsModal.css";

const PatientDetailsModal = ({ patient, onClose, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPatient, setEditedPatient] = useState({ ...patient });

  const handleSave = () => {
    onEdit(editedPatient);
    setIsEditing(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {!isEditing ? (
          <>
            <h2 className="modal-title">{patient.name}</h2>

            {/* 🔹 Horizontal layout for patient details */}
            <div className="details-row">
              <div className="detail-item">
                <div className="detail-label">ID</div>
                <div className="detail-value">{patient.id}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Age</div>
                <div className="detail-value">{patient.age}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Contact</div>
                <div className="detail-value">{patient.contact}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Email</div>
                <div className="detail-value">{patient.email}</div>
              </div>
              <div className="detail-item full-width">
                <div className="detail-label">Address</div>
                <div className="detail-value">{patient.address}</div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => onDelete(patient.id)}>
                Delete
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="modal-title">Edit Patient</h2>
            <div className="edit-form">
              <input
                type="text"
                value={editedPatient.name}
                onChange={(e) =>
                  setEditedPatient({ ...editedPatient, name: e.target.value })
                }
                placeholder="Name"
              />
              <input
                type="number"
                value={editedPatient.age}
                onChange={(e) =>
                  setEditedPatient({ ...editedPatient, age: e.target.value })
                }
                placeholder="Age"
              />
              <input
                type="text"
                value={editedPatient.contact}
                onChange={(e) =>
                  setEditedPatient({
                    ...editedPatient,
                    contact: e.target.value,
                  })
                }
                placeholder="Contact"
              />
              <input
                type="email"
                value={editedPatient.email}
                onChange={(e) =>
                  setEditedPatient({
                    ...editedPatient,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
              />
              <input
                type="text"
                value={editedPatient.address}
                onChange={(e) =>
                  setEditedPatient({
                    ...editedPatient,
                    address: e.target.value,
                  })
                }
                placeholder="Address"
              />
            </div>

            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
      
    </div>
    
  );
};

export default PatientDetailsModal;
