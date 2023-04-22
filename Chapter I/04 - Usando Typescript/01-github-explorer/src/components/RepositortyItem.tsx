interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <h2>
        Nome do repositório: <strong>{props.repository.name}</strong>
      </h2>

      <p>{props.repository.description}</p>


      <a href={props.repository.html_url} target="_blank">
        Acessar o repositório
      </a>

      <p>-</p>
    </li>
  );
} 