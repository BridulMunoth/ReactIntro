import "tailwindcss";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

//useRer working
const passwordRef = useRef(null);

const copyToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.selectionRange(0,12);
  window.navigator.clipboard.writeText(password)
}, [password])

  const passwordGenerator = useCallback(() => {
    let passStr = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numStr="0123456789"
    let charStr = "!@#$%^&*_+-/"
    let RandChar
    let requriredChar=[]
    if (numAllowed) {
      str += numStr;
      RandChar = numStr[Math.floor(Math.random() * numStr.length)];
      requriredChar.push(RandChar);
    }
    if (charAllowed){
      str += charStr;
      RandChar = charStr[Math.floor(Math.random() * charStr.length)];
      requriredChar.push(RandChar);
    }

    for (let i = 0; i < length-requriredChar.length; i++) {
      RandChar = str[Math.floor(Math.random() * str.length)];
      passStr += RandChar
    }

    requriredChar.forEach((Char)=>{
      const pos = Math.floor(Math.random()*(passStr.length+1))
      passStr = passStr.slice(0,pos) + Char + passStr.slice(pos)
    })

    setPassword(passStr);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-4xl text-center my-3">Password Generator</h1>
        <div className="rounded-lg shadow flex overflow-hidden mb-4 text-gray-700">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 bg-white outline-none"
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />
          <button onClick={copyToClipboard} className="bg-blue-500 py-0.5 px-3 outline-none shrink-0 text-white font-semibold copy-effect">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex gap-x-1 items-center">
            <input
              type="range"
              min={6}
              max={12}
              value={length}
              className="cursor-pointer"
              id="len"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="len">Length: {length} </label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
