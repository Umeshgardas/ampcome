import React, { useEffect } from 'react'
import c3 from "c3";
import 'c3/c3.css';

import "./Dashboard.css"


const Dashboard = () => {
    useEffect(() => {
        // var chart = c3.generate({
        //     data: {
        //         columns: [
        //             ['data1', 30, 200, 100, 400, 150, 250],
        //             ['data2', 50, 20, 10, 40, 15, 25]
        //         ]
        //     }
        // });
        // setTimeout(function () {
        //     chart.load({
        //         columns: [
        //             ['data1', 230, 190, 300, 500, 300, 400]
        //         ]
        //     });
        // }, 1000);

        // setTimeout(function () {
        //     chart.load({
        //         columns: [
        //             ['data3', 130, 150, 200, 300, 200, 100]
        //         ]
        //     });
        // }, 1500);

        // setTimeout(function () {
        //     chart.load({
        //         ids: 'data1'
        //     });
        // }, 2000);
        c3.generate({
            bindto: "#chart",
            data: {
                columns: [
                    ["data1", 30, 200, 100, 400, 150, 250],
                    ["data2", 50, 20, 10, 40, 15, 25],
                    ['data3', 130, 150, 200, 300, 200, 100]
                ],
                type: "line",
            },
        });
    }, []);
    return (
        <>
            <div className='parent_dashboard'>
                <div>
                    <div className='dashboard_tp'>
                        <div className='dashboard_tp_top'>
                            <div className='dashboard_tp_topleft'>
                                <table>
                                    <tr>
                                        <th>Total Earnings</th>
                                    </tr>
                                    <tr>
                                        <td>₹40000</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='dashboard_tp_topright'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Unit Name</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Unit Name</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='dashboard_tp_bottom'>
                            <table>
                                <tr>
                                    <th>Appoinments</th>
                                    <th>EMR finalized</th>
                                    <th>Patient Registrations</th>
                                    <th>KR4ALL visits</th>
                                </tr>
                                <tr>
                                    <td>54</td>
                                    <td>47</td>
                                    <td>120</td>
                                    <td>30</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div className='dashboard_top'>
                        <div className='dashboard_lefttop' >
                            <h1>Appoinments</h1>
                            <br />
                        </div>
                        <div className='dashboard_rightttop'>
                            <h1>Schedule</h1>
                            <br />
                        </div>
                    </div>
                    <br />F
                    <div id="chart" >

                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard