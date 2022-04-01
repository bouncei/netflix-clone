import axios from "axios";



const instance = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3",
    }
)


instance.get("/fotsj")  // Example of a get requests
instance.post("/fotsj")  // Example of a POST requests




export default instance