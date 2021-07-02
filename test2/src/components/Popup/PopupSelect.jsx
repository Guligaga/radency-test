function PopupSelect() {
  return (
    <div className="popup__select">
        <label htmlFor="popup-category">Choose a category</label>
        <select name="category" id="popup-category">
            <option value="task">Task</option>
            <option value="thought">Random Thought</option>
            <option value="idea">Idea</option>
            <option value="quote">Quote</option>
        </select>
    </div>
  );
}

export default PopupSelect;