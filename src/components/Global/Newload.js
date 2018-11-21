import React, {Component} from 'react'

class Newload extends Component{
    constructor(){
        super();
        this.state={

        }
    }


    render(){
        return(
        <div className="container">
            <div>
                <form >
                    <div className="form-row mt-5">
                        <div className="form-group col-md-6">
                            <label for="inputFrom">From</label>
                            <input type="text" className="form-control" id="inputFrom" placeholder="From"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputTo">To</label>
                            <input type="text" className="form-control" id="inputTo" placeholder="To"/>
                        </div>
                    </div>
                    
                </form>  
                    <button>
                        next
                    </button>
             </div>
            <div className="newLoad mt-5 ">
            <label>
                NewLoad
            </label>
                <form className=" text-center">
                    <div className="form-group col-md-6">
                        <label for="formGroupDateInput">Date</label>
                        <input type="date" className="form-control" id="inputDate" placeholder="Date"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="formGroupVehicleNumber">VehicleNumber</label>
                        <input type="text" className="form-control" id="inputVehicleNumber" placeholder="VehicleNumber"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="formGroupBillNumber">BillNumber</label>
                        <input type="text" className="form-control" id="inputBillNumber" placeholder="BillNumber"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="formGroupWeight">Weight</label>
                        <input type="text" className="form-control" id="inputWeight" placeholder="Weight"/>
                    </div>
                   
                </form>
                <button>
                        next
                    </button>
            </div>
        <div className="workersdetails mt-5">
            <label>
                Worker's Details
            </label>
            
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="formGroupNameInput">Name</label>
                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Id</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Gender</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Age</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Remove</label>
                    <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="formGroupNameInput">Name</label>
                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Id</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Gender</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Age</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Remove</label>
                    <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="formGroupNameInput">Name</label>
                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Id</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Gender</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Age</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Remove</label>
                    <a href="#" className="btn btn-danger "><i className="fa fa-times"></i></a>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="formGroupNameInput">Name</label>
                        <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Id</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Gender</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Age</label>
                    <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group col-md-1 ">
                    <label for="formGroupNameInput">Remove</label>
                    <a href="#" ><button className="but btn btn-success">Add</button></a>
                    </div>
                </div>  
            </form>
            <button>
                Submit
            </button>

        </div>

        </div>
        )
    }
}
export default Newload;