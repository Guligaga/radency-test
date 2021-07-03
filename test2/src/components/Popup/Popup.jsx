import './Popup.scss';
import PopupSelect from './PopupSelect';

function Popup() {
  return (
    <div className="popup d-none">
        <form action="" className="popup__form">
            <input className="popup__input" type="text" name="name" id="popup-name" placeholder="Title..."></input>
            <PopupSelect />
            <textarea className="popup__textarea" name="content" id="popup-content" placeholder="Write down a note..."></textarea>
            <button className="popup__btn" type="submit">Submit</button>
        </form>
    </div>
    
  );
}

export default Popup;