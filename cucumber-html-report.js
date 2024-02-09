const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./cucumber-htmlreport",
    metadata: {
        browser: {
            name: "edge",
            version: "",
        },
        device: " - ",
        platform: {
            name: "",
            version: "",
        },
    },
});