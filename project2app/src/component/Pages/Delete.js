import { useNavigate, useParams } from "react-router-dom"

const Delete = () => {
    const [customer , setCustomer] = useState({})
    const {customerID} = useParams()
    const navigate = useNavigate ()
    async function fetchData(){
        const result = await axios.get()
    }
}