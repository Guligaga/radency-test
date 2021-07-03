import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../redux/actions/generalsActions';
import './CreateBtn.scss';


function CreateBtn() {
    // const {popupVisible} = useSelector(state => state.generals);
    const dispatch = useDispatch();

    function showPopup() {
        dispatch(togglePopup('create'))
        document.body.classList.toggle('locked');
    }

    return (
        <fieldset className="note-creation">
            <button onClick={showPopup} className="note-creation__btn">Create Note</button>
        </fieldset>
    );
}

export default CreateBtn;
