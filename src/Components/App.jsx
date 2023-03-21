import React, {useState} from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea";
import "./styles.css";

function App() {
    const [notes, setNotes] = useState([]);
  
    function AddNote(newNote) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    function CreateNotes(note, index) {
      return (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      );
    }
  
    return (
      <div>
        <Header />
        <CreateArea onAdd={AddNote} />
        {notes.map(CreateNotes)}
        <Footer />
      </div>
    );
  }
  
  export default App;