// ================================================================
// data-interviews.js — BA Interview Questions & Answers
// Word-for-word from add3.txt, structured for rendering
// ================================================================

const INTERVIEW_INTRO = `37 interview questions covering Core BA Skills, Technical Tools, Behavioral (STAR method), Agile & Scrum, Banking/Fintech domain knowledge, and Case Studies. Each question includes what the interviewer is assessing and a strong answer framework.`;

const INTERVIEW_SECTIONS = [
  {
    id: 'q1-q5-core',
    num: '01',
    title: 'Q1–Q5: Core BA Skills',
    tag: 'CORE SKILLS',
    insight: 'Always mention documents you\'ve personally created and be ready with specific examples.',
    content: `<h3>Q1. What is the role of a Business Analyst?</h3>
<p><strong>What They're Assessing:</strong> Understanding of the BA role, strategic value, communication skills</p>
<p><strong>Strong Answer Framework:</strong> A Business Analyst serves as the bridge between business stakeholders and technical teams, translating business needs into actionable solutions. The role involves:</p>
<ul>
<li>Analyzing current business processes and identifying inefficiencies or gaps</li>
<li>Gathering and documenting requirements through stakeholder engagement</li>
<li>Recommending improvements that align with organizational objectives</li>
<li>Ensuring clear communication between all parties involved</li>
<li>Facilitating change management and ensuring solutions deliver business value</li>
</ul>
<p><strong>Key Points to Include:</strong> Strategic thinking beyond tactical tasks · Data-driven decision making · Stakeholder management · Process improvement focus</p>
<h3>Q2. Walk me through your typical day as a Business Analyst</h3>
<p><strong>What They're Assessing:</strong> Practical understanding of day-to-day responsibilities, organizational skills</p>
<p><strong>Strong Answer:</strong></p>
<ul>
<li><strong>Morning:</strong> Reviewing overnight emails and priority change requests from stakeholders</li>
<li><strong>Mid-morning:</strong> Facilitating daily stand-up meetings with the development team to discuss progress and blockers</li>
<li><strong>Late morning:</strong> Conducting requirements gathering sessions or workshops with business stakeholders</li>
<li><strong>Afternoon:</strong> Documenting requirements, creating user stories, updating the product backlog</li>
<li><strong>Late afternoon:</strong> Collaborating with technical teams on clarifications, reviewing test cases, or preparing for sprint reviews</li>
<li><strong>Throughout:</strong> Managing stakeholder communications, resolving ambiguities, and ensuring alignment between business goals and technical implementation</li>
</ul>
<h3>Q3. What documents do Business Analysts create?</h3>
<p><strong>Essential Documents to Mention:</strong></p>
<ul>
<li><strong>BRD (Business Requirements Document):</strong> High-level business requirements and objectives</li>
<li><strong>FRD (Functional Requirements Document):</strong> Detailed functional specifications</li>
<li><strong>SRS (Software Requirements Specification):</strong> Technical requirements for development</li>
<li><strong>User Stories:</strong> Agile-style requirement documentation</li>
<li><strong>Process Flow Diagrams:</strong> Visual representation of business processes</li>
<li><strong>Use Case Diagrams:</strong> System interactions from user perspective</li>
<li><strong>Data Flow Diagrams (DFD):</strong> How data moves through systems</li>
<li><strong>Wireframes/Mockups:</strong> UI/UX representations</li>
<li><strong>Traceability Matrix:</strong> Linking requirements to test cases</li>
<li><strong>Gap Analysis Reports:</strong> Current state vs. desired state</li>
</ul>
<h3>Q4. What is the difference between BRD, FRD, and SRS?</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Document</th><th>Purpose</th><th>Audience</th><th>Level</th></tr></thead><tbody>
<tr><td><strong>BRD</strong></td><td>Defines WHAT the business needs</td><td>Business stakeholders, executives</td><td>High-level, business-focused</td></tr>
<tr><td><strong>FRD</strong></td><td>Defines HOW the system should function</td><td>Business analysts, project managers</td><td>Detailed functional specs</td></tr>
<tr><td><strong>SRS</strong></td><td>Defines technical implementation details</td><td>Developers, technical teams</td><td>Very detailed, technical</td></tr>
</tbody></table></div>
<h3>Q5. Explain the requirements gathering process</h3>
<p><strong>Phase 1 — Planning:</strong> Identify stakeholders and their roles · Define project scope and objectives · Plan elicitation techniques</p>
<p><strong>Phase 2 — Elicitation:</strong> Conduct interviews with key stakeholders · Facilitate workshops and brainstorming sessions · Review existing documentation · Observe current processes · Distribute surveys/questionnaires · Create prototypes for feedback</p>
<p><strong>Phase 3 — Documentation:</strong> Write clear, concise requirements · Create visual models (diagrams, flowcharts) · Organize in appropriate format (user stories, use cases)</p>
<p><strong>Phase 4 — Validation:</strong> Review with stakeholders for accuracy · Ensure requirements are testable and measurable · Verify alignment with business objectives · Obtain sign-off</p>
<p><strong>Phase 5 — Management:</strong> Track changes through version control · Maintain traceability matrix · Prioritize using MoSCoW or similar method · Communicate updates to all parties</p>`
  },
  {
    id: 'q6-q10-core',
    num: '02',
    title: 'Q6–Q10: Core BA Skills (Continued)',
    tag: 'CORE SKILLS',
    insight: 'INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable — the checklist for every user story.',
    content: `<h3>Q6. How do you prioritize requirements?</h3>
<p><strong>MoSCoW Method:</strong></p>
<ul>
<li><strong>M</strong>ust have: Critical, non-negotiable</li>
<li><strong>S</strong>hould have: Important but not vital</li>
<li><strong>C</strong>ould have: Desirable but not necessary</li>
<li><strong>W</strong>on't have (this time): Future consideration</li>
</ul>
<p><strong>Value vs. Effort Matrix:</strong></p>
<ul>
<li>High Value, Low Effort = Quick Wins (Prioritize first)</li>
<li>High Value, High Effort = Major Projects (Plan carefully)</li>
<li>Low Value, Low Effort = Fill-ins (Do if time permits)</li>
<li>Low Value, High Effort = Time Wasters (Deprioritize)</li>
</ul>
<p><strong>Additional Factors:</strong> Regulatory/compliance requirements (always high priority) · Business impact and ROI · Risk mitigation · Dependencies between requirements · Stakeholder influence and urgency</p>
<h3>Q7. How do you handle scope creep?</h3>
<p><strong>Prevention:</strong> Document scope clearly at project inception · Establish formal change management process · Set stakeholder expectations early · Define project boundaries explicitly</p>
<p><strong>Detection:</strong> Regular scope reviews against baseline · Monitor for requirement additions outside original scope · Track all change requests systematically</p>
<p><strong>Management:</strong> Evaluate impact on timeline, budget, and resources · Present trade-offs to stakeholders (if we add X, we must remove Y) · Obtain formal approval for any scope changes · Update documentation and communicate to all parties · Log changes in project management system</p>
<p><strong>Example:</strong> "In a recent CRM implementation, marketing requested real-time dashboards mid-project. I documented the request, assessed that it would add 3 weeks and require additional resources. I presented this to the steering committee with options: extend timeline, reduce other features, or defer to Phase 2. We agreed to defer, preventing scope creep while maintaining stakeholder relationships."</p>
<h3>Q8. What is Gap Analysis and how do you conduct it?</h3>
<p><strong>Definition:</strong> Gap Analysis identifies the difference between current state (As-Is) and desired state (To-Be), helping determine what's needed to close the gap.</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Document Current State (As-Is):</strong> Map existing processes · Identify current capabilities · Measure current performance metrics</li>
<li><strong>Define Desired State (To-Be):</strong> Understand business objectives · Document required capabilities · Define success metrics</li>
<li><strong>Identify Gaps:</strong> Compare As-Is vs. To-Be · Categorize gaps (people, process, technology) · Assess impact of each gap</li>
<li><strong>Develop Action Plan:</strong> Prioritize gaps to address · Recommend solutions · Estimate effort and resources</li>
<li><strong>Implementation &amp; Monitoring:</strong> Execute recommendations · Track progress · Measure results</li>
</ol>
<h3>Q9. Explain Use Case vs. User Story</h3>
<p><strong>Use Case</strong> (Traditional Waterfall): Detailed description of system interactions · Actor-focused: "Who does what with the system" · Includes preconditions, main flow, alternative flows, postconditions · More formal and comprehensive · Example: "Use Case: Process Customer Order — Actor: Customer Service Representative — Preconditions: Customer account exists — Main Flow: 1. CSR logs into system, 2. Searches customer…"</p>
<p><strong>User Story</strong> (Agile): Short, simple description from user perspective · Format: "As a [role], I want [feature], so that [benefit]" · Focuses on value delivered · Includes acceptance criteria · Example: "As a customer service rep, I want to search customers by phone number, so that I can quickly locate their account and provide faster service"</p>
<p><strong>When to Use:</strong> Use Cases: Complex systems, detailed documentation needed, regulatory requirements · User Stories: Agile environments, iterative development, collaborative teams</p>
<h3>Q10. What is the INVEST principle for user stories?</h3>
<ul>
<li><strong>I — Independent:</strong> Stories should be self-contained, minimal dependencies</li>
<li><strong>N — Negotiable:</strong> Details can be discussed and refined with the team</li>
<li><strong>V — Valuable:</strong> Must deliver clear business value to end user</li>
<li><strong>E — Estimable:</strong> Team can estimate effort required</li>
<li><strong>S — Small:</strong> Small enough to complete in one sprint</li>
<li><strong>T — Testable:</strong> Clear acceptance criteria that can be verified</li>
</ul>
<p><strong>Example of a Good User Story:</strong> "As a mobile banking user, I want to view my last 10 transactions on the dashboard, so that I can quickly monitor my account activity without navigating through multiple screens."</p>
<p>✓ Independent · ✓ Negotiable (number of transactions can be discussed) · ✓ Valuable · ✓ Estimable · ✓ Small · ✓ Testable</p>`
  },
  {
    id: 'q11-q15-tools',
    num: '03',
    title: 'Q11–Q15: Technical Tools & Data',
    tag: 'TECHNICAL',
    insight: 'SQL is essential for modern BAs. 85%+ of BA job postings in KL/SG require SQL in 2025.',
    content: `<h3>Q11. What BA tools and software are you proficient in?</h3>
<p><strong>Documentation &amp; Requirements:</strong> MS Word, Excel, PowerPoint (universal) · Confluence (documentation and collaboration) · JIRA (requirements tracking, user stories, backlog management) · Visio / Lucidchart / Draw.io (process diagrams)</p>
<p><strong>Data Analysis &amp; Visualization:</strong> <strong>SQL</strong> (CRITICAL — most demanded skill in 2025) · Excel (pivot tables, VLOOKUP, formulas) · Power BI (Microsoft's BI tool) · Tableau (data visualization) · Python (for advanced analytics)</p>
<p><strong>Project Management:</strong> JIRA / Azure DevOps · Trello / Monday.com · MS Project</p>
<p><strong>Collaboration &amp; Communication:</strong> Slack, Microsoft Teams · Miro (virtual whiteboarding) · Zoom / Google Meet</p>
<p><strong>Prototyping:</strong> Balsamiq, Figma, Axure</p>
<h3>Q12. How important is SQL for Business Analysts?</h3>
<p><strong>Critical Importance in 2025:</strong></p>
<ul>
<li>85%+ of BA job postings in KL/SG require SQL</li>
<li>Enables independent data retrieval without waiting for IT</li>
<li>Faster insights and decision-making</li>
<li>Higher salary potential (20–30% premium for SQL-proficient BAs)</li>
</ul>
<p><strong>What You Should Know:</strong></p>
<ul>
<li><strong>Basic:</strong> SELECT, WHERE, ORDER BY, LIMIT</li>
<li><strong>Intermediate:</strong> JOINs (INNER, LEFT, RIGHT), GROUP BY, HAVING, aggregate functions (COUNT, SUM, AVG)</li>
<li><strong>Advanced:</strong> Subqueries, window functions, CTEs, data manipulation</li>
</ul>
<p><strong>Sample Answer:</strong> "SQL is essential for modern BAs because it enables data-driven analysis without dependency on technical teams. In my current role, I use SQL daily to: extract customer transaction data for trend analysis · validate data quality before migration · generate ad-hoc reports for stakeholders · support business case development with quantitative evidence. For example, I recently used SQL to analyze customer churn patterns by segmenting users based on transaction frequency, which led to a targeted retention strategy that reduced churn by 15%."</p>
<h3>Q13. Explain how you use data visualization tools</h3>
<p><strong>Tools &amp; Use Cases:</strong> Power BI — Enterprise dashboards, executive KPI reporting · Tableau — Interactive visualizations, trend analysis · Excel — Quick analyses, ad-hoc reports</p>
<p><strong>Best Practices:</strong> Choose the right visualization (bar chart vs. line graph vs. pie chart) · Focus on clarity over complexity · Use consistent color schemes · Include context (labels, benchmarks, trends) · Tailor to audience (executives need summary, analysts need detail)</p>
<h3>Q14. What is UML and what diagrams do you use?</h3>
<p><strong>UML (Unified Modeling Language):</strong> Standardized way to visualize system design</p>
<p><strong>1. Use Case Diagram</strong> — Shows system functionality from user perspective. Identifies actors and their interactions. Used for: Requirements gathering, scope definition</p>
<p><strong>2. Activity Diagram</strong> — Flowchart showing workflow or business process. Includes decision points, parallel processes. Used for: Process mapping, business logic</p>
<p><strong>3. Sequence Diagram</strong> — Shows object interactions in time sequence. Depicts message flow between components. Used for: Understanding system behavior, integration</p>
<p><strong>4. Class Diagram</strong> — Represents system structure and relationships. Shows attributes and methods. Used for: Database design, object-oriented analysis</p>
<h3>Q15. How do you ensure data quality in your analysis?</h3>
<p><strong>1. Validation Checks:</strong> Range checks (values within expected limits) · Format validation (dates, phone numbers) · Mandatory field verification · Cross-field validation (end date &gt; start date)</p>
<p><strong>2. Consistency Checks:</strong> Compare across multiple data sources · Historical trend analysis · Reconciliation with known totals</p>
<p><strong>3. Completeness:</strong> Check for missing values · Assess data coverage (% of records populated)</p>
<p><strong>4. Accuracy:</strong> Sample verification against source documents · Duplicate detection and removal</p>
<p><strong>5. Timeliness:</strong> Verify data freshness · Check last update timestamps</p>`
  },
  {
    id: 'q16-q18-behavioral',
    num: '04',
    title: 'Q16–Q18: Behavioral Questions (STAR Method)',
    tag: 'BEHAVIORAL',
    insight: 'STAR: Situation (20%) → Task (10%) → Action (60%) → Result (10%). Focus on YOUR actions, quantify results.',
    content: `<h3>Understanding STAR Method</h3>
<p><strong>S</strong>ituation: Set the context (20% of answer) · <strong>T</strong>ask: Your responsibility/goal (10%) · <strong>A</strong>ction: What YOU did specifically (60%) · <strong>R</strong>esult: Outcomes, metrics, learnings (10%)</p>
<p><strong>Critical Points:</strong> Focus on YOUR actions, not team's · Quantify results when possible · Be specific, not generic · Keep answers 2–3 minutes</p>
<h3>Q16. Tell me about a time you had conflicting stakeholder requirements</h3>
<p><strong>What They're Assessing:</strong> Conflict resolution, stakeholder management, negotiation skills</p>
<p><strong>Situation:</strong> "In my previous role at a financial services company, I was managing requirements for a new customer portal. The Sales director wanted a simplified interface focused on quick conversions, while the Compliance team demanded extensive disclosures and multiple confirmation screens."</p>
<p><strong>Task:</strong> "My task was to reconcile these competing priorities within our 6-month timeline and $150,000 budget, while maintaining relationships with both departments."</p>
<p><strong>Action:</strong> (1) Facilitated a workshop where both teams presented their requirements with business justification and regulatory basis · (2) Mapped each requirement against business value and regulatory necessity · (3) Proposed a phased approach: Phase 1 would include all compliance-mandatory elements with streamlined UX, Phase 2 would add enhanced sales features · (4) Created prototypes showing how compliance needs could be met through progressive disclosure design · (5) Documented the rationale and obtained sign-off from both teams</p>
<p><strong>Result:</strong> "We launched Phase 1 on time, meeting all compliance requirements while achieving a 25% improvement in conversion rate vs. the old portal. The Sales team was satisfied enough to become advocates for Phase 2 funding."</p>
<h3>Q17. Describe a time when you identified a significant problem through data analysis</h3>
<p><strong>What They're Assessing:</strong> Analytical thinking, business impact, proactive problem-solving</p>
<p><strong>Situation:</strong> "At my previous e-commerce company, we were experiencing declining repeat customer rates, dropping from 35% to 28% over six months, but leadership couldn't pinpoint why."</p>
<p><strong>Action:</strong> (1) Extracted customer transaction data using SQL, analyzing over 500,000 transactions · (2) Segmented customers by cohort, purchase frequency, and product categories · (3) Created visualization in Tableau showing the customer journey from first to second purchase · (4) Discovered that customers who didn't make a second purchase within 45 days had only 10% likelihood of ever returning · (5) Further analysis revealed email engagement dropped significantly after initial purchase · (6) Presented findings to leadership with three specific recommendations: implement 30-day follow-up campaign, personalize product recommendations, offer time-limited incentive for second purchase</p>
<p><strong>Result:</strong> "Within three months, repeat customer rate improved to 32%, and six-month customer lifetime value increased by 22%. This analysis led to creation of a dedicated customer retention team."</p>
<h3>Q18. Tell me about a time when you had to quickly learn a new tool or technology</h3>
<p><strong>What They're Assessing:</strong> Adaptability, learning agility, initiative</p>
<p><strong>Situation:</strong> "Three weeks into a new banking analytics project, our client requested all deliverables in Tableau instead of our planned Excel-based reports. I had never used Tableau before."</p>
<p><strong>Task:</strong> "I needed to become proficient enough to deliver professional-quality dashboards within our original 8-week timeline."</p>
<p><strong>Action:</strong> (1) Enrolled in Tableau Desktop Specialist certification course (completed in evenings over 2 weeks) · (2) Studied similar banking dashboards on Tableau Public for design patterns · (3) Built practice versions with sample data · (4) Scheduled daily 30-minute sessions with an experienced colleague · (5) Created a dashboard template early and validated approach with client · (6) Applied iterative improvement based on feedback</p>
<p><strong>Result:</strong> "I delivered the final dashboard on schedule, which the client praised for exceeding their expectations. I subsequently achieved Tableau Desktop Specialist certification and became our team's go-to resource for Tableau projects, training three other team members."</p>`
  },
  {
    id: 'q19-q21-behavioral',
    num: '05',
    title: 'Q19–Q21: Behavioral Questions (Continued)',
    tag: 'BEHAVIORAL',
    insight: 'When your analysis is proven wrong: acknowledge the gap, ask for more data, revise. This shows maturity, not weakness.',
    content: `<h3>Q19. Describe a situation where your analysis was challenged or proven wrong</h3>
<p><strong>What They're Assessing:</strong> Humility, handling criticism, adaptability, learning from mistakes</p>
<p><strong>Situation:</strong> "I was analyzing warehouse operations to recommend automation investments. My analysis suggested automating Zone A would yield highest ROI based on transaction volume."</p>
<p><strong>Action:</strong> When I presented findings, the Warehouse Manager challenged my assumptions, noting that Zone A transactions were high-volume but low-complexity (didn't need automation), and Zone C had lower volume but high error rates and physical strain on workers. My analysis didn't account for quality issues and worker compensation claims.</p>
<p>Instead of becoming defensive, I: (1) Acknowledged the gap in my analysis · (2) Asked for additional data on error rates and worker incidents · (3) Revised my analysis to include total cost of quality and worker safety · (4) Re-ran the ROI model with these factors</p>
<p><strong>Result:</strong> "The revised analysis showed Zone C automation would actually deliver 40% better ROI when including quality and safety costs. We implemented Zone C automation first, reducing errors by 65% and worker incidents by 80%. This experience taught me to validate assumptions with operational experts and consider total cost, not just transaction volume. I now include operator input as a standard part of my analysis process."</p>
<h3>Q20. Tell me about a time you had to meet a tight deadline</h3>
<p><strong>What They're Assessing:</strong> Time management, working under pressure, prioritization</p>
<p><strong>Situation:</strong> "Our regulatory reporting system had a critical bug discovered 10 days before a mandatory filing deadline. The bug affected calculation accuracy, and failure to file would result in significant penalties."</p>
<p><strong>Action:</strong> (1) Immediately escalated to priority 1, securing dedicated developer and QA resources · (2) Worked with developers to understand root cause and document fix requirements same day · (3) Created focused test scenarios covering regulatory calculation rules · (4) Coordinated parallel testing while developers fixed code · (5) Arranged daily status meetings with compliance, IT, and finance · (6) Prepared contingency plan (manual calculation backup) in case fix failed · (7) Worked extended hours including one weekend to maintain momentum</p>
<p><strong>Result:</strong> "We deployed the fix on day 8, completed full regression testing on day 9, and submitted accurate regulatory reports 1 day before deadline. Zero penalties incurred."</p>
<h3>Q21. Give an example of when you had to explain technical concepts to non-technical stakeholders</h3>
<p><strong>What They're Assessing:</strong> Communication skills, ability to simplify complexity, stakeholder management</p>
<p><strong>Situation:</strong> "During an API integration project, I needed to explain to our Marketing leadership why their requested real-time social media data sync wasn't feasible within budget."</p>
<p><strong>Action:</strong> (1) Avoided jargon — instead of "API rate limits and data throttling," I explained: "Think of it like water flowing through a pipe—the social media platform limits how fast data can flow to prevent overload" · (2) Used analogies: Compared real-time sync to "ordering custom food at a restaurant vs. buffet—custom takes longer and costs more" · (3) Created visual diagrams showing data flow with both options · (4) Presented cost comparison: Real-time ($15K/month) vs. 15-minute refresh ($3K/month) · (5) Demonstrated that 15-minute delay still met their actual business need</p>
<p><strong>Result:</strong> "Marketing leadership immediately understood the trade-offs and approved the 15-minute refresh option, saving $144K annually. They later commented that my explanation was the clearest technical briefing they'd received."</p>`
  },
  {
    id: 'q22-q25-agile',
    num: '06',
    title: 'Q22–Q25: Agile & Scrum',
    tag: 'AGILE',
    insight: 'Agile is the "what and why." Scrum is the "how." The BA/PO role bridges both.',
    content: `<h3>Q22. What is Agile and why is it beneficial?</h3>
<p><strong>Core Agile Principles:</strong> Iterative development with frequent releases · Continuous feedback and adaptation · Collaboration over rigid processes · Responding to change over following a plan · Working software over comprehensive documentation</p>
<p><strong>Key Benefits:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Faster Time to Market:</strong> Release in iterations vs. waiting for complete product</li>
<li><strong>Flexibility:</strong> Adapt to changing business needs</li>
<li><strong>Reduced Risk:</strong> Regular feedback prevents major failures</li>
<li><strong>Higher Quality:</strong> Continuous testing throughout development</li>
<li><strong>Better Stakeholder Engagement:</strong> Regular demos and feedback loops</li>
<li><strong>Team Collaboration:</strong> Cross-functional teamwork</li>
</ol>
<h3>Q23. What is the difference between Agile and Scrum?</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Aspect</th><th>Agile</th><th>Scrum</th></tr></thead><tbody>
<tr><td>Definition</td><td>Methodology/mindset</td><td>Framework within Agile</td></tr>
<tr><td>Flexibility</td><td>Very flexible, principles-based</td><td>More structured with defined roles, events, artifacts</td></tr>
<tr><td>Iterations</td><td>Various approaches</td><td>Fixed-length sprints (2–4 weeks)</td></tr>
<tr><td>Roles</td><td>Varies by framework</td><td>Specific: Product Owner, Scrum Master, Dev Team</td></tr>
<tr><td>Ceremonies</td><td>Varies</td><td>Sprint Planning, Daily Standup, Review, Retrospective</td></tr>
</tbody></table></div>
<p><strong>Other Agile Frameworks:</strong> Kanban (continuous flow, no fixed iterations) · XP (Extreme Programming, engineering practices-focused) · SAFe (Scaled Agile for enterprises)</p>
<h3>Q24. Explain the Scrum framework and roles</h3>
<p><strong>Roles:</strong></p>
<ul>
<li><strong>Product Owner:</strong> Owns product vision and backlog · Prioritizes features based on business value · Accepts or rejects completed work · Single voice for stakeholder requirements</li>
<li><strong>Scrum Master:</strong> Facilitates Scrum process · Removes impediments/blockers · Coaches team on Agile practices · NOT a project manager</li>
<li><strong>Development Team:</strong> Cross-functional (developers, testers, designers) · Self-organizing · 5–9 members typically · Collectively responsible for deliverables</li>
</ul>
<p><strong>Artifacts:</strong> Product Backlog (prioritized list of all desired features) · Sprint Backlog (items committed for current sprint) · Increment (working product at end of sprint)</p>
<p><strong>Ceremonies/Events:</strong></p>
<ul>
<li><strong>Sprint Planning</strong> (Start of sprint): Team commits to deliverables</li>
<li><strong>Daily Standup</strong> (15 mins daily): What did I do yesterday? What will I do today? Any blockers?</li>
<li><strong>Sprint Review</strong> (End of sprint): Demo completed work to stakeholders</li>
<li><strong>Sprint Retrospective</strong> (End of sprint): What went well? What to improve?</li>
</ul>
<p><strong>BA Role in Scrum:</strong> Often works closely with Product Owner · Helps refine user stories and acceptance criteria · Facilitates requirements workshops · Analyzes data to support backlog prioritization · Acts as bridge between business and technical team</p>
<h3>Q25. How do you write effective user stories?</h3>
<p><strong>User Story Format:</strong> "As a [role], I want [feature], so that [benefit]"</p>
<p><strong>Bad User Story:</strong> "As a user, I want to see data" — Too vague, no clear value, not testable</p>
<p><strong>Good User Story:</strong> "As a customer service representative, I want to view a customer's last 5 support tickets on their profile page, so that I can quickly understand their issue history without navigating multiple screens."</p>
<p><strong>Acceptance Criteria:</strong></p>
<ul>
<li>Last 5 tickets displayed in reverse chronological order</li>
<li>Each ticket shows: ticket ID, date, subject, status</li>
<li>Clicking ticket ID opens full ticket details</li>
<li>Display "No tickets" message if customer has no history</li>
<li>Page loads within 2 seconds</li>
</ul>
<p><strong>Tips:</strong> Use 3Cs: Card (story), Conversation (discussion), Confirmation (acceptance criteria) · Include "Definition of Ready" and "Definition of Done" · Collaborate with developers on estimates · Break down large stories (epics) into smaller stories</p>`
  },
  {
    id: 'q26-q28-agile',
    num: '07',
    title: 'Q26–Q28: Agile Ceremonies & Changing Requirements',
    tag: 'AGILE',
    insight: 'In Agile, change is expected, not a problem. Protect sprint goals while being responsive to genuine needs.',
    content: `<h3>Q26. What happens in a Sprint Planning meeting?</h3>
<p><strong>Purpose:</strong> Team commits to work for upcoming sprint</p>
<p><strong>Participants:</strong> Product Owner, Scrum Master, Development Team, (sometimes BA)</p>
<p><strong>Typical Duration:</strong> 2–4 hours for 2-week sprint</p>
<p><strong>Part 1: What will we deliver?</strong> Product Owner presents prioritized backlog items · Team discusses and asks clarifying questions · Team determines what can be completed (based on velocity) · Creates Sprint Goal (overarching objective)</p>
<p><strong>Part 2: How will we do it?</strong> Team breaks down user stories into tasks · Estimates effort for each task · Identifies dependencies and risks · Creates Sprint Backlog</p>
<p><strong>BA's Role:</strong> Clarify requirements and acceptance criteria · Provide context from stakeholder discussions · Help team understand business value · Ensure stories are ready (Definition of Ready met)</p>
<p><strong>Example Sprint Goal:</strong> "Enable customers to reset passwords without calling support, reducing support tickets by 20%"</p>
<h3>Q27. How do you handle changing requirements in Agile?</h3>
<p><strong>Key Principles:</strong> Change is expected and welcomed in Agile · Balance flexibility with stability · Protect team from mid-sprint disruptions · Continuous backlog refinement</p>
<p><strong>During Sprint (Change Request Mid-Sprint):</strong> Assess impact on Sprint Goal · If critical: Discuss with Product Owner and potentially abort/replan sprint · If non-critical: Add to backlog for future sprint · Protect team's commitment to current sprint</p>
<p><strong>Between Sprints:</strong> Welcome new requirements · Product Owner prioritizes against existing backlog · Team estimates during backlog refinement · Include in next Sprint Planning if prioritized</p>
<p><strong>Change Management Process:</strong> Document change request · Analyze impact (time, cost, dependencies) · Product Owner decides priority · Communicate to stakeholders · Update backlog and roadmap</p>
<p><strong>Sample Answer:</strong> "Example: Mid-sprint, marketing requested an urgent promotional banner. Rather than disrupting the sprint: (1) I documented the request and assessed it wouldn't achieve the Sprint Goal · (2) Discussed with Product Owner who agreed it could wait · (3) Prioritized it for next sprint after Demo · (4) Communicated timeline to marketing with rationale. This maintained team velocity while being responsive to business needs."</p>
<h3>Q28. What is your experience with Agile ceremonies?</h3>
<p><strong>Daily Standup:</strong> I participate in daily 15-minute standups sharing requirements clarifications I provided, stakeholder discussions planned, and any blockers preventing requirements clarity. I ensure I'm unblocking the team, not adding work.</p>
<p><strong>Sprint Planning:</strong> I prepare by refining top backlog items with Product Owner beforehand, ensuring acceptance criteria are clear, and having mockups/diagrams ready for complex stories. During planning, I answer team questions and help size stories accurately.</p>
<p><strong>Sprint Review/Demo:</strong> I help facilitate demos by inviting relevant stakeholders, providing business context before demos, gathering feedback for future iterations, and validating acceptance criteria are met.</p>
<p><strong>Retrospective:</strong> I contribute by sharing observations on requirements quality, suggesting process improvements, acknowledging what worked well, and committing to action items for improvement.</p>
<p><strong>Backlog Refinement:</strong> I lead or facilitate these sessions: breaking down epics into stories, writing acceptance criteria, answering stakeholder questions, and ensuring stories meet INVEST criteria.</p>`
  },
  {
    id: 'q29-q31-banking',
    num: '08',
    title: 'Q29–Q31: Banking & Fintech Domain',
    tag: 'BANKING',
    insight: 'Coordinate with compliance during requirements gathering to catch regulatory needs early and prevent costly rework.',
    content: `<h3>Q29. What banking domains are you familiar with?</h3>
<p><strong>Retail Banking:</strong> CASA (Current Account, Savings Account) · Deposits and withdrawals · Account opening/closure · Card services (debit/credit)</p>
<p><strong>Corporate Banking:</strong> Trade finance · Treasury and cash management · Corporate loans</p>
<p><strong>Lending:</strong> Personal loans · Home loans/mortgages · Credit scoring and underwriting · Loan origination systems (LOS)</p>
<p><strong>Payments:</strong> SWIFT transfers · RTGS/NEFT (India) / FAST/GIRO (Singapore) · Payment gateways · Digital wallets</p>
<p><strong>Investment Banking:</strong> Securities trading · Portfolio management · Wealth management</p>
<p><strong>Cards &amp; Merchant Services:</strong> Card issuing and acquiring · POS systems · Merchant onboarding</p>
<h3>Q30. What regulatory requirements affect banking projects?</h3>
<p><strong>Singapore:</strong> MAS Regulations · PDPA (Personal Data Protection Act) · AML/CFT (Anti-Money Laundering / Counter-Financing of Terrorism) · Technology Risk Management guidelines</p>
<p><strong>Malaysia:</strong> Bank Negara Malaysia regulations · PDPA (Personal Data Protection Act 2010) · Financial Services Act 2013 · Islamic Banking Act (if applicable)</p>
<p><strong>Global Standards:</strong> Basel III (Capital requirements) · PCI DSS (Payment Card Industry Data Security Standard) · KYC (Know Your Customer) · FATCA (Foreign Account Tax Compliance Act)</p>
<p><strong>Impact on BA Work:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Requirements Must Include Compliance:</strong> Audit trails for all transactions · Data encryption standards · User access controls · Mandatory fields for regulatory reporting</li>
<li><strong>Documentation Requirements:</strong> More rigorous sign-offs · Compliance review checkpoints · Risk assessment documentation</li>
<li><strong>Testing:</strong> Compliance test scenarios · Security testing · Data privacy verification</li>
</ol>
<h3>Q31. Explain the customer onboarding process in banking</h3>
<p><strong>Phase 1 — Initial Application:</strong> Customer enters basic details (name, contact, ID type) · Selects account type and services · Reviews product features and fees</p>
<p><strong>Phase 2 — Identity Verification (KYC):</strong> Document upload (ID card, passport) · Address proof (utility bill, bank statement) · Biometric verification (selfie/liveness check) · Background checks (credit bureau, sanctions screening)</p>
<p><strong>Phase 3 — Compliance Checks:</strong> AML screening · PEP (Politically Exposed Person) check · Source of funds verification · Risk profiling</p>
<p><strong>Phase 4 — Account Setup:</strong> Signature capture (digital) · Initial funding · PIN/password setup · Terms and conditions acceptance</p>
<p><strong>Phase 5 — Activation:</strong> Account number generation · Card issuance (if applicable) · Mobile banking access · Welcome communication</p>
<p><strong>Common Pain Points:</strong> Document rejection (poor quality, expired documents) · Verification delays (manual review bottlenecks) · High abandonment rate at document upload stage · Duplicate customer detection</p>
<p><strong>Improvements BAs Can Recommend:</strong> Auto-capture with quality checks · Real-time verification where possible · Progress indicators to reduce abandonment · Multiple verification methods (video KYC)</p>`
  },
  {
    id: 'q32-q34-banking2',
    num: '09',
    title: 'Q32–Q34: Banking Analysis & Fintech Trends',
    tag: 'BANKING',
    insight: '"Digital" demands stronger UX, API integration, data analytics, and personalization skills vs. traditional banking.',
    content: `<h3>Q32. How would you analyze payment transaction failures?</h3>
<p><strong>Systematic Analysis Approach:</strong></p>
<p><strong>Step 1 — Define the Problem:</strong> What is the failure rate? (Get baseline metrics) · When did it start? (Recent change or ongoing issue?) · Which payment methods affected? · User segments impacted?</p>
<p><strong>Step 2 — Data Collection:</strong> Extract transaction logs using SQL, segmenting by payment method and failure reason. Count failures and calculate percentage by category.</p>
<p><strong>Step 3 — Root Cause Analysis:</strong> Technical Issues: API timeouts, system errors, integration failures · Business Rules: Insufficient funds, expired cards, limits exceeded · User Errors: Incorrect details, authentication failures · External: Payment gateway issues, bank declines</p>
<p><strong>Step 4 — Segmentation:</strong> By payment method · By time (peak vs. off-peak) · By amount (small vs. large transactions) · By customer type (new vs. returning)</p>
<p><strong>Step 5 — Impact Assessment:</strong> Revenue loss calculation · Customer experience impact · Support ticket volume increase</p>
<p><strong>Step 6 — Recommendations:</strong> Quick wins (error message improvements) · Medium-term (retry logic, fallback payment methods) · Long-term (payment gateway redundancy)</p>
<h3>Q33. What is the difference between digital banking and traditional banking from a BA perspective?</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Aspect</th><th>Traditional Banking</th><th>Digital Banking</th></tr></thead><tbody>
<tr><td>Requirements Gathering</td><td>Branch operations focus</td><td>User experience focus</td></tr>
<tr><td>Stakeholders</td><td>Branch staff, back-office</td><td>Product managers, UX designers, developers</td></tr>
<tr><td>Process Focus</td><td>Manual workflows, paper forms</td><td>Automated workflows, digital journeys</td></tr>
<tr><td>Speed</td><td>Slower, batch processing</td><td>Real-time, instant gratification</td></tr>
<tr><td>Analytics</td><td>Retrospective reporting</td><td>Real-time dashboards, predictive analytics</td></tr>
<tr><td>Security</td><td>Physical security, vault</td><td>Cybersecurity, authentication, encryption</td></tr>
</tbody></table></div>
<h3>Q34. What fintech trends are you following in 2025?</h3>
<p><strong>1. Embedded Finance:</strong> Banking services integrated into non-banking apps. Example: E-commerce checkout with instant financing (BNPL) · Uber offering banking services to drivers</p>
<p><strong>2. Open Banking / API Economy:</strong> Banks exposing APIs for third-party innovation · Account aggregation services · Singapore's API playbook by MAS</p>
<p><strong>3. AI &amp; Machine Learning:</strong> Fraud detection and prevention · Personalized product recommendations · Chatbots for customer service · Credit scoring with alternative data</p>
<p><strong>4. Digital Currencies:</strong> CBDCs (Central Bank Digital Currencies) · Stablecoins · Cryptocurrency integration</p>
<p><strong>5. Regulatory Technology (RegTech):</strong> Automated compliance · Real-time transaction monitoring · Digital identity verification</p>
<p><strong>6. Hyper-Personalization:</strong> Tailored financial products · Behavioral insights · Micro-investments</p>
<p><strong>7. Blockchain Beyond Crypto:</strong> Smart contracts · Trade finance · Cross-border payments</p>
<p><strong>8. Buy Now, Pay Later (BNPL):</strong> Growth from $28B (2024) to $40B (2025) · Integration at point of sale · Regulatory scrutiny increasing</p>
<p><strong>Stay updated through:</strong> Fintech newsletters (Fintech Times, The Asian Banker) · MAS and Bank Negara announcements · Webinars (Singapore Fintech Festival) · Following fintech leaders on LinkedIn</p>`
  },
  {
    id: 'q35-q37-cases',
    num: '10',
    title: 'Q35–Q37: Case Studies',
    tag: 'CASE STUDIES',
    insight: 'Case study questions test structured thinking, not domain expertise. Always start with "define the problem" before jumping to analysis.',
    content: `<h3>Q35. Case Study: Customer Churn Analysis</h3>
<p><strong>Scenario:</strong> "Your e-commerce company is experiencing increased customer churn. You have 6 months of transaction data. How would you approach this analysis?"</p>
<p><strong>1. Define the Problem:</strong> What is the churn rate? (Baseline metric) · How is churn defined? (No purchase in X days? Account closure?) · What's the trend? · Business impact? (Revenue loss, CAC wasted)</p>
<p><strong>2. Hypotheses to Test:</strong> Product quality issues · Pricing/competition · Poor customer experience · Lack of engagement · Seasonal factors · Specific customer segments churning</p>
<p><strong>3. Data Analysis Approach:</strong> Identify churn cohorts by first purchase month · Analyze customer behavior before churn (login frequency, cart abandonment, support tickets) · Segment by customer type, product category, acquisition channel, geography, spending level</p>
<p><strong>4. Key Metrics to Analyze:</strong> Time to second purchase · Purchase frequency · Average order value trend · Email engagement rate · App usage patterns · Customer support interactions</p>
<p><strong>5. Example Findings &amp; Recommendations:</strong></p>
<p>"Analysis revealed: 65% of customers never make second purchase · Customers who don't purchase within 45 days have 90% churn probability · Email engagement drops 80% after first purchase · High-value customers churn due to lack of premium features"</p>
<ul>
<li><strong>Immediate (Week 1–2):</strong> Launch 30-day win-back email campaign · Offer time-limited discount for second purchase</li>
<li><strong>Short-term (Month 1–3):</strong> Implement post-purchase engagement sequence · Create personalized product recommendations · Build loyalty program for repeat purchases</li>
<li><strong>Long-term (Month 3–6):</strong> Develop premium tier for high-value customers · Build predictive churn model · Implement customer success team for at-risk accounts</li>
</ul>
<p><strong>Expected Impact:</strong> 25% reduction in churn, $500K annual revenue protection</p>
<h3>Q36. Case Study: Payment Gateway Integration</h3>
<p><strong>Scenario:</strong> "We need to integrate a new payment gateway. Walk me through your requirements gathering process."</p>
<p><strong>Phase 1 — Stakeholder Identification:</strong> Business sponsor (why new gateway?) · Finance team (settlement, reconciliation) · Technical team (integration effort) · Operations (fraud monitoring, chargebacks) · Customer service (handling payment issues) · Compliance (PCI DSS requirements)</p>
<p><strong>Phase 2 — Business Requirements:</strong> Supported payment methods (cards, wallets, bank transfers) · Currencies and countries · Transaction volume estimates · Success rate benchmarks · Cost per transaction · Settlement timeframes</p>
<p><strong>Phase 3 — Functional Requirements:</strong></p>
<p>Integration Points: Checkout page integration · Payment status webhooks · Refund processing · Recurring payments · Tokenization for saved cards</p>
<p><strong>User Journeys:</strong></p>
<pre>Successful Payment:
Customer selects items → Proceeds to checkout → Selects payment method
→ Enters payment details → Gateway processes → Confirmation page
→ Order fulfillment triggered

Failed Payment:
Customer selects items → Proceeds to checkout → Selects payment method
→ Enters payment details → Gateway declines → Error message with retry option
→ Allow different payment method</pre>
<p><strong>Phase 4 — Non-Functional Requirements:</strong> Performance: Response time &lt; 3 seconds · Availability: 99.9% uptime SLA · Security: PCI DSS Level 1 compliance, encryption · Scalability: Handle 1000 TPS during peak · Recoverability: Retry logic for temporary failures</p>
<p><strong>Phase 5 — Compliance &amp; Security:</strong> PCI DSS requirements (no card data storage) · 3D Secure / Strong Customer Authentication · Fraud detection rules · PDPA compliance for payment data</p>
<p><strong>Documentation Deliverables:</strong> BRD with business justification · Integration specification document · User journey flows · Test scenarios and cases · Data mapping document · Go-live checklist</p>
<h3>Q37. Problem: Conflicting Metrics Between Departments</h3>
<p><strong>Scenario:</strong> "Sales reports show 1000 new customers this month, but Finance shows only 850. How do you resolve this?"</p>
<p><strong>Step 1 — Don't Assume Error:</strong> Both could be technically correct with different definitions. Gather facts before pointing blame.</p>
<p><strong>Step 2 — Meet with Both Teams:</strong> Questions to Sales: How is 'new customer' defined? · What system generates the report? · What date field is used? (registration date? first contact?) Questions to Finance: What is Finance's definition of 'new customer'? · When does a customer appear in Finance's system? · Are there filters applied (e.g., only paying customers)?</p>
<p><strong>Step 3 — Root Cause Investigation:</strong> Sales may count all registrations while Finance counts only confirmed, paid, or activated accounts. Date cutoffs may differ. Systems may have different data latency.</p>
<p><strong>Step 4 — Resolve:</strong> Agree on a single, enterprise-wide definition of "new customer" · Document it formally · Update both reports to use the same logic · Establish a governance process for metric definitions · Communicate the change to all stakeholders with before/after context</p>
<p><strong>Key Insight:</strong> This is a common data governance problem. The fix is not technical — it's organizational. Metrics without agreed definitions produce decisions made on incompatible data.</p>`
  }
];

// ── INTERVIEW QUIZ QUESTIONS ─────────────────────────────────────
const INTERVIEW_QUIZ = [
  {
    q: "What does INVEST stand for in user stories?",
    opts: ["Independent, Negotiable, Valuable, Estimable, Small, Testable","Integrated, Novel, Verified, Executable, Structured, Testable","Independent, Necessary, Viable, Elastic, Simple, Trackable","Iterative, Negotiable, Validated, Estimated, Sized, Testable"],
    a: 0, cat: "Agile"
  },
  {
    q: "In the STAR behavioral method, what percentage of your answer should the Action section represent?",
    opts: ["20%","40%","60%","80%"],
    a: 2, cat: "Interview"
  },
  {
    q: "What is the correct order of the requirements gathering phases?",
    opts: ["Elicitation → Planning → Validation → Documentation → Management","Planning → Elicitation → Documentation → Validation → Management","Documentation → Planning → Elicitation → Validation → Management","Validation → Planning → Elicitation → Documentation → Management"],
    a: 1, cat: "Requirements"
  },
  {
    q: "Which document defines WHAT the business needs (high-level) and targets business stakeholders?",
    opts: ["FRD","SRS","BRD","User Stories"],
    a: 2, cat: "Documents"
  },
  {
    q: "In MoSCoW prioritization, what does 'W' stand for?",
    opts: ["Waiting","Will have","Won't have (this time)","Would be nice"],
    a: 2, cat: "Prioritization"
  },
  {
    q: "What is the BA's primary role in Scrum ceremonies?",
    opts: ["Replace the Scrum Master","Bridge between business and technical team, clarifying requirements","Assign story points to all stories","Approve all pull requests before merge"],
    a: 1, cat: "Agile"
  },
  {
    q: "Which fintech trend describes banking services integrated into non-banking apps?",
    opts: ["Open Banking","Embedded Finance","Hyper-Personalization","RegTech"],
    a: 1, cat: "Fintech"
  },
  {
    q: "What does KYC stand for in banking?",
    opts: ["Keep Your Customers","Know Your Customer","Key Year Compliance","Knowledge Your Credentials"],
    a: 1, cat: "Banking"
  },
  {
    q: "Gap Analysis compares which two states?",
    opts: ["Planned vs. Actual","Business vs. Technical","As-Is (current state) vs. To-Be (desired state)","Functional vs. Non-functional"],
    a: 2, cat: "Analysis"
  },
  {
    q: "What is the key difference between a Use Case and a User Story?",
    opts: ["Use Cases are shorter; User Stories are longer","Use Cases are for Agile; User Stories are for Waterfall","Use Cases are formal/detailed (Waterfall); User Stories are simple/value-focused (Agile)","There is no meaningful difference"],
    a: 2, cat: "Requirements"
  }
];

// ── INTERVIEW QOTD ───────────────────────────────────────────────
const INTERVIEW_QOTD = [
  {
    q: "How would you respond if a stakeholder said 'Just build what I asked for'? Walk through your thought process and what you'd actually say.",
    a: `This is a classic "order-taker" trap. Your value as a BA is in problem-solving, not transcription.

Thought process: The stakeholder has a solution, but I don't yet understand the problem behind it. I need to decompose the request into: (1) What are they asking for? (2) What pain triggered the request? (3) What outcome would make this successful? (4) Are there constraints or alternatives?

What I'd actually say:
"I absolutely want to help you get what you need. Before I write up requirements, can I ask a few quick questions to make sure we build exactly the right thing? Specifically:
- What problem will this solve for you or your team?
- What does success look like — how will we know it's working?
- Are there any constraints I should know about (budget, timeline, dependencies)?

I ask because sometimes there's a faster or cheaper way to solve the same problem, and I want to make sure we use your budget wisely."

This approach: respects the stakeholder's authority, adds value without being dismissive, uncovers the real need, and protects the team from building the wrong thing. Never just say "no" — redirect the conversation toward the outcome.`
  },
  {
    q: "Walk through how you'd gather requirements for a new mobile banking feature (e.g., a savings goals feature).",
    a: `Phase 1 — Planning: Identify stakeholders: product manager, UX designer, retail banking SME, compliance, developers, QA, actual customers. Define scope: What is 'savings goals'? Single-goal or multi-goal? Manual or automated transfers?

Phase 2 — Elicitation techniques I'd use:
1. Stakeholder interviews: Product manager (business objectives, success metrics), banking SME (regulatory requirements, existing savings products), compliance (disclosure requirements, interest rate rules)
2. User research: Interviews with 5–8 existing customers about how they currently save and what they struggle with
3. Competitor analysis: Review how similar features work in competitor apps (Grab Finance, DBS, etc.)
4. Process mapping: Current account management workflow, how funds move

Phase 3 — Documentation:
- User stories per role (customer, bank admin, support agent)
- Acceptance criteria for each story
- Edge cases: What if goal date passes? What if balance is insufficient? What if account is closed?
- NFRs: Real-time balance visibility, security for fund transfers, regulatory compliance

Phase 4 — Validation: Review with SMEs, prototype walkthrough with users, compliance sign-off

Phase 5 — Management: Traceability matrix linking business objectives → requirements → test cases`
  }
];

// ── INTERVIEW QUOTES ─────────────────────────────────────────────
const INTERVIEW_QUOTES = [
  { text: "Your value as a BA is in problem-solving, not transcription.", source: "Core BA Skills — Q&A" },
  { text: "SQL is the single most demanded technical skill for Business Analysts in 2025.", source: "Technical & Tools — Q12" },
  { text: "INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable — the checklist for every user story.", source: "Core BA Skills — Q10" },
  { text: "In STAR answers, 60% of your response should describe the specific actions YOU took.", source: "Behavioral Questions" },
  { text: "Conflicting metrics between departments are usually a data governance problem, not a technical one.", source: "Case Study Q37" }
];

// Expose to window for page scripts
window.INTERVIEW_DATA = {
  INTERVIEW_INTRO,
  INTERVIEW_SECTIONS,
  INTERVIEW_QUIZ,
  INTERVIEW_QOTD,
  INTERVIEW_QUOTES
};
