import TableRow from '../TableRow/TableRow'

// import { capitalCase } from "change-case";

const HEADER_FIELDS = {
    'notes-list': {
        name: 'Name',
        date: 'Date',
        category: 'Category',
        content: 'Content',
        datesList: 'Dates',
    },
    'summary': {
        category: 'Category',
        active: 'Active',
        archived: 'Archived',
    }
}

function TableHeader({parent}) {

    
    // console.log(headers);
    const actions = parent === 'notes-list' ? ['archivateAll', 'deleteAll'] : [];
    const type = parent === 'notes-list' ? 'header' : 'summary-header'
    return (
        <TableRow data={HEADER_FIELDS[parent]} type={type} parent={parent} actions={actions}/>
    );
}

export default TableHeader;
