import React, { useEffect, useState } from 'react'
// components
import Header from '../components/Header'
// functions
import { getRepoData, getCommitsData } from '../utils/getData'

const Home = () => {
  // se maneja el estado local con useState
  const [state, setState] = useState({
    repo: '',
    commits: '',
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
    console.log('getRepoData', repoData)
    // trae la data de los commits
    const commitsData = await getCommitsData()
    console.log('getCommitsData', commitsData)
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
        commits: commitsData
      })
    }
  }

  return (
    <>
      <Header />
      {state.loading && <h2>Loading...</h2>}
      {state.error && <h1>{state.error}</h1>}
      <h1>Home</h1>
    </>
  )
}

export default Home
