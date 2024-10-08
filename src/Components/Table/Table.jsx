import './Table.scss';
import { useState } from 'react';

function WordList({ initialWords = [] }) {
  const [words, setWords] = useState(initialWords.map(word => ({
    ...word,
    isEditing: false, 
    initial: { ...word } 
  })));

  const handleAddWord = () => {
    setWords([...words, {
      id: Date.now(), 
      english: '',
      transcription: '',
      russian: '',
      tags: '',
      isEditing: false, 
      initial: {
        english: '',
        transcription: '',
        russian: '',
        tags: '',
      }
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
      word.id === id ? { ...word, ...word.initial, isEditing: false } : word 
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
      <table className='word-table'>
        <thead>
          <tr>
            <th className='table-col1'>№</th>
            <th className='table-col2'>English</th>
            <th className='table-col3'>Transcription</th>
            <th className='table-col4'>Russian</th>
            <th className='table-col5'>Tags</th>
            <th className='table-col6'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <tr key={word.id}>
              {word.isEditing ? (
                <>
                  <td className='table-cell'>{index + 1}</td>
                  <td className='table-cell1'><input type="text" value={word.english} onChange={(e) => handleInputChange(word.id, 'english', e.target.value)} /></td>
                  <td className='table-cell1'><input type="text" value={word.transcription} onChange={(e) => handleInputChange(word.id, 'transcription', e.target.value)} /></td>
                <td className='table-cell1'><input type="text" value={word.russian} onChange={(e) => handleInputChange(word.id, 'russian', e.target.value)} /></td>
                  <td className='table-cell1'><input type="text" value={word.tags} onChange={(e) => handleInputChange(word.id, 'tags', e.target.value)} /></td>
                  <td className='table-cell'>
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
                  <td className='table-cell'>{index + 1}</td>
                  <td className='table-cell1'>{word.english}</td>
                  <td className='table-cell1'>{word.transcription}</td>
                  <td className='table-cell1'>{word.russian}</td>
                  <td className='table-cell1'>{word.tags}</td>
                  <td className='table-cell'>
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