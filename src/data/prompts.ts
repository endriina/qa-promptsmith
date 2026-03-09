export type Category = "Test Design" | "Bug Reporting" | "Test Data" | "Accessibility" | "Automation";

export interface Prompt {
  title: string;
  description: string;
  category: Category;
  prompt: string;
}

export const categories: { name: Category; icon: string; description: string }[] = [
  { name: "Test Design", icon: "FlaskConical", description: "Generate test scenarios, charters, and coverage analysis" },
  { name: "Bug Reporting", icon: "Bug", description: "Structure bug reports and analyze regression impact" },
  { name: "Test Data", icon: "Database", description: "Generate realistic test data for various scenarios" },
  { name: "Accessibility", icon: "Accessibility", description: "Audit designs and generate a11y test cases" },
  { name: "Automation", icon: "Cog", description: "Convert manual test cases into automation scripts" },
];

export const prompts: Prompt[] = [
    {
    title: "Test Scenario Generation",
    description: "Generate comprehensive testing scenarios from user stories, acceptance criteria and design screenshots.",
    category: "Test Design",
    prompt: `You are a senior QA engineer with strong experience in functional, exploratory and edge-case testing.

Your task is to analyse the provided information and generate comprehensive testing scenarios.

Input can include:
- User story
- Acceptance criteria
- Design screenshots (UI/UX)
- Additional notes if provided

Use ALL available information to understand the feature.

If screenshots are provided:
- analyse UI elements
- identify possible user interactions
- infer validation rules
- detect potential usability or logic issues

Generate the following:

1. Functional Test Cases
- clear test scenarios that validate the expected functionality

2. Edge Cases
- boundary conditions
- unusual but realistic user behaviour

3. Negative Scenarios
- invalid inputs
- incorrect flows
- failure situations

4. Test Data Ideas
- valid data
- boundary values
- invalid inputs
- special characters
- localisation considerations if relevant

5. UI / UX Risks (based on screenshots if provided)
- possible confusion
- accessibility issues
- layout risks
- missing validations

Structure the output in clear sections using bullet points or tables.

Ask clarifying questions if important information is missing.

Focus on:
- realistic user behaviour
- potential bugs
- validation logic
- integration risks

Input:

User story / Acceptance criteria:
[paste here]

Design screenshots:
[attach screenshots if available]`,
  },
  {
    title: "Structure QA Testing Notes into Bug / Test Report",
    description: "Transform raw QA testing notes into well-structured bug reports or test reports with proper formatting.",
    category: "Bug Reporting",
    prompt: "I have the following raw QA testing notes. Please structure them into a professional bug report or test report. Include: Summary, Environment, Steps to Reproduce, Expected vs Actual Result, Severity, Priority, Screenshots/Attachments placeholders.\n\nRaw notes: [PASTE YOUR NOTES HERE]",
  },
  {
    title: "QA Test File Generator",
    description: "Generate test data files (CSV, JSON, XML) with realistic data for various testing scenarios.",
    category: "Test Data",
    prompt: "Generate a test data file for the following scenario. Include realistic but synthetic data with edge cases (empty fields, special characters, boundary values, unicode). Specify the format (CSV/JSON/XML) and number of records needed.\n\nScenario: [DESCRIBE YOUR DATA NEEDS]\nFormat: [CSV/JSON/XML]\nRecords: [NUMBER]",
  },
  {
    title: "A11y Design Accessibility Review",
    description: "Review UI designs for WCAG compliance including color contrast, focus management, and semantic structure.",
    category: "Accessibility",
    prompt: "Review the following UI design/component for accessibility compliance based on WCAG 2.1 AA standards. Check for: color contrast ratios, keyboard navigation, screen reader compatibility, focus management, semantic HTML, ARIA labels, and touch target sizes.\n\nDesign description: [DESCRIBE THE UI COMPONENT]",
  },
  {
    title: "Generate Accessibility Test Cases",
    description: "Create detailed accessibility test cases covering keyboard navigation, screen readers, and WCAG criteria.",
    category: "Accessibility",
    prompt: "Generate detailed accessibility test cases for the following feature/page. Cover: keyboard navigation, screen reader announcements, color contrast, focus order, ARIA attributes, error handling for assistive tech, and responsive/zoom behavior.\n\nFeature: [DESCRIBE THE FEATURE]",
  },
  {
    title: "Accessibility Checklist Generator",
    description: "Generate a comprehensive accessibility testing checklist tailored to your specific application type.",
    category: "Accessibility",
    prompt: "Create a comprehensive accessibility testing checklist for a [TYPE OF APPLICATION]. Include checks for: perceivable content, operable interfaces, understandable information, robust compatibility. Organize by WCAG principle and include specific tools to use for each check.\n\nApplication type: [WEB APP / MOBILE APP / DESKTOP]",
  },
  {
    title: "Screen Reader Simulation Prompt",
    description: "Simulate how a screen reader would announce and navigate through your UI components.",
    category: "Accessibility",
    prompt: "Simulate how a screen reader (NVDA/JAWS/VoiceOver) would announce and navigate through the following UI component or page. Include: reading order, landmark announcements, interactive element announcements, state changes, and any issues that would confuse users.\n\nComponent HTML/Description: [PASTE HTML OR DESCRIBE UI]",
  },
  {
    title: "Accessibility Bug Reporter",
    description: "Create detailed accessibility bug reports with WCAG references and remediation suggestions.",
    category: "Accessibility",
    prompt: "Create a detailed accessibility bug report for the following issue. Include: WCAG criterion violated, severity, affected user groups, steps to reproduce with assistive technology, expected behavior, actual behavior, and recommended fix.\n\nIssue: [DESCRIBE THE ACCESSIBILITY ISSUE]",
  },
  {
    title: "Regression Impact Analyzer",
    description: "Analyze code changes to identify potential regression risks and suggest targeted test areas.",
    category: "Test Design",
    prompt: "Analyze the following code changes or feature modifications and identify potential regression risks. List: affected modules, high-risk areas, suggested regression test cases, and priority order for testing.\n\nChanges: [DESCRIBE THE CHANGES OR PASTE DIFF]",
  },
  {
    title: "Exploratory Testing Charter Generator",
    description: "Generate focused exploratory testing charters with time-boxed missions and risk areas.",
    category: "Test Design",
    prompt: "Generate exploratory testing charters for the following feature. Each charter should include: Mission, Areas to explore, Risk areas, Time box, What to look for (oracles), and Note-taking template.\n\nFeature: [DESCRIBE THE FEATURE]",
  },
  {
    title: "Test Coverage Gap Analyzer",
    description: "Identify gaps in your current test coverage by analyzing requirements against existing test cases.",
    category: "Test Design",
    prompt: "Analyze the following requirements and existing test cases to identify coverage gaps. Highlight: untested requirements, missing edge cases, uncovered user flows, integration points without tests, and non-functional areas lacking coverage.\n\nRequirements: [LIST REQUIREMENTS]\nExisting tests: [LIST OR DESCRIBE CURRENT TESTS]",
  },
  {
    title: "Automation Test Generator from Test Case",
    description: "Convert manual test cases into automation scripts using your preferred framework and language.",
    category: "Automation",
    prompt: "Convert the following manual test case into an automated test script. Use [FRAMEWORK] with [LANGUAGE]. Include: page object pattern, assertions, wait strategies, test data setup/teardown, and error handling.\n\nFramework: [Playwright/Cypress/Selenium]\nLanguage: [TypeScript/JavaScript/Python/Java]\n\nManual test case:\n[PASTE TEST CASE]",
  },
];
