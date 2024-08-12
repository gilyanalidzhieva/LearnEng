import "./App.scss";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import WordCard from '../Components/Card/Card'
import WordList from "../Components/Table/Table";

const words = [
  {
    word: "Laptop",
    transcription: "[læptɑːp]",
    translation: "Ноутбук",
    tags: "Технологии",
  },
];


function App() {
  return (
    <>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <div>
      {words.map((word) => (
        <WordCard key={word.word} {...word} />
      ))}
          </div>
        </main>
         <WordList />
        <footer>
          <Footer />
        </footer>
      
        </div>
    </>
  );
}

export default App;


