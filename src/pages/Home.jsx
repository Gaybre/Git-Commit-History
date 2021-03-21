import React, { useEffect, useState } from 'react'
import CommitList from '../components/CommitList'

// components
import Header from '../components/Header'
import RepositoryDetails from '../components/RepositoryDetails'
import Loader from '../components/Loader'

// functions
import { getRepoData, getCommitsData } from '../utils/getData'

const Home = () => {
  // se maneja el estado local con useState
  const [state, setState] = useState({
    repo: '',
    commits: [],
    loading: false,
    error: null,
  })

// se hacen los llamados para traer la data al montarse el componente
  useEffect(async () => {
    setState({
      ...state,
      loading: true,
      error: null
    })
    // trae la data del repo
    const repoData = await getRepoData()
    // trae la data de los commits
    const commitsData = await getCommitsData()
    // se valida si no hay errores en las respuestas
    validateError(repoData, commitsData)
  },[])

  const validateError = (repoData, commitsData) => {
    // si una de las respuestas trae error, se agrega msj que se mostrará en pantalla
    if ((repoData.message === 'Not Found') || (commitsData.message === 'Not Found')) {
      setState({
        ...state,
        loading: false,
        error: 'No se Encontraron recursos disponibles, intentalo más tarde.',
      })
    } else {
      setState({
        ...state,
        loading: false,
        error: null,
        repo: repoData,
        commits: [].concat(commitsData)
      })
    }
  }

  return (
    <>
      <Header />
      {state.loading && <Loader />}
      {state.error && <h1>{state.error}</h1>}
      {state.repo && (
        <>
          <RepositoryDetails
            repo={state.repo}
          />
          <CommitList
            commits={state.commits}
          />
        </>
      )}
    </>
  )
}

export default Home
