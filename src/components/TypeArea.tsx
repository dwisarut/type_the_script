import { useState } from "react";
import quotes from "./quotes.ts";

function getRandomQuote() {
  const max = quotes.length;
  const index = Math.floor(Math.random() * max);
  return quotes[index];
}

function TypeArea() {
  const [quote] = useState(() => getRandomQuote());
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  function handleKey(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Backspace") {
      setText((text) => text.slice(0, -1));
      setCursorPosition((pos) => Math.max(0, pos - 1));
      console.log("Position", cursorPosition);
    } else if (event.key.length === 1) {
      setText((text) => text + event.key);
      setCursorPosition((pos) => pos + 1);
      console.log("Position", cursorPosition);
    }
  }

  return (
    <>
      <div
        className="w-full h-32 outline-none"
        tabIndex={0}
        onKeyDown={handleKey}
      >
        {quote.split("").map((char, i) => {
          let color = "text-gray-500";
          if (i < text.length) {
            color = text[i] === char ? "text-white" : "text-red-400";
          }

          if (i === cursorPosition) {
            return (
              <span key={i} className={`geist-mono text-2xl ${color}`}>
                <span className="bg-amber-400 inline-block w-0.5 h-[1.1em] align-middle blink"></span>
                {char}
              </span>
            );
          }

          return (
            <span key={i} className={`geist-mono text-2xl ${color}`}>
              {char}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default TypeArea;
