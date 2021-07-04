import { useDispatch, useSelector } from "react-redux";
import { actions as actionLogos } from "../../constants/logos";

import {
    toggleNoteArchiving,
    deleteNote,
    toggleAllNotesArchiving,
    deleteAllNotes
} from "../../redux/actions/notesActions";

import { togglePopup } from "../../redux/actions/generalsActions";



function NoteActionBtn({ type, id }) {
    const dispatch = useDispatch();
    const { notes, generals: {isArchivedVisible} } = useSelector(state => state);

    const getAction = () => {
        switch(type) {
            case 'update':
                return togglePopup(notes[id]);
            case 'archivate':
                return toggleNoteArchiving(notes[id]);
            case 'delete':
                return deleteNote(notes, id);
            case 'deleteAll':
                return deleteAllNotes();
            case 'archivateAll':
                return toggleAllNotesArchiving(notes, isArchivedVisible);
            default:
                return () => null;
        }
    }

    function performAction() {
        const action = getAction();
        dispatch(action)
    }

    return (
    <div className="list-action">
        <button type="button" onClick={performAction}>
            <img src={actionLogos[type]} alt={type}></img>
        </button>
    </div>
    );
}

export default NoteActionBtn;
