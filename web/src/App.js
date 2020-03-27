import React, { useState, useEffect } from 'react';

// Components
import ModifyTask from './components/ModifyTask/index';
import DeleteTask from './components/DeleteTask/index';



import api from './services/api';
//React mais API's


//Icons
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
//*

//CSS
import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';
//*


function App() {

  //Task Variables
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  //Popup modify
  const [popup, setPopup] = useState(0); 

  //Modify Task Variable
  const [ task, setTask ] = useState('');
  const [ idTask, setIdTask ] = useState('')

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('/geeks');
      setTasks(response.data);
    }

    loadTasks();
  }, [tasks]);


  // Function Add Task
  async function handleAddTask(e) {
    e.preventDefault();

    let dateLocal = new Date();
    
    
      
    let dateInMonth = [dateLocal.getUTCDate() ,(dateLocal.getUTCMonth() + 1 )]

    
    const response = await api.post('/geeks', {
      name,
      title,
      description,
      date: dateInMonth.join('/')
    });

    
    setTitle('');
    setDescription('');

    setTasks([...tasks, response.data]);
  }
  // End Function Add Task




  async function handlePopupModify(id, task) {

    setIdTask(id);

    setTask(task);

    setPopup(2);
  }

  // Function Task delete
  async function handleDeleteTask(id) {

    setIdTask(id);

    setPopup(1);    

    // await api.delete(`/geeks/${id}`)

    // setTasks(tasks.filter(task => task._id !== id));

  }
  // End Function Task delete



  return (


    <div id="app">
      <aside>
        <strong>Cadastrar Tarefa</strong>
        <form onSubmit={handleAddTask}>

          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input 
              name="name" 
              id="name" 
              required
              value={name}
              title="Seu nome"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="title">Título</label>
            <input 
              name="title" 
              id="title" 
              required
              value={title}
              title="O título"
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="description">Descrição</label>
            <textarea 
              name="description" 
              id="description" 
              required
              value={description}
              title="A descrição"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <button type="submit">Inserir Tarefa</button>
        </form>
      </aside>

      <main>

        {popup === 1 ? (
          <DeleteTask 
            handlePopup={popup} 
            setHandlePopup={ setPopup}
            allTasks={tasks}
            setAllTasks={setTasks}
            oneIdTask={idTask}
          /> 
          ) : ''}

        {popup === 2 ? 
          (<ModifyTask
            handlePopup={popup} 
            setHandlePopup={ setPopup}
            setAllTasks={setTasks}
            allTasks={tasks}
            oneTask={task}
            oneIdTask={idTask}
          />) : ''}



        <ul>
          {tasks.map(task => (
            <li key={task._id} className="task-item">
               <header>
                 <div className="task-info">  
                    <strong>{task.title}</strong>
                    
                 </div>
                 <div className="iconsMethod">

                    <MdDeleteForever 
                      title="Excluir Tarefa" 
                      onClick={() => handleDeleteTask(task._id)}
                      className="icons"
                    />

                    <MdModeEdit 
                      title="Modificar Tarefa"
                      onClick={() => handlePopupModify(task._id, task)}
                      className="icons"

                    />

                 </div>
               </header>
               <p>{task.description}</p>
               <div className="name-a-date">
                 <small>Nome: {task.name}</small>
                 <small>Dia: {task.date}</small>
               </div>
            </li>
          ))}
  
          
         
       </ul>
      </main>
    </div>
  );
}



export default App;
