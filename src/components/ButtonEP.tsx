interface ButtonEPProps {
  apiFetch: (season: string) => void;
}

const ButtonEP: React.FC<ButtonEPProps> = ({ apiFetch }) => {
  const seasons = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7", "Season 8", "Season 9", "Season 10"];

  return (
    <div>
      {seasons.map((season) => (
        <div key={season}>
          <button onClick={() => apiFetch(season)}>{season}</button>
        </div>
      ))}
    </div>
  );
};

export default ButtonEP;
