import './App.scss';
import NoteTypeSelector from './components/NoteTypeSelector/NoteTypeSelector';
import Popup from './components/Popup/Popup'

function App() {
  return (
    <main className="container">
      <NoteTypeSelector />
      <Popup />
    </main>
    
  );
}

export default App;
