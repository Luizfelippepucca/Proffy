import React from 'react';
import WhatSapp from '../../Assets/images/icons/whatsapp.svg'
import'./style.css';

export interface Teacher{
        avatar:string,
        bio:string,
        cost:number,
        id:number,
        name:string,
        subject:string,
        whatsapp:string,
}

interface teacherItemProps{
    teacher:Teacher;
}


const TeacherItem:React.FC<teacherItemProps> = ({teacher})=>{
    return(
        <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt={teacher.name}/>
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>
                <p>
                {teacher.bio}
                </p>
                <footer>
                    <p>
                        Preço/hora <strong>R$ {teacher.cost} </strong> 
                    </p>
                    <a href={`https://wa.me/${teacher.whatsapp}`}  >
                        <img src={WhatSapp} alt="entrar em contato via whatsapp"/> Entre em contato
                    </a>
                </footer>
            </article>
    );
}
export default TeacherItem;