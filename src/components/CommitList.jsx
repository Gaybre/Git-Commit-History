import React from 'react'

// componentes
import CommitItem from './CommitItem'

const CommitList = ({commits}) => {

  const getAllCommits = () => commits.map(item => (
    <CommitItem
      key={item.sha}
      commit={item}
    />
  ))

  return(
    <section className="wrapper">
      {getAllCommits()}
    </section>
  )
}

export default CommitList
