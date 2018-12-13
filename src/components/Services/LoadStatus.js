import React, {Component} from 'react'
import './LoadStatus.css'


class LoadStatus extends Component{
    render(){
        return(
            // <div className="container pt-4">
            // <lable className="text-left"><h1>Today</h1></lable>
            //     <table>
            //             <thead className="text-center">
            //                 <th><h1>S.No</h1></th>
            //                 <th><h1>Date</h1></th>
            //                 <th><h1>Vehicle No.</h1></th>
            //                 <th><h1>Bill Number</h1></th>
            //                 <th><h1>Weight</h1></th>
            //             </thead>
            //             <tbody>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
                            
            //             </tbody>
            //     </table>

            //     <div className="monthlytrips mt-5">
            //         <lable className=" text-center"><h1>Monthly-Trips</h1></lable>
            //             <form >
            //                 <div className="form-row mt-5">
            //                     <div className="form-group col-md-6">
            //                         <input type="date" className="form-control" id="inputFrom" placeholder="From"/>
            //                     </div>
            //                     <div className="form-group col-md-6">
            //                         <input type="date" className="form-control" id="inputTo" placeholder="To"/>
            //                     </div>
            //                 </div>
            //             </form>
            //                 <button className="float-right">
            //                     Next
            //                 </button>
            //         <div>   
            //                 <table className="box-2 ">
            //             <thead className="text-center">
            //                 <th><h1>S.No</h1></th>
            //                 <th><h1>Bill No</h1></th>
            //                 <th><h1>Date</h1></th>
            //                 <th><h1>Vehicle No.</h1></th>
            //                 <th><h1>Weight</h1></th>
            //             </thead>
            //             <tbody>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
            //                 <tr>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                     <td ></td>
            //                 </tr>
                            
            //             </tbody>
            //     </table>
            //     </div>


            //     </div>


            // </div>
            <div>
            <img src="../images/newloadbackground.jpg" alt="NewLoad_BackGround_Image" style={{position:"relative", height:"", width:"100%"}} />
            <div className="Ricemill" style={{position:"absolute",top:"200px", width:"100%"}}>
            <div className="container text-center my-5  box " >      
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
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            
                        </tbody>
                </table>

                <div className="monthlytrips mt-5">
                    <lable className=" text-center"><h1>Monthly-Trips</h1></lable>
                    <div id="colorlib-reservation">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 search-wrap">
                                <form method="post" className="colorlib-form">
                                    <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                        <label htmlFor="date">Check-in:</label>
                                        <div className="form-field">
                                            <i className="icon icon-calendar2" />
                                            <input type="date" id="date" className="form-control date" placeholder="Check-in date" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                        <label htmlFor="date">Check-out:</label>
                                        <div className="form-field">
                                            <i className="icon icon-calendar2" />
                                            <input type="date" id="date" className="form-control date" placeholder="Check-out date" />
                                        </div>
                                        </div>
                                    </div> 
                                    <div className="col-md-2" style={{marginTop: "25px"}}>
                                        <input type="submit" name="submit" id="submit" defaultValue="Search" className="btn btn-primary btn-block" />
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <form >
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
                            </button> */}
                    <div>   
                            <table className="box-2 my-5 ">
                        <thead className="text-center">
                            <th><h1>S.No</h1></th>
                            <th><h1>Bill No</h1></th>
                            <th><h1>Date</h1></th>
                            <th><h1>Vehicle No.</h1></th>
                            <th><h1>Weight</h1></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            
                        </tbody>
                </table>
                </div>


                </div>


            </div>  
                  
        </div>
        </div>
        </div>
      

        )
    }
}
export default LoadStatus;