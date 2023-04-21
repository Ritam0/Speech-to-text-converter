import logo from './logo.svg';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import {useState} from "react";


function App() {
  const [textToCopy, setTextToCopy] = useState();
    // const [isCopied, setCopied] = useClipboard(textToCopy, {
    //     successDuration:1000
    // });

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>Here you can convert your speech in text !!
          <br />
          To copy the text plzz select the text and copy it !!
          <br />
          (**it does not takes panchuation marks**)
        </p>
        <div className="main-content" > 
        {/* onClick={() =>  setTextToCopy(transcript)}       */}
          {transcript}
        </div>
        <div className="btn-style">
          {/* <button onClick={setCopied}>
              {isCopied ? 'Copied!' : 'Copy to clipboard'}
          </button> */}
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  );
}

export default App;
