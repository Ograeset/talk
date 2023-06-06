import React, { useState } from 'react';
import axios from 'axios';

const ResponsePage = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to submit the response to the backend
    try {
      const response = await axios.post('http://localhost:8080/entry', {
        response: response,
      });

      // Handle the response if needed
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setResponse(e.target.value);
  };

  return (
    <div>
      <h2>Arg</h2>
      <p>Bra gjort, du identifierade din känsla!<br/><br/> 

Känslor ger oss information om läget i vår kropp, vår yttre värld, uppmärksammar oss på våra behov och motiverar oss till handling.<br/> 

Ilska är en av våra grundaffekter och den hjälper oss att t.e.x sätta gränser gentemot andra och oss själva. Den ger kraft och energi att ta oss framåt.<br/> 

Ibland kan det vara lite klurigt med ilska, för vissa kan den uppstå väldigt snabbt fast det egentligen ligger en annan känsla bakom som känns för läskig att visa som tex att man är ledsen.<br/>
För andra kan ilska vara förknippad med skuld och skam och därför gömma sig bakom andra känslor som t.ex ledsenhet.<br/> 

Det är olika för alla! Allt beror på vilka erfarenheter vi har med oss och hur våra omsorgspersoner har bemött oss när vi visat ilska som barn.<br/><br/> 


- Känner du att någon hindrat dig eller gått över din gräns?<br/> 
- kan du beskriva hur din kropp känns just nu? (Tyngd i bröstet, spänner kroppen/käken, slutar andas, knyter näven, yrsel, zoonar ut)<br/>
-      Känner du igen den här känslan från tidigare? <br/>
- Vad skulle du behöva just nu?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={response}
          onChange={handleInputChange}
          placeholder="Enter your response..."
        />
        <button type="submit">Skicka svar</button>
      </form>
    </div>
  );
};

export default ResponsePage;
