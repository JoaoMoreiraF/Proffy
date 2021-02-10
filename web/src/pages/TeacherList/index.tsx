import React, { FormEvent, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TeacherItem, { Classes } from "../../components/TacherItem";

import "./styles.css";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [classes, setClasses] = useState([]);

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setClasses(response.data);

  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value = {subject}
            onChange = { (event)=> { setSubject(event.target.value) }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
              { value: "Literatura", label: "Literatura" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            value = {week_day}
            onChange = { (event)=> { setWeekDay(event.target.value) }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            value = {time}
            onChange = { (event)=> { setTime(event.target.value) }}
          />
          <button type="submit">
            Buscar
          </button>

        </form>
      </PageHeader>
      <main>

        {classes.map((classes: Classes) => {
          return <TeacherItem key={classes.id} classes_info = {classes}/>
        })}
      </main>
    </div>
  );
}

export default TeacherList;
