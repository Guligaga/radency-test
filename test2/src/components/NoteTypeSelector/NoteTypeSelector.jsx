import '../../vars.scss';
import './NoteTypeSelector.scss';

function NoteTypeSelector() {
  return (
    <fieldset className="select-form">
        <label htmlFor="note-selector">Select notes type:</label>
        <select id="note-selector">
            <option value="active">Active</option>
            <option value="archived">Archived</option>
        </select>
    </fieldset>
  );
}

export default NoteTypeSelector;