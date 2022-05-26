import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID zgkdQ3Fq8L5qD3cTn_JgrHELc3n8FQ8nYm6Zh95Egmw'
  }
})