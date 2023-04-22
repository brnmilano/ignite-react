export function RepositoryItem(props) {
  return (
    <li>
      <h2>
        Nome do repositório: <strong>{props.repository.name}</strong>
      </h2>

      <p>{props.repository.description}</p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <a href={props.repository.html_url} target="_blank">
          Acessar o repositório
        </a>

        <a href={props.repository.homepage} target="_blank">
          Acessar o projeto
        </a>
      </div>

      <p>-</p>
    </li>
  );
}
