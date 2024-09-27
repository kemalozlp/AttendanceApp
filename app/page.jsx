"use client"
import { useEffect, useState } from "react";
import ClassData from "./data.json";
import "./globals.css"
import Link from "next/link";
import Image from "next/image";

function App() {

  console.log(ClassData);

  const [students, setStudents] = useState(ClassData[0].students.map(student => {
    return {
      ...student,
      isAttended: false
    }
  }))
  const [showAttendance, setShowAttendance] = useState(true);

  console.log(students);

  const handleClick = (studentId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          isAttended: !student.isAttended
        }
      }
      return student;
    });

    setStudents(updatedStudents)
  }


  useEffect(() => {
    console.log(students);

  }, [students])

  return (
    <>
      <div className="studentText">
        <div className="studentLogo">
          <Image width={150} height={150} className="studentimg" src="/logo.png" alt="" />
          <Link href="/"> Acun Medya Akademi  Yoklama Tablosu</Link>
        </div>
        {ClassData.map((x, i) => <Link key={i} className="studentbtn" href={"/" + x.id}> <Image width={65} height={65} src="/student.svg" alt="" /> Öğrenci Listesi</Link>)}
      </div>

      {showAttendance ? (

        <ul className="student">
          {students.map(student => (
            <li style={{ backgroundColor: `${student.isAttended ? "lightgreen" : "white"}` }} key={student.id}>{student.name} <input onClick={() => handleClick(student.id)} type="checkbox" /></li>
          ))}
        </ul>
      ) : (
        <>
          <ul className="studentList">
            {students.map(student  => (
              <li style={{ borderBottom: `${student.isAttended ? "2px solid green" : "2px solid red"}` }} key={student.id}>{student.name}   <span style={{ backgroundColor: `${student.isAttended ? "green" : "darkred"}` }}> {student.isAttended ? "Var" : "Yok"} </span>  </li>
            ))}
          </ul>
          <div className="studentConclusion">
            <span>Katılan öğrenci sayısı : {students.filter(x => x.isAttended).length}</span> <br />
            <span>Katılmayan öğrenci sayısı : {students.filter(x => !x.isAttended).length} </span>
          </div>
        </>

      )}
      <div className="attendancebtn" style={{ display: `${showAttendance ? "block" : "none"}` }}>
        <button onClick={() => { setShowAttendance(false); localStorage.savedStudents = JSON.stringify(students) }}>Yoklamayı Tamamla</button>
      </div>
    </>
  )
}

export default App
