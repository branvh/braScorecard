//there must be 1 header per col

let instructions = {
	sections: {
		physique: {
			col: 1,
			headers: ["Please tell us about yourself:"],
			title: "physique",
			buttons: {
				forward: true,
				backward: false,
				finish: false
			}
		},
		bleeding: {
			col: 2,
			headers: ["Have you been diagnosed with any of the following?", "Are you currently taking any of the following?"],
			title: "bleeding",
			buttons: {
				forward: true,
				backward: true,
				finish: false
			}
		},
		procedures: {
			col: 1,
			headers: ["Have you had any of these procedures?"],
			title: "procedures",
			buttons: {
				forward: true,
				backward: true,
				finish: false
			}
		},
		diagnostic: {
			col: 1,
			headers: ["Do any of these apply to you?"],
			title: "diagnostic",
			buttons: {
				forward: true,
				backward: true,
				finish: false
			}
		},
		other: {
			col: 1,
			headers: ["Please give us a few final pieces of information"],
			title: "other",
			buttons: {
				forward: false,
				backward: true,
				finish: true
			}
		}
	},
	sequence: ["physique", "bleeding", "procedures", "diagnostic", "other"]
}

export default instructions;

//to do
/*
align each questions to the new sections
align each question to the column # in which it should render
ensure that each question is assigned a component of checkbox, dropDown for now
create a new component called Page which renders a section
abstract the components
redo the answer storage mapping and question names / ids
on survey mount, dynamically create the question storage based on question ids in the survey [e.g. for const X in sections...]
*/
