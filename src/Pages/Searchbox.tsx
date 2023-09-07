import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBox = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(''); 
  const [error, setError] = useState('')

  const rightLanguage = localStorage.getItem('rightLanguage') || 'en';
  const leftLanguage = localStorage.getItem('leftLanguage') || 'fr'; 
  const errorMsg = 'text parameter is required'

  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', rightLanguage);
  encodedParams.set('target_language', leftLanguage);
  encodedParams.set('text', text);

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'd29a888dc1msh6e977ea1ccb26dap18f331jsn5a2f1fe5dace',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
    },
    data: encodedParams,
  };

  const translate = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setResults(response.data.data.translatedText);
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.message)
      setLoading(false);
    }
  };

  useEffect(() => {
    translate();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
      <button
             disabled={text.length < 2 || loading}
          onClick={translate}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full">
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="border bg-gray-200 w-full h-24 md:h-44 rounded-md outline-none p-2"
            placeholder="Enter text to translate"
          />
        </div>
        <div
          className={`w-full h-44 md:h-44 bg-gray-200 rounded-md flex items-center justify-center ${
            loading ? 'animate-pulse' : ''
          }`}
        >
          <h1 className="text-lg p-1"> {loading ? 'Translating...': results}</h1> 
          <h1 className="text-lg text-[red]">{error && error === errorMsg ? null : error}</h1>  
         </div>
      </div>
    </div>
  );
};

export default SearchBox;
