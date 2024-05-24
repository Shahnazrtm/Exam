import axios from "axios"

export const getAllData = async (url) => {
    let res = await axios.get(url)
    let data = res.data
}
export const PostData = async (url, obj) => {
    let res = await axios.post(url, obj)
    let data = res.data
}
export const deleteData = async (url, _id) => {
    let res = await axios.delete(url, _id)
    let data = res.data
}
