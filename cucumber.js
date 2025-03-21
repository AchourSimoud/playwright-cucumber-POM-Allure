
const getWorldParams = () => {
  const params = {
    foo: 'bar'
  };

  return params;
};

const config = {
  import: ['src/**/*.ts'],
  format: [
    // 'message:e2e/reports/cucumber-report.ndjson',
     "allure-cucumberjs/reporter",
    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar'
  ],
  formatOptions: { snippetInterface: 'async-await' },
  worldParameters: getWorldParams()
};

if (process.env.USE_ALLURE) {
  config.format.push('./src/support/reporters/allure-reporter.ts');
} else {
  config.format.push('@cucumber/pretty-formatter');
}
export default config;
