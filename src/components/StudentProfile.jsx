function StudentProfile({ name, department, year }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px 0"
      }}
    >
      <h3>{name}</h3>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default StudentProfile;
