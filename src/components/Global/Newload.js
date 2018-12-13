import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

class Newload extends Component{
    static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allUserProfiles: PropTypes.array,
			createNewLoad: PropTypes.func
		}).isRequired
	};
   
    constructor(props) {
		super(props);
		this.state = {
			Newload: {
				id: '',
				billNumber: '',
				date: '',
				ricemillName: '',
				factoryName: '',
				weight: ''				
			}			
		};	
        this.onUpdate = this.onUpdate.bind(this);	
        this.createNewLoad = this.createNewLoad.bind(this);
	}
	
	onUpdate(e) {
		//e - form
		//target - field
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const targetName = target.name;
		console.log(targetName + ' ' + value);

		let Newload = Object.assign({}, this.state.Newload);
		Newload[targetName] = value;

		this.setState({
			Newload
		});
    }
    
    createNewLoad() {
        // console.log(JSON.stringify(props)+"props data")		
		this.props
			.createNewLoad({
				variables: {
					billNumber: this.state.Newload.billNumber,
					date: this.state.Newload.date,
					ricemillName: this.state.Newload.ricemillName,
					factoryName: this.state.Newload.factoryName,
					vehicleNumber: this.state.Newload.vehicleNumber,
					weight: this.state.Newload.weight,					
				}
			})
			.then((user) => {
                alert(JSON.stringify(user) + 'Uploaded Successfully');               
            });
	}
    render(){
        return(
            <div>
                <img src="../images/newloadbackground.jpg" alt="NewLoad_BackGround_Image" style={{position:"relative", height:"1124px", width:"100%"}} />
                <div className="NewLoad" style={{position:"absolute",top:"200px", width:"100%"}}>
                    <div className="container nlp text-center my-5  box" >        
                        <label className="my-4 nl">
                            New Load Form
                        </label>
                        <div id="colorlib-reservation">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 search-wrap">
                                <form method="post" className="colorlib-form">
                                    <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                        <label htmlFor="text">From</label>
                                        <div className="form-field">
                                            <i className="icon icon-calendar2" />
                                            <input type="text" id="text" className="form-control text" placeholder="RiceMill" 
                                            id="ricemillName"
                                            name="ricemillName"                                          
                                            onChange={this.onUpdate.bind(this)}
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                        <label htmlFor="text">To</label>
                                        <div className="form-field">
                                            <i className="icon icon-calendar2" />
                                            <input type="text" id="text" className="form-control text" placeholder="Factory" 
                                            id="factoryName" 
                                            name="factoryName"                                           
                                            onChange={this.onUpdate.bind(this)}
                                            />
                                        </div>
                                        </div>
                                    </div> 
                                    <div className="col-md-2" style={{marginTop: "25px"}}>
                                        <button class="button">Next</button>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>                        
                        <div className="newLoad mt-5 container text-cente">
                            <label className="nl my-4">
                                New Load Details
                            </label>
                            <form className=" text-center">
                                <div className="form-group col-md-6">
                                    <input type="date" className="form-control my-4"  placeholder="Date"
                                    id="date"  
                                    name="date"                                  
                                    onChange={this.onUpdate.bind(this)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control my-4" placeholder="VehicleNumber"
                                    id="vehicleNumber"
                                    name="vehicleNumber"                                   
                                    onChange={this.onUpdate.bind(this)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control my-4"  placeholder="BillNumber"
                                    id="billNumber" 
                                    name="billNumber"                                 
                                    onChange={this.onUpdate.bind(this)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control my-4"  placeholder="Weight"
                                    id="weight"  
                                    name="weight"                                 
                                    onChange={this.onUpdate.bind(this)}
                                    />
                                </div>                  
                            </form>
                            <button class="button"
                            type="submit"
                            value="submit"
                            onClick={this.createNewLoad.bind(this)}
                            >Next</button>
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
                                            <a href="" ><button className="button">Add</button></a>
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

const ADDNEWLOAD = gql`
mutation createNewLoad(
    $billNumber: String
    $date: String
    $factoryName: String
    $ricemillName: String
    $vehicleNumber: String
    $weight: String		
) {
    createNewLoad(
        billNumber: $billNumber
        date: $date
        factoryName: $factoryName
        ricemillName: $ricemillName
        vehicleNumber: $vehicleNumber
        weight: $weight			
    ) {
        id
        billNumber
        date
        factoryName
  ricemillName
  vehicleNumber
  weight
    }
}
`;
export default withRouter(compose(
    graphql(ADDNEWLOAD, { name: 'createNewLoad' })
)(Newload));
