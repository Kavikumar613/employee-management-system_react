import axios from "axios";
import ListEmployeeComponent from "../components/ListEmployeeComponent";



const EmployeeService = async () => {  
    const EMPLOYEE_API_BASE_URL = await axios.get("http://localhost:8080/api/v1/employee");
}
export default EmployeeService