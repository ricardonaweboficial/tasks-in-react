import React,{ Fragment } from 'react';
import './styles.css';

import api from '../../services/api';


function DeleteTask({ handlePopup, setHandlePopup, allTask ,setAllTask, oneIdTask }) {

	async function handleDeleteTask() {
		await api.delete(`/geeks/${oneIdTask}`)

		setHandlePopup(0);	

	}

	return (
		<Fragment>
		{handlePopup === 1 ? (
			<div id="modelDelete">
				<div className="popupDelete">
					<div className="title">
						<p>Deseja <strong>excluir</strong> esta tarefa?</p>
					</div>
					<div className="options">
						<button onClick={handleDeleteTask}>Excluir</button>
						<button onClick={() => setHandlePopup(0)}>Cancelar</button>
					</div>
				</div>
			</div>
		) : ''}
		</Fragment>
	);
}


export default DeleteTask;