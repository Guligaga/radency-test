import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import NoteTypeSelector from './components/NoteTypeSelector/NoteTypeSelector';
import Popup from './components/Popup/Popup';
import Table from './components/Table/Table';
import CreateBtn from './components/CreateBtn/CreateBtn';
import { useEffect } from 'react';
import { setTotalSummary } from './redux/actions/summaryActions';


function App() {
	const dispatch = useDispatch();
	const notes = useSelector(state => state.notes);
	const summary = useSelector(state => state.summary);
	const {
		popupData, 
		isArchivedVisible
	} = useSelector(state => state.generals)

    useEffect(() => {
        dispatch(setTotalSummary(notes))
    }, [notes, dispatch])

	return (
		<main className="container">
			<NoteTypeSelector />
			<Table name='notes-list' data={notes} isArchivedVisible={isArchivedVisible} />
			<CreateBtn />
			<Table name='summary' isArchivedVisible={isArchivedVisible} data={summary}/>
			{popupData && <Popup />}
		</main>
	);
}

export default App;
