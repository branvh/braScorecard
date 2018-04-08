//col denotes in which col in a given page the question should render
//label is the question as visible to the user
//section aligns to survey sequencing and also results in a unique id fro the question (section + sequence)
//elements denotes which component should be rendered, data type, and choices - in the event of drop downs 
//ans is a mapping to the answer vector where the value is the index in the vector

let surveyData = {
	0: {
		id: "physique0",
		ans: 0,
		col: 1,
		label: "Height",
		section: "physique",
		elements: [{ type: "input", data: "numeric", choices: false }]
	},
	1: {
		id: "physique1",
		ans: 0,
		col: 1,
		label: "Weight",
		section: "physique",
		elements: [{ type: "input", data: "numeric", choices: false }]
	},
	2: {
		id: "physique2",
		ans: 1,
		col: 1,
		label: "Age",
		section: "physique",
		elements: [{ type: "input", data: "numeric", choices: false }]
	},
	3: {
		id:"other0",
		ans: 6,
		col: 1,
		label:
			"American Society of Anesthesiologists (ASA) Physical Status Classification",
		section: "other",
		elements: [
			{ type: "dropDown", data: "select", choices: [1, 2, 3, 4, 5] }
		]
	},
	4: {
		id: "other1",
		ans: 7,
		col: 1,
		label: "Smoking Status",
		section: "other",
		elements: [
			{
				type: "dropDown",
				data: "select",
				choices: [
					"Never",
					"Not within a year",
					"Not within 30 days",
					"Currently smoking"
				]
			}
		]
	},
	5: {
		id:"other2",
		ans: 12,
		col: 1,
		label: "Are you having one or both breasts reconstructed?",
		section: "other",
		elements: [
			{ type: "dropDown", data: "select", choices: ["One", "Both"] }
		]
	},
	6: {
		id:"other3",
		ans: 13,
		col: 1,
		label: "Have you had, or do you predict having, radiation therapy?",
		section: "other",
		elements: [
			{
				type: "dropDown",
				data: "select",
				choices: [
					"No",
					"Uncertain",
					"Yes, before my mastectomy",
					"Yes, during the tissue expander phase",
					"Yes, after my reconstruction"
				]
			}
		]
	},
	7: {
		id: "diagnostic0",
		ans: 2,
		col: 1,
		label: "High blood pressure?",
		section: "diagnostic",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	8: {
		id:"diagnostic1",
		ans: 16,
		col: 1,
		label: "Coronary artery disease or peripheral vascular disease?",
		section: "diagnostic",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	9: {
		id:"diagnostic2",
		ans: 3,
		col: 1,
		label: "Diabetes mellitus?",
		section: "diagnostic",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	10: {
		id:"diagnostic3",
		ans: 4,
		col: 1,
		label: "Dyspnea (difficult, painful, or labored breathing)",
		section: "diagnostic",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	11: {
		id:"diagnostic4",
		ans: 5,
		col: 1,
		label: "Have you undergone chemotherapy?",
		section: "diagnostic",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	12: {
		id:"bleeding0",
		ans: 15,
		col: 1,
		label: "Vitamin K Deficiency",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	13: {
		id:"bleeding1",
		ans: 15,
		col: 1,
		label: "Thrombocytopenia",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	14: {
		id:"bleeding2",
		ans: 15,
		col: 1,
		label: "Hemophilia",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: ["in", "m"] }]
	},
	15: {
		id:"bleeding3",
		ans: 15,
		col: 1,
		label: "Other Diagnosed Clotting Disorder",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	16: {
		id:"bleeding4",
		ans: 15,
		col: 2,
		label:
			"Coumadin, NSAIDs, or Other Anti-Coagulant NOT Discontinued Prior to Surgery",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	17: {
		id:"bleeding5",
		ans: 15,
		col: 2,
		label: "If yes, can you stop taking the above medication(s) before surgery?",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	18: {
		id:"bleeding6",
		ans: 15,
		col: 2,
		label: "Chronic Aspirin Therapy",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	19: {
		id:"procedures0",
		ans: 16,
		col: 1,
		label: "Balloon Angioplasty",
		section: "procedures",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	20: {
		id:"procedures1",
		ans: 16,
		col: 1,
		label: "Stent Placement",
		section: "procedures",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	21: {
		id:"procedures2",
		ans: 16,
		col: 1,
		label: "Coronary Artery Bypass Graft",
		section: "procedures",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	22: {
		id:"procedures3",
		ans: 16,
		col: 1,
		label: "Valve Replacement/Repair",
		section: "procedures",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	23: {
		id:"procedures4",
		ans: 16,
		col: 1,
		label: "Implantation of Pacemaker/Defibrillator",
		section: "procedures",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	24: {
		id:"procedures5",
		ans: 16,
		col: 1,
		label: "Other major cardiac surgery",
		section: "procedures",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	},
	25: {
		id:"bleeding7",
		ans: 2,
		col: 1,
		label: "Blood pressure medication",
		section: "bleeding",
		elements: [{ type: "checkbox", data: "binary", choices: false }]
	}
};

export default surveyData;
