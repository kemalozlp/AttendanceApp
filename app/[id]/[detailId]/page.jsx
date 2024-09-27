"use client"
import "./studentdetail.css"
import ClassData from "../../data.json";
import Link from "next/link";

export default function StudentDetail({ params }) {
  console.log(params)
  const { detailId } = params;
  const data = ClassData.map(x => x.students.find(x => x.detailId === Number(detailId)));
  console.log(data);


  return (
    <div className="studentdetailContainer">
      <div className="StudentList"> 
        {data.map(x =>
        (<div className="studentcart" key={x.id}>
          <div className="studentHead">
            <Link href="/">Geri Dön</Link>
            <h1>{x.name}</h1>
          </div>
          <div className="detail">
            <p>Cinsiyet: <span>{x.gender}</span></p>
            <p>Numara: <span>{x.number}</span></p>
            <p>E-Posta: <span>{x.email}</span></p>
            <p>Doğum Tarihi: <span>{x.birthDate}</span></p>
            <p>Devamsızlık Sayısı: <span>{x.absenteeism}</span></p>
          </div>
        </div>))}
      </div>
    </div>
  )
}