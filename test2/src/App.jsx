import { useSelector } from 'react-redux';

import './App.scss';
import NoteTypeSelector from './components/NoteTypeSelector/NoteTypeSelector';
import Popup from './components/Popup/Popup';
import Table from './components/Table/Table';
import CreateBtn from './components/CreateBtn/CreateBtn';


function App() {
	const {popupData} = useSelector(state => state.generals);

	return (
		<main className="container">
			<NoteTypeSelector />
			<Table name='notes-list' />
			<CreateBtn />
			<Table name='summary' />
			{popupData && <Popup cata={popupData}/>}
		</main>
	);
}

export default App;
