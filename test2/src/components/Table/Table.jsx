import { useSelector } from 'react-redux';

import './Table.scss';
import TableRow from '../TableRow/TableRow'
import TableHeader from '../TableHeader/TableHeader';


function Table(props) {
    const {name} = props;
    const { notes, summary } = useSelector(state => state);
    const preset = {
        'notes-list': {
            list: notes,
            itemName: 'note',
            actions: ['edit', 'archivate', 'delete'],
        },
        'summary': {
            list: summary,
            itemName: 'category',
            actions: [],
        }
    }
    const {list, itemName, actions} = preset[name]

    return (
        <ul className={name}>
            <TableHeader parent={name} data={Object.values(list)[0]}/>
            {
                Object.entries(list).map(([id, item]) => (
                    <TableRow key={id} data={item} type={itemName} parent={name} actions={actions}/>
                ))
            }
        </ul>
    );
}

export default Table;
