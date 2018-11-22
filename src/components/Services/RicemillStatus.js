import React, { Component } from 'react';

class RicemillStatus extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="rm container">
				<div className=" d-flex">
				<div className="text-center">
					<div className="form-group  my-5 ">
						<label for="formGroupName">Name :</label>
						<div class="dropdown">
							<button class="dropbtn">
								Company Name
								<i class="fa fa-caret-down" />
							</button>
							<div class="dropdown-content">
								<a href="#">Link 1</a>
								<a href="#">Link 2</a>
								<a href="#">Link 3</a>
							</div>
							</div>
						</div>

						{/* <input type="text" className="form-control" id="input" placeholder="text" /> */}
					</div>
				</div>

				<form>
					<div className="form-row text-center container d-flex">
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

				<table>
					<tr>
						<th>S.No</th>
						<th>BillNo</th>
						<th>Date</th>
						<th>Vehical Number</th>
						<th>Weight Rate</th>
						<th>Ammount</th>
					</tr>
					<tr>
						<td>1</td>
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
					</tr>
					<tr>
						<td>3</td>
						<td>item</td>
						<td>item</td>
						<td>item</td>
						<td>item</td>
						<td>item</td>
					</tr>
				</table>
				<div className=" container d-flex">
					<div className="ttp mt-3 pt-2">
						<label for="formGroupNameInput">Total Amount :</label>
					</div>
					<div className="tp mt-3">
						<input type="text" className="form-control " id="inputFrom" placeholder="Total Amount" />
					</div>
				</div>
				<div className="mt-5 pr container">
					<button>PRINT</button>
				</div>
			</div>
		);
	}
}

export default RicemillStatus;
