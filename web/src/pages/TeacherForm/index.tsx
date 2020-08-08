import React , {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
import PagesHeader from '../../components/PagesHeader';
import "./style.css";
import Input from '../../components/Input';
import warningIcon from "../../Assets/images/icons/warning.svg";
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherForm(){
    const history = useHistory();

    const [name,setName] =useState('');
    const [avatar,setAvatar] =useState('');
    const [whatsapp,setWhatsapp] =useState('');
    const [bio,setBio] =useState('');

    const [subject,setSubject] =useState('');
    const [cost,setCost] =useState('');
    
    const [ scheduleItems, setScheduleItems] = useState([
        {week_day:0,from:'', to:''},
       
    ]);

    

    function addNewScheduleItem(){

    }

    //setScheduleItemvalue ('0', week_day, '2')

    function setScheduleItemvalue(position:number, field: string, value:string){

        const updateScheduleItems = scheduleItems.map((scheduleItem, index) =>{
            if(index === position){
                return {...scheduleItem, [field]:value};
            }

            return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);

    }

    function handlecreateclass(e:FormEvent){
        e.preventDefault();
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule:scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso');
            history.push('/');
        }).catch(() =>{
            alert('Erro no cadastro');
        })
    }

    return(
    <div id="page-teacher-form" className="container">
        <PagesHeader  title="Que incrível que você quer dar aulas."
         description ="O primeiro passo é prencher este formulário de inscrição."
        />

        <main>
            <form onSubmit={handlecreateclass}>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input
                    name="name" value={name} onChange={(e) =>{setName(e.target.value) }}
                    label="Nome Completo"
                    />
                    <Input
                    name="avatar" value={avatar} onChange={(e) =>{setAvatar(e.target.value) }}
                    label="Avatar"
                    />
                    <Input
                    name="whatsapp" value={whatsapp} onChange={(e) =>{setWhatsapp(e.target.value) }}
                    label="Whatsapp"
                    />
                    <Textarea name="bio" label="Biografia" value={bio} onChange={(e) =>{setBio(e.target.value) }}/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                    name="subject" value={subject} onChange={(e) =>{setSubject(e.target.value) }}
                    label="Matéria"
                    options={[
                        {value:'Artes', label:'Artes'},
                        {value:'Biologia', label:'Biologia'},
                        {value:'Ciências', label:'Ciências'},
                        {value:'Português', label:'Português'},
                        {value:'Matemática', label:'Matemática'},
                        {value:'História', label:'História'},
                        {value:'Física', label:'Física'},
                        {value:'Geografia', label:'Geografia'},
                        {value:'Educação física', label:'Educação física'}
                    ]}
                    />
                    <Input
                    name="cost" value={cost} onChange={(e) =>{setCost(e.target.value) }}
                    label="Custo da sua hora por aula."
                    />
                </fieldset>
                <fieldset>
                    <legend>Horários Disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>
                    
                    {scheduleItems.map((scheduleItem , index) =>{
                        return(
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <Select
                            name="week-day"
                            label="Dia da Semana"
                            value={scheduleItem.week_day}
                            onChange={e => setScheduleItemvalue(index,'week_day', e.target.value)}
                            options={[
                                {value:'0', label:'Domingo'},
                                {value:'1', label:'Segunda-feira'},
                                {value:'2', label:'Terça-feira'},
                                {value:'3', label:'Quarta-feira'},
                                {value:'4', label:'Quinta-feira'},
                                {value:'5', label:'Sexta-feira'},
                                {value:'6', label:'Sabado'},
                                
                                
                            ]}
                            />
                            <Input name="from" 
                            label="À partir"
                            type="time"
                            value={scheduleItem.from}
                            onChange={e => setScheduleItemvalue(index,'from', e.target.value)}
                             />
                            <Input name="to" 
                            label="Até" 
                            type="time"
                            value={scheduleItem.to}
                            onChange={e => setScheduleItemvalue(index,'to', e.target.value)}
                            />
                        </div>
                        );
                    })}
                    
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Imporante!<br/>
                        Preencha todos os dados.
                    </p>
                    <button type="submit">Salvar cadastro</button>
                </footer>
            </form>  
        </main>
    </div>
    ) 
}

export default TeacherForm;