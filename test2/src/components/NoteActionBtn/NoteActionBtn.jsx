import { useDispatch, useSelector } from "react-redux";
import { actions as actionLogos } from "../../constants/logos";

import {
    archivateNote, 
    unarchivateNote, 
    deleteNote
} from "../../redux/actions/notesActions";

import { togglePopup } from "../../redux/actions/generalsActions";



function NoteActionBtn({ type, id }) {
    const dispatch = useDispatch();
    const { notes } = useSelector(state => state);

    const getAction = () => {
        switch(type) {
            case 'update':
                return togglePopup(notes[id]);
            case 'archivate':
                return archivateNote(notes[id]);
            case 'unarchivate':
                return unarchivateNote(notes[id]);
            case 'delete':
                return deleteNote(notes, id);
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
