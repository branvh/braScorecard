import React, {Component} from 'react';

class RiskTable extends Component {

	handleRadiation = (e) => {

		this.props.updateRadiation();

	}

	render () {

		return (

			<div id="riskTableSection">
			<table id="riskTable">
			<thead>
				<tr>
					<th className="riskTableHeader boldTableHeader" rowSpan="3">Outcome</th>
					<th className="riskTableHeader boldTableHeader" colSpan="6">Reconstructive Modality</th>
				</tr>
				<tr>
				<th className="riskTableHeader headerNoBottomBorder" colSpan="2">Tissue Expander</th>
				<th className="riskTableHeader headerNoBottomBorder">Pedicled Abdominal (TRAM) Flap</th>
				<th className="riskTableHeader headerNoBottomBorder">Latissimus Flap</th>
				<th className="riskTableHeader headerNoBottomBorder">Microvascular Reconstruction</th>
				<th className="riskTableHeader headerNoBottomBorder">Single-Stage Implant</th>
				</tr>
				<tr>
				<th className="riskTableHeader italicTableHeader headerNoTopBorder">30 Day</th>
				<th className="riskTableHeader italicTableHeader headerNoTopBorder">1 Year<sup className="headerSuperScript">3</sup></th>
				<th className="riskTableHeader italicTableHeader headerNoTopBorder">30 Day</th>
				<th className="riskTableHeader italicTableHeader headerNoTopBorder">30 Day</th>
				<th className="riskTableHeader italicTableHeader headerNoTopBorder">30 Day</th>
				<th className="riskTableHeader italicTableHeader headerNoTopBorder">1 Year<sup className="headerSuperScript">4</sup></th>
				</tr>
			</thead>
			<tbody>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader riskTableYAxisColMainHeader">Overall Surgical Complications<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[6]}%</td>
				<td className="riskTableDataCell greyRiskCell">{
					( this.props.data[0] <= this.props.data[6] ) ?

						">" +  this.props.data[6] :  this.props.data[0]						
					}
					%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[18]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[19]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[20]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[14]}%</td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Surgical Site Infection<sup className="headerSuperScript">2</sup></td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[8]}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( this.props.data[1] <= this.props.data[8] ) ?

					">" + this.props.data[8]  :  this.props.data[1]

				}

					%</td>
				
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[21]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[22]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[23]}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Seroma<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[9]}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( this.props.data[2] <=  this.props.data[9] ) ?

					">" + this.props.data[9] : this.props.data[2]

				}

				%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[24]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[25]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[26]}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Dehiscence<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[10]}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( this.props.data[3] <= this.props.data[10] ) ? 

					">" + this.props.data[10]  : this.props.data[3] 
				}

				%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[27]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[28]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[29]}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Flap Loss (Partial or Total)<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell" colSpan="2">N/A</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[11]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[30]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[31]}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Explantation</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[5]}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( this.props.data[4] <= this.props.data[5] ) ? 

					">" + this.props.data[5] : this.props.data[4]

				}
				%</td>
				<td className="riskTableDataCell whiteRiskCell">N/A</td>
				<td className="riskTableDataCell greyRiskCell">N/A</td>
				<td className="riskTableDataCell whiteRiskCell">N/A</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow secondToLastRow">
				<td className="riskTableHeader riskTableYAxisColMainHeader">Reoperation<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[12]}%</td>
				<td className="riskTableDataCell greyRiskCell">N/A</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[32]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[33]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[34]}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow finalRowOffset">
				<td className="riskTableHeader riskTableYAxisColMainHeader">Overall 30 Day Medical Complications<sup className="headerSuperScript">2</sup></td>
				<td className="riskTableDataCell greyRiskCell" colSpan="2">{this.props.data[13]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[15]}%</td>
				<td className="riskTableDataCell greyRiskCell">{this.props.data[16]}%</td>
				<td className="riskTableDataCell whiteRiskCell">{this.props.data[17]}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			</tbody>
			</table>
			{(this.props.showToggle) ?
							<div className="row" id="radiationUncertainContainer">
					<p id="radiationToggleText">You indicated you were uncertain about radiation after surgery; the results above are shown by default as if you had answered 'no.' Please use the toggle to see how results change if the answer is 'yes.</p>
					<label className="switch">
						<input
							type="checkbox"
							id="checkboxToggle"
							checked={this.props.radiationToggle}
							onChange={this.handleRadiation}
						/>
						<span className="slider" />
					</label>
			</div>
				: false}
			</div>

			)

	}

}

export default RiskTable;