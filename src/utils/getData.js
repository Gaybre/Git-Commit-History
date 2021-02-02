// url base de la API
const API_URL = 'https://api.github.com/'

// usuario y nombre del repositorio que serán usados en el proyecto
const USER = 'Gaybre'
const REPO_NAME = 'Git-Commit-History'

// endpoints que se utilizarán
const PROFILE = `${API_URL}users/${USER}`
const REPO = `${API_URL}repos/${USER}/${REPO_NAME}`
const COMMITS = `${API_URL}repos/${USER}/${REPO_NAME}/commits`

// getData recibe una url y hace el llamado a la API_URL, en caso de error se mostrará en consola
export const getData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Fetch Error: ', error.message)
  }
}

// trae el perfil del usuario
export const getProfileData = () => getData(PROFILE)

// trae la data del repo
export const getRepoData = () => getData(REPO)

// trae los commits del repo
export const getCommitsData = () => getData(COMMITS)
