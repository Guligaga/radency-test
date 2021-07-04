import React, { useMemo } from 'react';

import './Table.scss';
import TableRow from '../TableRow/TableRow'
import TableHeader from '../TableHeader/TableHeader';




function Table({ name, data, isArchivedVisible }) {
    const preset = useMemo(() => (
        {
            'notes-list': {
                list: Object.entries(data).filter(([,note]) => note.isArchived === isArchivedVisible),
                itemName: 'note',
                actions: ['update', 'archivate', 'delete'],
            },
            'summary': {
                list: Object.entries(data),
                itemName: 'category',
                actions: [],
            }
        }
    ), [data, isArchivedVisible])
    
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

export default React.memo(Table);
