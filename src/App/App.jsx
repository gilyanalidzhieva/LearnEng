import "./App.scss";
import { Home, Table, Error } from "../Pages";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import WordCard from "../Components/Card/Card";

const words = [
  {
    word: "Laptop",
    transcription: "[læptɑːp]",
    translation: "Ноутбук",
    topic: "Технологии",
  },
];

function App() {
  return (
    <>
      <h1>Hello</h1>
      <div>
      {words.map((word) => (
        <WordCard key={word.word} {...word} />
      ))}
    </div>
    </>
  );
}

export default App;
