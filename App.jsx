import { useState } from 'react';
import './App.css';

// tried to make a component for random verses

function RandomVerseBox() {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(''); // not using this right now

  // this function gets called when button is clicked
  function getRandomVerse() {
    console.log('Button clicked!');
    setLoading(true);
    
    // API call 
    fetch('https://labs.bible.org/api/?passage=random&type=json')
      .then(response => response.json())
      .then(data => {
        console.log('Got data:', data);
        setVerse(data[0]); // the API returns an array so we need [0]
        setLoading(false);
      })
      .catch(err => {
        console.log('Error happened:', err);
        alert('Oops! Something went wrong');
        setLoading(false);
      });
  }

  return (
    <div className="box">
      <h2>Random Verse</h2>
      <button onClick={getRandomVerse} disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Verse'}
      </button>
      
      {verse && (
        <div className="result">
          <p className="text">"{verse.text}"</p>
          <p className="reference">
            - {verse.bookname} {verse.chapter}:{verse.verse}
          </p>
        </div>
      )}
    </div>
  );
}

// component for searching specific verses like John 3:16
function SearchVerse() {
  const [inputValue, setInputValue] = useState('');
  const [verseResult, setVerseResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  function doSearch() {
    console.log('Searching for:', inputValue);
    
    // check if user typed something
    if (!inputValue) {
      alert('Please type a verse first!');
      return;
    }

    setIsSearching(true);
    
    // need to replace spaces with + for the API
    let searchQuery = inputValue.replace(/ /g, '+');
    console.log('API query:', searchQuery);
    
    fetch('https://labs.bible.org/api/?passage=' + searchQuery + '&type=json')
      .then(response => response.json())
      .then(data => {
        console.log('Search result:', data);
        if (data && data.length > 0) {
          setVerseResult(data[0]);
        } else {
          alert('Could not find that verse');
        }
        setIsSearching(false);
      })
      .catch(err => {
        console.log('Search error:', err);
        alert('Error searching for verse');
        setIsSearching(false);
      });
  }

  // let user press Enter to search
  function checkEnterKey(e) {
    if (e.key === 'Enter') {
      doSearch();
    }
  }

  return (
    <div className="box">
      <h2>Search Specific Verse</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={checkEnterKey}
          placeholder="Try: John 3:16"
        />
        <button onClick={doSearch} disabled={isSearching}>
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      {verseResult && (
        <div className="result">
          <p className="text">"{verseResult.text}"</p>
          <p className="reference">
            - {verseResult.bookname} {verseResult.chapter}:{verseResult.verse}
          </p>
        </div>
      )}
    </div>
  );
}

// main app component
function App() {
  // TODO
  
  return (
    <div className="app">
      <div className="header">
        <h1>Bible Verses </h1>
        <p>Get random verses or specifc </p>
      </div>
      
      <div className="main-content">
        <RandomVerseBox />
        <SearchVerse />
      </div>
      
      <footer>
        <p>Using the Bible.org API</p>
      </footer>
    </div>
  );
}

export default App;