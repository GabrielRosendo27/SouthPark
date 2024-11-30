import React from "react";
import QuoteButton from "../Buttons/QuoteButton";

interface Quote {
  quote: string;
  character: string;
}

const Quote = () => {
  const [quotes, setQuotes] = React.useState<Quote[]>([]);

  function getRandomNumber(min: number, max: number): number {
    const num = Math.random() * (max - min) + min;
    const num2 = num.toFixed(0);
    return +num2;
  }

  async function quoteApiFetch(): Promise<void> {
    const response = await fetch("https://southparkquotes.onrender.com/v1/quotes/3");
    const data = await response.json();
    console.log(data);
    setQuotes(data);
  }
  const n = getRandomNumber(2, 0);

  return (
    <div>
      {quotes.length > 0 ? (
        <div>
          <p>
            {quotes[n].quote} - {quotes[n].character}
          </p>
        </div>
      ) : (
        <p>No quotes available</p>
      )}
      <QuoteButton apiFetch={quoteApiFetch} />
    </div>
  );
};

export default Quote;
