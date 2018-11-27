import React, { Component } from 'react';

class RicemillStatus extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<img src="../images/newloadbackground.jpg" alt="NewLoad_BackGround_Image" style={{position:"relative", height:"", width:"100%"}} />
				<div className="Ricemill" style={{position:"absolute",top:"200px", width:"100%"}}>
					<div className="container text-center my-5  box " >        
						<label>
							<h1>Name :</h1>
						</label>
							<div className="dropdown">
									<button className="dropbtn">
										Ricemill Name
										<i className="fa fa-caret-down" />
									</button>	
							</div>
						<div>
					</div>
					<div>
						<form>
							<div className="form-row text-center my-5 ">
								<div className="form-group row col-md-6">
									<label for="formGroupNameInput col-md-6  ">From :</label>
									<div className="float-right col-md-6 ">
										<input
											type="date"
											className="form-control "
											id="inputFrom"
											placeholder="From"
										/>
									</div>
								</div>
								<div className="form-group row col-md-6 ">
									<label for="formGroupNameInput col-md-6">To :</label>
									<div className="float-right col-md-6  ">
									<input type="date" className="form-control " id="inputTo" placeholder="To" />
									</div>
								</div>
							</div>
						</form>
					</div>

					<div className="">
						<table>
							<tr>
								<th>S.No</th>
							<th>BillNo</th>
								<th>Date</th>
								<th>Vehical Number</th>
								<th>Weight</th>
								<th> Rate</th>
								<th>Amount</th>
							</tr>
							<tr>
								<td>1</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
							</tr>
							<tr>
								<td>2</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
							</tr>
							<tr>
								<td>3</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
							</tr>
						</table>
					</div>
					<div className=" container col-md-3 float-right d-flex ">
						<div className=" mt-3 pt-2">
							<label for="formGroupNameInput">Total Amount :</label>
						</div>
						<div className="tp  mt-3">
							<input type="text" className="form-control " id="inputFrom" placeholder="0.0 " />
						</div>
						
					</div>
					<div className="my-5 text-right	">
					<button className="btn-primary">PRINT</button>
					</div>
						
				</div>
			</div>
		</div>           
		);
	}
}

export default RicemillStatus;
