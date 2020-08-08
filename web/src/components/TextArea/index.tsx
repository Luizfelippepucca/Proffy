import React, {TextareaHTMLAttributes} from 'react';
import "./style.css";

interface TextAreaprops extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name:string;
    label:string;
}

const Textarea:React.FC <TextAreaprops> =  ({label,name,...rest}) =>{
    return(
        
            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea  name={name} {...rest}/>
            </div>
        
    );
}
export default Textarea;