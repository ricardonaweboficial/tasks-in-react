import React,{ useState } from 'react';
import './styles.css';

import api from '../../services/api';


function ModifyTask({ handlePopup, setHandlePopup, setAllTasks, allTasks , oneTask, oneIdTask }) {

	const [nameMod, setNameMod] = useState(oneTask.name);
	const [titleMod, setTitleMod] = useState(oneTask.title);
	const [descriptionMod, setDescriptionMod] = useState(oneTask.description);

	async function handleModifyTask(e) {
		e.preventDefault();

		await api.put(`/geeks/${oneIdTask}`, {
			title: titleMod,
			description: descriptionMod,
			name: nameMod
		});



		setAllTasks(allTasks.map((task, index) => (index === oneIdTask ? oneTask : task )))

		setHandlePopup(0);

	}

	return (
		<div>
		{handlePopup && (
			<div id="model">
				<div className="popup">
					<span id="close" onClick={() => setHandlePopup(false)}>+</span>

					<strong>Modificar Tarefa</strong>

					<form onSubmit={handleModifyTask}>

					  <div className="input-block">
					    <label htmlFor="nameM">Nome</label>
					    <input 
					      name="nameM" 
					      id="nameM" 
					      required
					      value={nameMod}
					      title="Seu nome"
					      onChange={e => setNameMod(e.target.value)}
					    />
					  </div>

					  <div className="input-block">
					    <label htmlFor="titleM">Título</label>
					    <input 
					      name="titleM" 
					      id="titleM" 
					      required
					      value={titleMod}
					      title="O título"
					      onChange={e => setTitleMod(e.target.value)}
					    />
					  </div>

					  <div className="input-block">
					    <label htmlFor="descriptionM">Descrição</label>
					    <textarea 
					      name="descriptionM" 
					      id="descriptionM" 
					      required
					      value={descriptionMod}
					      title="A descrição"
					      onChange={e => setDescriptionMod(e.target.value)}
					    />
					  </div>
					  <button type="submit">Enviar Modificação</button>
					</form>

				</div>

			</div>
		)}
		</div>
	);
}


export default ModifyTask;