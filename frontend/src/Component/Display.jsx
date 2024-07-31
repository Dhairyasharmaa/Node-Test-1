import { useEffect, useState } from "react";
import axios from "axios";
import EmpDesign from "./empDesign";
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Display = () => {
    const [mydata, setMydata] = useState([]);
    
    const loadData = async () => {
        try {
            let url = "http://localhost:8000/employe/empdisplay";
            let response = await axios.get(url);
            console.log(response.data);
            setMydata(response.data);
        } catch (error) {
            console.error("Error loading data:", error);
            toast.error("Failed to load data.");
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        return mydata.reduce((total, item) => total + parseFloat(item.price || 0), 0).toFixed(2);
    };

    const ans = mydata.map((employe, index) => (
        <EmpDesign
            key={employe.empId || index} // Ensure unique keys
            empId={employe.pno}
            nm={employe.name}
            des={employe.city}
            sal={employe.price}
        />
    ));

    return (
        <>
            <h1>Display Product</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product No</th>
                        <th>Product Name</th>
                        <th>City</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                    <tr>
                        <td colSpan="3"><strong>Total</strong></td>
                        <td><strong>{calculateTotalPrice()}</strong></td>
                    </tr>
                </tbody>
            </Table>
            <ToastContainer />
        </>
    );
}

export default Display;
