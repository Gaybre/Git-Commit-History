import React from 'react'

const RepositoryDetails = ({repo: { owner }, repo}) => {
  return (
    <section className="repository wrapper">
      <div className="repository__owner">
        <img
          className="repository__owner-image"
          src={owner.avatar_url}
          alt="owner-repository-avatar"
        />
        <h3 className="repository__owner-username">
          {owner.login}
        </h3>
      </div>
      <div className="repository__details">
        <p>
          {repo.name}
        </p>
        <p>
          Creado:
          <span> {repo.created_at}</span>
        </p>
        <p>
          Actualizado:
          <span> {repo.updated_at}</span>
        </p>
        <a href={repo.html_url}>
          Ir al repositorio de este proyecto
        </a>
      </div>
    </section>
  )
}

export default RepositoryDetails
