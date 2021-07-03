
function TableCell(props) {
    const {classList, children} = props;
    return (
        <li className={classList.join(' ')}>{children}</li>
    );
}

export default TableCell;
