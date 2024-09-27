"use client"
import "./student.css"
import ClassData from "../data.json";
import Link from "next/link";
import Image from "next/image";

export default function Student({ params }) {
  const { id } = params;

  const data = ClassData.find(x => x.id === Number(id));

  console.log(data);

  return (
    <div className="studentContainer">
      <h1>{data.name}</h1>
      <div className="StudentList">
        {data.students.map(x =>
          <div className="studentItem" key={x.id}>
            <h1>{x.name}</h1>
            <div className="studentFooter"> 
              <Link href={"/" + id + "/" + x.detailId}><Image width={30} height={30} src="/rightarrow.png" /></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}