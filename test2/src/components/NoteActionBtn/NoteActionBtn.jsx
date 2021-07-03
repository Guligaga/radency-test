import { actions } from "../../constants/logos";

function NoteActionBtn(props) {
    const { type } = props;
    return (
    <div className="list-action">
        <button type="button" data-action={type}>
            <img src={actions[type]} alt={type}></img>
        </button>
    </div>
    );
}

export default NoteActionBtn;