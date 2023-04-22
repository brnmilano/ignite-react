import { RepositoryItem } from "./RepositortyItem";

// const repository = {
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://github.com/unform/unform'
// }

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository="unform1" />

        <RepositoryItem repository="unform2" />

        <RepositoryItem repository="unform3" />

        <RepositoryItem repository="unform4" />

        <RepositoryItem repository="unform5" />
      </ul>
    </section>
  );
}
