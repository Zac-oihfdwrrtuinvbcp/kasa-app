import "./Rating.scss";

function Rating({ value, max = 5 }) {
  return (
    <div className="rating">
      {[...Array(max)].map((_, index) => (
        <svg
          key={index}
          className={`rating__star${index < value ? " filled" : ""}`}
        >
          <use href={`/Icons.svg#star`} />
        </svg>
      ))}
    </div>
  );
}

export default Rating;
