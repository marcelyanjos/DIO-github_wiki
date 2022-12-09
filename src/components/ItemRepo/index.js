import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo({repo, handleRemoveRepo}) {
 const handleRemove=()=>{
  handleRemoveRepo(repo.id)
 }
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
      <button onClick={handleRemove} type="button" className="remover">Remove</button>
      <hr/>
    </ItemContainer>
  );
}
