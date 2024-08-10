import './Table.scss';
import { useState } from 'react';

function WordList() {
  const [words, setWords] = useState([
  ]);

  const handleAddWord = () => {
    setWords([...words, {
      id: Date.now(), 
      english: '',
      transcription: '',
      russian: '',
      tags: '',
      isEditing: false, 
    }]);
  };

  const handleEdit = (id) => {
    setWords(words.map(word =>
      word.id === id ? { ...word, isEditing: true } : word 
    ));
  };

  const handleSave = (id, updatedWord) => {
    const updatedWords = words.map(word =>
      word.id === id ? { ...word, ...updatedWord, isEditing: false } : word
    );
    setWords(updatedWords);
  };

  const handleCancel = (id) => {
    const updatedWords = words.map(word =>
      word.id === id ? { ...word, isEditing: false } : word 
    );
    setWords(updatedWords);
  };

  const handleDelete = (id) => {
    const updatedWords = words.filter(word => word.id !== id);
    setWords(updatedWords);
  };

  const handleInputChange = (id, field, value) => {
    const updatedWords = words.map(word =>
      word.id === id ? { ...word, [field]: value } : word
    );
    setWords(updatedWords);
  };

  return (
    <div className='word-list'>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <tr key={word.id}>
              {word.isEditing ? (
                <>
                  <td>{index + 1}</td>
                  <td><input type="text" value={word.english} onChange={(e) => handleInputChange(word.id, 'english', e.target.value)} /></td>
                  <td><input type="text" value={word.transcription} onChange={(e) => handleInputChange(word.id, 'transcription', e.target.value)} /></td>
                  <td><input type="text" value={word.russian} onChange={(e) => handleInputChange(word.id, 'russian', e.target.value)} /></td>
                  <td><input type="text" value={word.tags} onChange={(e) => handleInputChange(word.id, 'tags', e.target.value)} /></td>
                  <td>
                    <button className='save-btn' onClick={() => handleSave(word.id, {
                      english: word.english,
                      transcription: word.transcription,
                      russian: word.russian,
                      tags: word.tags,
                    })}>Сохранить</button>
                    <button className='cancel-btn' onClick={() => handleCancel(word.id)}>Отмена</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{index + 1}</td>
                  <td>{word.english}</td>
                  <td>{word.transcription}</td>
                  <td>{word.russian}</td>
                  <td>{word.tags}</td>
                  <td>
                    <button className='edit-btn' onClick={() => handleEdit(word.id)}>Редактировать</button>
                    <button className='delete-btn' onClick={() => handleDelete(word.id)}>Удалить</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button className='add-btn' onClick={handleAddWord}>Добавить слово</button>
    </div>
  );
}

export default WordList;