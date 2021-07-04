
function TableCell({classList, children}) {
    return (
        <li className={classList.join(' ')}>{children}</li>
    );
}

export default TableCell;
