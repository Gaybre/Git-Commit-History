import React from 'react'

const CommitItem = ({commit}) => {
  return(
    <article className="commit">
      <div className="commit__hash">
        <h4>{commit.sha}</h4>
      </div>
      <div className="commit__author">
        <a href={commit.html_url}>
          <img
            src={commit.author.avatar_url}
            alt="owner-repository-avatar"
          />
          <h5>{commit.author.login}</h5>
        </a>
      </div>
      <div className="commit__message">
        <p>Fecha: {commit.commit.committer.date}</p>
        <p>{commit.commit.message}</p>
      </div>
    </article>
  )
}

export default CommitItem
