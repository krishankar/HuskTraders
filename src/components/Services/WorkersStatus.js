import React, { Component } from 'react';

class WorkersStatus extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			// <div className="rm container">
			// 	<div className=" d-flex">
			// 		<div className="text-center">
			// 			<div className="form-group t my-5 ">
			// 				<label for="formGroupName">Name :</label>
			// 				<div class="dropdown">
			// 					<button class="dropbtn  px-5">
			// 						Company Name
			// 						<i class="fa fa-caret-down" />
			// 					</button>
							
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>

			// 			<form>
			// 				<div className="form-row text-center container">
			// 					<div className="form-group row col-md-6">
			// 						<div className="f">
			// 							<label for="formGroupNameInput col-md-6">From: 
			// 							</label>
			// 					</div>
			// 							<div className="float-right col-md-6 px-3">
			// 								<input
			// 									type="date"
			// 									className="form-control float-right"
			// 									id="inputFrom"
			// 									placeholder="From"
			// 								/>
			// 							</div>
			// 						</div>
			// 							<div className="form-group row col-md-6 position0">
			// 								<label for="formGroupNameInput col-md-6">To</label>
			// 								<div className="float-right col-md-6 px-5">
			// 									<input type="date" className="form-control " id="inputTo" placeholder="To" />
			// 								</div>
			// 							</div>
			// 				</div>
			// 		</form>

			// 	<table>
			// 		<tr>
			// 			<th>S.No</th>
			// 			<th>Date</th>
			// 			<th>Vehical</th>
			// 			<th>Ammount</th>
			// 		</tr>
			// 		<tr>
			// 			<td>1</td>
			// 			<td>item</td>
			// 			<td>item</td>
			// 			<td>item</td>
			// 		</tr>
			// 		<tr>
			// 			<td>2</td>
			// 			<td>item</td>
			// 			<td>item</td>
			// 			<td>item</td>
			// 		</tr>
			// 		<tr>
			// 			<td>3</td>
			// 			<td>item</td>
			// 			<td>item</td>
			// 			<td>item</td>
			// 		</tr>
			// 	</table>
			// 	<div className=" container d-flex">
			// 		<div className="ttp mt-3 pt-2">
			// 			<label for="formGroupNameInput">Total Payment :</label>
			// 		</div>
			// 		<div className="tp mt-3">
			// 			<input type="text" className="form-control " id="inputFrom" placeholder="Total Payment" />
			// 		</div>
			// 	</div>
			// 	<div className="mt-5 pr justify-content-center ">
			// 		<button>PRINT</button>
			// 	</div>
			// </div>
			<div>
				<img src="../images/newloadbackground.jpg" alt="NewLoad_BackGround_Image" style={{position:"relative", height:"", width:"100%"}} />
				<div className="Ricemill" style={{position:"absolute",top:"200px", width:"100%"}}>
				<div className="container text-center my-5  box " >        
						<label>
							<h1>Name :</h1>
						</label>
							<div className="dropdown">
									<button className="dropbtn">
										Workers Name
										<i className="fa fa-caret-down" />
									</button>	
							</div>
						<div>
					</div>
					<div>
						<form className="my-5">
							<div className="form-row text-center ">
								<div className="form-group row col-md-6">
									<label for="formGroupNameInput col-md-6  ">From :</label>
									<div className="float-right col-md-6 pr-5">
										<input
											type="date"
											className="form-control float-right"
											id="inputFrom"
											placeholder="From"
										/>
									</div>
								</div>
								<div className="form-group row col-md-6 ">
									<label for="formGroupNameInput col-md-6">To :</label>
									<div className="float-right col-md-6 pr-5 ">
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
								<th>Date</th>
								<th>Vehical Number</th>
								<th>Amount</th>
							</tr>
							<tr>
								<td>1</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
							</tr>
							<tr>
								<td>2</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
							</tr>
							<tr>
								<td>3</td>
								<td>item</td>
								<td>item</td>
								<td>item</td>
							</tr>
						</table>
					</div>
					<div className=" container col-md-3  d-flex ">
						<div className=" mt-3 pt-2">
							<label for="formGroupNameInput">Total Payment :</label>
						</div>
						<div className="tp  mt-3">
							<input type="text" className="form-control " id="inputFrom" placeholder="0.0 " />
						</div>
						
					</div>
					<div className="my-5 ">
					<button>PRINT</button>
					</div>
						
				</div>
			</div>
			</div>
          

		);
	}
}

export default WorkersStatus;
