import React from "react";
import ButtonEP from "../ButtonEP";

interface Quote {
  quote: string;
  character: string;
}

interface QuoteProps {
  quotes: Quote[];
}

const Quote: React.FC<QuoteProps> = () => {
  const [quotes, setQuotes] = React.useState<Quote>();

  function getRandomNumber(min: number, max: number): number {
    const num = Math.random() * (max - min) + min;
    const num2 = num.toFixed(0);
    return +num2;
  }

  async function quoteApiFetch(): Promise<void> {
    const response = await fetch("https://southparkquotes.onrender.com/v1/quotes/3");
    const data = await response.json();
    setQuotes(data);
  }
  const n = getRandomNumber(2, 0);

  return (
    <div>
      <div>{/* {quotes[n].quote} - {quotes[n].character} */}</div>
      <ButtonEP apiFetch={quoteApiFetch} />
    </div>
  );
};

export default Quote;
