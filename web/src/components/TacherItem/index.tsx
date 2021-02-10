import React from "react";

import whatsappicon from '../../assets/images/icons/whatsapp.svg';
import api from "../../services/api";

import "./styles.css";


export interface Classes {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}


interface ClassesItemProps {
  classes_info: Classes;
}

const TeacherItem: React.FC<ClassesItemProps> = ({ classes_info }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: classes_info.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img
          src={classes_info.avatar}
          alt={classes_info.name}
        />
        <div>
          <strong>{classes_info.name}</strong>
          <span>{classes_info.subject}</span>
        </div>
      </header>
      <p>
        {classes_info.bio}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {classes_info.cost}</strong>
        </p>

        <a onClick={createNewConnection} href={`https://wa.me/${classes_info.whatsapp}`}>
          <img src={whatsappicon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
