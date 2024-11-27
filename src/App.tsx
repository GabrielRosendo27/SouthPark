import React from "react";
import InEpisode from "./components/EpisodeComponents/inEpisode";
// import QuoteX from "./components/QuoteX";

// interface Quote {
//   quote: string;
//   character: string;
// }

function App() {
  // const [quotes, setQuotes] = React.useState<Quote[] | null>(null);

  // async function quoteApiFetch(): Promise<void> {
  //   const response = await fetch("https://southparkquotes.onrender.com/v1/quotes/3");
  //   const data = await response.json();
  //   setQuotes(data);
  // }

  return (
    <>
      {/* {quotes && (
        <div>
          <QuoteX quotes={quotes} />
        </div>
      )} */}
      <InEpisode />
      {/* <ButtonEP apiFetch={quoteApiFetch} /> */}
    </>
  );
}

export default App;
