import React, {Component} from 'react';

class RiskTable extends Component {

	handleRadiation = (e) => {

		this.props.updateRadiation();

	}

	render () {

/*One last trick: for the "1 Year" column under "Tissue Expander," 
any result that is smaller than the number immediately to its left should be overwritten to say ">X%" where X% is the value 
in the column immediately to its left. 
In other words and for example, you cannot have a risk of surgical site infection that is 9% within 30 days but only 3% within 1 year, as 1 year encompasses 30 days.*/

//determine if we need to override the tissue expander 1 year cell

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
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[6]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{
					( Math.round((1/(1+Math.exp(-parseFloat(this.props.data[0]))))*100) <= Math.round((1/(1+Math.exp(-parseFloat(this.props.data[6]))))*100) ) ?

						">" +  Math.round((1/(1+Math.exp(-parseFloat(this.props.data[0]))))*100) :  Math.round((1/(1+Math.exp(-parseFloat(this.props.data[0]))))*100)						
					}
					%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[18]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[19]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[20]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[14]))))*100)}%</td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Surgical Site Infection<sup className="headerSuperScript">2</sup></td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[8]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( Math.round((1/(1+Math.exp(-parseFloat(this.props.data[1]))))*100) <= Math.round((1/(1+Math.exp(-parseFloat(this.props.data[8]))))*100) ) ?

					">" + Math.round((1/(1+Math.exp(-parseFloat(this.props.data[1]))))*100)  :  Math.round((1/(1+Math.exp(-parseFloat(this.props.data[1]))))*100)

				}

					%</td>
				
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[21]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[22]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[23]))))*100)}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Seroma<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[9]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( Math.round((1/(1+Math.exp(-parseFloat(this.props.data[2]))))*100) <=  Math.round((1/(1+Math.exp(-parseFloat(this.props.data[9]))))*100) ) ?

					">" + Math.round((1/(1+Math.exp(-parseFloat(this.props.data[2]))))*100) : Math.round((1/(1+Math.exp(-parseFloat(this.props.data[2]))))*100)

				}

				%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[24]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[25]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[26]))))*100)}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Dehiscence<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[10]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( Math.round((1/(1+Math.exp(-parseFloat(this.props.data[3]))))*100) <= Math.round((1/(1+Math.exp(-parseFloat(this.props.data[10]))))*100) ) ? 

					">" + Math.round((1/(1+Math.exp(-parseFloat(this.props.data[3]))))*100)  : Math.round((1/(1+Math.exp(-parseFloat(this.props.data[3]))))*100) 
				}

				%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[27]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[28]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[29]))))*100)}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Flap Loss (Partial or Total)<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell" colSpan="2">N/A</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[11]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[30]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[31]))))*100)}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow">
				<td className="riskTableHeader indentHeaderText">Explantation</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[5]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{

					( Math.round((1/(1+Math.exp(-parseFloat(this.props.data[4]))))*100) <= Math.round((1/(1+Math.exp(-parseFloat(this.props.data[5]))))*100) ) ? 

					">" + Math.round((1/(1+Math.exp(-parseFloat(this.props.data[4]))))*100) : Math.round((1/(1+Math.exp(-parseFloat(this.props.data[4]))))*100)

				}
				%</td>
				<td className="riskTableDataCell whiteRiskCell">N/A</td>
				<td className="riskTableDataCell greyRiskCell">N/A</td>
				<td className="riskTableDataCell whiteRiskCell">N/A</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow secondToLastRow">
				<td className="riskTableHeader riskTableYAxisColMainHeader">Reoperation<sup className="headerSuperScript">1</sup></td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[12]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">N/A</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[32]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[33]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[34]))))*100)}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			<tr className="riskTableDataRow finalRowOffset">
				<td className="riskTableHeader riskTableYAxisColMainHeader">Overall 30 Day Medical Complications<sup className="headerSuperScript">2</sup></td>
				<td className="riskTableDataCell greyRiskCell" colSpan="2">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[13]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[15]))))*100)}%</td>
				<td className="riskTableDataCell greyRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[16]))))*100)}%</td>
				<td className="riskTableDataCell whiteRiskCell">{Math.round((1/(1+Math.exp(-parseFloat(this.props.data[17]))))*100)}%</td>
				<td className="riskTableDataCell emptyRiskCell"></td>
			</tr>
			</tbody>
			</table>
			{(this.props.showToggle) ?
							<div style={{display: 'inline', textAlign: 'center', paddingTop: '10px'}}>
					<div className="checkboxLabel">If you weren't sure about radiation exposure, see how results change by pressing this: </div>
					<label className="centeredSwitch">
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