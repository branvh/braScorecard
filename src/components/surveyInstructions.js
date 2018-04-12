//there must be 1 header per col

let instructions = {
	sections: {
		physique: {
			col: 1,
			headers: ["Please Tell Us About Yourself:"],
			title: "physique",
			buttons: {
				forward: true,
				backward: false,
				finish: false
			}
		},
		bleeding: {
			col: 2,
			headers: ["Have You Been Diagnosed With?", "Are You Currently Taking?"],
			title: "bleeding",
			buttons: {
				forward: true,
				backward: true,
				finish: false
			}
		},
		procedures: {
			col: 1,
			headers: ["Have You Had Any Of These Procedures?"],
			title: "procedures",
			buttons: {
				forward: true,
				backward: true,
				finish: false
			}
		},
		diagnostic: {
			col: 1,
			headers: ["Do Any of These Apply?"],
			title: "diagnostic",
			buttons: {
				forward: true,
				backward: true,
				finish: false
			}
		},
		other: {
			col: 1,
			headers: ["Please Answer The Following:"],
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
