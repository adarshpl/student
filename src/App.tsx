import "./styles.css";
import Form from "./Form/StudentRegistration";
import Tileview from "./Tileview/Tileview";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import studentDetail from "../studentDetail";

export default function App() {
  const [count, setCount] = useState();
  const [students, setStudents] = useState<any>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const temp = studentDetail(response.data);
      setStudents(temp);
      setCount(response.data.length);
    });
  }, []);
  // useEffect(() => {
  //   setCount(students.length);
  // }, [students]);

  return (
    <div className="App">
      <h3>COUNT</h3>
      <input
        className="count"
        type="text"
        value={count}
        onChange={(e: any) => {
          setCount(e.target.value);
        }}
      />

      <Form
        setStudents={setStudents}
        count={count}
        students={students}
        setCount={setCount}
      />
      <Tileview students={students} count={count} setCount={setCount} />
    </div>
  );
}
