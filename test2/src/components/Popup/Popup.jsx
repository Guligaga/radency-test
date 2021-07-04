import './Popup.scss';
import PopupSelect from './PopupSelect';

import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../redux/actions/generalsActions';
import { createNote, updateNote } from "../../redux/actions/notesActions";
import { useState } from 'react';

function Popup() {
	const {popupData} = useSelector(state => state.generals);
    const dispatch = useDispatch();
	const [name, setName] = useState(popupData.name || '');
	const [category, setCategory] = useState(popupData.category || 'task');
	const [content, setContent] = useState(popupData.content || '');


	function hidePopup() {
		dispatch(togglePopup(null));
		document.body.classList.toggle('locked');
	}

	function onWindowClickHandler(e) {
		if(e.target.classList.contains('popup')) {
			hidePopup()
		}
	}

	function onFormSubmitHandler(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData);
		const notEmpty = [...formData.values()].filter(Boolean);

		if(notEmpty.length === [...formData].length) {
			if(Object.keys(popupData).length) {
				dispatch(updateNote({...popupData, ...formDataObj}));
			} else {
				dispatch(createNote(formDataObj));
			}
			
			hidePopup()
		}
	}

	
	return (
		<div className="popup" onClick={e => onWindowClickHandler(e)}>
			<form className="popup__form" onSubmit={e => onFormSubmitHandler(e)}>
				<input 
					className="popup__input" 
					type="text" 
					name="name" 
					id="popup-name" 
					placeholder="Title..." 
					value={name}
					onChange={e => setName(e.target.value)}
				></input>
				<PopupSelect value={category} setCategory={setCategory}/>
				<textarea 
					className="popup__textarea" 
					name="content" 
					id="popup-content" 
					placeholder="Write down a note..." 
					value={content}
					onChange={e => setContent(e.target.value)}
				></textarea>
				<button className="popup__btn" type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Popup;