import './TableRow.scss';
import { categories as categoryLogos } from '../../constants/logos';
import { presetCategoryName, presetDatesList } from "../../utils/utils";
import NoteActionBtn from '../NoteActionBtn/NoteActionBtn';

function TableRow(props) {
    const { id, name, date, category, content, datesList } = props.data;
  return (
    <li className="notes-list__item note">
        <ul>
            <li className="note__item  note__item_icon">
                <div className="note-icon">
                    <img src={categoryLogos[category]} alt={category}></img>
                </div>
            </li>
            <li className="note__item note__item_name">{name}</li>
            <li className="note__item note__item_date">{date}</li>
            <li className="note__item note__item_category">{presetCategoryName(category)}</li>
            <li className="note__item note__item_content">{content}</li>
            <li className="note__item note__item_dates-list">{presetDatesList(datesList)}</li>
            <li className="note__item note__item_actions actions">
                {
                    ['edit', 'delete', 'archivate'].map((action, i) => (
                        <NoteActionBtn key={i} type={action}/>
                    ))
                }
            </li>
        </ul>
    </li>
  );
}

export default TableRow;
