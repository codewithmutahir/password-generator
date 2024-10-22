import { useState, useEffect, useCallback, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [Characters, setCharacters] = useState(false);
  const [Password, setPassword] = useState("");

  const copybutton = document.getElementById("copybtn");

  //Ref Hook
  const passwordRef = useRef(null);
  const copybuttonRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (Characters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, Characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, Characters, passwordGenerator]);

  const copyPassword = useCallback(
    (event) => {
      event.preventDefault();
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(Password);
      copybutton.innerText = "Copied!";
      copybutton.disabled = true;

      // Show toast notification
      toast.success('🦄 Copied to clipboard!', {
        
      });

      setTimeout(() => {
        copybutton.innerText = "Copy";
        copybutton.disabled = false;
        document.getSelection().removeAllRanges();
      }, 2000);
    },
    [Password, passwordRef]
  );


  return (
    <>
      <h1 className="text-zinc-100 text-center mt-5 text-4xl">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-500">

        <div className="flex w-full max-w-md mx-auto rounded-lg mb-7 text-orange-500 bg-gray-500">
          <input
            type="text"
            name="text"
            className="outline-none w-full p-2 my-4 rounded-s-md"
            value={Password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            id="copybtn"
            onClick={copyPassword}
            ref={copybuttonRef}
            className="bg-emerald-500 my-4 p-2 rounded-e-lg text-zinc-100 hover:bg-emerald-600 duration-200"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              name="range"
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-zinc-100">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numbers"
              defaultChecked={numbers}
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label className="text-zinc-100">Numbers</label>
            <input
              type="checkbox"
              name="characters"
              defaultChecked={Characters}
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label className="text-zinc-100">Characters</label>
          </div>
        </div>
        <ToastContainer 
         position="top-right"
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
         className="my-custom-toast-container"
        />
      </div>
    </>
  );
}

export default App;
