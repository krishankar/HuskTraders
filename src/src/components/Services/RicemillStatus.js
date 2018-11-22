import React, { Component } from 'react';

class RicemillStatus extends Component {
	constructor() {
		super();
		this.state = {};
	}

	
	render() {
		return (
			<div className="rm container">
				<div className="text-center">
					<div className="form-group t my-5">
						<label for="formGroupNameInput">Name</label>
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
						{/* <input type="text" className="form-control" id="input" placeholder="text" /> */}
					</div>
				</div>

				<form>
					<div className="form-row text-center">
						<div className="form-group col-md-6">
							<label for="formGroupNameInput">From</label>
							<input type="date" className="form-control" id="inputFrom" placeholder="From" />
						</div>
						<div className="form-group col-md-6">
							<label for="formGroupNameInput">To</label>
							<input type="date" className="form-control" id="inputTo" placeholder="To" />
						</div>
					</div>
				</form>

				<div class="tbl mt-5">
					<table cellpadding="0" cellspacing="0" border="0">
						<thead>
							<tr>
								<th>S.No</th>
								<th>BillNo</th>
								<th>Date</th>
								<th>Vehical Number</th>
								<th>Weight Rate</th>
								<th>Ammount</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="t my-5">
					<label for="formGroupNameInput">Total Ammout</label>
					<input type="text" className="form-control" id="inputFrom" placeholder="Total Ammout" />
				</div>
                <div className="my-3">
				<button>PRINT</button>
                </div>
			</div>
		);
	}
}

export default RicemillStatus;
