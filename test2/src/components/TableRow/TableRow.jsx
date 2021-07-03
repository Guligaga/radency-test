import { paramCase } from 'change-case';

import './TableRow.scss';
import { categories as categoryLogos } from '../../constants/logos';
import { presetCategoryName, presetDatesList } from "../../utils/utils";
import NoteActionBtn from '../NoteActionBtn/NoteActionBtn';
import TableCell from '../TableCell/TableCell';

const FIELDS_ORDER = ['icon', 'name', 'date', 'category', 'content', 'datesList', 'active', 'archived', 'actions'];

function TableRow(props) {
    const { data: entries, type, actions: actionsList, parent } = props;

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

    const presetActions = list => {
        if(list.length) {
            return list.map((action, i) => (
                <NoteActionBtn key={i} type={action} id={entries.id}/>
            ))
        } 
        return null
    }

    const data = {
        ...entries,
        icon: setIcon(entries.category),
        category: presetCategoryName(entries.category),
        datesList: presetDatesList(entries.datesList),
        actions: presetActions(actionsList),
    }

    const fields = FIELDS_ORDER.filter(field => data.hasOwnProperty(field));
    const baseClassName = `${type}__item`;


    return (
        <li className={`${parent}__item ${type}`}>
            <ul>
                {fields.map(field => {
                    const classList = [baseClassName, `${baseClassName}_${paramCase(field)}`];
                    return <TableCell key={field} classList={classList}>{data[field]}</TableCell>
                })}
            </ul>
        </li>
    );
}

export default TableRow;
