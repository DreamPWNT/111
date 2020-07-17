import React from "react";

const Table = ({ data }) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telephone</th>
                </tr>
            </thead>
            <tbody>
                { data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;