import { useSelector } from 'react-redux';

import './Table.scss';
import TableRow from '../TableRow/TableRow'
import TableHeader from '../TableHeader/TableHeader';



function Table({ name }) {
    const { 
        notes, 
        summary, 
        generals: {isArchivedVisible} 
    } = useSelector(state => state);

    const preset = {
        'notes-list': {
            list: Object.entries(notes).filter(([,note]) => note.isArchived === isArchivedVisible),
            itemName: 'note',
            actions: ['update', 'archivate', 'delete'],
        },
        'summary': {
            list: Object.entries(summary),
            itemName: 'category',
            actions: [],
        }
    }
    
    const {list, itemName, actions} = preset[name];

    if(!preset[name]) return null;
    return (
        <ul className={name}>
            <TableHeader parent={name} />
            {
                list.map(([id, item]) => (
                    <TableRow key={id} data={item} type={itemName} parent={name} actions={actions}/>
                ))
            }
        </ul>
    );
}

export default Table;
