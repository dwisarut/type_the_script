const quotes = [
  "C is weird and quirky for those who doesn't learn to program.",
  "I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.",
  "Most of the world’s biggest problems are because of somebody trying to find a simple answer.",
  "The gulf between competence and incompetence amplifies the more competence is needed.",
  "Anger has a honey tip, but a poison source.",
  "If you are to have a great kingdom, rule over yourself!",
  "It must be produced and discharged and used up in order to exist at all.",
  "The real problem of humanity is the following: we have paleolithic emotions; medieval institutions; and god-like technology.",
  "Time is the king of all men, he is their parent and their grave, and gives them what he will and not what they crave.",
  "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
];

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
