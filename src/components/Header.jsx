import React from 'react'

const Header = () => {
  return (
    <header className="header wrapper">
      <h1 className="header__title">
        Git
        <br />
        <span> Commit </span>
        History
      </h1>
      <img
        className="header__image"
        src="https://res.cloudinary.com/starlink/image/upload/v1612234236/divelement/api_fwzhqn.png"
        alt="git-api-image"
      />
    </header>
  )
}

export default Header
