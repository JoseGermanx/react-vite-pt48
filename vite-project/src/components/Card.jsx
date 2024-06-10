


function Card({titulo, subtitulo, texto}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitulo}</h6>
        <p className="card-text">
         {texto}
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Card;
