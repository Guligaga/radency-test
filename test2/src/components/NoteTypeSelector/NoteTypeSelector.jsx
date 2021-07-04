import '../../vars.scss';
import './NoteTypeSelector.scss';
import { useSelector, useDispatch } from "react-redux";
import { changeNotesTableType } from '../../redux/actions/generalsActions';

function NoteTypeSelector() {
	const dispatch = useDispatch();
	const { isArchivedVisible } = useSelector(state => state.generals);

	function changeHandler(e) {
		dispatch(changeNotesTableType(isArchivedVisible));
	}
	
	return (
		<fieldset className="select-form">
			<label htmlFor="note-selector">Select notes type:</label>
			<select id="note-selector" onChange={ e => changeHandler(e)}>
				<option value="active">Active</option>
				<option value="archived">Archived</option>
			</select>
		</fieldset>
	);
}

export default NoteTypeSelector;