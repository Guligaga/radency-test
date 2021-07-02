import TableRow from '../TableRow/TableRow'

function TableHeader() {
    const data = { 
        name: 'Name',
        date: 'Date',
        category: 'Category',
        content: 'Content',
        datesList: 'Dates' ,
    };
    const actions = ['archivateAll', 'deleteAll'];
    return (
        <TableRow data={data} type='header' actions={actions}/>
    );
}

export default TableHeader;
