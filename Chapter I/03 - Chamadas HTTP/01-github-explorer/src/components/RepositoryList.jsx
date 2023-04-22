import { RepositoryItem } from "./RepositortyItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/brnmilano/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  // Sempre colocar o segundo parametro, no caso o [] no final. Evita loop.

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
