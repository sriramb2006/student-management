import { useEffect } from "react";

function StudentProfile({ name, department, year, count }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div style={{ border: "2px solid black", padding: "15px", margin: "10px 0" }}>
      <h3>{name}</h3>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Practice Sessions: {count}</p>
    </div>
  );
}

export default StudentProfile;
