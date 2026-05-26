// ================================================================
// data-babok.js — BABOK® Guide Study Content
// Word-for-word from add1.txt, structured for rendering
// ================================================================

const BABOK_INTRO = `Study guide for CBAP® / CCBA™ certification aligned to the BABOK® Guide Version 3.0. Covers Bloom's Taxonomy, all six Knowledge Areas, underlying competencies, five BA perspectives, summary tables, and certification path.`;

const BABOK_SECTIONS = [
  {
    id: 'blooms-taxonomy',
    num: '01',
    title: "Bloom's Taxonomy of Question Types",
    tag: 'FOUNDATION',
    insight: 'Exam questions range across six hierarchical levels of learning objectives established by Benjamin Bloom.',
    content: `<p>Exam questions range across six hierarchical levels of learning objectives established by Benjamin Bloom.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Question Type</th><th>Definition</th><th>Example Focus</th></tr></thead><tbody>
<tr><td><strong>Knowledge</strong></td><td>Tests ability to recall specific facts and learned information.</td><td>"Define the term" questions.</td></tr>
<tr><td><strong>Comprehension</strong></td><td>Requires interpretation of facts and understanding meanings.</td><td>"Check your understanding" questions.</td></tr>
<tr><td><strong>Application</strong></td><td>Asks you to use information to solve problems.</td><td>"Use the information" problems asking about logical sequence.</td></tr>
<tr><td><strong>Analysis</strong></td><td>Requires recognizing patterns and seeking hidden meanings.</td><td>Analyzing process steps performed by the BA.</td></tr>
<tr><td><strong>Synthesis</strong></td><td>Tests ability to relate facts and draw conclusions based on given information.</td><td>"Draw a conclusion" questions based on a scenario.</td></tr>
<tr><td><strong>Evaluation</strong></td><td>Expects you to assess ideas and make reasoned judgments.</td><td>"Reasoned judgment" style questions.</td></tr>
</tbody></table></div>`
  },
  {
    id: 'chapter1-foundation',
    num: '02',
    title: 'Chapter 1: Foundation Concepts — BA Role & BACCM™',
    tag: 'CHAPTER 1',
    insight: 'A Business Analyst (BA) is anyone performing business analysis tasks, regardless of their job title.',
    content: `<p>This chapter establishes the groundwork for understanding the BABOK® Guide content and the successful execution of business analysis work.</p>
<h3>Key Exam Topics Covered</h3>
<ul>
<li>Describe business analysis and the role of the BA</li>
<li>Explain the <strong>Business Analysis Core Concept Model (BACCM™)</strong></li>
<li>Explore the six Business Analysis Knowledge Areas (KAs)</li>
<li>Define the BABOK® Guide requirements classification scheme</li>
</ul>
<h3>The Business Analysis Role</h3>
<p><strong>What is Business Analysis?</strong></p>
<ul><li>Business analysis is the practice of enabling change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders</li></ul>
<p><strong>Who is a Business Analyst (BA)?</strong></p>
<ul>
<li>A <strong>Business Analyst (BA)</strong> is anyone performing business analysis tasks, regardless of their job title</li>
<li>BAs act as liaisons among stakeholders to understand an organization's structure, policies, and operations</li>
</ul>
<p><strong>Key Stakeholders:</strong></p>
<ul>
<li>Customer · Domain SME · End User · Implementation SME · Operational Support</li>
<li>Project Manager · Tester · Regulator · Sponsor · Supplier</li>
<li>The BA is a stakeholder for all business analysis activities</li>
</ul>
<h3>Business Analysis Core Concept Model (BACCM™)</h3>
<p>The BACCM™ provides a conceptual framework and common language for the BA profession.</p>
<p><strong>The Six Core Concepts:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong>🔄 Change:</strong> The driving force for projects and initiatives in response to a need</li>
<li style="margin-bottom:0.5rem"><strong>📌 Need:</strong> Value-driven ways to address business problems or opportunities</li>
<li style="margin-bottom:0.5rem"><strong>💡 Solution:</strong> The end result that resolves problems or exploits opportunities</li>
<li style="margin-bottom:0.5rem"><strong>👥 Stakeholder:</strong> People who have a relationship to the change, need, or solution</li>
<li style="margin-bottom:0.5rem"><strong>💰 Value:</strong> The worth of something (tangible or intangible) to a stakeholder within the enterprise context</li>
<li style="margin-bottom:0.5rem"><strong>🌍 Context:</strong> The environment where the change is taking place</li>
</ol>`
  },
  {
    id: 'chapter1-requirements',
    num: '03',
    title: 'Chapter 1: Requirements Classification Scheme',
    tag: 'CHAPTER 1',
    insight: 'Requirements define what is needed or wanted. The BABOK® Guide defines requirements using a hierarchical classification.',
    content: `<p>Requirements define what is needed or wanted. The BABOK® Guide defines requirements using a hierarchical classification:</p>
<h3>1. Business Requirements (Highest Level)</h3>
<ul>
<li>Define high-level goals, objectives, and needs of the organization</li>
<li>Developed during <strong>Strategy Analysis</strong></li>
</ul>
<h3>2. Stakeholder Requirements</h3>
<ul>
<li>Define the needs of stakeholders and how they interact with the solution</li>
<li>Bridge the gap between business and solution requirements</li>
<li>Developed during <strong>Requirements Analysis and Design Definition</strong></li>
</ul>
<h3>3. Solution Requirements (Most Detailed)</h3>
<ul>
<li>Describe solution characteristics needed to meet higher-level requirements</li>
<li>Developed during <strong>Requirements Analysis and Design Definition</strong></li>
<li><strong>Two Types:</strong>
<ul>
<li><strong>Functional Requirements:</strong> Define capabilities the solution must provide to users</li>
<li><strong>Nonfunctional Requirements:</strong> Describe quality attributes, design constraints, and external interfaces (e.g., performance, security)</li>
</ul></li>
</ul>
<h3>4. Transition Requirements</h3>
<ul>
<li>Define capabilities required to move from the current state to the future state</li>
<li>No longer needed once the transition is complete</li>
<li>Developed during <strong>Solution Evaluation</strong></li>
</ul>`
  },
  {
    id: 'chapter1-knowledge-areas',
    num: '04',
    title: 'Chapter 1: The Six Knowledge Areas (KAs)',
    tag: 'CHAPTER 1',
    insight: 'The KAs do NOT represent project phases and activities are generally NOT performed in a linear fashion.',
    content: `<p>The KAs define what BAs need to understand and the tasks they should perform. They do NOT represent project phases and activities are generally NOT performed in a linear fashion.</p>
<h3>1. 📋 Business Analysis Planning and Monitoring (BAPM)</h3>
<p>Plans the approach, organization, and coordination of all other BA tasks</p>
<h3>2. 🎯 Strategy Analysis (SA)</h3>
<p>Identifies business needs, performs problem definition, and defines a feasible solution scope and change strategy</p>
<h3>3. 🔁 Requirements Life Cycle Management (RLCM)</h3>
<p>Manages and maintains requirements and designs, including traceability, prioritization, and approvals</p>
<h3>4. 🗣️ Elicitation and Collaboration (E&amp;C)</h3>
<p>Works with stakeholders to gather requirements, understand needs, and manage ongoing collaboration</p>
<h3>5. 📝 Requirements Analysis and Design Definition (RADD)</h3>
<p>Progressively elaborates, verifies, and validates requirements, graphically models them, defines the architecture, and recommends a solution</p>
<h3>6. ✅ Solution Evaluation (SE)</h3>
<p>Assesses proposed, in-progress, and implemented solutions to ensure value delivery and defines transition requirements</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Knowledge Area</th><th>Acronym</th><th>Primary Focus</th><th>Project Phase</th></tr></thead><tbody>
<tr><td>Business Analysis Planning and Monitoring</td><td>BAPM</td><td>Planning approach &amp; monitoring work</td><td>Start</td></tr>
<tr><td>Strategy Analysis</td><td>SA</td><td>Defining business need &amp; solution scope</td><td>Start</td></tr>
<tr><td>Requirements Life Cycle Management</td><td>RLCM</td><td>Managing &amp; maintaining requirements</td><td>Throughout</td></tr>
<tr><td>Elicitation and Collaboration</td><td>E&amp;C</td><td>Gathering requirements &amp; stakeholder work</td><td>Middle</td></tr>
<tr><td>Requirements Analysis and Design Definition</td><td>RADD</td><td>Analyzing, modeling &amp; defining design</td><td>Middle</td></tr>
<tr><td>Solution Evaluation</td><td>SE</td><td>Assessing solution value delivery</td><td>End</td></tr>
</tbody></table></div>`
  },
  {
    id: 'chapter2-bapm',
    num: '05',
    title: 'Chapter 2: Business Analysis Planning & Monitoring (BAPM)',
    tag: 'CHAPTER 2',
    insight: 'BAPM focuses on defining, planning, and successfully completing business analysis work for an initiative.',
    content: `<p>This KA focuses on defining, planning, and successfully completing business analysis work for an initiative.</p>
<h3>Task 1: Plan Business Analysis Approach</h3>
<p><strong>Purpose:</strong> Deciding how and when BA tasks will be performed, agreeing on techniques, and defining deliverables</p>
<ul>
<li><strong>Key Concept:</strong> Choosing between methodologies
<ul>
<li><strong>Predictive:</strong> Fully defined solution before implementation, structured</li>
<li><strong>Adaptive:</strong> Rapid delivery, flexible, iterative/incremental</li>
</ul></li>
<li><strong>Output: Business Analysis Approach</strong></li>
</ul>
<h3>Task 2: Plan Stakeholder Engagement</h3>
<p><strong>Purpose:</strong> Identifying and analyzing stakeholders and defining how to collaborate with them</p>
<ul>
<li><strong>Key Technique: RACI Matrix</strong>
<ul><li><strong>R</strong>esponsible · <strong>A</strong>ccountable · <strong>C</strong>onsulted · <strong>I</strong>nformed</li></ul></li>
<li><strong>Output: Stakeholder Engagement Approach</strong> (includes collaboration and communication plans)</li>
</ul>
<h3>Task 3: Plan Business Analysis Governance</h3>
<p><strong>Purpose:</strong> Defining decision-making authority, the change control process, prioritization approach, and approval processes for BA work and deliverables</p>
<ul>
<li><strong>Key Elements:</strong> Decision-making authority · Change control process · Prioritization approach · Approval processes</li>
<li><strong>Output: Governance Approach</strong></li>
</ul>
<h3>Task 4: Plan Business Analysis Information Management</h3>
<p><strong>Purpose:</strong> Defining how BA information (requirements/designs) will be stored, accessed, traced, reused, and managed</p>
<ul>
<li><strong>Key Element:</strong> Selecting Requirements Attributes: Priority · Urgency · Stability · Complexity</li>
<li><strong>Output: Information Management Approach</strong></li>
</ul>
<h3>Task 5: Identify Business Analysis Performance Improvements</h3>
<p><strong>Purpose:</strong> Determining appropriate metrics and KPIs to measure and control BA work effectiveness</p>
<ul>
<li><strong>Metrics:</strong> Quantifiable levels of an indicator</li>
<li><strong>KPIs:</strong> Indicators measuring progress toward strategic goals</li>
<li><strong>Output: Business Analysis Performance Assessment</strong></li>
</ul>`
  },
  {
    id: 'chapter3-strategy',
    num: '06',
    title: 'Chapter 3: Strategy Analysis (SA)',
    tag: 'CHAPTER 3',
    insight: 'SA provides context about the business need, defining the gap between the current situation and the desired future state.',
    content: `<p>This KA provides context about the business need, defining the gap between the current situation and the desired future state.</p>
<h3>Task 1: Analyze Current State</h3>
<p><strong>Purpose:</strong> Understanding the enterprise today (including organizational structure, capabilities, technology, and external influencers) relative to the business need</p>
<ul>
<li><strong>Business Need Sources:</strong> Top-down · Bottom-up · Middle Management · External Drivers</li>
<li><strong>Root-Cause Analysis Tools:</strong> Fishbone Diagram · Five Whys (used to find underlying problems)</li>
<li><strong>Outputs:</strong> Current State Description · Business Requirements</li>
</ul>
<h3>Task 2: Define Future State</h3>
<p><strong>Purpose:</strong> Defining the new capabilities required to address the business need and assessing potential value</p>
<ul>
<li><strong>SMART Business Objectives:</strong> <strong>S</strong>pecific · <strong>M</strong>easurable · <strong>A</strong>chievable · <strong>R</strong>elevant · <strong>T</strong>ime-Bound</li>
<li><strong>SWOT Analysis:</strong> <strong>S</strong>trengths · <strong>W</strong>eaknesses · <strong>O</strong>pportunities · <strong>T</strong>hreats — used to analyze capabilities</li>
<li><strong>Outputs:</strong> Business Objectives · Future State Description · Potential Value</li>
</ul>
<h3>Task 3: Assess Risks</h3>
<p><strong>Purpose:</strong> Analyzing the negative risks (threats) associated with transitioning from the current to the future state</p>
<ul>
<li><strong>Risk Tolerance Types:</strong> Risk-averse · Risk-neutral · Risk-seeking</li>
<li><strong>Feasibility Assessment Covers:</strong> Technical risks · Financial risks · Business risks</li>
<li><strong>Output: Risk Analysis Results</strong></li>
</ul>
<h3>Task 4: Define Change Strategy</h3>
<p><strong>Purpose:</strong> Developing and assessing alternative approaches before selecting the best strategy to achieve the desired change</p>
<ul>
<li><strong>Gap Analysis:</strong> Difference between current and future state capabilities</li>
<li><strong>Enterprise Readiness Assessment:</strong> Evaluating organizational preparedness for change</li>
<li><strong>Outputs:</strong> Change Strategy · Solution Scope (defines the capabilities a solution must deliver to meet the business need)</li>
</ul>`
  },
  {
    id: 'chapter4-rlcm',
    num: '07',
    title: 'Chapter 4: Requirements Life Cycle Management (RLCM)',
    tag: 'CHAPTER 4',
    insight: 'RLCM tasks accompany requirements development work across all other KAs, focusing on management and maintenance.',
    content: `<p>RLCM tasks accompany requirements development work across all other KAs, focusing on management and maintenance.</p>
<h3>Task 1: Trace Requirements</h3>
<p><strong>Purpose:</strong> Identifying and documenting the relationships (lineage) between requirements, designs, and solution components</p>
<ul>
<li><strong>Derive:</strong> Backward traceability to parent</li>
<li><strong>Depends:</strong> Necessity or effort</li>
<li><strong>Satisfy:</strong> Links requirement to solution component</li>
<li><strong>Validate:</strong> Links requirement to test case</li>
<li><strong>Outputs:</strong> Requirements (Traced) · Designs (Traced)</li>
</ul>
<h3>Task 2: Maintain Requirements</h3>
<p><strong>Purpose:</strong> Ensuring requirements remain accurate, current, and accessible for reuse throughout the life cycle and in a requirements repository</p>
<ul>
<li><strong>Reusable Requirements:</strong> Relate to ongoing operational capabilities — Regulatory requirements · Quality standards · Business rules</li>
<li><strong>Outputs:</strong> Requirements (Maintained) · Designs (Maintained)</li>
</ul>
<h3>Task 3: Prioritize Requirements</h3>
<p><strong>Purpose:</strong> Determining the relative importance of requirements</p>
<ul>
<li><strong>Prioritization Factors:</strong> Benefit · Penalty · Cost · Risk · Dependencies · Time Sensitivity · Stability · Regulatory/Policy Compliance</li>
<li><strong>Outputs:</strong> Requirements (Prioritized) · Designs (Prioritized)</li>
</ul>
<h3>Task 4: Assess Requirements Changes</h3>
<p><strong>Purpose:</strong> Evaluating proposed changes to requirements/designs relative to value, cost, impact, schedule, and risks before approval</p>
<ul>
<li>Uses the change control process defined in the Governance Approach</li>
<li>Impact analysis assesses the effects of a change</li>
<li><strong>Outputs:</strong> Requirements Change Assessment · Designs Change Assessment</li>
</ul>
<h3>Task 5: Approve Requirements</h3>
<p><strong>Purpose:</strong> Obtaining agreement and formal sign-off from stakeholders for requirements and designs</p>
<ul>
<li>Conflict resolution and consensus-building are critical during this process</li>
<li><strong>Outputs:</strong> Requirements (Approved) · Designs (Approved)</li>
</ul>`
  },
  {
    id: 'chapter5-ec',
    num: '08',
    title: 'Chapter 5: Elicitation and Collaboration (E&C)',
    tag: 'CHAPTER 5',
    insight: 'E&C guides the process of drawing forth information (Elicitation) and working together (Collaboration) with stakeholders.',
    content: `<p>This KA guides the process of drawing forth information (Elicitation) and working together (Collaboration) with stakeholders.</p>
<h3>Task 1: Prepare for Elicitation</h3>
<p><strong>Purpose:</strong> Planning the objectives, scope, logistics, and techniques for a specific elicitation activity</p>
<ul>
<li>Define objectives · Determine scope · Plan logistics · Select techniques</li>
<li><strong>Output: Elicitation Activity Plan</strong></li>
</ul>
<h3>Task 2: Conduct Elicitation</h3>
<p><strong>Purpose:</strong> Executing the elicitation activity using chosen techniques</p>
<ul>
<li><strong>Collaborative:</strong> Direct stakeholder interaction</li>
<li><strong>Research:</strong> Studying non-stakeholder sources like documents</li>
<li><strong>Experiments:</strong> Observational studies, prototypes</li>
<li><strong>Output: Elicitation Results (Unconfirmed)</strong></li>
</ul>
<h3>Task 3: Confirm Elicitation Results</h3>
<p><strong>Purpose:</strong> Checking results for accuracy and consistency against source information and other results; resolving errors, omissions, or ambiguity</p>
<ul>
<li>Check accuracy · Verify consistency · Resolve errors · Address omissions · Clarify ambiguity</li>
<li><strong>Output: Elicitation Results (Confirmed)</strong></li>
</ul>
<h3>Task 4: Communicate Business Analysis Information</h3>
<p><strong>Purpose:</strong> Sharing information packages (formal/informal documents, presentations) with stakeholders to ensure their understanding</p>
<ul>
<li>Communication must be <strong>bidirectional</strong> (received, understood, and acknowledged)</li>
<li><strong>Output: Business Analysis Information (Communicated)</strong></li>
</ul>
<h3>Task 5: Manage Stakeholder Collaboration</h3>
<p><strong>Purpose:</strong> Fostering teamwork, securing commitments, and monitoring engagement throughout the initiative</p>
<ul>
<li><strong>Collaborative Games:</strong> Stimulate teamwork and collaboration
<ul><li>Product Box · Affinity Map · Fishbowl</li></ul></li>
<li><strong>Output: Stakeholder Engagement</strong></li>
</ul>`
  },
  {
    id: 'chapter6-radd',
    num: '09',
    title: 'Chapter 6: Requirements Analysis and Design Definition (RADD)',
    tag: 'CHAPTER 6',
    insight: 'RADD transforms elicited information into realized stakeholder and solution requirements and defines design options.',
    content: `<p>This KA transforms elicited information into realized stakeholder and solution requirements and defines design options.</p>
<h3>Task 1: Specify and Model Requirements</h3>
<p><strong>Purpose:</strong> Analyzing elicited information and creating representations (models, text, matrices)</p>
<ul>
<li><strong>Modeling Categories:</strong> People and Roles · Rationale · Activity Flow · Capability · Data and Information</li>
<li><strong>Output: Requirements (Specified and Modelled)</strong></li>
</ul>
<h3>Task 2: Verify Requirements</h3>
<p><strong>Purpose:</strong> A quality check to ensure requirements are correct, complete, and meet quality standards; an <em>internal</em> review by the BA team</p>
<p><strong>Nine Characteristics of Quality Requirements:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Atomic</li><li>Complete</li><li>Concise</li><li><strong>Consistent</strong></li><li>Feasible</li>
<li><strong>Prioritized</strong></li><li><strong>Testable</strong></li><li><strong>Unambiguous</strong></li><li>Understandable</li>
</ol>
<p><strong>Output: Requirements (Verified)</strong></p>
<h3>Task 3: Validate Requirements</h3>
<p><strong>Purpose:</strong> Ensuring requirements align with the business goals/objectives and deliver value to the organization (checks against the business case)</p>
<ul>
<li><strong>Verify:</strong> Internal quality check</li>
<li><strong>Validate:</strong> Alignment with business value</li>
<li><strong>Output: Requirements (Validated)</strong></li>
</ul>
<h3>Task 4: Define Requirements Architecture</h3>
<p><strong>Purpose:</strong> Structuring and organizing requirements (including models and descriptions) into a cohesive set</p>
<ul>
<li><strong>Viewpoints:</strong> Templates defining representation/organization for specific stakeholder groups</li>
<li><strong>Views:</strong> The actual requirements/designs from that viewpoint</li>
<li><strong>Output: Requirements Architecture</strong></li>
</ul>
<h3>Task 5: Define Design Options</h3>
<p><strong>Purpose:</strong> Describing possible solutions (design options) that satisfy the requirements, detailing the solution approach, and allocating requirements to solution components/releases</p>
<ul>
<li>Solution approach options: Build · Buy · Hybrid</li>
<li>Allocation to: Solution components · Releases</li>
<li><strong>Output: Design Options</strong></li>
</ul>
<h3>Task 6: Analyze Potential Value and Recommend Solution</h3>
<p><strong>Purpose:</strong> Evaluating the expected costs and benefits of each design option to recommend the one that maximizes enterprise value</p>
<ul>
<li>Evaluate costs · Assess benefits · Compare options · Maximize enterprise value</li>
<li><strong>Output: Solution Recommendation</strong></li>
</ul>`
  },
  {
    id: 'chapter7-se',
    num: '10',
    title: 'Chapter 7: Solution Evaluation (SE)',
    tag: 'CHAPTER 7',
    insight: 'SE focuses on assessing implemented or existing solutions against the business need and maximizing the value delivered.',
    content: `<p>This KA focuses on assessing implemented or existing solutions against the business need and maximizing the value delivered to the enterprise.</p>
<h3>Task 1: Measure Solution Performance</h3>
<p><strong>Purpose:</strong> Defining and collecting solution performance data (metrics/KPIs) to measure efficiency and effectiveness</p>
<ul>
<li>Performance measured against: Business objectives · Solution scope · Validated requirements</li>
<li><strong>Output: Solution Performance Measures</strong></li>
</ul>
<h3>Task 2: Analyze Performance Measures</h3>
<p><strong>Purpose:</strong> Investigating performance data to identify trends, variances, and risks</p>
<ul>
<li><strong>Variances:</strong> Difference between expected and actual performance</li>
<li><strong>Output: Solution Performance Analysis</strong></li>
</ul>
<h3>Task 3: Assess Solution Limitations</h3>
<p><strong>Purpose:</strong> Identifying defects, constraints, or issues within the solution itself that prevent full value realization</p>
<ul>
<li>Focus Areas: Defects · Constraints · Issues within the solution</li>
<li><strong>Output: Solution Limitation</strong></li>
</ul>
<h3>Task 4: Assess Enterprise Limitations</h3>
<p><strong>Purpose:</strong> Identifying internal factors external to the solution that limit the solution's value realization</p>
<ul>
<li>Includes an <strong>Operational Assessment</strong></li>
<li>Factors to Consider: Organizational culture · Operations · Stakeholder interests</li>
<li><strong>Output: Enterprise Limitation</strong></li>
</ul>
<h3>Task 5: Recommend Actions to Increase Solution Value</h3>
<p><strong>Purpose:</strong> Using all assessments to determine and recommend actions</p>
<ul>
<li><strong>Potential Actions:</strong>
<ul>
<li>Enhancing the solution</li>
<li>Organizational changes</li>
<li>Retiring the solution</li>
<li>Adjusting performance measures</li>
</ul></li>
<li><strong>Output: Recommended Actions</strong></li>
</ul>`
  },
  {
    id: 'chapter8-competencies',
    num: '11',
    title: 'Chapter 8: Underlying Competencies',
    tag: 'CHAPTER 8',
    insight: 'These personal qualities and skills enable a BA to be effective. They are applied throughout all six KAs.',
    content: `<p>These are the personal qualities, knowledge, behaviors, characteristics, and skills that enable a BA to be effective. They are applied throughout all six KAs.</p>
<h3>1. 🧠 Analytical Thinking and Problem-Solving Skills</h3>
<p><strong>Purpose:</strong> Enables the BA to assess situations and recommend solutions</p>
<p><strong>Key Skills:</strong> Creative thinking · Decision making (avoiding sunk cost fallacy) · Learning · Problem solving · Systems thinking (holistic view) · Conceptual thinking · Visual thinking</p>
<h3>2. 🌟 Behavioral Characteristics</h3>
<p><strong>Purpose:</strong> Personal integrity and strength of character</p>
<p><strong>Key Characteristics:</strong> Ethics · Personal accountability · Trustworthiness · Organization and time management · Adaptability</p>
<h3>3. 💼 Business Knowledge</h3>
<p><strong>Purpose:</strong> Understanding the organizational environment</p>
<p><strong>Key Knowledge Areas:</strong> Business acumen · Industry knowledge · Organization knowledge · Solution knowledge (familiarity with existing systems) · Methodology knowledge</p>
<h3>4. 💬 Communication Skills</h3>
<p><strong>Purpose:</strong> Crucial for project success</p>
<p><strong>Key Skills:</strong> Verbal communication · Written communication · Listening · <strong>Active listening</strong> ensures understanding</p>
<p><strong>Formula: Lines of communication</strong> = (n × (n-1))/2</p>
<h3>5. 🤝 Interaction Skills</h3>
<p><strong>Purpose:</strong> Ability to work well with others</p>
<ul>
<li><strong>Facilitation:</strong> Guiding group processes</li>
<li><strong>Leadership and influencing:</strong> Using power/politics to overcome resistance</li>
<li><strong>Teamwork:</strong> Familiarity with Tuckman model stages — Forming · Storming · Norming · Performing</li>
<li><strong>Negotiation and conflict resolution:</strong> Confrontation being the ideal method</li>
<li><strong>Teaching:</strong> Accommodating learning styles — Visual · Auditory · Kinesthetic</li>
</ul>
<h3>6. 🖥️ Tools and Technology</h3>
<p><strong>Purpose:</strong> Proficiency in software applications</p>
<ul>
<li><strong>Office productivity tools:</strong> Word processing · Spreadsheets</li>
<li><strong>Business analysis tools:</strong> Modeling tools · Requirements management</li>
<li><strong>Communication tools:</strong> Email · Conferencing</li>
</ul>`
  },
  {
    id: 'chapter9-perspectives',
    num: '12',
    title: 'Chapter 9: Five Perspectives on Business Analysis',
    tag: 'CHAPTER 9',
    insight: 'The five common contexts in which BAs operate, requiring customization of KA tasks and techniques.',
    content: `<p>The five common contexts in which BAs operate, requiring customization of KA tasks and techniques.</p>
<h3>1. 🔄 Agile Perspective</h3>
<ul>
<li><strong>Characteristics:</strong> Constant change and continuous adaptation. Emphasizes "just-in-time" business analysis work</li>
<li><strong>Approach:</strong> Iterative delivery of value · Fixed iteration timeframes (sprints)</li>
<li><strong>Key Techniques:</strong> MoSCoW Prioritization · User Stories · Planning Workshops · Retrospectives</li>
<li><strong>KA Impact:</strong> Planning is adaptive. Elicitation is ongoing to generate "just enough detail"</li>
</ul>
<h3>2. 📊 Business Intelligence (BI) Perspective</h3>
<ul>
<li><strong>Focus:</strong> Using data transformation, integration, and enhancement to provide value-added information supporting decision making</li>
<li><strong>Analytics types:</strong> <strong>Descriptive:</strong> Historical · <strong>Predictive:</strong> Forecasting · <strong>Prescriptive:</strong> Actions/optimization</li>
<li><strong>Key Techniques:</strong> Data modeling · Decision modeling · Data mining · Metrics/KPIs are critical</li>
<li><strong>BA Role:</strong> Liaison coordinating information requirements between business stakeholders and technical specialists</li>
</ul>
<h3>3. 💻 Information Technology (IT) Perspective</h3>
<ul>
<li><strong>Focus:</strong> IT systems, software applications, and infrastructure</li>
<li><strong>BA Role:</strong> Translator between business and technical teams</li>
<li><strong>Key Techniques:</strong> Process modeling · Data modeling · State modeling · Use cases · Interface analysis</li>
</ul>
<h3>4. 🏗️ Business Architecture Perspective</h3>
<ul>
<li><strong>Focus:</strong> Modeling and understanding the entire enterprise (blueprints) to align strategies and tactical demands</li>
<li><strong>Principles:</strong> Scope: Entire context · Separation of Concerns · Scenario Driven · Knowledge Based</li>
<li><strong>Key Techniques:</strong> Capability Map · Value Mapping · Organizational Map · Business Motivation Model (BMM)</li>
</ul>
<h3>5. 🔁 Business Process Management (BPM) Perspective</h3>
<ul>
<li><strong>Focus:</strong> Management discipline focused on developing or improving organizational business processes to optimize value delivery and performance</li>
<li><strong>Life Cycle:</strong> Designing → Modelling → Executing/Monitoring → Optimizing</li>
<li><strong>Approach:</strong> Initiatives can be Top-down or Bottom-up; People-centric or IT-centric changes</li>
<li><strong>Key Techniques:</strong> Process Modeling · Process Analysis · Root-Cause Analysis</li>
</ul>`
  },
  {
    id: 'summary-tables',
    num: '13',
    title: 'Summary Reference Tables',
    tag: 'REFERENCE',
    insight: 'Quick-reference summary of all key BABOK® concepts, models, and frameworks.',
    content: `<h3>Requirements Hierarchy</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Requirement Type</th><th>Level</th><th>Developed In</th><th>Description</th></tr></thead><tbody>
<tr><td>Business Requirements</td><td>Highest</td><td>Strategy Analysis</td><td>Goals, objectives, and needs</td></tr>
<tr><td>Stakeholder Requirements</td><td>Middle</td><td>RADD</td><td>Stakeholder needs &amp; interactions</td></tr>
<tr><td>Solution Requirements</td><td>Detailed</td><td>RADD</td><td>Solution characteristics</td></tr>
<tr><td>→ Functional</td><td>Sub-type</td><td>RADD</td><td>Capabilities for users</td></tr>
<tr><td>→ Nonfunctional</td><td>Sub-type</td><td>RADD</td><td>Quality attributes &amp; constraints</td></tr>
<tr><td>Transition Requirements</td><td>Temporary</td><td>Solution Evaluation</td><td>Capabilities for state change</td></tr>
</tbody></table></div>
<h3>BACCM™ Core Concepts</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Concept</th><th>Symbol</th><th>Definition</th></tr></thead><tbody>
<tr><td>Change</td><td>🔄</td><td>Driving force for initiatives</td></tr>
<tr><td>Need</td><td>📌</td><td>Ways to address problems/opportunities</td></tr>
<tr><td>Solution</td><td>💡</td><td>End result resolving problems</td></tr>
<tr><td>Stakeholder</td><td>👥</td><td>People with relationship to change</td></tr>
<tr><td>Value</td><td>💰</td><td>Worth to stakeholders</td></tr>
<tr><td>Context</td><td>🌍</td><td>Environment of change</td></tr>
</tbody></table></div>
<h3>Quality Requirements Characteristics</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Characteristic</th><th>Definition</th></tr></thead><tbody>
<tr><td>Atomic</td><td>Cannot be subdivided</td></tr>
<tr><td>Complete</td><td>Fully describes the requirement</td></tr>
<tr><td>Concise</td><td>No unnecessary information</td></tr>
<tr><td><strong>Consistent</strong></td><td>No conflicts with other requirements</td></tr>
<tr><td>Feasible</td><td>Can be implemented</td></tr>
<tr><td><strong>Prioritized</strong></td><td>Ranked in importance</td></tr>
<tr><td><strong>Testable</strong></td><td>Can be verified</td></tr>
<tr><td><strong>Unambiguous</strong></td><td>Only one interpretation</td></tr>
<tr><td>Understandable</td><td>Clear to all stakeholders</td></tr>
</tbody></table></div>
<h3>Tuckman Model Stages</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Stage</th><th>Description</th></tr></thead><tbody>
<tr><td>Forming</td><td>Team members get acquainted</td></tr>
<tr><td>Storming</td><td>Conflicts and competition emerge</td></tr>
<tr><td>Norming</td><td>Team develops cohesion</td></tr>
<tr><td>Performing</td><td>Team operates efficiently</td></tr>
</tbody></table></div>
<h3>Risk Tolerance Types</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td>Risk-averse</td><td>Prefers to avoid uncertainty</td></tr>
<tr><td>Risk-neutral</td><td>Indifferent to risk level</td></tr>
<tr><td>Risk-seeking</td><td>Willing to take chances</td></tr>
</tbody></table></div>
<h3>RACI Matrix</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Role</th><th>Meaning</th></tr></thead><tbody>
<tr><td><strong>R</strong></td><td>Responsible (Does the work)</td></tr>
<tr><td><strong>A</strong></td><td>Accountable (Final approval)</td></tr>
<tr><td><strong>C</strong></td><td>Consulted (Provides input)</td></tr>
<tr><td><strong>I</strong></td><td>Informed (Kept updated)</td></tr>
</tbody></table></div>
<h3>MoSCoW Prioritization</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Priority</th><th>Meaning</th></tr></thead><tbody>
<tr><td><strong>M</strong></td><td>Must have</td></tr>
<tr><td><strong>S</strong></td><td>Should have</td></tr>
<tr><td><strong>C</strong></td><td>Could have</td></tr>
<tr><td><strong>W</strong></td><td>Won't have (this time)</td></tr>
</tbody></table></div>
<h3>Five Perspectives on BA</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Perspective</th><th>Key Focus</th><th>Primary Approach</th></tr></thead><tbody>
<tr><td>🔄 Agile</td><td>Iterative delivery</td><td>Adaptive, sprints</td></tr>
<tr><td>📊 Business Intelligence</td><td>Data analytics</td><td>Descriptive/Predictive/Prescriptive</td></tr>
<tr><td>💻 Information Technology</td><td>Systems &amp; software</td><td>Predictive or hybrid</td></tr>
<tr><td>🏗️ Business Architecture</td><td>Enterprise blueprints</td><td>Strategic planning</td></tr>
<tr><td>🔁 Business Process Management</td><td>Process optimization</td><td>Life cycle approach</td></tr>
</tbody></table></div>`
  },
  {
    id: 'study-tips-cert',
    num: '14',
    title: 'Key Study Tips & Certification Path',
    tag: 'EXAM PREP',
    insight: '150 questions in 3.5 hours = ~1.4 minutes per question. Flag difficult questions and return later.',
    content: `<h3>✅ Essential Concepts to Master</h3>
<p><strong>Foundation Concepts:</strong></p>
<ul><li>BACCM™ six core concepts</li><li>Requirements classification hierarchy</li><li>Six Knowledge Areas and their relationships</li></ul>
<p><strong>Planning &amp; Strategy:</strong></p>
<ul><li>Predictive vs. Adaptive approaches</li><li>SMART objectives</li><li>SWOT analysis</li><li>Gap analysis</li></ul>
<p><strong>Requirements Management:</strong></p>
<ul><li>Traceability relationships (Derive, Depends, Satisfy, Validate)</li><li>Prioritization factors</li><li>Change control process</li></ul>
<p><strong>Quality &amp; Validation:</strong></p>
<ul><li>Nine characteristics of quality requirements</li><li>Difference between verify and validate</li><li>Approval processes</li></ul>
<p><strong>Stakeholder Management:</strong></p>
<ul><li>RACI matrix</li><li>Collaborative games</li><li>Communication must be bidirectional</li></ul>
<p><strong>Solution Evaluation:</strong></p>
<ul><li>Performance measures vs. KPIs</li><li>Solution limitations vs. Enterprise limitations</li><li>Variance analysis</li></ul>
<h3>📝 Exam Preparation Strategies</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Read the BABOK® Guide Version 3.0 thoroughly</li>
<li>Familiarize yourself with BABOK® terminology</li>
<li>Practice questions at all Bloom's Taxonomy levels</li>
<li>Understand the context and application of techniques</li>
<li>Focus on outputs from each task</li>
<li>Memorize key formulas and models</li>
</ol>
<h3>Common Pitfalls to Avoid</h3>
<ul>
<li>Confusing Knowledge Areas with project phases</li>
<li>Mixing up verify (internal check) vs. validate (business value)</li>
<li>Forgetting that BAs are also stakeholders</li>
<li>Assuming linear task execution</li>
<li>Overlooking underlying competencies importance</li>
</ul>
<h3>Time Management</h3>
<ul>
<li>150 questions in 3.5 hours = ~1.4 minutes per question</li>
<li>Don't spend too long on any single question</li>
<li>Flag difficult questions and return later</li>
<li>Read all answer options before selecting</li>
</ul>
<h3>🎓 Certification Path</h3>
<p><strong>CCBA™ (Certification of Capability in Business Analysis)</strong></p>
<ul>
<li>3,750 hours of BA work experience</li>
<li>900 hours in 4 of 6 Knowledge Areas (minimum 2 years)</li>
<li>21 hours of professional development in the last 4 years</li>
<li><strong>Target Audience:</strong> Less experienced business analysts; those building their BA career</li>
</ul>
<p><strong>CBAP® (Certified Business Analysis Professional)</strong></p>
<ul>
<li>7,500 hours of BA work experience</li>
<li>900 hours in 4 of 6 Knowledge Areas (minimum 5 years)</li>
<li>35 hours of professional development in the last 4 years</li>
<li><strong>Target Audience:</strong> Experienced business analysts; senior BA professionals</li>
</ul>`
  }
];

// ── BABOK QUIZ QUESTIONS ─────────────────────────────────────────
const BABOK_QUIZ = [
  {
    q: "What does BACCM™ stand for?",
    opts: ["Business Analysis Core Concept Model","Business Analyst Certification Competency Matrix","BABOK Accreditation and Competency Criteria Model","Business Analysis Capability and Competency Measurement"],
    a: 0, cat: "BABOK"
  },
  {
    q: "Which Knowledge Area focuses on planning the BA approach and monitoring work?",
    opts: ["Strategy Analysis","Elicitation and Collaboration","Business Analysis Planning and Monitoring","Requirements Life Cycle Management"],
    a: 2, cat: "BABOK"
  },
  {
    q: "Which requirement type is developed during Solution Evaluation and is no longer needed once the transition is complete?",
    opts: ["Business Requirements","Stakeholder Requirements","Nonfunctional Requirements","Transition Requirements"],
    a: 3, cat: "BABOK"
  },
  {
    q: "What is the difference between 'Verify' and 'Validate' in RADD?",
    opts: ["They are synonyms used interchangeably","Verify is external; Validate is internal","Verify = internal quality check; Validate = alignment with business value","Validate = internal quality check; Verify = alignment with business value"],
    a: 2, cat: "BABOK"
  },
  {
    q: "How many characteristics of quality requirements are defined in RADD?",
    opts: ["Six","Seven","Eight","Nine"],
    a: 3, cat: "BABOK"
  },
  {
    q: "In the BACCM™, which core concept describes 'the environment where the change is taking place'?",
    opts: ["Need","Value","Context","Change"],
    a: 2, cat: "BABOK"
  },
  {
    q: "Which RLCM task links a requirement to a test case?",
    opts: ["Derive","Depends","Satisfy","Validate"],
    a: 3, cat: "BABOK"
  },
  {
    q: "Which Tuckman model stage is when 'conflicts and competition emerge'?",
    opts: ["Forming","Storming","Norming","Performing"],
    a: 1, cat: "BABOK"
  },
  {
    q: "The CBAP® certification requires how many hours of BA work experience?",
    opts: ["3,750","5,000","6,500","7,500"],
    a: 3, cat: "BABOK"
  },
  {
    q: "Which BA perspective is focused on 'just-in-time' business analysis work?",
    opts: ["Business Intelligence","Information Technology","Agile","Business Architecture"],
    a: 2, cat: "BABOK"
  }
];

// ── BABOK QOTD ENTRIES ───────────────────────────────────────────
const BABOK_QOTD = [
  {
    q: "Explain the difference between Verify and Validate in the BABOK® Guide, and give a practical example of each.",
    a: `Verify (Task 2 in RADD) is an internal quality check performed by the BA team to ensure requirements are correct, complete, and meet quality standards. It checks against the nine characteristics: Atomic, Complete, Concise, Consistent, Feasible, Prioritized, Testable, Unambiguous, Understandable.

Validate (Task 3 in RADD) ensures requirements align with business goals/objectives and deliver value to the organization. It checks against the business case.

Practical examples:
Verify: "Is this requirement testable? Is it unambiguous? Does it conflict with other requirements?" — the BA team reviews internally before showing stakeholders.
Validate: "Does building this feature actually help us achieve our business objective of reducing customer churn by 20%?" — checking against the reason we're doing the project at all.

Memory aid: Verify = internal (Is it right?); Validate = external/business (Is it the right thing to build?)`
  },
  {
    q: "Name and describe the six core concepts of the BACCM™ and explain why each matters to a BA.",
    a: `The Business Analysis Core Concept Model (BACCM™) provides a common language for business analysis.

1. Change — The driving force for projects and initiatives in response to a need. Matters because BA work only exists because someone wants to change something.

2. Need — Value-driven ways to address business problems or opportunities. Matters because identifying the true need (not the stated solution) is the BA's core job.

3. Solution — The end result that resolves problems or exploits opportunities. Matters because the BA must ensure the solution actually addresses the need.

4. Stakeholder — People who have a relationship to the change, need, or solution. Matters because BAs must identify everyone affected — including people who didn't ask to be involved.

5. Value — The worth of something (tangible or intangible) to a stakeholder within the enterprise context. Matters because the BA must connect work to value to justify decisions.

6. Context — The environment where the change is taking place. Matters because the same solution that works in one context may fail in another. External drivers, culture, and constraints all shape what's feasible.`
  }
];

// ── BABOK QUOTES ─────────────────────────────────────────────────
const BABOK_QUOTES = [
  { text: "Business analysis is the practice of enabling change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders.", source: "BABOK® Guide" },
  { text: "The BA is a stakeholder for all business analysis activities — not just a facilitator.", source: "Chapter 1: Foundation Concepts" },
  { text: "Knowledge Areas do NOT represent project phases and activities are generally NOT performed in a linear fashion.", source: "BABOK® Guide — Six KAs" },
  { text: "Verify = internal quality check. Validate = alignment with business value. Never confuse the two.", source: "Chapter 6: RADD" },
  { text: "A requirement without an owner is a rule without accountability.", source: "Requirements Life Cycle Management" }
];

// Expose to window for page scripts
window.BABOK_DATA = {
  BABOK_INTRO,
  BABOK_SECTIONS,
  BABOK_QUIZ,
  BABOK_QOTD,
  BABOK_QUOTES
};
