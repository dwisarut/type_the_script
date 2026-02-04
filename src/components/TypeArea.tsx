import quotes from "./quotes.ts";

function getRandomQuote() {
  const max = quotes.length;
  const index = Math.floor(Math.random() * max);
  return quotes[index];
}

function TypeArea() {
  function getKey(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    console.log(event.key);
  }

  return (
    <>
      <h2 className="geist-mono text-gray-300">{getRandomQuote()}</h2>
      <textarea
        name="typecheck"
        className="w-full geist-mono text-gray-300"
        onKeyDown={getKey}
      />
    </>
  );
}

export default TypeArea;
