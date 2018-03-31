//there must be 1 header per col

let instructions = {
	sections: {
		physique: {
			col: 1,
			headers: ["Please Tell Us About Yourself:"],
			title: "physique"
		},
		bleeding: {
			col: 2,
			headers: ["Have You Been Diagnosed With:", "Are You Currently Taking:"],
			title: "bleeding"
		},
		procedures: {
			col: 1,
			headers: ["Have You Had Any Of These Procedures:"],
			title: "procedures"
		},
		diagnostic: {
			col: 1,
			headers: ["Have You Been Diagnosed With:"],
			title: "diagnostic"
		},
		other: {
			col: 1,
			headers: ["Please Answer The Following:"],
			title: "other"
		}
	}
	sequence: ["physique", "bleeding", "procedures", "diagnostic", "other"]
}

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
