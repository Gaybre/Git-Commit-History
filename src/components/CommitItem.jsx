import React from 'react'

const CommitItem = ({commit}) => {
  return(
    <article className="commit">
      <div className="commit__color" />
      <div className="commit__hash">
        <a href={commit.html_url} target="_blank">
          {commit.sha}
        </a>
      </div>
      <div className="commit__author">
        <a href={commit.author.html_url} target="_blank">
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
