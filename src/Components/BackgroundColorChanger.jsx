import { useEffect, useState } from 'react';

function BackgroundColorChanger() {
    
    const [color, setColor] = useState(() => localStorage.getItem('selectedColor') || '');

    // Effect to update localStorage whenever color changes
    useEffect(() => {
      if (color) {
        localStorage.setItem('selectedColor', color);
      }
    });

  return(
        <div
          className="w-full h-screen duration-200"
          style={{ backgroundColor: color }}
        >
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
            <div className="flex p-2 rounded flex-wrap justify-center gap-3 shadow-lg bg-white">
              <button
                className="w-12 h-12 rounded-full cursor-pointer"
                style={{ backgroundColor: "olive" }}
                onClick={() => setColor("olive")}
              >Olive</button>
              <button
                className="w-12 h-12 rounded-full cursor-pointer"
                style={{ backgroundColor: "red" }}
                onClick={() => setColor("red")}
              >Red</button>
              <button
                className="w-12 h-12 rounded-full cursor-pointer"
                style={{ backgroundColor: "green" }}
                onClick={() => setColor("green")}
              >Green</button>
              <button
                className="w-12 h-12 rounded-full cursor-pointer"
                style={{ backgroundColor: "blue" }}
                onClick={() => setColor("blue")}
              >Blue</button>
              <button className="w-12 h-12 rounded-full cursor-pointer"
              style={{backgroundColor:"yellow"}}
              onClick={()=>setColor("yellow")}
              >Yellow</button>
            </div>
          </div>
        </div>
  )
}

export default BackgroundColorChanger