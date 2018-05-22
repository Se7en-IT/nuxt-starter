import axios from 'axios'
export default {
  async asyncData ({params}) {
    let { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts/` + params.id)
    return data
  }
}
