import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PatientCard from "../components/PatientCard";
import PatientDetailsModal from "../components/PatientDetailsModal";
import "../CSS/Patients.css";
import bgImage from "../assets/Banner.jpg";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
    address: "",
  });

  // Fetch patient data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => ({
          id: p.id,
          name: p.name,
          age: Math.floor(Math.random() * 30) + 20,
          contact: p.phone,
          email: p.email,
          address: `${p.address.city}, ${p.address.street}`,
        }));
        setPatients(formatted);
        setFiltered(formatted);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch patient data")
        setLoading(false);
      });
  }, []);

  // Search handler
  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    const result = patients.filter((p) =>
      p.name.toLowerCase().includes(val)
    );
    setFiltered(result);
  };

  // Add new patient
  const handleAddPatient = (e) => {
    e.preventDefault();
    if (!newPatient.name || !newPatient.age || !newPatient.contact) return;

    const newEntry = { ...newPatient, id: patients.length + 1 };
    const updatedList = [newEntry, ...patients];
    setPatients(updatedList);
    setFiltered(updatedList);
    setNewPatient({ name: "", age: "", contact: "", email: "", address: "" });
    setShowForm(false);
  };

  // 🗑️ Delete patient
  const handleDelete = (id) => {
    const updatedList = patients.filter((p) => p.id !== id);
    setPatients(updatedList);
    setFiltered(updatedList);
    setSelectedPatient(null);
  };

  // ✏️ Edit patient
  const handleEdit = (updatedPatient) => {
    const updatedList = patients.map((p) =>
      p.id === updatedPatient.id ? updatedPatient : p
    );
    setPatients(updatedList);
    setFiltered(updatedList);
    setSelectedPatient(updatedPatient);
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <>
      <Header />
      <div
        className="patients-container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2>Patient Records</h2>

        {/* Search + Add button */}
        <div className="top-controls">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={handleSearch}
            className="search-bar"
          />
          <button className="add-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close" : "Add New Patient"}
          </button>
        </div>

        {/* Add new patient form */}
        {showForm && (
          <form className="add-patient-form" onSubmit={handleAddPatient}>
            <input
              type="text"
              placeholder="Name"
              value={newPatient.name}
              onChange={(e) =>
                setNewPatient({ ...newPatient, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={newPatient.age}
              onChange={(e) =>
                setNewPatient({ ...newPatient, age: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Contact"
              value={newPatient.contact}
              onChange={(e) =>
                setNewPatient({ ...newPatient, contact: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newPatient.email}
              onChange={(e) =>
                setNewPatient({ ...newPatient, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Address"
              value={newPatient.address}
              onChange={(e) =>
                setNewPatient({ ...newPatient, address: e.target.value })
              }
            />
            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        )}

        {/* Patients list */}
        <div className="patients-grid">
          {filtered.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onView={() => setSelectedPatient(patient)}
            />
          ))}
        </div>
      </div>

      {/* Modal for selected patient */}
      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        
      )}
       <footer className="footer">
        <p>© {new Date().getFullYear()} Health Hub | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Patients;
