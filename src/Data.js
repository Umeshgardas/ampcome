import { useState, useEffect } from 'react'
// import axios from "axios"

const Data = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getdata();
    })

    const getdata = async () => {
        try {
            const data = fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(result => setData(result))
        }
        catch (e) {
            console.log(e);
        }

    }
    return (
        <div>
            <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>


                <tr >
                    <th>id</th>
                    <th>name</th>
                </tr>
                {
                    data.map((user) => {
                        return (
                            <div>

                                <tr >
                                    <td>{user.id} </td>
                                    <td>{user.name} </td>
                                    <td></td>
                                </tr>

                                {/* <p>{user.id }</p>
                            <p>{user.name}</p> */}

                            </div>
                        )
                    })
                }
            </table>


        </div>

    )
}

export default Data