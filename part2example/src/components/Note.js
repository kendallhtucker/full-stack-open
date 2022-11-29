const Note = ({ note, toggleImportance }) => {
  const label = String(note.important)

  return (
    <li>
      {note.content + ' '}
     <button onClick={toggleImportance}>{label}</button>
      </li>
  )
}

export default Note