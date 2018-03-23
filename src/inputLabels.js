let yesNoLabels = [
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
		section: "dropDown",
		element: "dropDown"
	},
	1: { label: "Smoking Status", section: "dd", element: "dropDown" },
	2: {
		label: "Are you having one or both breasts reconstructed?",
		section: "dd",
		element: "dropDown"
	},
	3: {
		label: "Have you had, or do you predict having, radiation therapy?",
		section: "dd",
		element: "dropDown"
	},
	4: { label: "Bleeding Risks:", section: "dd", element: "dropDown" }
};

let ddAndInputObj = {
	0: { label: "Height", section: "dd", element: "combo" },
	1: { label: "Weight", section: "dd", element: "combo" },
	2: { label: "Age", section: "dd", element: "combo" }
};

let radioButtonObj = {
	0: {
		label:
			"Do you have high blood pressure or are you taking medications for high blood pressure?",
		section: "bleeding",
		element: "radioButton"
	},
	1: {
		label:
			"Do you have coronary artery disease or peripheral vascular disease?",
		section: "bleeding",
		element: "radioButton"
	},
	2: {
		label: "Have you been diagnosed with diabetes mellitus?",
		section: "bleeding",
		element: "radioButton"
	},
	3: {
		label: "Have you experienced difficult, painful, or labored breathing?",
		section: "bleeding",
		element: "radioButton"
	},
	4: {
		label: "Have you undergone chemotherapy?",
		section: "bleeding",
		element: "radioButton"
	},
	5: {
		label: "Vitamin K Deficiency",
		section: "bleeding",
		element: "radioButton"
	},
	6: {
		label: "Thrombocytopenia",
		section: "bleeding",
		element: "radioButton"
	},
	7: { label: "Hemophilia", section: "bleeding", element: "radioButton" },
	8: {
		label: "Other Diagnosed Clotting Disorder",
		section: "bleeding",
		element: "radioButton"
	},
	9: {
		label:
			"Coumadin, NSAIDs, or Other Anti-Coagulant NOT Discontinued Prior to Surgery",
		section: "bleeding",
		element: "radioButton"
	},
	10: {
		label: "Chronic Aspirin Therapy",
		section: "bleeding",
		element: "radioButton"
	},
	11: {
		label: "Balloon Angioplasty",
		section: "bleeding",
		element: "radioButton"
	},
	12: {
		label: "Stent Placement",
		section: "bleeding",
		element: "radioButton"
	},
	13: {
		label: "Coronary Artery Bypass Graft",
		section: "bleeding",
		element: "radioButton"
	},
	14: {
		label: "Valve Replacement/Repair",
		section: "bleeding",
		element: "radioButton"
	},
	15: {
		label: "Implantation of Pacemaker/Defibrillator",
		section: "bleeding",
		element: "radioButton"
	},
	16: {
		label: "Other major cardiac surgery",
		section: "bleeding",
		element: "radioButton"
	}
};





