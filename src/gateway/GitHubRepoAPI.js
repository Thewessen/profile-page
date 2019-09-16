import axios from 'axios'

export default (repo) => axios.create({
  baseURL: `https://api.github.com/repos/Thewessen/${repo}/contents/`,
  header: {
    'User-Agent': 'Thewessen/Profile-page',
    Accept: "application/vnd.github.v3+json"
  }
})
