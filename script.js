// Retrieve notes from local storage or initialize an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [];

const noteList = document.getElementById('note-list');
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');

// Function to render the notes on the page
function renderNotes() {
  // Clear the note list
  noteList.innerHTML = '';

  // Render each note as a list item
  notes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${note}</span>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    noteList.appendChild(listItem);
  });

  // Display a default message if there are no notes
  if (notes.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.classList.add('empty-message');
    emptyMessage.textContent = 'No notes found.';
    noteList.appendChild(emptyMessage);
  }
}

// Function to add a new note
function addNote() {
  const newNote = noteInput.value.trim();

  if (newNote !== '') {
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    renderNotes();
  }
}

// Function to delete a note
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

// Event listener for the "Add Note" button
addNoteBtn.addEventListener('click', addNote);

// Initial render of notes
renderNotes
