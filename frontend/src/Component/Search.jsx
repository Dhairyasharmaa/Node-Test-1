import React, { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
    const [pno, setPno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = () => {
        const api = "http://localhost:8000/employe/empsearch";
        axios.post(api, { pno })
            .then(res => {
                console.log(res.data); // Log the response data
                setMydata(res.data);
                toast.success("Data fetched successfully!");
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                toast.error("Failed to fetch data.");
            });
    };

    return (
        <>
            <h1>Search Data</h1>
            <div>
                Enter Product No: 
                <input 
                    type='text' 
                    value={pno} 
                    onChange={(e) => setPno(e.target.value)} 
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            <hr />
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
                    {mydata.length > 0 ? (
                        mydata.map((key) => (
                            <tr key={key._id || key.pno}>
                                <td>{key.pno}</td>
                                <td>{key.name}</td>
                                <td>{key.city}</td>
                                <td>{key.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <ToastContainer />
        </>
    );
}

export default Search;
