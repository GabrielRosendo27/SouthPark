import React from "react";
interface QuoteButtonProps {
  apiFetch: () => void;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ apiFetch }) => {
  return <button onClick={() => apiFetch()}>QuoteButton</button>;
};

export default QuoteButton;
