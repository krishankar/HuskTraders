import React, { Component } from 'react';

class About extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (				
				<div className="features text-center container my-5">
					<div className="heading">
						<h4>Rice Mill</h4>
					</div>
					<div className=" my-5">
						<p>
						The mill built on St. Ann Street in 1912 was three stories high in order to take advantage of gravity in the flow of 
						rice throughout its processing stages. Each of the stages involved processing steps on the rice as it was delivered
						from the third down to the second and first floors, then up again for the next stage. The first stage began when rice 
						was brought by elevator into a storage bin on the third floor. The bin feed into the "stone", two 5-foot-diameter 
						stones separated enough to dehull the rice, then into the huller to remove the bran, then the "brush" for polishing. 
						This stage produced a highly polished rice that was popular during these years, but now has been reduced to only the 
						first step, leaving the bran intact. From the "brush" the rice was fed into the "trumble", applying a coating of 
						sucrose (purchased in 55 gallon drums) and talcum powder (hence the instructions "wash before cooking"). After the 
						"trumble", the rice was moved to scales for weighing and packaging, originally in 100-pound sacks, and in later years
						bags of 10, 25 and 50 pounds.
						</p>
					</div>
			</div>
		);
	}
}

export default About;
