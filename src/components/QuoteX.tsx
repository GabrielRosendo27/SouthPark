import React from "react";

interface Quote {
  quote: string;
  character: string;
}

interface QuoteProps {
  quotes: Quote[];
}
const QuoteX: React.FC<QuoteProps> = ({ quotes }) => {
  function getRandomNumber(min: number, max: number): number {
    const num = Math.random() * (max - min) + min;
    const num2 = num.toFixed(0);
    return +num2;
  }

  const n = getRandomNumber(2, 0);

  return (
    <div>
      <div>
        {quotes[n].quote} - {quotes[n].character}
      </div>
    </div>
  );
};

export default QuoteX;
