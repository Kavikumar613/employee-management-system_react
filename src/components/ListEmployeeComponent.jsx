import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const ListEmployeeComponent = () => {
    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        EmployeeService()
    },[])

    const EmployeeService = async () => {  
        const EMPLOYEE_API_BASE_URL = await axios.get("http://localhost:8080/api/v1/employee");
        setEmployees(EMPLOYEE_API_BASE_URL.data);
        console.log(EMPLOYEE_API_BASE_URL)
    }
    return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <div className='row'>
                <table className='table table-striped table-borderd'>
                    <thead>
                        <tr>

                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Employee Phone Number</th>
                            <th>Action:</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                                employees.map((employee) =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.emailId}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2">View</button>
                                            <button className="btn btn-outline-primary mx-2">Edit</button>
                                            <button className="btn btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                         
                         {/* <tr>
                                        <td>kavi</td>
                                        <td>kumar</td>
                                        <td>@</td>
                                        <td>709865432</td>
                                        <td>
                                            <button className="btn btn-primary mx-2">View</button>
                                            <button className="btn btn-outline-primary mx-2">Edit</button>
                                            <button className="btn btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr> */}
                        
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default ListEmployeeComponent