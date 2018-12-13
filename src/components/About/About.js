import React, { Component } from 'react';
import './about.css';

class About extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (				
			<div style={{height:"500px"}}>				
				<p id="start">Welcome to Husk Traders</p>
				<h1 className="h1s">Husk Traders<sub>import and export</sub></h1>
				<div id="titleses">
					<div id="titlecontents">				
						<p>Rice hulls are the coatings of seeds, or grains, of rice.</p>
						<p>The husk protects the seed during the growing season, since it is formed from hard materials, including opaline silica and lignin. The hull is mostly indigestible to humans.</p>
						<p>Winnowing, used to separate the rice from hulls, is to put the whole rice into a pan and throw it into the air while the wind blows.</p>
						<p>The light hulls are blown away while the heavy rice fall back into the pan.</p>
						<p>Later pestles and a simple machine called a rice pounder were developed to remove hulls.</p>
						<p>In 1885 the modern rice hulling machine was invented in Brazil.</p>
						<p>During the milling processes, the hulls are removed from the raw grain to reveal whole brown rice, which may then sometimes be milled further to remove the bran layer, resulting in white rice.</p>
						<p>Combustion of rice hulls affords rice husk ash (acronym RHA).</p>
						<p>An import is a good brought into a jurisdiction, especially across a national border, from an external source.</p>
						<p className="center">Import</p>
						<p>The party bringing in the good is called an importer.</p>
						<p>An import in the receiving country is an export from the sending country. Importation and exportation are the defining financial transactions of international trade.</p>
						<p>In international trade, the importation and exportation of goods are limited by import quotas and mandates from the customs authority. The importing and exporting jurisdictions may impose a tariff (tax) on the goods. In addition, the importation and exportation of goods are subject to trade agreements between the importing and exporting jurisdictions.</p>
						<p className="center">Export</p>
						<p>The term export in international trade means the sending of goods or services produced in one country to another country.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
