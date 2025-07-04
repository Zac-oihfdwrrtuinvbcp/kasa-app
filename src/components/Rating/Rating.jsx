import "./Rating.scss";

function Rating({ value, max = 5 }) {
  return (
    <div className="rating">
      {[...Array(max)].map((_, index) => (
        <span
          key={index}
          className={`rating__star${index < value ? ' filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;