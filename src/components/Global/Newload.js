import React, {Component} from 'react'

class Newload extends Component{
   
    render(){
        return(
            <div>
                <img src="../images/newloadbackground.jpg" alt="NewLoad_BackGround_Image" style={{position:"relative", height:"1124px", width:"100%"}} />
                <div className="NewLoad" style={{position:"absolute",top:"200px", width:"100%"}}>
                    <div className="container nlp text-center my-5  box" >        
                        <label className="my-4 nl">
                            New Load Form
                        </label>
                        <div>
                            <form >
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="inputFrom" placeholder="From"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="inputTo" placeholder="To"/>
                                    </div>
                                </div>                   
                            </form>  
                            <button>
                                Next
                            </button>
                        </div>
                        <div className="newLoad mt-5 container text-cente">
                            <label className="nl my-4">
                                New Load Details
                            </label>
                            <form className=" text-center">
                                <div className="form-group col-md-6">
                                    <input type="date" className="form-control my-4" id="inputDate" placeholder="Date"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control my-4" id="inputVehicleNumber" placeholder="VehicleNumber"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control my-4" id="inputBillNumber" placeholder="BillNumber"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control my-4" id="inputWeight" placeholder="Weight"/>
                                </div>                  
                            </form>
                            <button>
                                Next
                            </button>
                        </div>
                        <div className="workersdetails mt-5 container">
                            <label className="nl my-4">
                                Worker's Details
                            </label>           
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">                       
                                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">                        
                                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                                    </div>
                                    <div className="form-group col-md-1 ">                   
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                   
                                            <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">                        
                                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                                    </div>
                                    <div className="form-group col-md-1 ">                   
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                   
                                            <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">                        
                                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                                    </div>
                                    <div className="form-group col-md-1 ">                   
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">                        
                                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                                    </div>
                                    <div className="form-group col-md-1 ">                   
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-1 ">                    
                                            <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                                    </div>
                                </div>               
                            </form>
                            <div className="mt-3">
                                <button>
                                    Submit
                                </button>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>           
        )
    }
}
export default Newload;