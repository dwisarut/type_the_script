import { useState } from "react";
import quotes from "./quotes.ts";

function getRandomQuote() {
  const max = quotes.length;
  const index = Math.floor(Math.random() * max);
  return quotes[index];
}

function TypeArea() {
  const [quote] = useState(() => getRandomQuote());

  function getKey(event: React.KeyboardEvent<HTMLDivElement>) {
    console.log(event.key);
  }

  return (
    <>
      <h2 className="geist-mono text-gray-300">{quote}</h2>
      {/* <textarea
        name="typecheck"
        className="w-full geist-mono text-gray-300"
        onKeyDown={getKey}
      /> */}
      <div className="w-full h-32" tabIndex={0} onKeyDown={getKey}></div>
    </>
  );
}

export default TypeArea;
