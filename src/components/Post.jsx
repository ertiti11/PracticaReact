export default function Post({ fecha, categoria, titulo, texto }) {
  return (
    <article>
      <div className="datos">
        <span>Fecha:{fecha}</span>
        <span>Categoría: {categoria}</span>
      </div>
      <h4>
        <a href="#">{titulo}</a>
      </h4>
      <p>{texto}</p>
    </article>
  );
}
