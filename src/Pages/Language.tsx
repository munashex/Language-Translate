import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { commonLanguages } from '../languages';

const Language = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const rightLanguage = (lag: string) => {
    localStorage.setItem('rightLanguage', lag);
    navigate('/');
    window.location.reload();
  };

  const filteredLanguages = commonLanguages.filter((item) =>
    item.language.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border mt-2 mx-2 md:mx-20 rounded-md">
      <div className="border-b">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search languages"
          className="p-1 outline-none bg-gray-100 px-1 w-full placeholder:text-lg"
        />
      </div>

      <div className="grid grid-cols-1 px-2 my-2 w-full md:grid-cols-3 lg:grid-cols-5">
        {filteredLanguages.map((item) => (
          <div key={item.shortcut} className="my-1">
            <button onClick={() => rightLanguage(item.shortcut)} className="text-black hover:underline">
              {item.language}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
