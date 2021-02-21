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
    console.log('typeOf', typeof(commits)),
    console.log('commits',commits),
    <section className="wrapper">
      {getAllCommits()}
    </section>
  )
}

export default CommitList
