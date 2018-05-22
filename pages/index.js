import axios from 'axios'
export default {
  async asyncData () {
    let { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    return {
      items: data
    }
  }
}
