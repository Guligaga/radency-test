import TableRow from '../TableRow/TableRow'

// import { capitalCase } from "change-case";

function TableHeader(props) {
    const {parent} = props;

    const alias = { 
        name: 'Name',
        date: 'Date',
        category: 'Category',
        content: 'Content',
        datesList: 'Dates',
        categoryName: 'Category',
        active: 'Active',
        archived: 'Archived',
    };
    const headers = Object.keys(props.data).reduce((acc, field) => {
        if(alias.hasOwnProperty(field)) {
            acc[field] = alias[field];
        }
        return acc
    }, {})
    // console.log(headers);
    const actions = parent === 'notes-list' ? ['archivateAll', 'deleteAll'] : [];
    const type = parent === 'notes-list' ? 'header' : 'summary-header'
    return (
        <TableRow data={headers} type={type} parent={parent} actions={actions}/>
    );
}

export default TableHeader;
