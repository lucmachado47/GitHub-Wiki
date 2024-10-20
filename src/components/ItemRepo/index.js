import React from 'react'
import { ItemContainter } from './styles'

function ItemRepo({repo, handleRemoveRepo}) {

  return (
    <ItemContainter>
        <h3>{repo.name}</h3>    
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel ="noreferrer" target="_blank">See repository</a><br />
        <a href="#"className="remove" onClick={() => handleRemoveRepo(repo.id)}>Remove</a>
        <hr />
    </ItemContainter>
  )
}

export default ItemRepo