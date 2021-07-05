function PopupSelect({value, setCategory}) {
  return (
    <div className="popup__select">
        <label htmlFor="popup-category">Choose a category</label>
        <select 
			name="category" 
			id="popup-category" 
			value={value || 'task'} 
			onChange={e => setCategory(e.target.value)}
		>
            <option value="task">Task</option>
            <option value="thought">Random Thought</option>
            <option value="idea">Idea</option>
            <option value="quote">Quote</option>
        </select>
    </div>
  );
}

export default PopupSelect;