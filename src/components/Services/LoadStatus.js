import React, {Component} from 'react'
import './LoadStatus.css'


class LoadStatus extends Component{
    render(){
        return(
            <div className="container pt-4">
            <lable className="text-left"><h1>Today</h1></lable>
                <table>
                        <thead className="text-center">
                            <th><h1>S.No</h1></th>
                            <th><h1>Date</h1></th>
                            <th><h1>Vehicle No.</h1></th>
                            <th><h1>Bill Number</h1></th>
                            <th><h1>Weight</h1></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            
                        </tbody>
                </table>

                <div className="monthlytrips mt-5">
                    <lable className=" text-center"><h1>Monthly-Trips</h1></lable>
                        <form >
                            <div className="form-row mt-5">
                                <div className="form-group col-md-6">
                                    <input type="date" className="form-control" id="inputFrom" placeholder="From"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="date" className="form-control" id="inputTo" placeholder="To"/>
                                </div>
                            </div>
                        </form>
                            <button className="float-right">
                                Next
                            </button>
                    <div>   
                            <table className="box-2 ">
                        <thead className="text-center">
                            <th><h1>S.No</h1></th>
                            <th><h1>Bill No</h1></th>
                            <th><h1>Date</h1></th>
                            <th><h1>Vehicle No.</h1></th>
                            <th><h1>Weight</h1></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            <tr>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                                <td contenteditable="true" class="table-cell--edit"></td>
                            </tr>
                            
                        </tbody>
                </table>
                </div>


                </div>


            </div>
        )
    }
}
export default LoadStatus;