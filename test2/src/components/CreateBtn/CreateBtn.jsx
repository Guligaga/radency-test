import { useDispatch } from 'react-redux';
import { togglePopup } from '../../redux/actions/generalsActions';
import './CreateBtn.scss';


function CreateBtn() {
    const dispatch = useDispatch();

    function showPopup() {
        dispatch(togglePopup())
        document.body.classList.toggle('locked');
    }

    return (
        <fieldset className="note-creation">
            <button onClick={showPopup} className="note-creation__btn">Create Note</button>
        </fieldset>
    );
}

export default CreateBtn;
