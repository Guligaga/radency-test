import { paramCase } from 'change-case';

import './TableRow.scss';
import { categories as categoryLogos } from '../../constants/logos';
import { presetCategoryName, presetDatesList } from "../../utils/utils";
import NoteActionBtn from '../NoteActionBtn/NoteActionBtn';
import TableCell from '../TableCell/TableCell'

function TableRow(props) {
    const { data: entries, type, actions: actionsList } = props;

    const setIcon = category => {
        const iconRef = categoryLogos[category];
        if(iconRef) {
            return (
                <div className="note-icon">
                    <img src={iconRef} alt={category}></img>
                </div>
            )
        }
        return null;
    }

    const actions = actionsList.map((action, i) => (
        <NoteActionBtn key={i} type={action}/>
    ))

    const data = {
        icon: setIcon(entries.category),
        ...entries,
        category: presetCategoryName(entries.category),
        datesList: presetDatesList(entries.datesList),
        actions,
    }

  return (
    <li className={`table__item ${type}`}>
        <ul>
            {Object.entries(data).filter(([,item]) => typeof item !== 'number')
                .map(([key, item]) => {
                    const baseClassName = `${type}__item`
                    const classList = [baseClassName, `${baseClassName}_${paramCase(key)}`];
                    return <TableCell key={key} classList={classList}>{item}</TableCell>
                })
            }
        </ul>
    </li>
  );
}

export default TableRow;
