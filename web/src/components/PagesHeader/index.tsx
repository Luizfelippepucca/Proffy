import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../Assets/images/logo.svg';
import backIcon from "../../Assets/images/icons/back.svg";
import'./estilo.css';

interface PageHeaderProps{
    title: string;
    description?: string;
}



const PagesHeader:React.FC<PageHeaderProps>= (props) =>{
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                  <img src={backIcon} alt="link voltar página"/>
                </Link>
                <img src={logoImg} alt="logo Proffy"/>
            </div>
            <div className="header-content">
             <strong>{props.title}</strong>
             {props.description &&<p>{props.description}</p>}
             {props.children}
            </div>
            
        </header>

    );
}
export default PagesHeader;