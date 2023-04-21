import { Count } from "./components/Count";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <RepositoryList />

      <Count />
    </>
  );
}
