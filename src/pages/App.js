import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepos, setCurrentRepos] = useState("");
  const [repos, setRepos] = useState([]);
  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepos}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepos("");
        return;
      }
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    const filteredRepo = repos.filter(repo => repo.id !== id);
    setRepos(filteredRepo);
  }
  return (
    <Container>
      <img src={require("../logo.png")} width={72} height={72} />
      <Input
        value={currentRepos}
        onChange={(e) => setCurrentRepos(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
