import React, { useState } from 'react';
import axios from 'axios';

const ResponsePage = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to submit the response to the backend
    try {
      const response = await axios.post('/http://localhost:8080/entry', {
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
      <h2>Ledsen</h2>
      <p>Bra gjort, du identifierade din känsla!<br/>

Känslor ger oss information om läget i vår kropp, vår yttre värld, uppmärksammar oss på våra behov och motiverar oss till handling.<br/> 

Sorg/Ledsenhet är en av våra grundaffekter och den är viktig.<br/> Den signalerar ett behov av stöd och omsorg till både oss själva och andra.  Evolutionärt har sorg/ledsenhet varit avgörande för vår överlevnad.<br/> 

Sorg/ledsenhet kan vara knepigt i vårt samhälle då det ofta kan förknippas med svaghet. Ett tillstånd som många vill undvika, som om det vore eftersträvansvärt att klara allt på egen hand.<br/> 

Ledsenhet kan därför vara svårt att upptäcka då det är vanligt att gömma sin ledsenhet med annan känsla som t.ex ilska eller förtäckt av skratt och glada skämt.<br/>

Det är olika för alla! Allt beror på vilka erfarenheter vi har med oss och hur våra omsorgspersoner har bemött oss när vi visat sorg/ledsenhet som barn. 
<br/><br/>


- Hur känns det i din kropp just nu? (Tyngd över bröstet, svårt att andas, sammanbiten?)<br/>
- Hur skulle det vara kännas för dig att visa för någon nära att du känner dig ledsen?<br/>
- Vad skulle du behöva för att våga berätta för någon att du känner dig ledsen?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={response}
          onChange={handleInputChange}
          placeholder="Lämna dina svar här."
        />
        <button type="submit">Skicka svar</button>
      </form>
    </div>
  );
};

export default ResponsePage;