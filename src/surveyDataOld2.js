/*let yesNoLabels = [
	"Do you have high blood pressure or are you taking medications for high blood pressure?",
	"Do you have coronary artery disease or peripheral vascular disease?",
	"Have you been diagnosed with diabetes mellitus?",
	"Have you experienced difficult, painful, or labored breathing?",
	"Have you undergone chemotherapy?",
	"American Society of Anesthesiologists (ASA) Physical Status Classification",
	"Smoking Status",
	"Are you having one or both breasts reconstructed?",
	"Have you had, or do you predict having, radiation therapy?",
	"Bleeding Risks:",
	"Vitamin K Deficiency",
	"Thrombocytopenia",
	"Hemophilia",
	"Other Diagnosed Clotting Disorder",
	"Coumadin, NSAIDs, or Other Anti-Coagulant NOT Discontinued Prior to Surgery",
	"Chronic Aspirin Therapy",
	"Balloon Angioplasty",
	"Stent Placement",
	"Coronary Artery Bypass Graft",
	"Valve Replacement/Repair",
	"Implantation of Pacemaker/Defibrillator",
	"Other major cardiac surgery"
];

let dropDownLabels = [
	"American Society of Anesthesiologists (ASA) Physical Status Classification",
	"Smoking Status",
	"Are you having one or both breasts reconstructed?",
	"Have you had, or do you predict having, radiation therapy?",
	"Bleeding Risks:"
];

let yesNoAndDropDown = ["Height", "Weight", "Age"];

let dropDownLabelObj = {
	0: {
		label:
			"American Society of Anesthesiologists (ASA) Physical Status Classification",
		section: "diagnostic-dd",
		element: "dropDown",
		choices: [1,2,3,4,5]
	},
	1: { 
		label: "Smoking Status", 
		section: "dd", 
		element: "dropDown",
		choices: ["Never", "Not within a year", "Not within 30 days", "Currently smoking"]
		 },
	2: {
		label: "Are you having one or both breasts reconstructed?",
		section: "diagnostic-dd",
		element: "dropDown",
		choices: ["One", "Both"]
	},
	3: {
		label: "Have you had, or do you predict having, radiation therapy?",
		section: "diagnostic-dd",
		choices: ["No","Uncertain","Yes, before my mastectomy", "Yes, during the tissue expander phase", "Yes, after my reconstruction"]
	}
};

let ddAndInputObj = {
	0: { label: "Height", section: "physique", elements: [{type: "input", data:"numeric", choices: false}, {type: "radio", data:"binary" , choices: ["in", "m"]}] },
	1: { label: "Weight", section: "physique", elements: [{type: "input", data:"numeric", choices: false}, {type: "radio", data:"binary" , choices: ["lb", "kg"]}] },
	2: { label: "Age", section: "physique", elements: [{type: "input", data:"numeric", choices: false}] }
};*/

let surveyData = {
	physique: {
	physique0: { 
		label: "Height", 
		section: "physique", 
		elements: [{type: "input", data:"numeric", choices: false}, {type: "radio", data:"binary" , choices: ["in", "m"]}] },
	physique1: { 
		label: "Weight", 
		section: "physique", 
		elements: [{type: "input", data:"numeric", choices: false}, {type: "radio", data:"binary" , choices: ["lb", "kg"]}] },
	physique2: { 
		label: "Age", 
		section: "physique", 
		elements: [{type: "input", data:"numeric", choices: false}] },
	},
	diagnostic: {
	diagnostic0: {
		label:
			"American Society of Anesthesiologists (ASA) Physical Status Classification",
		section: "diagnostic",
		elements: [{type: "dropDown", data:"select",choices: [1,2,3,4,5]}]
	},
	diagnostic1: { 
		label: "Smoking Status", 
		section: "diagnostic", 
		elements: [{type: "dropDown", data:"select",choices: ["Never", "Not within a year", "Not within 30 days", "Currently smoking"]}]
		 },
	diagnostic2: {
		label: "Are you having one or both breasts reconstructed?",
		section: "diagnostic",
		elements: [{type: "dropDown", data: "select", choices:["One", "Both"]}]
	},
	diagnostic3: {
		label: "Have you had, or do you predict having, radiation therapy?",
		section: "diagnostic",
		elements: [{type: "dropDown", data: "select", choices: ["No","Uncertain","Yes, before my mastectomy", "Yes, during the tissue expander phase", "Yes, after my reconstruction"]}]
	},
	diagnostic4: {
		label: "Do you have high blood pressure or are you taking medications for high blood pressure?",
		section: "diagnostic",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	diagnostic5: {
		label: "Do you have coronary artery disease or peripheral vascular disease?",
		section: "diagnostic",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	diagnostic6: {
		label: "Have you been diagnosed with diabetes mellitus?",
		section: "diagnostic",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	diagnostic7: {
		label: "Have you experienced difficult, painful, or labored breathing?",
		section: "diagnostic",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	diagnostic8: {
		label: "Have you undergone chemotherapy?",
		section: "diagnostic",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
},
	bleeding: {

	bleeding0: {
		label: "Vitamin K Deficiency",
		section: "bleeding",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	bleeding1: {
		label: "Thrombocytopenia",
		section: "bleeding",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	bleeding2: { 
		label: "Hemophilia", 
		section: "bleeding", 
		elements: [{type: "radioButton", data:"binary" , choices: ["in", "m"]}] 
	},
	bleeding3: {
		label: "Other Diagnosed Clotting Disorder",
		section: "bleeding",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	bleeding4: {
		label: "Coumadin, NSAIDs, or Other Anti-Coagulant NOT Discontinued Prior to Surgery",
		section: "bleeding",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	bleeding5: {
		label: "Chronic Aspirin Therapy",
		section: "bleeding",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
}
	history: {
	history0: {
		label: "Balloon Angioplasty",
		section: "history",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	history1: {
		label: "Stent Placement",
		section: "history",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	history2: {
		label: "Coronary Artery Bypass Graft",
		section: "history",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	history3: {
		label: "Valve Replacement/Repair",
		section: "history",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	history4: {
		label: "Implantation of Pacemaker/Defibrillator",
		section: "history",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	},
	history5: {
		label: "Other major cardiac surgery",
		section: "history",
		elements: [{type: "radioButton", data:"binary" , choices: [0,1]}]
	}
}
};

export default surveyData;



