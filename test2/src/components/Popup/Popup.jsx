import './Popup.scss';
import PopupSelect from './PopupSelect';

import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../redux/actions/generalsActions';
import { createNote } from "../../redux/actions/notesActions";

function Popup({popupType}) {
	// const {popupVisible} = useSelector(state => state.generals);
    const dispatch = useDispatch();

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
			dispatch(createNote(formDataObj));
			hidePopup()
		}
	}

	
	return (
		<div className="popup" onClick={e => onWindowClickHandler(e)}>
			<form action="" className="popup__form" onSubmit={e => onFormSubmitHandler(e)}>
				<input className="popup__input" type="text" name="name" id="popup-name" placeholder="Title..."></input>
				<PopupSelect />
				<textarea className="popup__textarea" name="content" id="popup-content" placeholder="Write down a note..."></textarea>
				<button className="popup__btn" type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Popup;