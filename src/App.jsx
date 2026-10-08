import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const student = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year"
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <button
        onClick={() => setShowProfile(!showProfile)}
        style={{ marginBottom: "15px" }}
      >
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <>
          <StudentProfile
            name={student.name}
            department={student.department}
            year={student.year}
            count={count}
          />

          <button onClick={() => setCount(count + 1)}>
            Complete Practice
          </button>

          <button
            onClick={() => setCount(0)}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
