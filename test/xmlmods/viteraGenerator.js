module.exports = [{
    xpath: "//h:recordTarget/h:patientRole/h:patient/h:ethnicGroupCode",
    comment: "due to parser merging raceCode and ethnicGroupCode original raceCode is converted to ethnicGroupCode (#173)"
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.6.1",
    description: "Allergies Section (entries required)",
    type: "rootTemplate",
    childxpaths: [{
        xpath: ".//h:effectiveTime[not(@value | h:low | h:high)]"
    }, {
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.6\"]",
        comment: "this templateId does not exist in the file"
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.1.1",
    description: "Medication Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.1\"]",
        comment: "this templateId does not exist in the file"
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.16",
        description: "Medication Activity",
        type: "localTemplate",
        childxpaths: [{
            xpath: "2.16.840.1.113883.10.20.22.4.18",
            description: "Medication Dispense",
            type: "localTemplate",
            childxpaths: [{
                xpath: "h:performer",
                action: "addAttribute",
                params: {
                    "typeCode": "PRF"
                },
                comment: "needs more research"
            }, {
                xpath: "h:performer/h:assignedEntity",
                action: "addAttribute",
                params: {
                    "classCode": "ASSIGNED"
                },
                comment: "needs more research"
            }]
        }]
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.2.1",
    description: "Immunizations Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.2\"]",
        comment: "this templateId does not exist in the file"
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.52",
        type: "localTemplate",
        description: "Immunization Activity",
        childxpaths: [{
            xpath: "h:performer",
            action: "addAttribute",
            params: {
                "typeCode": "PRF"
            },
            comment: "to be researched"
        }, {
            xpath: "h:performer/h:assignedEntity",
            action: "addAttribute",
            params: {
                "classCode": "ASSIGNED"
            },
            comment: "to be researched"
        }]
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.7.1",
    description: "Procedures Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.7\"]"
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.14",
        description: "Procedure Activity Procedure",
        type: "localTemplate",
        childxpaths: [{
            xpath: "h:participant/h:participantRole/h:templateId",
            comment: "error in file: this should be in participantRole"
        }, {
            xpath: "h:performer",
            action: "addAttribute",
            params: {
                "typeCode": "PRF"
            },
            comment: "to be researched"
        }, {
            xpath: "h:performer/h:assignedEntity",
            action: "addAttribute",
            params: {
                "classCode": "ASSIGNED"
            },
            comment: "to be researched"
        }]
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.22",
    description: "Encounters Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.22.1\"]"
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.49",
        description: "Encounters Activities",
        type: "localTemplate",
        childxpaths: [{
            xpath: "h:participant/h:participantRole/h:templateId",
            comment: "error in file: this should be in participantRole"
        }, {
            xpath: "h:performer",
            action: "addAttribute",
            params: {
                "typeCode": "PRF"
            },
            comment: "to be researched"
        }, {
            xpath: "h:performer/h:assignedEntity",
            action: "addAttribute",
            params: {
                "classCode": "ASSIGNED"
            },
            comment: "to be researched"
        }]
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.18",
    description: "Payers Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: ".//h:templateId[@root=\"2.16.840.1.113883.10.20.1.19\"]"
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.60",
        description: "Coverage Activity",
        type: "localTemplate",
        childxpaths: [{
            xpath: "2.16.840.1.113883.10.20.22.4.61",
            description: "Policy Activity",
            type: "localTemplate",
            childxpaths: [{
                xpath: "h:performer/h:assignedEntity",
                action: "addAttribute",
                params: {
                    "classCode": "ASSIGNED"
                },
                comment: "to be researched"
            }, {
                xpath: "h:performer/h:assignedEntity/h:representedOrganization",
                action: "addAttribute",
                params: {
                    "classCode": "ORG"
                }
            }]
        }]
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.10",
    description: "Plan of Care Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: ".//h:statusCode[@code=\"new\"]",
        comment: "to be researched"
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.5.1",
    description: "Problems Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.5\"]",
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.6",
        type: "localTemplate",
        childxpaths: [{
            xpath: "h:id",
            comment: "to be researched"
        }]
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.4.1",
    description: "Vital Signs Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.4\"]",
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.3.1",
    description: "Results Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "h:templateId[@root=\"2.16.840.1.113883.10.20.22.2.3\"]"
    }, {
        xpath: "//h:observationRange[not(*)][not(@*)][not(text())]"
    }, {
        xpath: "2.16.840.1.113883.10.20.22.4.2",
        type: "localTemplate",
        childxpaths: [{
            xpath: "h:value[@xsi:type=\"PQ\"][not(@value)]",
        }]
    }]
}];
