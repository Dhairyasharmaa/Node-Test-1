import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import del from '../Images/del.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        const api = 'http://localhost:8000/employe/empupdate';
        axios.get(api).then((res) => {
            setMydata(res.data);
        }).catch((error) => {
            console.error('Error loading data:', error);
            toast.error('Failed to load data.');
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const myDel = (myid) => {
        const api = 'http://localhost:8000/employe/empupdatedel';
        axios.post(api, { myid }).then((res) => {
            loadData();
            toast.success('Employee deleted successfully!');
        }).catch((error) => {
            console.error('Error deleting employee:', error);
            toast.error('Failed to delete employee.');
        });
    };

    const ans = mydata.map((key) => (
        <tr key={key._id}>
            <td>{key.pno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.price}</td>
            <td>
                <a href="#" onClick={() => { myDel(key._id); }}>
                    <img src={del} width="30px" height="30px" alt="Delete" />
                </a>
            </td>
        </tr>
    ));

    return (
        <>
            <h1>Updated Data</h1>
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
                </tbody>
            </Table>
            <ToastContainer />
        </>
    );
}

export default Update;
