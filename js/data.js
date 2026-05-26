// ================================================================
// data.js — ALL CONTENT from comms 1.txt & excellence.txt
// Word-for-word faithful representation, structured for rendering
// ================================================================

// ── SECTION COLOR ROTATION ──────────────────────────────────────
const SECTION_THEMES = [
  'theme-purple','theme-pink','theme-cyan','theme-emerald',
  'theme-amber','theme-rose','theme-indigo','theme-violet',
  'theme-purple','theme-cyan','theme-emerald','theme-pink',
  'theme-amber','theme-violet','theme-rose','theme-indigo',
  'theme-cyan','theme-purple','theme-pink','theme-emerald'
];

// ================================================================
// COMMS 1 — BA/PO COMMUNICATION PLAYBOOK
// ================================================================
const COMMS_INTRO = `Below is a neutral, comprehensive Business Analyst / Product Owner communication playbook for corporate, startup, enterprise, agency, consulting, government, agile, waterfall, hybrid, remote, cross-functional, technical, and executive environments.

The core thesis: <strong>a BA/PO is not merely a "requirements person." The role is a translator, sense-maker, decision-framer, expectation-manager, conflict-navigator, and value-protector.</strong> In Scrum, the Product Owner is accountable for maximizing product value and clearly communicating the Product Goal, backlog items, and ordering decisions. In business analysis, IIBA frames analysis around core concepts such as change, need, solution, stakeholder, value, and context, which is a useful neutral lens for communication.`;

const COMMS_SECTIONS = [
  {
    id: 'mission',
    num: '01',
    title: '1. The BA/PO Communication Mission',
    tag: 'FOUNDATION',
    insight: 'The BA/PO becomes dangerous—in a good way—when they stop asking only "What do you want?" and start asking the deeper question.',
    content: `<p>A strong BA/PO communicates to answer five questions:</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.75rem"><strong>Why are we doing this?</strong><br>Business problem, opportunity, value, risk, customer/user need.</li>
<li style="margin-bottom:0.75rem"><strong>Who is affected?</strong><br>Users, customers, operations, sales, finance, legal, compliance, support, engineering, leadership.</li>
<li style="margin-bottom:0.75rem"><strong>What outcome are we trying to create?</strong><br>Revenue, cost reduction, compliance, efficiency, retention, adoption, risk reduction, service quality.</li>
<li style="margin-bottom:0.75rem"><strong>What exactly needs to change?</strong><br>Processes, data, systems, policies, user journeys, integrations, reporting, roles, permissions.</li>
<li style="margin-bottom:0.75rem"><strong>How will we know it worked?</strong><br>Acceptance criteria, KPIs, leading indicators, lagging indicators, user behavior, operational metrics.</li>
</ol>
<p>The BA/PO becomes dangerous—in a good way—when they stop asking only, "What do you want?" and start asking:</p>
<blockquote>"What problem are we solving, for whom, why now, what trade-offs are acceptable, and how will we measure success?"</blockquote>`
  },
  {
    id: 'ba-vs-po',
    num: '02',
    title: '2. BA vs PO: Communication Differences',
    tag: 'ROLES',
    insight: 'In many real organizations, the biggest communication risk in BA/PO overlap is unclear decision rights.',
    content: `<h3>Business Analyst communication focus</h3>
<p>A BA typically emphasizes:</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>BA Focus</th><th>Communication Responsibility</th></tr></thead><tbody>
<tr><td>Business needs</td><td>Understand problem, pain points, root cause</td></tr>
<tr><td>Requirements</td><td>Elicit, clarify, document, validate</td></tr>
<tr><td>Processes</td><td>Map current state and future state</td></tr>
<tr><td>Stakeholders</td><td>Identify affected groups and conflicting needs</td></tr>
<tr><td>Change impact</td><td>Explain operational, people, process, data, and system implications</td></tr>
<tr><td>Risk</td><td>Surface assumptions, gaps, dependencies, constraints</td></tr>
<tr><td>Solution fit</td><td>Ensure the solution solves the real business problem</td></tr>
</tbody></table></div>
<p>The BA often acts as the <strong>bridge between business reality and solution design</strong>.</p>
<h3>Product Owner communication focus</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>PO Focus</th><th>Communication Responsibility</th></tr></thead><tbody>
<tr><td>Product value</td><td>Decide what matters most</td></tr>
<tr><td>Backlog</td><td>Create, order, refine, clarify</td></tr>
<tr><td>Product goal</td><td>Communicate direction and priority</td></tr>
<tr><td>Stakeholder alignment</td><td>Balance competing requests</td></tr>
<tr><td>Delivery team clarity</td><td>Ensure developers understand intent</td></tr>
<tr><td>Trade-offs</td><td>Say no, not yet, or not in this release</td></tr>
<tr><td>Outcomes</td><td>Connect delivery to business/customer value</td></tr>
</tbody></table></div>
<p>The Scrum Guide states that the Product Owner is accountable for maximizing value and for effective Product Backlog management, including clearly communicating the Product Goal, backlog items, and ordering.</p>
<h3>Where BA and PO overlap</h3>
<p>In many real organizations, especially hybrid agile environments, the BA and PO overlap heavily. The biggest communication risk is <strong>unclear decision rights</strong>.</p>
<p>Clarify early:</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Question</th><th>Needs Clear Owner</th></tr></thead><tbody>
<tr><td>Who owns product priority?</td><td>Usually PO / Product Manager / Business Owner</td></tr>
<tr><td>Who defines business rules?</td><td>BA with business SMEs</td></tr>
<tr><td>Who approves requirements?</td><td>Sponsor / business owner / compliance / PO</td></tr>
<tr><td>Who accepts user stories?</td><td>PO, sometimes with SME input</td></tr>
<tr><td>Who resolves conflicts?</td><td>PO, sponsor, steering group, or governance body</td></tr>
<tr><td>Who communicates scope changes?</td><td>PO/PM/BA depending on model</td></tr>
<tr><td>Who owns roadmap?</td><td>Product Manager or Product Owner, depending on org</td></tr>
</tbody></table></div>`
  },
  {
    id: 'principles',
    num: '03',
    title: '3. The Core Communication Principles',
    tag: 'PRINCIPLES',
    insight: 'A good BA/PO does not eliminate all uncertainty. They name uncertainty clearly enough that the right people can act.',
    content: `<h3>Principle 1: Communicate around value, not activity</h3>
<p>Weak communication: <em>"We completed five stories."</em></p>
<p>Stronger communication: <em>"We completed the account verification flow, which reduces manual review effort and moves us closer to the onboarding conversion target."</em></p>
<p>Executives care about value. Developers care about clarity. Users care about ease. Operations cares about stability. Compliance cares about risk. The BA/PO must translate the same work into each audience's language.</p>

<h3>Principle 2: Separate problem, solution, and request</h3>
<p>Stakeholders often present solutions as requirements: "We need a dashboard." "Add an export button." "Make it like the old system." "Can we just automate this?"</p>
<p>The BA/PO should gently decompose:</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Layer</th><th>Question</th></tr></thead><tbody>
<tr><td>Request</td><td>What are they asking for?</td></tr>
<tr><td>Problem</td><td>What pain triggered the request?</td></tr>
<tr><td>User</td><td>Who experiences the pain?</td></tr>
<tr><td>Outcome</td><td>What improvement do we want?</td></tr>
<tr><td>Constraint</td><td>What rules or limitations exist?</td></tr>
<tr><td>Options</td><td>What possible solutions exist?</td></tr>
</tbody></table></div>
<blockquote>"That may be the right solution. Before we lock it in, can I understand the problem behind it, who is affected, and what result would make this successful?"</blockquote>

<h3>Principle 3: Make ambiguity visible early</h3>
<p>Most delivery failures are not because people are stupid. They happen because assumptions stay hidden too long. Use phrases like:</p>
<ul><li>"Here is what we know."</li><li>"Here is what we believe but have not validated."</li><li>"Here is what is still open."</li><li>"Here is the decision needed."</li><li>"Here is the risk if we delay the decision."</li></ul>
<p>A good BA/PO does not eliminate all uncertainty. They <strong>name uncertainty clearly enough that the right people can act</strong>.</p>

<h3>Principle 4: Communicate differently by audience</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Audience</th><th>They Usually Need</th></tr></thead><tbody>
<tr><td>Executives</td><td>Value, risk, cost, timeline, strategic alignment</td></tr>
<tr><td>Business SMEs</td><td>Process accuracy, rules, exceptions, usability</td></tr>
<tr><td>Developers</td><td>Clear intent, acceptance criteria, edge cases, dependencies</td></tr>
<tr><td>Designers</td><td>User goals, pain points, constraints, journeys</td></tr>
<tr><td>QA/Testers</td><td>Scenarios, acceptance criteria, test data, expected behavior</td></tr>
<tr><td>Operations</td><td>Process change, handoffs, support model</td></tr>
<tr><td>Customer support</td><td>Known issues, FAQs, escalation paths</td></tr>
<tr><td>Legal/compliance</td><td>Controls, auditability, data/privacy implications</td></tr>
<tr><td>Sales/marketing</td><td>Positioning, release timing, customer impact</td></tr>
<tr><td>Customers/users</td><td>What changed, why it matters, how to use it</td></tr>
</tbody></table></div>

<h3>Principle 5: Write to reduce misinterpretation</h3>
<p>Good BA/PO writing is not fancy. It is structured, traceable, testable, and decision-friendly.</p>
<p>Bad requirement: <em>"System should be user-friendly and fast."</em></p>
<p>Better: <em>"When a registered user submits the onboarding form, the system must validate all required fields within 2 seconds under normal load and display field-level error messages for missing or invalid inputs."</em></p>
<p>Bad user story: <em>"As a user, I want reports so I can see data."</em></p>
<p>Better: <em>"As a finance analyst, I want to filter monthly revenue by region, product line, and customer segment so that I can identify underperforming markets before the monthly review meeting."</em></p>`
  },
  {
    id: 'comm-loop',
    num: '04',
    title: '4. The Universal BA/PO Communication Loop',
    tag: 'PROCESS',
    insight: 'Communication is not "send an update." It is move people toward shared understanding and action.',
    content: `<p>Use this loop in almost every environment.</p>
<h3>1. Elicit — Understand the need</h3>
<p>Ask: "What problem are we solving?" / "Who is affected?" / "What happens today?" / "What should happen instead?" / "What exceptions exist?" / "What decision does this support?" / "What does success look like?" / "What happens if we do nothing?"</p>
<p>Stakeholder interviews surface business goals, success metrics, expectations, risks, and constraints.</p>

<h3>2. Analyze — Turn raw input into structured understanding</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Tool</th><th>Use</th></tr></thead><tbody>
<tr><td>Process map</td><td>Understand workflow</td></tr>
<tr><td>User journey</td><td>Understand experience</td></tr>
<tr><td>Context diagram</td><td>Understand system boundaries</td></tr>
<tr><td>Data flow</td><td>Understand information movement</td></tr>
<tr><td>Decision table</td><td>Understand rules</td></tr>
<tr><td>Impact map</td><td>Link goals to actors and deliverables</td></tr>
<tr><td>Opportunity solution tree</td><td>Separate outcome, opportunity, solution, experiment</td></tr>
<tr><td>RACI</td><td>Clarify roles and decisions</td></tr>
<tr><td>Risk matrix</td><td>Prioritize uncertainty</td></tr>
<tr><td>Story map</td><td>Organize user activity and release slices</td></tr>
</tbody></table></div>
<p>Opportunity solution trees are especially useful when stakeholders jump straight to features; they shift the conversation back to outcomes, opportunities, and options.</p>

<h3>3. Validate — Confirm shared understanding</h3>
<p>Say: "Let me play this back." / "Here is my understanding." / "Where am I wrong?" / "What did I miss?" / "Which part is most important?" / "Which part is non-negotiable?"</p>
<p>Validation should happen <strong>before build, during build, and before release</strong>.</p>

<h3>4. Decide — Convert ambiguity into explicit choices</h3>
<p>Decision note template:</p>
<pre>Decision needed:
Options:
Recommendation:
Trade-offs:
Decision owner:
Decision deadline:
Impact if delayed:</pre>

<h3>5. Communicate — Send the right message to the right audience</h3>
<p>Communication is not "send an update." It is <strong>move people toward shared understanding and action</strong>.</p>

<h3>6. Confirm — Close the loop</h3>
<p>Say: "Can you confirm this reflects your decision?" / "Are we aligned that this is out of scope for this release?" / "Can I record this as the agreed rule?" / "Is this acceptable for UAT?"</p>`
  },
  {
    id: 'agile-scrum',
    num: '05',
    title: '5A. Environment: Agile Scrum Team',
    tag: 'ENVIRONMENTS',
    insight: 'What developers need from BA/PO: Intent, acceptance criteria, business rules, edge cases, dependencies, non-functional needs, examples.',
    content: `<h3>Communication goal</h3>
<p>Keep the team aligned on product goal, priority, story intent, acceptance criteria, and trade-offs.</p>
<h3>Common ceremonies</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Ceremony</th><th>BA/PO Communication Role</th></tr></thead><tbody>
<tr><td>Sprint planning</td><td>Explain priority, goal, scope, acceptance intent</td></tr>
<tr><td>Backlog refinement</td><td>Clarify stories, split work, surface dependencies</td></tr>
<tr><td>Daily scrum</td><td>Usually listen for blockers and scope questions, avoid hijacking</td></tr>
<tr><td>Sprint review</td><td>Tell the value story, gather feedback</td></tr>
<tr><td>Retrospective</td><td>Improve communication and team process</td></tr>
<tr><td>Stakeholder demo</td><td>Translate increment into business/customer value</td></tr>
</tbody></table></div>
<h3>What to say in sprint planning</h3>
<blockquote>"The sprint goal is to reduce onboarding drop-off by improving identity verification. The highest-value stories are the document upload flow and error handling. The main risk is that compliance has not yet confirmed the acceptable fallback process."</blockquote>
<h3>What developers need from BA/PO</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Need</th><th>Example</th></tr></thead><tbody>
<tr><td>Intent</td><td>Why this story matters</td></tr>
<tr><td>Acceptance criteria</td><td>What must be true</td></tr>
<tr><td>Business rules</td><td>What decisions the system should make</td></tr>
<tr><td>Edge cases</td><td>What happens when things go wrong</td></tr>
<tr><td>Dependencies</td><td>APIs, teams, data, legal, design</td></tr>
<tr><td>Non-functional needs</td><td>Performance, security, accessibility, auditability</td></tr>
<tr><td>Examples</td><td>Sample data, flows, screenshots, scenarios</td></tr>
</tbody></table></div>
<h3>Anti-patterns</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Anti-pattern</th><th>Better Alternative</th></tr></thead><tbody>
<tr><td>"Just build what the stakeholder asked for."</td><td>Clarify problem and outcome</td></tr>
<tr><td>"Everything is priority one."</td><td>Force trade-off conversation</td></tr>
<tr><td>"We'll figure it out during development."</td><td>Name unknowns before commitment</td></tr>
<tr><td>"Acceptance criteria are obvious."</td><td>Write testable criteria</td></tr>
<tr><td>"I'll ask the business later."</td><td>Bring SMEs into refinement earlier</td></tr>
</tbody></table></div>`
  },
  {
    id: 'waterfall',
    num: '06',
    title: '5B–C. Waterfall & Hybrid Agile',
    tag: 'ENVIRONMENTS',
    insight: 'Treating waterfall like agile without governance leads to chaos. Translate agile progress into governance language.',
    content: `<h3>B. Waterfall / Traditional Project</h3>
<p><strong>Communication goal:</strong> Create upfront clarity, formal sign-off, traceability, and change control.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Artifact</th><th>Communication Purpose</th></tr></thead><tbody>
<tr><td>Business requirements document</td><td>Business needs and high-level requirements</td></tr>
<tr><td>Functional specification</td><td>Detailed system behavior</td></tr>
<tr><td>Requirements traceability matrix</td><td>Link requirements to design, build, test</td></tr>
<tr><td>Change request</td><td>Formalize scope/time/cost impact</td></tr>
<tr><td>Sign-off pack</td><td>Confirm agreement and accountability</td></tr>
<tr><td>UAT plan</td><td>Define business validation approach</td></tr>
</tbody></table></div>
<blockquote>"This requirement has been approved in the baseline scope. The new request is valid, but it changes effort and timeline. I'll document it as a change request with options: defer, swap scope, increase budget, or extend schedule."</blockquote>

<h3>C. Hybrid Agile</h3>
<p>This is common in large organizations: agile delivery inside a waterfall governance wrapper.</p>
<p><strong>Communication goal:</strong> Translate agile progress into governance language.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Agile Language</th><th>Governance Translation</th></tr></thead><tbody>
<tr><td>Sprint goal</td><td>Incremental milestone</td></tr>
<tr><td>Backlog</td><td>Managed scope inventory</td></tr>
<tr><td>Velocity</td><td>Delivery trend, not guarantee</td></tr>
<tr><td>Increment</td><td>Completed capability</td></tr>
<tr><td>Refinement</td><td>Requirements elaboration</td></tr>
<tr><td>Sprint review</td><td>Progress demonstration and feedback</td></tr>
<tr><td>Release plan</td><td>Forecast with assumptions</td></tr>
<tr><td>Definition of Done</td><td>Quality control criteria</td></tr>
</tbody></table></div>
<blockquote>"The team is working iteratively, so the details are being refined progressively. However, the business outcome, controls, budget boundary, and release objective remain governed. We will report changes in scope, risk, or timeline through the agreed governance path."</blockquote>`
  },
  {
    id: 'startup-enterprise',
    num: '07',
    title: '5D–E. Startup & Enterprise',
    tag: 'ENVIRONMENTS',
    insight: 'In startups: move fast without creating chaos. In enterprises: align across many layers, politics, governance, dependencies, and risk.',
    content: `<h3>D. Startup / Scale-up</h3>
<p><strong>Communication goal:</strong> Move fast without creating chaos.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Priority</th><th>Communication Need</th></tr></thead><tbody>
<tr><td>Speed</td><td>Short feedback loops</td></tr>
<tr><td>Learning</td><td>Hypotheses and experiments</td></tr>
<tr><td>Focus</td><td>Ruthless prioritization</td></tr>
<tr><td>Alignment</td><td>Clear founder/product/engineering decisions</td></tr>
<tr><td>Customer signal</td><td>Direct user feedback</td></tr>
<tr><td>Trade-offs</td><td>MVP vs scalable solution</td></tr>
</tbody></table></div>
<blockquote>"We have three options: build the quick manual workaround, build the scalable version, or validate demand first. Given our uncertainty, I recommend a lightweight experiment before committing engineering capacity."</blockquote>
<p><strong>Startup Anti-patterns:</strong> Founder says everything verbally (lost decisions) / No acceptance criteria (rework) / No prioritization (team whiplash) / Shipping without learning (feature factory) / "MVP" used as excuse for poor quality (trust erosion).</p>

<h3>E. Enterprise / Corporate</h3>
<p><strong>Communication goal:</strong> Align across many layers, politics, governance, dependencies, and risk.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Enterprise Reality</th><th>BA/PO Response</th></tr></thead><tbody>
<tr><td>Many stakeholders</td><td>Stakeholder map and engagement plan</td></tr>
<tr><td>Competing priorities</td><td>Transparent prioritization criteria</td></tr>
<tr><td>Slow decisions</td><td>Decision log and escalation path</td></tr>
<tr><td>Legacy systems</td><td>Dependency and impact mapping</td></tr>
<tr><td>Compliance</td><td>Early legal/risk involvement</td></tr>
<tr><td>Siloed teams</td><td>Cross-functional workshops</td></tr>
<tr><td>Political tension</td><td>Neutral facilitation</td></tr>
<tr><td>Hidden blockers</td><td>Regular risk review</td></tr>
</tbody></table></div>
<blockquote>"This decision affects operations, finance reporting, customer support, and compliance. I recommend we treat it as a cross-functional decision, not a product-only decision."</blockquote>`
  },
  {
    id: 'consulting-govt',
    num: '08',
    title: '5F–H. Consulting, Government & Remote',
    tag: 'ENVIRONMENTS',
    insight: 'In consulting: confirm decisions in writing to prevent "he said, she said." In government: distinguish policy requirement, operational preference, and technical constraint.',
    content: `<h3>F. Consulting / Agency / Vendor</h3>
<p><strong>Communication goal:</strong> Manage client expectations, scope, assumptions, contractual boundaries, and delivery confidence.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Habit</th><th>Why It Matters</th></tr></thead><tbody>
<tr><td>Confirm decisions in writing</td><td>Prevents "he said, she said"</td></tr>
<tr><td>Separate recommendation from decision</td><td>Protects accountability</td></tr>
<tr><td>Track assumptions</td><td>Avoids hidden contract risk</td></tr>
<tr><td>Use sign-off checkpoints</td><td>Reduces late-stage surprises</td></tr>
<tr><td>Explain trade-offs</td><td>Builds trust</td></tr>
<tr><td>Avoid overpromising</td><td>Protects credibility</td></tr>
</tbody></table></div>
<blockquote>"We can support that change. It was not part of the original scope, so we have three options: replace a lower-priority item, extend the timeline, or handle it as a separate change request."</blockquote>

<h3>G. Government / Public Sector</h3>
<p><strong>Communication goal:</strong> Balance user needs, policy, accessibility, transparency, compliance, security, procurement, and public accountability.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Concern</th><th>Communication Response</th></tr></thead><tbody>
<tr><td>Policy intent</td><td>Clarify legal/policy requirements</td></tr>
<tr><td>Public users</td><td>Use plain language and accessibility standards</td></tr>
<tr><td>Procurement</td><td>Document decisions and approvals</td></tr>
<tr><td>Security/privacy</td><td>Engage early</td></tr>
<tr><td>Service continuity</td><td>Plan migration and support</td></tr>
<tr><td>Audit</td><td>Maintain traceability</td></tr>
<tr><td>Political sensitivity</td><td>Be factual and neutral</td></tr>
</tbody></table></div>
<blockquote>"We need to distinguish policy requirement, operational preference, and technical constraint. Each has a different decision owner."</blockquote>

<h3>H. Remote / Distributed Teams</h3>
<p><strong>Communication goal:</strong> Make work visible and reduce dependency on memory, proximity, or hallway conversations.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Rule</th><th>Practice</th></tr></thead><tbody>
<tr><td>Default to written clarity</td><td>Decisions, requirements, risks documented</td></tr>
<tr><td>Use async for status</td><td>Updates, notes, recordings</td></tr>
<tr><td>Use live meetings for ambiguity</td><td>Conflict, discovery, decisions</td></tr>
<tr><td>Record decisions</td><td>Decision log</td></tr>
<tr><td>Over-communicate context</td><td>Link why, not just what</td></tr>
<tr><td>Respect time zones</td><td>Clear deadlines and ownership</td></tr>
</tbody></table></div>
<p><strong>Async update template:</strong></p>
<pre>Goal:
Progress:
Decision needed:
Risks/blockers:
Next step:
Owner/date:</pre>`
  },
  {
    id: 'stakeholder-archetypes',
    num: '09',
    title: '6. Stakeholder Archetypes (Part 1)',
    tag: 'STAKEHOLDERS',
    insight: 'The loudest stakeholder is not always the most important stakeholder. Map influence, impact, expertise, and decision authority.',
    content: `<h3>1. The Executive Sponsor</h3>
<p><strong>What they care about:</strong> Value, risk, timeline, budget, strategic alignment.</p>
<blockquote>"We have a decision point. Option A protects timeline but reduces scope. Option B protects scope but adds four weeks. My recommendation is Option A because it preserves the regulatory deadline."</blockquote>
<p>Do not drown executives in requirements detail unless they ask.</p>

<h3>2. The Busy Business SME</h3>
<p><strong>What they care about:</strong> Accuracy, operational reality, being heard, not wasting time.</p>
<blockquote>"I need 30 minutes to validate the exception scenarios. I'll bring the process map and only focus on the three unclear decision points."</blockquote>
<p>Avoid: "Can you walk me through everything from scratch?" unless discovery truly requires it.</p>

<h3>3. The Dominant Stakeholder</h3>
<p><strong>What they care about:</strong> Control, speed, influence, being right.</p>
<p><strong>Risk:</strong> They may overpower quieter stakeholders.</p>
<blockquote>"That's helpful. I want to capture your view clearly. I also need to hear from operations and support because they will carry the downstream impact."</blockquote>
<p>Use data and decision criteria.</p>

<h3>4. The Silent Stakeholder</h3>
<p><strong>What they care about:</strong> Safety, clarity, not being embarrassed, sometimes avoiding accountability.</p>
<blockquote>"You're closest to the process. What risk do you see that we may be missing?"</blockquote>
<p>Or follow up one-on-one.</p>

<h3>5. The Skeptic</h3>
<p><strong>What they care about:</strong> Proof, risk, credibility, past failures.</p>
<blockquote>"Your concern is valid. Here is what failed last time, here is what is different this time, and here is how we'll test the riskiest assumption early."</blockquote>
<p>Do not hype. Show evidence.</p>

<h3>6. The Solutionizer</h3>
<p><strong>What they do:</strong> Jumps immediately to features.</p>
<blockquote>"That could work. What user problem would that solve? What outcome would improve if we built it?"</blockquote>
<p>Respect their idea, then reverse-engineer the need.</p>

<h3>7. The Everything-Is-Urgent Stakeholder</h3>
<p><strong>What they do:</strong> Treats every request as critical.</p>
<blockquote>"To prioritize fairly, let's score each item by customer impact, revenue/risk impact, regulatory urgency, effort, and dependency."</blockquote>`
  },
  {
    id: 'stakeholder-archetypes-2',
    num: '10',
    title: '6. Stakeholder Archetypes (Part 2)',
    tag: 'STAKEHOLDERS',
    insight: 'A BA/PO without backbone becomes a note-taker. You need diplomacy and courage.',
    content: `<h3>8. The Technical Architect</h3>
<p><strong>What they care about:</strong> Scalability, maintainability, integration, security, technical debt.</p>
<blockquote>"The business needs this capability by Q3. What solution options meet the deadline while avoiding unacceptable technical debt?"</blockquote>
<p>Avoid treating architecture as obstruction. Often they are protecting the organization from expensive mistakes.</p>

<h3>9. The Developer</h3>
<p><strong>What they care about:</strong> Clear stories, testable criteria, minimal ambiguity, realistic commitments.</p>
<blockquote>"The intent is X. These are the must-have rules. These two scenarios are out of scope. If the API returns null, show this message."</blockquote>

<h3>10. The Designer / UX Researcher</h3>
<p><strong>What they care about:</strong> User behavior, usability, accessibility, journey, evidence.</p>
<blockquote>"Users are abandoning the flow at identity verification. The business wants reduced drop-off, but compliance requires additional checks. We need a design that balances completion and trust."</blockquote>

<h3>11. QA / Tester</h3>
<p><strong>What they care about:</strong> Expected behavior, test data, edge cases, acceptance criteria.</p>
<blockquote>"Can you review these acceptance criteria before refinement? I want to make sure the failure scenarios are testable."</blockquote>
<p>Involve them early.</p>

<h3>12. Operations / Support</h3>
<p><strong>What they care about:</strong> Volume, exceptions, handoffs, training, customer complaints, SLAs.</p>
<blockquote>"What happens when the standard process fails? Who gets contacted? What information is missing? What creates the most manual work?"</blockquote>

<h3>13. Legal / Compliance / Risk</h3>
<p><strong>What they care about:</strong> Regulatory exposure, audit trail, data protection, controls.</p>
<blockquote>"We need your guidance on whether this data can be stored, who can access it, how long it can be retained, and what audit evidence is required."</blockquote>

<h3>14. Sales / Customer Success</h3>
<p><strong>What they care about:</strong> Customer promises, marketability, renewals, escalations.</p>
<blockquote>"This release supports single-region customers only. Multi-region support is not included yet, so please avoid committing that to clients."</blockquote>

<h3>15. The Political Operator</h3>
<p><strong>What they do:</strong> Influences behind the scenes, protects territory, reframes decisions.</p>
<blockquote>"To avoid confusion, I'll summarize the decision, rationale, and open concerns in writing for all impacted parties."</blockquote>
<p>Stay factual, documented, neutral. Do not gossip. Do not take bait. Document.</p>`
  },
  {
    id: 'use-cases-1',
    num: '11',
    title: '7. Communication Use Cases (Part 1)',
    tag: 'USE CASES',
    insight: 'This avoids becoming an order-taker. The BA/PO is loyal to the problem, not one person\'s preference.',
    content: `<h3>Use Case 1: Requirements elicitation</h3>
<p><strong>Objective:</strong> Discover true needs, rules, constraints, and success criteria.</p>
<p><strong>Best questions:</strong> "What problem triggered this request?" / "Who experiences this problem?" / "How often does it happen?" / "What is the cost of the current process?" / "What workarounds exist today?" / "What must not change?" / "What are the exceptions?" / "Who approves this?" / "What data is needed?" / "What does success look like?"</p>
<pre>Output:
Problem:
Users affected:
Current process:
Pain points:
Desired outcome:
Business rules:
Constraints:
Open questions:
Next decisions:</pre>

<h3>Use Case 2: Backlog refinement</h3>
<p><strong>Objective:</strong> Make work ready for delivery.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Question</th><th>Yes/No</th></tr></thead><tbody>
<tr><td>Is the user/persona clear?</td><td></td></tr>
<tr><td>Is the problem clear?</td><td></td></tr>
<tr><td>Is the value clear?</td><td></td></tr>
<tr><td>Are acceptance criteria testable?</td><td></td></tr>
<tr><td>Are dependencies known?</td><td></td></tr>
<tr><td>Are designs ready if needed?</td><td></td></tr>
<tr><td>Are APIs/data needs understood?</td><td></td></tr>
<tr><td>Are edge cases known?</td><td></td></tr>
<tr><td>Is the story small enough?</td><td></td></tr>
<tr><td>Is out-of-scope clear?</td><td></td></tr>
</tbody></table></div>
<blockquote>"Before we estimate, let's confirm the intent, acceptance criteria, dependencies, and what is explicitly out of scope."</blockquote>

<h3>Use Case 3: Prioritization conflict</h3>
<p><strong>Objective:</strong> Move from opinions to criteria.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Criterion</th><th>Question</th></tr></thead><tbody>
<tr><td>Customer impact</td><td>How many users/customers are affected?</td></tr>
<tr><td>Business value</td><td>Revenue, cost, risk, retention?</td></tr>
<tr><td>Urgency</td><td>Is there a deadline or regulatory driver?</td></tr>
<tr><td>Effort</td><td>How large is the work?</td></tr>
<tr><td>Dependency</td><td>Does this unblock other work?</td></tr>
<tr><td>Risk reduction</td><td>Does this reduce uncertainty?</td></tr>
<tr><td>Strategic alignment</td><td>Does this support the product/business goal?</td></tr>
<tr><td>Cost of delay</td><td>What happens if we wait?</td></tr>
</tbody></table></div>
<blockquote>"Both requests are valid. Since we cannot do both now, let's compare them against agreed criteria rather than personal preference."</blockquote>`
  },
  {
    id: 'use-cases-2',
    num: '12',
    title: '7. Communication Use Cases (Part 2)',
    tag: 'USE CASES',
    insight: 'For scope creep: "Not within the current constraints without a trade-off." For incidents: avoid speculation, communicate calmly and factually.',
    content: `<h3>Use Case 4: Scope creep</h3>
<p><strong>Objective:</strong> Protect delivery without dismissing valid needs.</p>
<blockquote>"That is a legitimate request. It is not currently in the agreed scope. We can handle it in one of four ways: swap it with a lower-priority item, defer it to a future release, extend the timeline, or increase capacity."</blockquote>
<p>Better than "No, we can't." → "Not within the current constraints without a trade-off."</p>

<h3>Use Case 5: Stakeholder disagreement</h3>
<p><strong>Diagnose the disagreement:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Conflict Type</th><th>Example</th></tr></thead><tbody>
<tr><td>Goal conflict</td><td>Sales wants speed, compliance wants control</td></tr>
<tr><td>Priority conflict</td><td>Finance wants reporting, ops wants automation</td></tr>
<tr><td>Definition conflict</td><td>Different meanings of "customer"</td></tr>
<tr><td>Data conflict</td><td>Teams trust different numbers</td></tr>
<tr><td>Risk tolerance conflict</td><td>One team accepts risk, another refuses</td></tr>
<tr><td>Ownership conflict</td><td>No one agrees who decides</td></tr>
<tr><td>Process conflict</td><td>Old workflow vs future workflow</td></tr>
</tbody></table></div>
<blockquote>"I think we may be disagreeing at the goal level, not the feature level. Can we first align on which outcome matters most?"</blockquote>

<h3>Use Case 6: Executive update</h3>
<pre>Status: Green/Amber/Red
Outcome progress:
Key completed work:
Top risk:
Decision needed:
Recommendation:
Next milestone:</pre>
<p><strong>Example:</strong> "Status: Amber. We are on track for core onboarding, but compliance review may delay release. The main decision needed is whether to launch with manual review fallback or wait for automated approval. I recommend manual fallback for Phase 1 to protect the launch date while limiting volume exposure."</p>

<h3>Use Case 7: Developer clarification</h3>
<p>Weak: "Just handle it gracefully." Better: "Show the empty-state message: 'No saved address found.' Provide an 'Add address' button. Do not allow checkout to continue until an address is added. This applies only to physical goods, not digital products."</p>

<h3>Use Case 8: UAT communication</h3>
<blockquote>"UAT is not general exploration. The goal is to confirm that the solution supports agreed business scenarios. Please test the happy path, key exceptions, role permissions, reporting outputs, and any high-risk process variations."</blockquote>

<h3>Use Case 9: Production incident</h3>
<pre>Issue:
Impact:
Affected users/systems:
Current status:
Workaround:
Next update time:
Owner:
What we need from stakeholders:</pre>
<p>Avoid speculation. "We have confirmed the issue affects invoice exports for APAC users. Root cause is still under investigation. The workaround is manual export from the admin console."</p>

<h3>Use Case 10: Release communication</h3>
<pre>What changed:
Why it changed:
Who is affected:
Benefits:
Known limitations:
Action required:
Support/contact:
Training material:
Rollout date:</pre>`
  },
  {
    id: 'meeting-playbook',
    num: '13',
    title: '8. Meeting Playbook',
    tag: 'MEETINGS',
    insight: 'Never hold a meeting without one of these 8 purposes. If none applies, use async communication.',
    content: `<h3>The BA/PO meeting rule</h3>
<p>Never hold a meeting without one of these purposes:</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Discover</li><li>Decide</li><li>Validate</li><li>Align</li><li>Resolve conflict</li><li>Plan</li><li>Review</li><li>Learn</li>
</ol>
<p>If none applies, use async communication.</p>

<h3>Discovery workshop</h3>
<p><strong>Use when:</strong> Problem is unclear, stakeholders disagree, or current process is messy.</p>
<p><strong>Agenda:</strong> Objective / Current state / Pain points / Users affected / Root causes / Desired outcomes / Constraints / Risks / Open questions / Next steps</p>
<blockquote>"Let's separate what happens today from what we want to happen in the future."</blockquote>

<h3>Requirements workshop</h3>
<p><strong>Use when:</strong> Multiple people need to define rules, processes, exceptions, or workflows.</p>
<p><strong>Agenda:</strong> Scope boundary / Main scenario / Alternative scenarios / Exceptions / Data needs / Roles/permissions / Business rules / Reporting needs / Acceptance criteria / Sign-off path</p>

<h3>Prioritization workshop</h3>
<p><strong>Use when:</strong> Too many requests, limited capacity, competing stakeholders.</p>
<p><strong>Agenda:</strong> Confirm product/business goal / List candidate items / Confirm scoring criteria / Score individually / Discuss major gaps / Decide top priorities / Document trade-offs / Confirm owner/date</p>

<h3>Decision meeting</h3>
<p><strong>Use when:</strong> A specific decision is blocking progress.</p>
<p><strong>Agenda:</strong> Decision needed / Context / Options / Pros/cons / Recommendation / Decision owner / Final decision / Next action</p>
<p><strong>Rule:</strong> Do not let decision meetings become brainstorming meetings.</p>

<h3>Sprint review / demo</h3>
<p><strong>Bad demo:</strong> "Here are the screens we built."</p>
<blockquote>"The goal was to reduce manual onboarding work. We completed the document upload and validation flow. I'll show the user journey, then we'll confirm whether the business rules match the expected process."</blockquote>`
  },
  {
    id: 'templates',
    num: '14',
    title: '9. Written Communication Templates',
    tag: 'TEMPLATES',
    insight: 'If it affects scope, priority, timeline, cost, compliance, or customer commitment, document it somewhere durable.',
    content: `<h3>A. Stakeholder interview template</h3>
<pre>Stakeholder:
Role:
Area represented:
Goals:
Pain points:
Current process:
Desired outcome:
Concerns/risks:
Decision rights:
Dependencies:
Success metrics:
Follow-up needed:</pre>

<h3>B. Requirement template</h3>
<pre>Requirement ID:
Requirement statement:
Business rationale:
User/stakeholder:
Priority:
Acceptance criteria:
Business rules:
Dependencies:
Assumptions:
Non-functional requirements:
Source:
Status:
Approver:</pre>

<h3>C. User story template</h3>
<pre>As a [user/persona]
I want [capability]
So that [benefit/outcome]

Acceptance criteria:
Business rules:
Out of scope:
Dependencies:
Design link:
Analytics/tracking:
Test data:
Open questions:</pre>

<h3>D. Acceptance criteria format (Given/When/Then)</h3>
<pre>Given a registered user has no saved payment method
When they proceed to checkout
Then the system must prompt them to add a payment method before order confirmation</pre>
<p><strong>Checklist format (simpler):</strong></p>
<ul><li>Must display account balance</li><li>Must show last updated timestamp</li><li>Must support export to CSV</li><li>Must restrict access to finance-admin role</li><li>Must log export activity for audit</li></ul>

<h3>E. Decision log template</h3>
<pre>Date:
Decision:
Context:
Options considered:
Decision owner:
Rationale:
Impacted teams:
Risks/trade-offs:
Follow-up actions:</pre>

<h3>F. RAID log template</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Type</th><th>Description</th><th>Owner</th><th>Impact</th><th>Due Date</th><th>Status</th></tr></thead><tbody>
<tr><td>Risk</td><td>Something may happen</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Assumption</td><td>Something believed true</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Issue</td><td>Something already happening</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Dependency</td><td>Something needed from others</td><td></td><td></td><td></td><td></td></tr>
</tbody></table></div>

<h3>G. Weekly stakeholder update</h3>
<pre>Summary:
Progress this week:
Decisions made:
Upcoming decisions:
Risks/issues:
Dependencies:
Changes to scope/timeline:
Next week's focus:
Help needed:</pre>`
  },
  {
    id: 'channels-language',
    num: '15',
    title: '10–11. Channels & Language Translation',
    tag: 'COMMUNICATION',
    insight: 'A common BA/PO mistake is using the same level of detail with everyone. Translate the same work into each audience\'s language.',
    content: `<h3>10. Communication Channels: When to Use What</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Channel</th><th>Best For</th><th>Avoid Using For</th></tr></thead><tbody>
<tr><td>Chat/Slack/Teams</td><td>Quick clarifications, links, lightweight updates</td><td>Major decisions without documentation</td></tr>
<tr><td>Email</td><td>Formal summaries, approvals, external stakeholders</td><td>Rapid back-and-forth ambiguity</td></tr>
<tr><td>Jira/Azure DevOps</td><td>Stories, acceptance criteria, workflow status</td><td>Deep discussion without summary</td></tr>
<tr><td>Confluence/Notion/Docs</td><td>Requirements, decisions, process docs</td><td>Time-sensitive blockers</td></tr>
<tr><td>Miro/FigJam/Lucid</td><td>Workshops, mapping, discovery</td><td>Final source of truth unless exported/summarized</td></tr>
<tr><td>Video call</td><td>Conflict, ambiguity, complex decisions</td><td>Simple status updates</td></tr>
<tr><td>Dashboard</td><td>Status, metrics, trends</td><td>Nuanced risk explanation</td></tr>
<tr><td>In-person</td><td>High-stakes alignment, workshops, sensitive conflict</td><td>Routine documentation</td></tr>
</tbody></table></div>
<p><strong>Rule:</strong> If it affects scope, priority, timeline, cost, compliance, or customer commitment, document it somewhere durable.</p>

<h3>11. The BA/PO Language Translation Matrix</h3>
<p><strong>Executive language</strong></p>
<p>Instead of: "The API story is blocked."<br>Say: "The release timeline is at risk because the payment integration dependency is not ready. We need either a revised integration date or approval for a manual workaround."</p>
<p><strong>Developer language</strong></p>
<p>Instead of: "The business wants it to be flexible."<br>Say: "Admins need to configure approval thresholds by region. Threshold values must support currency-specific limits and require audit logging."</p>
<p><strong>Business language</strong></p>
<p>Instead of: "We need to update the orchestration layer."<br>Say: "The system needs to route applications to the correct approval team automatically, instead of requiring manual assignment."</p>
<p><strong>Customer/user language</strong></p>
<p>Instead of: "We enhanced account authentication."<br>Say: "You'll now receive a one-time code when signing in from a new device, which helps protect your account."</p>`
  },
  {
    id: 'difficult-scenarios',
    num: '16',
    title: '12. Handling Difficult Scenarios',
    tag: 'SCRIPTS',
    insight: '"Agile" does not remove the need for clarity. It changes when and how clarity is created.',
    content: `<h3>Scenario 1: Stakeholder says, "This is easy."</h3>
<blockquote>"It may be straightforward, but let's confirm the process impact, data dependencies, testing effort, and release risk before we estimate."</blockquote>

<h3>Scenario 2: Developer says, "Requirements are unclear."</h3>
<blockquote>"Fair. Let's identify what is unclear: business rule, user flow, data, error handling, or acceptance criteria. I'll resolve the open points before we commit."</blockquote>

<h3>Scenario 3: Business says, "IT is too slow."</h3>
<blockquote>"I hear the frustration. Let's separate delivery speed from decision delays, dependencies, scope changes, and technical constraints so we can address the real bottleneck."</blockquote>

<h3>Scenario 4: Leadership says, "Can we deliver everything by the deadline?"</h3>
<blockquote>"Not with current capacity and quality expectations. We can protect the deadline by reducing scope, increasing capacity, lowering quality/risk controls, or phasing delivery. I recommend phasing."</blockquote>

<h3>Scenario 5: Stakeholder bypasses the PO/BA</h3>
<blockquote>"I'm glad the conversation is happening. To protect priority and avoid conflicting instructions, please route new scope or priority changes through the backlog process. Developers can clarify, but priority decisions need to stay visible."</blockquote>

<h3>Scenario 6: Conflicting requirements</h3>
<blockquote>"We have two valid but conflicting needs. Sales needs flexibility; compliance needs control. Let's define the decision criteria and identify which risks are acceptable."</blockquote>

<h3>Scenario 7: No one wants to make the decision</h3>
<blockquote>"The team is blocked until this decision is made. Based on the governance model, the decision owner appears to be [role]. I'll document the options and recommendation for confirmation by [date]."</blockquote>

<h3>Scenario 8: Stakeholder keeps changing their mind</h3>
<blockquote>"The change may be justified, but we need to understand what new information caused the change. If the goal changed, we should revisit priority. If only preference changed, we need to protect delivery stability."</blockquote>`
  },
  {
    id: 'delivery-phases',
    num: '17',
    title: '13–14. Delivery Phases & Artifacts',
    tag: 'PHASES',
    insight: 'Release communication is about business readiness, not just technical deployment.',
    content: `<h3>13. Communication by Delivery Phase</h3>
<p><strong>Discovery:</strong> Problem, users, value, constraints, risks. "What is the real problem?" / "Who has this problem?" / "Why now?" / "What evidence do we have?" / "What assumptions are riskiest?"</p>
<p><strong>Definition / Planning:</strong> Scope, success metrics, feasibility, dependencies, decision rights. Outputs: Product goal, high-level scope, roadmap, story map, stakeholder map, delivery approach.</p>
<p><strong>Design:</strong> User journey, interactions, accessibility, business rules, content, error states. BA/PO role: Ensure design choices still satisfy business, user, compliance, and technical constraints.</p>
<p><strong>Build:</strong> Clarifications, trade-offs, blockers, acceptance criteria, scope control. BA/PO role: Stay available. Do not disappear after writing stories.</p>
<p><strong>Test / UAT:</strong> Expected behavior, defect classification, acceptance, operational readiness. Distinguish defect vs change request vs training issue.</p>
<p><strong>Release:</strong> What changed, who is affected, risks, support, rollback, adoption. BA/PO role: Ensure business readiness, not just technical deployment.</p>
<p><strong>Post-release:</strong> Did it work? What did we learn? What needs improvement? Compare outcomes against success metrics.</p>

<h3>14. Artifacts by Environment</h3>
<p><strong>Agile product team:</strong> Product goal / Roadmap / Backlog / User stories / Acceptance criteria / Story map / Definition of Ready / Definition of Done / Release notes</p>
<p><strong>Enterprise project:</strong> Business case / BRD / FRD/FSD / RTM / RAID log / Change request / Steering update / UAT sign-off</p>
<p><strong>Product discovery:</strong> Opportunity solution tree / Customer interview notes / Assumption map / Experiment plan / Persona/JTBD / Journey map / Metrics tree</p>`
  },
  {
    id: 'decision-rights',
    num: '18',
    title: '15–16. Decision Rights & Neutrality',
    tag: 'GOVERNANCE',
    insight: 'Neutral means: "I am loyal to the problem, the evidence, the agreed goal, and the value—not to one person\'s preference."',
    content: `<h3>15. Decision Rights: The Hidden Communication Problem</h3>
<p>Many BA/PO conflicts are not communication problems. They are <strong>authority problems</strong>.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Decision</th><th>Owner</th><th>Consulted</th><th>Informed</th></tr></thead><tbody>
<tr><td>Product priority</td><td>PO/Product Manager</td><td>Business, tech, UX</td><td>Delivery team</td></tr>
<tr><td>Business rule</td><td>Business owner/SME</td><td>BA, compliance, PO</td><td>Dev/QA</td></tr>
<tr><td>Technical design</td><td>Architect/engineering</td><td>PO, BA, security</td><td>Stakeholders</td></tr>
<tr><td>UX design</td><td>Design lead</td><td>PO, BA, users</td><td>Dev/QA</td></tr>
<tr><td>Compliance control</td><td>Legal/compliance</td><td>BA, PO, tech</td><td>Stakeholders</td></tr>
<tr><td>Release readiness</td><td>PO/business/tech jointly</td><td>QA, support, ops</td><td>Leadership</td></tr>
<tr><td>Scope change</td><td>Sponsor/PO/governance</td><td>BA, PM, tech</td><td>Team</td></tr>
</tbody></table></div>
<p>Use RACI only if people will actually honor it. Otherwise it becomes decorative bureaucracy.</p>

<h3>16. The BA/PO Neutrality Stance</h3>
<p>Neutral does not mean passive.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Does</th><th>Does Not</th></tr></thead><tbody>
<tr><td>Facilitates evidence-based decisions</td><td>Take political sides</td></tr>
<tr><td>Makes assumptions visible</td><td>Hide conflict</td></tr>
<tr><td>Challenges unclear requests</td><td>Dismiss stakeholder needs</td></tr>
<tr><td>Protects value</td><td>Protect pet features</td></tr>
<tr><td>Documents decisions</td><td>Weaponize documentation</td></tr>
<tr><td>Explains trade-offs</td><td>Pretend everything is possible</td></tr>
<tr><td>Listens deeply</td><td>Become an order-taker</td></tr>
<tr><td>Escalates appropriately</td><td>Escalate emotionally</td></tr>
</tbody></table></div>
<blockquote>"I am loyal to the problem, the evidence, the agreed goal, and the value—not to one person's preference."</blockquote>`
  },
  {
    id: 'brutal-realities',
    num: '19',
    title: '17–18. Brutal Realities & Skill Stack',
    tag: 'MINDSET',
    insight: 'Reality #8: A BA/PO without backbone becomes a note-taker. You need diplomacy and courage.',
    content: `<h3>17. High-Stakes Communication: Brutal Realities</h3>
<p><strong>Reality 1:</strong> People say "requirements" when they mean "preferences." Your job is to find the difference.</p>
<p><strong>Reality 2:</strong> Stakeholders often do not know what they want until they see what they do not want. Use prototypes, examples, demos, and iterative validation.</p>
<p><strong>Reality 3:</strong> The loudest stakeholder is not always the most important stakeholder. Map influence, impact, expertise, and decision authority.</p>
<p><strong>Reality 4:</strong> Documentation does not create alignment by itself. People can sign documents they did not understand. Validation conversations matter.</p>
<p><strong>Reality 5:</strong> "Agile" does not remove the need for clarity. It changes when and how clarity is created.</p>
<p><strong>Reality 6:</strong> If everything is priority one, leadership has not made real decisions. Force explicit trade-offs.</p>
<p><strong>Reality 7:</strong> Many conflicts are caused by different definitions. Define terms. Especially: customer, user, done, MVP, launch, approved, automated, real-time, exception, active, completed.</p>
<p><strong>Reality 8:</strong> A BA/PO without backbone becomes a note-taker. You need diplomacy and courage.</p>

<h3>18. The BA/PO Communication Skill Stack</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Skill</th><th>Description</th></tr></thead><tbody>
<tr><td>Active listening</td><td>Hear content, emotion, assumptions, and omissions</td></tr>
<tr><td>Questioning</td><td>Move from request to problem</td></tr>
<tr><td>Synthesis</td><td>Turn messy input into structured clarity</td></tr>
<tr><td>Facilitation</td><td>Help groups think and decide</td></tr>
<tr><td>Writing</td><td>Make requirements understandable and testable</td></tr>
<tr><td>Prioritization</td><td>Help people make trade-offs</td></tr>
<tr><td>Negotiation</td><td>Balance competing needs</td></tr>
<tr><td>Conflict navigation</td><td>Surface and resolve disagreement</td></tr>
<tr><td>Systems thinking</td><td>Understand upstream/downstream impact</td></tr>
<tr><td>Product thinking</td><td>Connect work to outcomes</td></tr>
<tr><td>Technical literacy</td><td>Communicate credibly with engineering</td></tr>
<tr><td>Business literacy</td><td>Understand money, risk, operations, strategy</td></tr>
</tbody></table></div>`
  },
  {
    id: 'ladder-scripts',
    num: '20',
    title: '19–20. Communication Ladder & Scripts',
    tag: 'MASTERY',
    insight: 'Aim for Level 4–5. Level 5 is the Value Strategist: "Here is the outcome, evidence, trade-off, recommendation, and decision path."',
    content: `<h3>19. The Communication Ladder</h3>
<p><strong>Level 1: Messenger</strong> — "The business said to build this." Risk: order-taking.</p>
<p><strong>Level 2: Clarifier</strong> — "Here are the requirements." Better, but still limited.</p>
<p><strong>Level 3: Translator</strong> — "Here is what the business needs, translated into buildable work." Good.</p>
<p><strong>Level 4: Facilitator</strong> — "Here is where stakeholders disagree, and here is how we can decide." Strong.</p>
<p><strong>Level 5: Value Strategist</strong> — "Here is the outcome, evidence, trade-off, recommendation, and decision path." Excellent.</p>
<p><strong>Aim for Level 4–5.</strong></p>

<h3>20. Practical Scripts Library</h3>
<p><strong>To clarify vague requests:</strong></p>
<ul>
<li>"Can you give me an example of what you mean?"</li>
<li>"What should the user be able to do after this change?"</li>
<li>"What decision or task does this support?"</li>
</ul>
<p><strong>To challenge respectfully:</strong></p>
<ul>
<li>"I want to test that assumption before we commit."</li>
<li>"What evidence do we have that this is the highest-value problem?"</li>
<li>"What would happen if we did not build this?"</li>
</ul>
<p><strong>To say no:</strong> "I do not recommend adding this to the current release because it would put the committed goal at risk. I suggest we capture it, size it, and compare it against the next set of priorities."</p>
<p><strong>To handle pressure:</strong> "I understand the urgency. I do not want to give a false commitment before we assess impact."</p>
<p><strong>To escalate:</strong> "The team cannot resolve this at working level because it involves priority trade-offs between departments. We need a decision from [role] by [date] to avoid timeline impact."</p>
<p><strong>To close a meeting:</strong> "Before we end, I want to confirm decisions, owners, and open questions."</p>
<p><strong>To document disagreement:</strong> "There is not yet alignment on [topic]. [Team A] prefers [option] because [reason]. [Team B] prefers [option] because [reason]. The decision needed is [decision]."</p>
<p><strong>To protect developers:</strong> "New requests are welcome, but they need to be prioritized through the backlog so the team is not receiving conflicting direction."</p>
<p><strong>To protect business users:</strong> "The system behavior may be technically correct, but we need to validate whether it works in the real business process."</p>`
  }
];

// ================================================================
// EXCELLENCE — BA/PO EXCELLENCE GUIDE
// ================================================================
const EXCELLENCE_INTRO = `You're simultaneously:
• Diplomat: Balancing competing stakeholder interests
• Detective: Uncovering the real problem beneath stated requests
• Architect: Designing solutions that scale and integrate
• Communicator: Making complex ideas clear to diverse audiences
• Guardian: Protecting the product vision while being pragmatically flexible

Precision here means everyone builds the right thing. Inaccuracy costs months of wasted development and damaged credibility.`;

const EXCELLENCE_SECTIONS = [
  {
    id: 'core-challenge',
    num: '01',
    title: 'The Core Challenge',
    tag: 'MINDSET',
    insight: 'Precision means everyone builds the right thing. Inaccuracy costs months of wasted development and damaged credibility.',
    content: `<h3>You're simultaneously:</h3>
<ul>
<li><strong>Diplomat:</strong> Balancing competing stakeholder interests</li>
<li><strong>Detective:</strong> Uncovering the real problem beneath stated requests</li>
<li><strong>Architect:</strong> Designing solutions that scale and integrate</li>
<li><strong>Communicator:</strong> Making complex ideas clear to diverse audiences</li>
<li><strong>Guardian:</strong> Protecting the product vision while being pragmatically flexible</li>
</ul>
<p>Precision here means everyone builds the right thing. Inaccuracy costs months of wasted development and damaged credibility.</p>`
  },
  {
    id: 'requirements',
    num: '02',
    title: 'Part 1: Requirements Gathering & Analysis',
    tag: 'REQUIREMENTS',
    insight: 'The Five Levels of Why reveal what they actually need — not what they asked for.',
    content: `<h3>The Five Levels of "Why"</h3>
<p>When a stakeholder says "We need a dashboard," you're not done:</p>
<p><strong>Level 1:</strong> "Why do you need a dashboard?" → "To see our sales data"</p>
<p><strong>Level 2:</strong> "Why do you need to see sales data?" → "To track performance"</p>
<p><strong>Level 3:</strong> "Why do you need to track performance?" → "To identify underperforming regions"</p>
<p><strong>Level 4:</strong> "Why do you need to identify underperforming regions?" → "To intervene before quarterly targets are missed"</p>
<p><strong>Level 5:</strong> "Why do quarterly targets matter?" → "Investor commitments and budget planning depend on them"</p>
<p><strong>Now you know:</strong> They don't need a dashboard—they need an <strong>early warning system with intervention triggers</strong>. Completely different solution.</p>

<h3>Techniques for Precision Requirements</h3>
<p><strong>The "Perfect World" Question:</strong> "If you had a magic wand and could have anything, what would success look like?" Then work backward to constraints.</p>
<p><strong>The Negative Case:</strong> "What would a terrible solution look like?" Helps identify deal-breakers and hidden requirements.</p>
<p><strong>The Boundary Test:</strong> "What's in scope? What's explicitly out?" / "At what point does this feature end and something else begin?" / "What edge cases exist?"</p>
<p><strong>The Quantification Challenge:</strong> For every qualitative statement, find the quantitative measure:</p>
<ul>
<li>"Fast" = Response time under 2 seconds for 95% of requests</li>
<li>"User-friendly" = New user completes core task in under 5 clicks without help</li>
<li>"Scalable" = Handles 10x current load with &lt;20% performance degradation</li>
</ul>

<h3>Documentation Standards — User Stories That Actually Work</h3>
<p>❌ <strong>BAD:</strong> "As a user, I want to search products so I can find what I need"</p>
<p>✅ <strong>GOOD:</strong></p>
<pre>As a returning customer
I want to search products by multiple attributes (name, category, price range, brand)
So that I can quickly find items matching my specific criteria without browsing entire catalog

Acceptance Criteria:
- Search returns results in &lt;2 seconds for queries with &lt;100 results
- Search supports Boolean operators (AND, OR, NOT)
- Results display with image thumbnail, price, availability status
- No results state displays helpful alternatives or spell-check suggestions
- Search history persists for logged-in users (last 10 searches)

Out of Scope:
- Natural language processing
- Voice search
- Image-based search

Dependencies:
- Product database must be indexed (Ticket #1234)
- Analytics tracking requires marketing pixel implementation

Test Scenarios:
1. Search "red shoes size 10" returns filtered results
2. Search "invalidxyz" shows "no results" message with suggestions
3. Search with 1000 results implements pagination
4. Search as guest vs. logged-in user behaves differently re: history</pre>

<h3>The Requirements Traceability Matrix</h3>
<p>Maintain a living document linking: <strong>Business objective → Requirement → User story → Acceptance criteria → Test case → Deployed feature</strong></p>
<p>This answers "Why are we building this?" at any point and helps identify orphaned requirements.</p>`
  },
  {
    id: 'stakeholder-mgmt',
    num: '03',
    title: 'Part 2: Stakeholder Management',
    tag: 'STAKEHOLDERS',
    insight: 'Make stakeholders assign the scores together in a room. Suddenly priorities become clear.',
    content: `<h3>Mapping Your Stakeholder Ecosystem</h3>
<p>Create a stakeholder matrix:</p>
<p><strong>High Power / High Interest: Manage Closely</strong> — Executive sponsors, key customers. Weekly updates, involve in major decisions.</p>
<p><strong>High Power / Low Interest: Keep Satisfied</strong> — Senior leadership outside your product area. Monthly summaries, alert to risks.</p>
<p><strong>Low Power / High Interest: Keep Informed</strong> — End users, team members. Regular demos, feedback sessions.</p>
<p><strong>Low Power / Low Interest: Monitor</strong> — Peripheral departments. Quarterly updates.</p>

<h3>Precision in Stakeholder Communication — The BLUF Method</h3>
<p>❌ <strong>BAD EMAIL:</strong> "Hi team, following up on our meeting last week where we discussed the customer portal redesign. There were several ideas thrown around..."</p>
<p>✅ <strong>GOOD EMAIL:</strong></p>
<blockquote><strong>DECISION NEEDED:</strong> Approve customer portal Phase 1 scope by Friday 3/15.<br><br><strong>The Ask:</strong> Confirm we're prioritizing navigation redesign over dashboard for Q3 launch.<br><br><strong>Why:</strong> Dashboard requires 8 additional weeks of backend work; navigation can launch in 5 weeks.<br><br><strong>Impact:</strong> Dashboard delay means Q4 delivery. Navigation first gets us to market on time with 70% of user value.<br><br>Details below for context...</blockquote>

<h3>Managing Conflicting Requirements — The Trade-off Matrix</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Feature</th><th>Business Value (1-10)</th><th>Dev Effort (1-10)</th><th>Value/Effort Ratio</th><th>Priority</th></tr></thead><tbody>
<tr><td>Feature A</td><td>9</td><td>3</td><td>3.0</td><td>1</td></tr>
<tr><td>Feature B</td><td>8</td><td>8</td><td>1.0</td><td>3</td></tr>
<tr><td>Feature C</td><td>7</td><td>2</td><td>3.5</td><td>2</td></tr>
</tbody></table></div>
<p>Make stakeholders assign the scores together in a room. Suddenly priorities become clear.</p>

<h3>The "Pick Two" Triangle</h3>
<p>Fast, Good, Cheap—pick two. Make it visual:</p>
<ul>
<li>"We can launch by Q3 with current scope if we add two developers (cost)"</li>
<li>"We can maintain budget and quality, but launch moves to Q4 (time)"</li>
<li>"We can launch Q3 on budget if we cut features X and Y (scope)"</li>
</ul>`
  },
  {
    id: 'backlog',
    num: '04',
    title: 'Part 3: Backlog Management',
    tag: 'BACKLOG',
    insight: 'Plan for 80% of theoretical capacity. You\'ll hit it more often.',
    content: `<h3>Backlog Hygiene — Weekly Grooming Checklist</h3>
<ul>
<li>✅ Every item has acceptance criteria</li>
<li>✅ Epics are broken into stories &lt;3 story points</li>
<li>✅ Stories can be completed in one sprint</li>
<li>✅ Dependencies are documented and tracked</li>
<li>✅ Priority order reflects current business value</li>
<li>✅ Tech debt items are interspersed (not backlogged forever)</li>
<li>✅ "Icebox" items over 6 months old are reviewed for deletion</li>
</ul>

<h3>The Definition of Ready (before sprint planning)</h3>
<ul>
<li>User story format complete</li>
<li>Acceptance criteria defined</li>
<li>Dependencies identified</li>
<li>Design mockups attached (if UI work)</li>
<li>API contracts defined (if integration work)</li>
<li>Performance criteria specified</li>
<li>Security requirements noted</li>
<li>Stakeholder approval obtained</li>
<li>Estimated by development team</li>
</ul>

<h3>Story Sizing Accuracy — Reference Stories</h3>
<p>Maintain a catalog of completed stories at each size:</p>
<ul>
<li>1 point = "Add validation to email field" (2-3 hours)</li>
<li>3 points = "Create new API endpoint with CRUD operations" (1 day)</li>
<li>5 points = "Implement search with filters and pagination" (2-3 days)</li>
<li>8 points = "Build complete user profile section" (4-5 days)</li>
</ul>
<p><strong>Estimation Session Protocol:</strong> Each developer estimates independently (planning poker) → Large variance triggers discussion → Outliers explain their reasoning → Re-estimate until convergence or split story → Document assumptions that affected estimation</p>

<h3>Capacity Planning Reality</h3>
<p><strong>Velocity Tracking:</strong> Don't just track "points completed"—track: Planned vs. actual / Carryover rate / Bug injection rate / Rework percentage</p>
<p><strong>Capacity Calculation example</strong> (6 developers, 10-day sprint):</p>
<pre>60 developer-days available
Minus 10% for ceremonies and meetings = 54 days
Minus 15% for bug fixes and support = 46 days
Minus 10% for context switching = 41 days
Realistic capacity: ~40 developer-days</pre>
<p><strong>Plan for 80% of theoretical capacity. You'll hit it more often.</strong></p>`
  },
  {
    id: 'dev-teams',
    num: '05',
    title: 'Part 4: Working with Development Teams',
    tag: 'ENGINEERING',
    insight: 'Don\'t just hear updates at standup; listen for red flags: "I\'m almost done" for 3 days = blocked.',
    content: `<h3>Technical Fluency (Without Being a Developer)</h3>
<p>You need to understand:</p>
<p><strong>System Architecture:</strong> Where does data live? / What are the integration points? / What's the current technical debt? / What are the performance bottlenecks?</p>
<p><strong>Ask these questions during technical discussions:</strong></p>
<ul>
<li>"What could go wrong with this approach?"</li>
<li>"How will this scale if usage 10x?"</li>
<li>"What's the maintenance burden of this solution?"</li>
<li>"Are we creating future tech debt?"</li>
<li>"What's the rollback plan if this breaks in production?"</li>
</ul>

<h3>The Daily Standup—What to Listen For</h3>
<p><strong>Red Flags:</strong></p>
<ul>
<li>"I'm almost done" (for 3 days straight = blocked)</li>
<li>"Just need to figure out..." (= needs help, not asking)</li>
<li>"This is taking longer than expected" (= early warning)</li>
<li>"Waiting on..." (= dependency you need to unblock)</li>
</ul>
<p><strong>Your Role:</strong> Remove blockers immediately / Don't solve technical problems—connect people who can / Take detailed conversations offline / Track recurring blockers for sprint retro</p>

<h3>Code Review Participation</h3>
<p>Even if you can't code, review for:</p>
<ul>
<li>✅ Does the feature match acceptance criteria?</li>
<li>✅ Are edge cases handled?</li>
<li>✅ Is error messaging user-friendly?</li>
<li>✅ Does the UI match designs?</li>
<li>✅ Are analytics events firing correctly?</li>
</ul>`
  },
  {
    id: 'uat',
    num: '06',
    title: 'Part 5: User Acceptance Testing (UAT)',
    tag: 'QUALITY',
    insight: 'Not every UAT finding is a bug. Distinguish: Defect / Change Request / Data Issue / Environment Issue / Training Issue / Requirement Gap.',
    content: `<h3>Building Comprehensive Test Cases</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Test ID</th><th>Scenario</th><th>Preconditions</th><th>Expected Result</th></tr></thead><tbody>
<tr><td>TC-001</td><td>Happy path login</td><td>User exists in DB</td><td>Redirect to dashboard</td></tr>
<tr><td>TC-002</td><td>Invalid password</td><td>User exists in DB</td><td>Error: "Invalid credentials"</td></tr>
<tr><td>TC-003</td><td>Account locked</td><td>User locked after 3 fails</td><td>Error: "Account locked. Contact support"</td></tr>
</tbody></table></div>

<h3>The Edge Case Checklist</h3>
<ul>
<li><strong>Empty states:</strong> What if there's no data?</li>
<li><strong>Maximum capacity:</strong> What if there are 10,000 items?</li>
<li><strong>Invalid input:</strong> Special characters, SQL injection attempts, XSS</li>
<li><strong>Permissions:</strong> Can users see/do things they shouldn't?</li>
<li><strong>Browser compatibility:</strong> Works in Chrome ≠ works everywhere</li>
<li><strong>Mobile responsiveness:</strong> Does it work on a phone?</li>
<li><strong>Network issues:</strong> What if API calls timeout?</li>
<li><strong>Race conditions:</strong> What if two users edit simultaneously?</li>
</ul>

<h3>Bug Reporting Excellence</h3>
<p>❌ <strong>BAD BUG REPORT:</strong> "Search is broken"</p>
<p>✅ <strong>GOOD BUG REPORT:</strong></p>
<pre>Title: Search returns error 500 when searching special characters

Severity: High (blocks core functionality)
Priority: P1 (affects all users)

Environment:
- Browser: Chrome 120.0.6099.130
- OS: Windows 11

Steps to Reproduce:
1. Navigate to search page
2. Enter search term: "O'Reilly &amp; Sons"
3. Click "Search" button

Expected Result: Returns filtered results for company name

Actual Result:
- Error 500 displayed
- Console shows: "SQL syntax error near 'Reilly'"

Suggested Fix: Input sanitization needed for SQL queries</pre>

<h3>UAT Defect Triage Categories</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Category</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Defect</td><td>Built behavior differs from agreed requirement</td></tr>
<tr><td>Change request</td><td>New or changed expectation</td></tr>
<tr><td>Data issue</td><td>Test data or migration problem</td></tr>
<tr><td>Environment issue</td><td>Access/configuration/system instability</td></tr>
<tr><td>Training issue</td><td>System works, user does not understand</td></tr>
<tr><td>Requirement gap</td><td>Missed scenario or unclear requirement</td></tr>
</tbody></table></div>`
  },
  {
    id: 'metrics',
    num: '07',
    title: 'Part 6: Metrics & Data-Driven Decisions',
    tag: 'METRICS',
    insight: 'Work with your data team to create a measurement plan BEFORE development starts.',
    content: `<h3>Defining Success Metrics Upfront</h3>
<p>Before building anything, define:</p>
<p><strong>Leading Indicators</strong> (predict future success): User engagement with feature / Adoption rate / Time to complete task</p>
<p><strong>Lagging Indicators</strong> (measure actual impact): Revenue impact / Customer retention / Support ticket reduction</p>

<h3>Example: Self-service password reset</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Metric</th><th>Target</th><th>Measurement Method</th></tr></thead><tbody>
<tr><td>Adoption rate</td><td>&gt;60% of password resets self-serve within 3 months</td><td>Password reset tickets vs. self-serve usage</td></tr>
<tr><td>Time savings</td><td>Average resolution time &lt;2 minutes (vs. 15 min with support)</td><td>Analytics tracking</td></tr>
<tr><td>Cost reduction</td><td>Reduce password reset support tickets by 50%</td><td>Ticket volume comparison</td></tr>
<tr><td>User satisfaction</td><td>CSAT score &gt;4/5</td><td>Post-interaction survey</td></tr>
</tbody></table></div>

<h3>The Analytics Implementation Checklist</h3>
<p>Before launch, ensure tracking for:</p>
<ul>
<li>✅ Feature usage (who's using it, how often)</li>
<li>✅ User flow (where do they enter, where do they exit)</li>
<li>✅ Conversion funnels (where do they drop off)</li>
<li>✅ Error rates (what's breaking for users)</li>
<li>✅ Performance metrics (load times, response times)</li>
<li>✅ A/B test assignment (if applicable)</li>
</ul>
<p><strong>Work with your data team to create a measurement plan BEFORE development starts.</strong></p>`
  },
  {
    id: 'comm-artifacts',
    num: '08',
    title: 'Part 7: Communication Artifacts',
    tag: 'ARTIFACTS',
    insight: 'Keep sprint reviews tight: 15 minutes max. Show, don\'t tell. Use real data, not "lorem ipsum".',
    content: `<h3>The Product Requirements Document (PRD) Template</h3>
<pre>1. EXECUTIVE SUMMARY
   - One paragraph: What are we building and why?

2. BACKGROUND &amp; CONTEXT
   - Current state problem
   - User research findings
   - Competitive landscape
   - Strategic alignment

3. OBJECTIVES &amp; SUCCESS METRICS
   - Business goals
   - User goals
   - How we'll measure success

4. USER PERSONAS &amp; USE CASES
   - Who is this for?
   - What jobs are they trying to do?

5. FUNCTIONAL REQUIREMENTS
   - Must-have features
   - Nice-to-have features
   - Explicitly out of scope

6. USER EXPERIENCE &amp; DESIGN
   - Wireframes/mockups
   - User flows
   - Interaction patterns

7. TECHNICAL CONSIDERATIONS
   - Architecture impact
   - Integration requirements
   - Performance requirements
   - Security requirements

8. DEPENDENCIES &amp; RISKS
   - What could block us?
   - What's our mitigation plan?

9. TIMELINE &amp; MILESTONES
   - Key dates
   - Phasing strategy

10. APPENDIX
    - Research data
    - Detailed user stories
    - Reference materials</pre>

<h3>The Sprint Review Presentation Structure</h3>
<p><strong>Keep it tight (15 minutes max):</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong>Recap sprint goal</strong> (30 seconds) — "This sprint we aimed to complete user authentication"</li>
<li style="margin-bottom:0.5rem"><strong>Demo completed work</strong> (7 minutes) — Show, don't tell. Use real data, not "lorem ipsum". Demonstrate happy path AND edge cases</li>
<li style="margin-bottom:0.5rem"><strong>Metrics update</strong> (2 minutes) — What did we measure? What did we learn?</li>
<li style="margin-bottom:0.5rem"><strong>What we're NOT showing</strong> (1 minute) — What didn't get done and why. When will it be done?</li>
<li style="margin-bottom:0.5rem"><strong>Next sprint preview</strong> (2 minutes) — What's coming next. Any risks or blockers?</li>
<li style="margin-bottom:0.5rem"><strong>Questions</strong> (3 minutes)</li>
</ol>
<p><strong>Pro tip:</strong> Record demos and send async if stakeholders can't attend live.</p>`
  },
  {
    id: 'continuous-improvement',
    num: '09',
    title: 'Part 8: Continuous Improvement',
    tag: 'EXCELLENCE',
    insight: 'Your Personal Quality Checklist: Completeness, Clarity, Accuracy, Actionability — before any deliverable is "done."',
    content: `<h3>The Post-Release Review</h3>
<p>Two weeks after every major release, conduct a structured review:</p>
<p><strong>What went well:</strong> Actual user adoption vs. predicted / Bugs discovered vs. expected / Timeline accuracy / Stakeholder satisfaction</p>
<p><strong>What went wrong:</strong> Missed requirements (why?) / Scope creep (how did it happen?) / Technical debt created / Communication breakdowns</p>
<p><strong>Action items:</strong> Process improvements / Template updates / Training needs / Relationship repairs</p>

<h3>Your Personal Quality Checklist</h3>
<p>Before considering ANY deliverable "done," ask:</p>
<p><strong>Completeness:</strong></p>
<ul>
<li>[ ] All required sections included</li>
<li>[ ] All stakeholders reviewed</li>
<li>[ ] All acceptance criteria defined</li>
<li>[ ] All dependencies identified</li>
</ul>
<p><strong>Clarity:</strong></p>
<ul>
<li>[ ] Could a new team member understand this?</li>
<li>[ ] Are there unexplained acronyms or jargon?</li>
<li>[ ] Are examples provided?</li>
<li>[ ] Is the "why" as clear as the "what"?</li>
</ul>
<p><strong>Accuracy:</strong></p>
<ul>
<li>[ ] Have numbers been verified?</li>
<li>[ ] Are screenshots current?</li>
<li>[ ] Are dates realistic?</li>
<li>[ ] Has legal/compliance reviewed if needed?</li>
</ul>
<p><strong>Actionability:</strong></p>
<ul>
<li>[ ] Are next steps clear?</li>
<li>[ ] Are owners assigned?</li>
<li>[ ] Are deadlines set?</li>
<li>[ ] Are success criteria defined?</li>
</ul>`
  },
  {
    id: 'pitfalls',
    num: '10',
    title: 'Part 9: Common Pitfalls',
    tag: 'PITFALLS',
    insight: '"We know what users want" is the death of products. One afternoon talking to users saves months of building the wrong thing.',
    content: `<h3>Pitfall #1: Being an Order Taker</h3>
<p>❌ <strong>Wrong:</strong> Stakeholder says "Build X," you write story for X</p>
<p>✅ <strong>Right:</strong> Stakeholder says "Build X," you ask: "What problem does X solve?" / "What alternatives have been considered?" / "How will we know X succeeded?" / "What if we did Y instead—would that work?"</p>
<p><strong>Your value is in problem-solving, not transcription.</strong></p>

<h3>Pitfall #2: Ambiguous Acceptance Criteria</h3>
<p>❌ <strong>Wrong:</strong> "The page should load quickly"</p>
<p>✅ <strong>Right:</strong> "Page initial load completes in &lt;3 seconds on 3G connection for 95th percentile"</p>

<h3>Pitfall #3: Scope Creep Tolerance</h3>
<p>Stakeholder: "While you're in there, could you just add..."</p>
<p>❌ <strong>Wrong:</strong> "Sure, no problem"</p>
<p>✅ <strong>Right:</strong> "Let's estimate that and see how it affects our sprint goal. If it's quick, we can include it. If not, let's prioritize it for next sprint."</p>

<h3>Pitfall #4: Not Managing Up</h3>
<p>Your leadership needs to know: <strong>Risks</strong> before they become crises / <strong>Trade-offs</strong> before decisions are made / <strong>Wins</strong> when they happen</p>
<p><strong>Weekly exec summary template:</strong></p>
<pre>Status: 🟢 On Track | 🟡 At Risk | 🔴 Off Track

Wins this week:
- [Specific accomplishment with metric]

Risks/Blockers:
- [Issue, impact, mitigation plan]

Next week priorities:
- [Top 3 focus areas]

Help needed:
- [Specific ask if any]</pre>

<h3>Pitfall #5: Skipping User Research</h3>
<p>"We know what users want" is the death of products.</p>
<p><strong>Minimum viable research:</strong></p>
<ul>
<li>5 user interviews before building</li>
<li>Usability testing on prototypes</li>
<li>Beta testing before full release</li>
<li>Post-release feedback collection</li>
</ul>
<p><strong>One afternoon talking to users saves months of building the wrong thing.</strong></p>`
  },
  {
    id: 'skill-progression',
    num: '11',
    title: 'Part 10: BA/PO Skill Progression',
    tag: 'CAREER',
    insight: 'Your 90-day improvement plan: Month 1 Foundation → Month 2 Rigor → Month 3 Influence.',
    content: `<h3>Junior (0-2 years): Focus on Precision</h3>
<ul>
<li>Write crystal-clear user stories</li>
<li>Master your documentation tools</li>
<li>Learn the business domain deeply</li>
<li>Build relationships with developers</li>
<li>Ask questions relentlessly</li>
</ul>

<h3>Mid-Level (2-5 years): Focus on Prioritization</h3>
<ul>
<li>Balance competing stakeholder needs</li>
<li>Make trade-off decisions confidently</li>
<li>Identify and manage dependencies</li>
<li>Run effective ceremonies</li>
<li>Measure and present impact</li>
</ul>

<h3>Senior (5+ years): Focus on Strategy</h3>
<ul>
<li>Shape product vision</li>
<li>Influence roadmap</li>
<li>Mentor other BAs/POs</li>
<li>Navigate organizational politics</li>
<li>Drive process improvements</li>
</ul>

<h3>Your 90-Day Improvement Plan</h3>
<p><strong>Month 1: Foundation</strong></p>
<ul>
<li>Audit your current requirements for clarity</li>
<li>Create templates for common artifacts</li>
<li>Schedule stakeholder 1-on-1s</li>
<li>Shadow developers for a day</li>
</ul>
<p><strong>Month 2: Rigor</strong></p>
<ul>
<li>Implement new acceptance criteria standards</li>
<li>Create your backlog grooming checklist</li>
<li>Establish metrics for new features</li>
<li>Conduct post-release reviews on recent launches</li>
</ul>
<p><strong>Month 3: Influence</strong></p>
<ul>
<li>Present a trade-off analysis to leadership</li>
<li>Run a workshop on requirements gathering</li>
<li>Create a stakeholder communication plan</li>
<li>Build your professional development plan</li>
</ul>`
  },
  {
    id: 'mindset',
    num: '12',
    title: 'The Exemplary BA/PO Mindset',
    tag: 'MINDSET',
    insight: 'The difference between good and exemplary is systematic rigor applied consistently.',
    content: `<p style="font-size:1.1rem;font-weight:600;color:var(--section-color,var(--primary));margin-bottom:var(--space-xl)">You are the voice of the user in a room full of business constraints and technical limitations.</p>
<p style="font-size:1.1rem;font-weight:600;color:var(--text);margin-bottom:var(--space-xl)"><strong>You are the protector of "why"</strong> when everyone else focuses on "how."</p>
<p style="font-size:1.1rem;font-weight:600;color:var(--text);margin-bottom:var(--space-xl)"><strong>You are the translator</strong> making sure business and technology speak the same language.</p>
<p style="font-size:1.1rem;font-weight:600;color:var(--text);margin-bottom:var(--space-xl)"><strong>You are the realist</strong> who balances ambition with achievability.</p>
<p style="font-size:1.2rem;font-style:italic;color:var(--text-2);border-left:4px solid var(--section-color,var(--primary));padding-left:var(--space-lg);margin-bottom:var(--space-xl)">Your precision creates clarity. Your accuracy builds trust. Your thoroughness prevents chaos.</p>

<h3>Immediate Action Items</h3>
<p>Pick THREE to implement this week:</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.5rem">Create your first stakeholder matrix</li>
<li style="margin-bottom:0.5rem">Audit your backlog for stories missing acceptance criteria</li>
<li style="margin-bottom:0.5rem">Build a test case template</li>
<li style="margin-bottom:0.5rem">Schedule a "five whys" session with a stakeholder</li>
<li style="margin-bottom:0.5rem">Create your personal quality checklist</li>
<li style="margin-bottom:0.5rem">Document your team's definition of ready</li>
<li style="margin-bottom:0.5rem">Start a metrics dashboard for your current features</li>
<li style="margin-bottom:0.5rem">Write your first BLUF email</li>
<li style="margin-bottom:0.5rem">Shadow a developer for half a day</li>
<li style="margin-bottom:0.5rem">Conduct a post-release review on your last deployment</li>
</ol>
<p style="font-weight:700;font-size:1rem;color:var(--text)">The difference between good and exemplary is systematic rigor applied consistently.</p>`
  }
];

// ================================================================
// QUIZ QUESTIONS
// ================================================================
const QUIZ_QUESTIONS = [
  {
    q: "What does BLUF stand for in BA/PO communication?",
    opts: ["Bottom Line Up Front","Business Level User Framework","Backlog List Update Format","Business Logic Unified Format"],
    a: 0, cat: "Communication"
  },
  {
    q: "In the Communication Ladder, what is Level 5 called?",
    opts: ["Messenger","Translator","Facilitator","Value Strategist"],
    a: 3, cat: "Mastery"
  },
  {
    q: "What does RAID stand for?",
    opts: ["Risk, Assumption, Issue, Dependency","Review, Analyze, Implement, Deploy","Requirements, Actions, Insights, Decisions","Risk, Analysis, Impact, Dependency"],
    a: 0, cat: "Templates"
  },
  {
    q: "The 'Pick Two' Triangle represents...",
    opts: ["Fast, Good, Cheap","Scope, Time, Budget","Users, Business, Tech","Quality, Speed, Features"],
    a: 0, cat: "Stakeholders"
  },
  {
    q: "How many stakeholder archetypes are covered in the playbook?",
    opts: ["10","12","15","8"],
    a: 2, cat: "Stakeholders"
  },
  {
    q: "The BA/PO becomes 'dangerous in a good way' when they ask...",
    opts: ["'What do you want?'","'What problem are we solving, for whom, why now?'","'How fast can we build this?'","'Who is the sponsor?'"],
    a: 1, cat: "Foundation"
  },
  {
    q: "High Power / High Interest stakeholders should be:",
    opts: ["Monitored","Kept Informed","Kept Satisfied","Managed Closely"],
    a: 3, cat: "Stakeholders"
  },
  {
    q: "A BA typically acts as the bridge between:",
    opts: ["Developers and designers","Business reality and solution design","Customers and support","Management and operations"],
    a: 1, cat: "Roles"
  },
  {
    q: "The Five Levels of 'Why' technique helps you:",
    opts: ["Estimate story points","Understand root business needs","Prioritize the backlog","Run retrospectives"],
    a: 1, cat: "Requirements"
  },
  {
    q: "What is a Requirements Traceability Matrix?",
    opts: ["A living document linking business objectives to test cases","A risk tracking spreadsheet","A backlog prioritization tool","A stakeholder communication plan"],
    a: 0, cat: "Requirements"
  },
  {
    q: "Good acceptance criteria should be:",
    opts: ["Vague and flexible","Testable and specific","Long and comprehensive","Written by developers"],
    a: 1, cat: "Quality"
  },
  {
    q: "Sprint velocity should be used as:",
    opts: ["A guarantee of delivery","A performance metric for developers","A delivery trend, not a guarantee","A basis for increasing team size"],
    a: 2, cat: "Backlog"
  },
  {
    q: "The 'Solutionizer' stakeholder archetype does what?",
    opts: ["Refuses to make decisions","Changes requirements frequently","Jumps immediately to features","Dominates all conversations"],
    a: 2, cat: "Stakeholders"
  },
  {
    q: "What percentage of theoretical capacity should you realistically plan for?",
    opts: ["100%","90%","80%","60%"],
    a: 2, cat: "Backlog"
  },
  {
    q: "The BA/PO Communication Ladder has how many levels?",
    opts: ["3","4","5","6"],
    a: 2, cat: "Mastery"
  },
  {
    q: "A good BA/PO does NOT eliminate uncertainty. They:",
    opts: ["Escalate all issues","Name uncertainty clearly enough that the right people can act","Make decisions unilaterally","Delay until clarity arrives"],
    a: 1, cat: "Principles"
  },
  {
    q: "The Universal Communication Loop has how many steps?",
    opts: ["4","5","6","7"],
    a: 2, cat: "Process"
  },
  {
    q: "Which is NOT a valid meeting purpose per the playbook?",
    opts: ["Decide","Validate","Gossip","Discover"],
    a: 2, cat: "Meetings"
  },
  {
    q: "In the sprint review, what should you use instead of 'lorem ipsum' data?",
    opts: ["Mock data","Real data","Placeholder data","Test data"],
    a: 1, cat: "Delivery"
  },
  {
    q: "What is the 'Negative Case' technique?",
    opts: ["Asking what a terrible solution looks like to find hidden requirements","A method for rejecting stakeholder requests","A bug reporting format","A risk assessment tool"],
    a: 0, cat: "Requirements"
  },
  {
    q: "Which UAT finding is classified as a 'Training Issue'?",
    opts: ["Built behavior differs from agreed requirement","New expectation not in scope","System works, user does not understand","Test data problem"],
    a: 2, cat: "Quality"
  },
  {
    q: "The Opportunity Solution Tree shifts conversations from:",
    opts: ["Features back to outcomes","Outcomes back to features","Budget to timelines","Users to business goals"],
    a: 0, cat: "Process"
  },
  {
    q: "BA/PO neutrality means loyalty to:",
    opts: ["The loudest stakeholder","The executive sponsor","The problem, evidence, agreed goal, and value","The development team"],
    a: 2, cat: "Mindset"
  },
  {
    q: "The 'Definition of Ready' is checked before:",
    opts: ["Sprint review","Sprint retrospective","Sprint planning","Release"],
    a: 2, cat: "Backlog"
  },
  {
    q: "Leading indicators differ from lagging indicators because they:",
    opts: ["Measure past revenue","Predict future success","Count bugs","Track team velocity"],
    a: 1, cat: "Metrics"
  },
  {
    q: "What is the BA/PO's role during the 'Build' phase?",
    opts: ["Disappear after writing stories","Stay available for clarifications","Only attend sprint reviews","Focus on next sprint planning"],
    a: 1, cat: "Delivery"
  },
  {
    q: "The 'Quantification Challenge' converts which type of statements?",
    opts: ["Technical to business","Qualitative to quantitative","Urgent to important","Scope to timeline"],
    a: 1, cat: "Requirements"
  },
  {
    q: "Communication at Level 3 of the Ladder means:",
    opts: ["Messager: relaying what was said","Translator: business needs into buildable work","Facilitator: resolving stakeholder disagreements","Value Strategist: full decision path"],
    a: 1, cat: "Mastery"
  },
  {
    q: "Which channel is BEST for handling conflict and complex decisions?",
    opts: ["Chat/Slack","Email","Video call","Dashboard"],
    a: 2, cat: "Communication"
  },
  {
    q: "What makes user research 'minimum viable' before building?",
    opts: ["A/B test results","5 user interviews before building","1 stakeholder approval","Analytics data alone"],
    a: 1, cat: "Quality"
  },

  // ── BABOK questions ────────────────────────────────────────────
  {
    q: "According to BABOK v3, which knowledge area focuses on identifying and defining the need before a solution is designed?",
    opts: ["Business Analysis Planning & Monitoring","Strategy Analysis","Requirements Life Cycle Management","Solution Evaluation"],
    a: 1, cat: "BABOK"
  },
  {
    q: "In BABOK v3, what are the three categories of requirements?",
    opts: ["Business, Stakeholder, Solution","Functional, Non-Functional, Technical","Current, Future, Transition","User, System, Quality"],
    a: 0, cat: "BABOK"
  },
  {
    q: "Which BABOK knowledge area covers maintaining requirements after approval through deployment?",
    opts: ["Strategy Analysis","Elicitation & Collaboration","Requirements Life Cycle Management","Business Analysis Planning & Monitoring"],
    a: 2, cat: "BABOK"
  },
  {
    q: "Bloom's Taxonomy — which level represents the highest order of thinking (top of pyramid)?",
    opts: ["Evaluate","Analyze","Create","Apply"],
    a: 2, cat: "BABOK"
  },
  {
    q: "What is the BABOK term for evaluating a proposed solution to check it actually delivers the intended business value?",
    opts: ["Requirements Validation","Solution Evaluation","Quality Assurance","Acceptance Testing"],
    a: 1, cat: "BABOK"
  },

  // ── System Design questions ────────────────────────────────────
  {
    q: "In the BA/PO System Design framework, what should be the FIRST step before proposing any architecture?",
    opts: ["Choose the database","Clarify the problem, scope, and users","Draw the component diagram","Estimate storage capacity"],
    a: 1, cat: "System Design"
  },
  {
    q: "What is the main difference between vertical scaling and horizontal scaling?",
    opts: ["Vertical = more servers; Horizontal = bigger server","Vertical = bigger single machine; Horizontal = more machines","Vertical is for databases only; Horizontal is for APIs","There is no meaningful difference"],
    a: 1, cat: "System Design"
  },
  {
    q: "In system design, what is the primary purpose of a CDN (Content Delivery Network)?",
    opts: ["Store user passwords securely","Cache static assets geographically close to users for faster delivery","Manage microservice orchestration","Handle database replication"],
    a: 1, cat: "System Design"
  },
  {
    q: "When writing acceptance criteria, which format is most commonly used in Agile BA/PO work?",
    opts: ["Given-When-Then (Gherkin)","If-Then-Else (pseudocode)","Pass/Fail checklists only","UML activity diagrams"],
    a: 0, cat: "System Design"
  },
  {
    q: "What does the CAP Theorem state for distributed systems?",
    opts: ["Systems can guarantee Correctness, Availability, and Performance simultaneously","Systems can only guarantee two of: Consistency, Availability, Partition tolerance","Systems must choose between Cost, Accuracy, and Processing speed","Caching, APIs, and Persistence are the three pillars of system design"],
    a: 1, cat: "System Design"
  },

  // ── Interview / BA Skills questions ───────────────────────────
  {
    q: "What does INVEST stand for in the context of user stories?",
    opts: ["Independent, Negotiable, Valuable, Estimable, Small, Testable","Integrated, Novel, Verified, Executable, Structured, Testable","Iterative, Necessary, Validated, Estimated, Sized, Trackable","Independent, Necessary, Viable, Elastic, Simple, Testable"],
    a: 0, cat: "Agile"
  },
  {
    q: "In the STAR method for behavioral interviews, what percentage of your answer should be focused on the Action you took?",
    opts: ["20%","40%","60%","80%"],
    a: 2, cat: "Interview"
  },
  {
    q: "What is the correct MoSCoW prioritization acronym?",
    opts: ["Must, Should, Could, Would have","Must, Sometimes, Can, Won't have","Must, Should, Could, Won't have (this time)","Main, Secondary, Conditional, Wishlist"],
    a: 2, cat: "Requirements"
  },
  {
    q: "Which document defines WHAT the business needs at a high level and is targeted at business stakeholders?",
    opts: ["FRD (Functional Requirements Document)","SRS (Software Requirements Specification)","BRD (Business Requirements Document)","User Stories"],
    a: 2, cat: "Documents"
  },
  {
    q: "In banking, what does KYC stand for?",
    opts: ["Keep Your Customers","Know Your Customer","Key Year Compliance","Knowledge Your Credentials"],
    a: 1, cat: "Banking"
  },
  {
    q: "Gap Analysis compares which two states?",
    opts: ["Planned vs. Actual performance","Current (As-Is) vs. Desired (To-Be) state","Business requirements vs. Technical specs","Functional vs. Non-functional requirements"],
    a: 1, cat: "Analysis"
  },
  {
    q: "What is the key difference between a Use Case and a User Story?",
    opts: ["Use Cases are shorter; User Stories are longer","Use Cases are for Agile; User Stories are for Waterfall","Use Cases are formal, detailed (Waterfall); User Stories are simple, value-focused (Agile)","There is no meaningful difference"],
    a: 2, cat: "Requirements"
  },
  {
    q: "Which fintech trend refers to banking services embedded inside non-banking apps?",
    opts: ["Open Banking","Embedded Finance","Hyper-Personalization","RegTech"],
    a: 1, cat: "Fintech"
  }
];

// ================================================================
// QUESTION OF THE DAY POOL
// ================================================================
const QOTD_POOL = [
  {
    q: "Describe the 'Five Levels of Why' technique and give a real-world example of how it changes the solution.",
    a: `The Five Levels of Why is a technique where you keep asking "why" to uncover the root business need behind a stated request.

Example: Stakeholder says "We need a dashboard."
Level 1: Why? "To see sales data."
Level 2: Why see sales data? "To track performance."
Level 3: Why track performance? "To identify underperforming regions."
Level 4: Why identify underperforming regions? "To intervene before quarterly targets are missed."
Level 5: Why do quarterly targets matter? "Investor commitments and budget planning depend on them."

Result: They don't need a dashboard—they need an early warning system with intervention triggers. Completely different solution. The technique prevents you from building the stated request instead of solving the actual problem.`
  },
  {
    q: "What is the BLUF method and why does it matter for BA/PO communication?",
    a: `BLUF = Bottom Line Up Front. It's a writing technique where you lead with the decision or action needed before providing context.

Why it matters: Executives and busy stakeholders scan emails. If your most important information is buried, it gets missed. BLUF ensures:
1. The reader knows immediately what's being asked
2. They can decide whether to read further
3. Response time improves because the ask is clear

Example structure:
"DECISION NEEDED: Approve customer portal Phase 1 scope by Friday 3/15.
The Ask: [clear ask]
Why: [brief rationale]
Impact: [consequence of inaction]
Details below for context..."`
  },
  {
    q: "Explain the difference between a BA and PO communication focus. Where do they overlap and what's the biggest risk when they do?",
    a: `BA focuses on: business needs, requirements elicitation, process mapping, stakeholder analysis, change impact, and ensuring the solution solves the real problem. Acts as bridge between business reality and solution design.

PO focuses on: product value, backlog management, product goal, stakeholder alignment, trade-off decisions, and connecting delivery to business/customer value.

Overlap: In hybrid agile environments, BA and PO roles overlap heavily—both clarify requirements, manage stakeholders, and prioritize work.

Biggest risk: Unclear decision rights. Conflicts arise when it's unclear who owns product priority, who approves requirements, who resolves conflicts, and who communicates scope changes. Clarify early with a RACI.`
  },
  {
    q: "What are the 5 Core Communication Principles? Give one practical example of each.",
    a: `1. Communicate around value, not activity: Don't say "we completed 5 stories." Say "we reduced manual review effort and moved closer to the onboarding conversion target."

2. Separate problem, solution, and request: When a stakeholder says "build a dashboard," decompose it—what problem triggered the request? Who is affected? What outcome is desired?

3. Make ambiguity visible early: State explicitly what is known, what is believed but not validated, what is still open, and what decision is needed.

4. Communicate differently by audience: Executives need value/risk/timeline. Developers need intent/criteria/edge cases. Operations need process change and handoffs.

5. Write to reduce misinterpretation: Be structured, traceable, testable, and decision-friendly. "System should be fast" → "Form validates within 2 seconds under normal load."`
  },
  {
    q: "How would you handle a stakeholder who keeps changing their mind?",
    a: `The right response is: "The change may be justified, but we need to understand what new information caused the change. If the goal changed, we should revisit priority. If only preference changed, we need to protect delivery stability."

Practical steps:
1. Document the original decision with rationale
2. Ask what new information or context has changed
3. Separate a genuine goal change (valid) from a preference shift (needs protection)
4. If valid: run a formal change request that captures impact on scope/timeline/cost
5. If preference shift: acknowledge the idea, capture in backlog, and protect current sprint commitment
6. Maintain a decision log so "he said/she said" is avoided`
  },
  {
    q: "What is a RAID log and why is it essential for BA/POs?",
    a: `RAID = Risks, Assumptions, Issues, Dependencies.

Risk: Something that may happen and impact the project
Assumption: Something believed to be true but not confirmed
Issue: A problem that is already happening  
Dependency: Something you need from another team or system

Why essential:
- Makes hidden risks visible before they become crises
- Prevents assumption drift (undocumented beliefs that get forgotten)
- Creates accountability with owners and due dates
- Provides a single source of truth for status updates
- Enables proactive escalation rather than reactive firefighting

Use it as a living document, reviewed weekly, with clear owners for each item.`
  },
  {
    q: "What is the 'Definition of Ready' and why does it matter before sprint planning?",
    a: `The Definition of Ready is the checklist of criteria a user story must meet before it can be pulled into a sprint.

Typical DoR includes:
- User story format complete
- Acceptance criteria defined
- Dependencies identified
- Design mockups attached (if UI work)
- API contracts defined (if integration work)
- Performance criteria specified
- Security requirements noted
- Stakeholder approval obtained
- Estimated by development team

Why it matters:
1. Prevents mid-sprint discoveries that block completion
2. Reduces ambiguity that causes rework
3. Ensures developers have everything they need before starting
4. Makes sprint planning faster and more reliable
5. Reduces carryover between sprints

Without DoR, teams start stories that aren't truly ready, leading to "almost done" situations that drag on for days.`
  },
  {
    q: "Describe the 'Pick Two' Triangle. How would you use it in a stakeholder conversation?",
    a: `The Pick Two Triangle states: Fast, Good, Cheap—pick two. It's a visual tool for making trade-offs explicit.

The three combinations:
- Fast + Good = Expensive (quality work quickly requires more resources)
- Fast + Cheap = Poor quality (rushing with limited resources means corners cut)  
- Good + Cheap = Slow (quality work on budget takes more time)

How to use in a conversation:
Present all three options visually or verbally:
"We can launch by Q3 with current scope if we add two developers (cost)."
"We can maintain budget and quality, but launch moves to Q4 (time)."
"We can launch Q3 on budget if we cut features X and Y (scope)."

This prevents stakeholders from demanding all three simultaneously without acknowledging what they're trading. It forces explicit, documented decisions rather than implicit expectations.`
  },
  {
    q: "What are the 8 valid meeting purposes in the BA/PO Meeting Playbook?",
    a: `The 8 valid meeting purposes are:
1. Discover — uncover problems, needs, or unknown territory
2. Decide — make a specific decision that is blocking progress
3. Validate — confirm shared understanding of requirements or solutions
4. Align — ensure all parties are on the same page
5. Resolve conflict — address disagreements between stakeholders
6. Plan — organize upcoming work, sprints, or releases
7. Review — assess completed work against goals
8. Learn — retrospectives, post-release reviews, knowledge sharing

If none of these purposes apply, use async communication instead.

This rule prevents unnecessary meetings that waste time. The discipline of asking "which purpose does this meeting serve?" before scheduling it reduces calendar bloat significantly.`
  },
  {
    q: "What are the 4 quadrants of the Stakeholder Matrix and how do you engage each?",
    a: `1. High Power / High Interest → Manage Closely
   - Weekly updates
   - Involve in major decisions
   - Examples: Executive sponsors, key customers

2. High Power / Low Interest → Keep Satisfied
   - Monthly summaries
   - Alert to risks proactively
   - Examples: Senior leadership outside your product area

3. Low Power / High Interest → Keep Informed
   - Regular demos
   - Feedback sessions
   - Examples: End users, team members

4. Low Power / Low Interest → Monitor
   - Quarterly updates
   - Only engage when relevant changes occur
   - Examples: Peripheral departments

The key insight: don't use the same communication frequency or detail for all stakeholders. Over-communicating with monitors wastes time; under-communicating with key influencers creates surprises.`
  },
  {
    q: "How should a BA/PO communicate during a production incident?",
    a: `Use the incident update format:
- Issue: What happened (specific, factual)
- Impact: Who and what is affected (scope of the problem)
- Affected users/systems: Specific populations impacted
- Current status: What is being done right now
- Workaround: If available, how users can proceed
- Next update time: Commit to a specific time for the next communication
- Owner: Who is leading the resolution
- What we need from stakeholders: Any specific asks

Critical rules:
1. Avoid speculation — only communicate confirmed facts
2. Give a specific next update time and honor it
3. Keep the tone calm and factual — not defensive or panicked
4. Separate "what we know" from "what we're still investigating"
5. Follow up with a post-incident summary once resolved

Example: "We have confirmed the issue affects invoice exports for APAC users. Root cause is still under investigation. The workaround is manual export from the admin console. Next update will be in 2 hours."`
  },
  {
    q: "What are the 10 Immediate Action Items from the Excellence guide? Pick 3 and explain why you'd start there.",
    a: `The 10 Immediate Action Items are:
1. Create your first stakeholder matrix
2. Audit your backlog for stories missing acceptance criteria
3. Build a test case template
4. Schedule a "five whys" session with a stakeholder
5. Create your personal quality checklist
6. Document your team's definition of ready
7. Start a metrics dashboard for your current features
8. Write your first BLUF email
9. Shadow a developer for half a day
10. Conduct a post-release review on your last deployment

Top 3 to start with (example reasoning):
1. Audit backlog for acceptance criteria — immediate quality impact, surfaces gaps in current work
2. Document definition of ready — prevents recurring ambiguity issues in every sprint
3. Create stakeholder matrix — gives you clarity on who needs what communication frequency

The difference between good and exemplary is systematic rigor applied consistently.`
  },
  {
    q: "What is the BA/PO Neutrality Stance and why does it matter?",
    a: `The BA/PO neutrality stance means being loyal to the problem, evidence, and agreed value — not to any one person's preference.

Neutral BA/POs:
- Facilitate evidence-based decisions (not take political sides)
- Make assumptions visible (not hide conflict)
- Challenge unclear requests (not dismiss stakeholder needs)
- Protect value (not pet features)
- Document decisions (not weaponize documentation)
- Explain trade-offs (not pretend everything is possible)
- Listen deeply (not become an order-taker)
- Escalate appropriately (not emotionally)

Why it matters:
In complex organizations with competing stakeholders, the BA/PO is often the only person in the room without a specific agenda. This neutrality is valuable — it allows them to represent the problem rather than a political position.

Neutrality does not mean passiveness. It means having the courage to challenge assumptions, surface conflicts, and force explicit decisions — while remaining factual and non-partisan.`
  },
  {
    q: "Explain the BA/PO skill progression from Junior to Senior. What's the core focus at each level?",
    a: `Junior (0-2 years): Focus on PRECISION
- Write crystal-clear user stories
- Master documentation tools
- Learn the business domain deeply
- Build relationships with developers
- Ask questions relentlessly
Goal: Be reliable and accurate in execution

Mid-Level (2-5 years): Focus on PRIORITIZATION
- Balance competing stakeholder needs
- Make trade-off decisions confidently
- Identify and manage dependencies
- Run effective ceremonies
- Measure and present impact
Goal: Add strategic value, not just execute

Senior (5+ years): Focus on STRATEGY
- Shape product vision
- Influence roadmap
- Mentor other BAs/POs
- Navigate organizational politics
- Drive process improvements
Goal: Lead through influence, create systemic improvement

The 90-Day Plan maps this: Month 1 = Foundation, Month 2 = Rigor, Month 3 = Influence.`
  },
  {
    q: "What are the High-Stakes Communication Brutal Realities (8 of them)?",
    a: `1. People say "requirements" when they mean "preferences." Your job is to find the difference.

2. Stakeholders often do not know what they want until they see what they do not want. Use prototypes, examples, demos, and iterative validation.

3. The loudest stakeholder is not always the most important stakeholder. Map influence, impact, expertise, and decision authority.

4. Documentation does not create alignment by itself. People can sign documents they did not understand. Validation conversations matter.

5. "Agile" does not remove the need for clarity. It changes when and how clarity is created.

6. If everything is priority one, leadership has not made real decisions. Force explicit trade-offs.

7. Many conflicts are caused by different definitions. Define terms. Especially: customer, user, done, MVP, launch, approved, automated, real-time, exception, active, completed.

8. A BA/PO without backbone becomes a note-taker. You need diplomacy and courage.`
  },

  // ── BABOK QOTD ────────────────────────────────────────────────
  {
    q: "Explain the difference between BABOK's 'Validate Requirements' and 'Verify Requirements' tasks. Why does this distinction matter?",
    a: `Verify Requirements checks that requirements are well-formed — complete, consistent, clear, testable, and correct. It answers: "Did we write the requirements correctly?"

Validate Requirements checks that requirements actually align to stakeholder and business needs. It answers: "Are we building the right thing?"

Practical distinction:
- A requirement can PASS verification (it is well-written) but FAIL validation (it solves the wrong problem)
- Verification is often an internal BA quality check
- Validation requires stakeholder sign-off and business context

Why it matters:
Many teams skip validation because they focus only on whether the document "looks right." Validated requirements survive change requests better because they are anchored to a justified business need, not just a preference. Teams that only verify — not validate — often build technically correct solutions that miss the business objective.`
  },
  {
    q: "Walk through how BABOK's Strategy Analysis knowledge area would approach a situation where a bank wants to launch a mobile lending product.",
    a: `Strategy Analysis starts with: Are we solving the right problem?

Step 1 — Analyze Current State: Map the existing lending process, identify pain points, document current customer journey from enquiry to disbursement, gather data on current conversion rates and drop-off points.

Step 2 — Define Future State: What does the mobile lending experience look like at maturity? What customer outcomes are targeted? What business metrics (approval rate, time-to-disburse, NPS) define success?

Step 3 — Assess Risks: Regulatory (MAS/BNM guidelines for digital lending), credit risk (automated scoring accuracy), technology risk (fraud, security), business risk (cannibalizing branch products).

Step 4 — Define Change Strategy: Prioritize capabilities for Phase 1 vs. Phase 2. Define what "minimum viable" means for regulatory compliance vs. customer experience.

Step 5 — Business Case: Quantify the value — cost reduction per loan, new customer segments reached, improvement in NPS.

The key output is not a features list — it is a justified strategic direction that aligns the solution to a validated business need.`
  },

  // ── System Design QOTD ────────────────────────────────────────
  {
    q: "A startup wants to build a ride-sharing app like Grab. Walk through the first 5 steps of the BA/PO System Design framework for this scenario.",
    a: `Step 1 — Clarify the problem and scope:
- Who are the users? (Riders, drivers, ops team, payments)
- What is the core problem? (Reliable, fast matching of available drivers to riders)
- What is in scope for MVP? (Booking, matching, payment, notifications)
- What is explicitly out of scope? (Delivery, food, financial services)
- Scale: How many concurrent users at peak?

Step 2 — Identify users, personas, and journeys:
- Rider: Browse → Book → Track → Pay → Rate
- Driver: Accept job → Navigate → Complete → Track earnings
- Operations: Monitor, flag issues, manage disputes

Step 3 — Define functional requirements:
- Real-time location tracking (GPS)
- Driver matching algorithm (nearest available)
- Fare calculation engine
- In-app payment processing
- Push notifications (job assigned, driver arriving, trip completed)

Step 4 — Define non-functional requirements:
- Latency: Matching response < 5 seconds
- Availability: 99.9% uptime (SLA)
- Scale: 100K concurrent users at peak
- Security: PCI DSS for payment data

Step 5 — Identify core entities and data model:
- Users, Drivers, Trips, Locations, Payments, Ratings`
  },
  {
    q: "What is the BA/PO questioning framework for system design interviews, and why is each question important?",
    a: `The BA/PO Questioning Framework for System Design:

1. "Can you clarify what problem we are actually solving?" — Prevents building the right architecture for the wrong problem.

2. "Who are the users and how many are we designing for?" — Changes architecture decisions entirely (100 users vs. 10M users).

3. "What are the most critical user journeys?" — Focuses design on what actually matters.

4. "What are the performance expectations?" — Latency, throughput, and availability requirements determine database, caching, and scaling choices.

5. "What are the security and compliance requirements?" — Drives encryption, access controls, audit logging requirements.

6. "What are the integration points?" — Identifies external dependencies and failure modes.

7. "What is the deployment and scaling model?" — Cloud vs. on-prem, auto-scaling vs. fixed capacity.

8. "What does the MVP look like vs. the full vision?" — Prevents over-engineering Phase 1.

Why this matters: System design interviews test your ability to navigate ambiguity. Jumping to solutions without asking these questions shows poor BA/PO instincts. Interviewers want to see structured thinking, not just technical knowledge.`
  },

  // ── Interview Prep QOTD ───────────────────────────────────────
  {
    q: "How would you respond if a stakeholder said 'Just build what I asked for'? Walk through your thought process and what you'd actually say.",
    a: `This is the classic order-taker trap. Your value as a BA is in problem-solving, not transcription.

Thought process: The stakeholder has a solution, but I don't yet understand the problem behind it. I need to decompose the request into: (1) What are they asking for? (2) What pain triggered the request? (3) What outcome would make this successful? (4) Are there constraints or alternatives?

What I'd actually say:
"I absolutely want to help you get what you need. Before I write up requirements, can I ask a few quick questions to make sure we build exactly the right thing? Specifically:
- What problem will this solve for you or your team?
- What does success look like — how will we know it's working?
- Are there any constraints I should know about?

I ask because sometimes there's a faster or cheaper way to solve the same problem, and I want to make sure we use your budget wisely."

This approach: respects the stakeholder's authority, adds value without being dismissive, uncovers the real need, and protects the team from building the wrong thing. Never just say "no" — redirect toward the outcome.`
  },
  {
    q: "Using the STAR method, walk through how you'd answer: 'Tell me about a time you managed conflicting stakeholder requirements.'",
    a: `Structure: Situation (20%) → Task (10%) → Action (60%) → Result (10%)

Situation: "In my previous role at a financial services company, I was managing requirements for a new customer portal. The Sales director wanted a simplified interface focused on quick conversions, while the Compliance team demanded extensive disclosures and multiple confirmation screens."

Task: "My task was to reconcile these competing priorities within our 6-month timeline and $150,000 budget, while maintaining relationships with both departments."

Action (most important — 60%):
1. Facilitated a joint workshop where both teams presented requirements with business justification
2. Mapped each requirement against business value and regulatory necessity
3. Proposed a phased approach: Phase 1 includes all compliance-mandatory elements with streamlined UX; Phase 2 adds enhanced sales features
4. Created prototypes showing how compliance needs could be met through progressive disclosure design
5. Documented the rationale and obtained sign-off from both teams

Result: "We launched Phase 1 on time, meeting all compliance requirements while achieving a 25% improvement in conversion rate vs. the old portal."

Key principles in this answer: specific context, YOUR actions (not "we" vaguely), quantified results, and a clear resolution.`
  }
];

// ================================================================
// QUOTES OF THE DAY
// ================================================================
const QUOTES = [
  { text: "A BA/PO is not merely a 'requirements person.' The role is a translator, sense-maker, decision-framer, expectation-manager, conflict-navigator, and value-protector.", source: "BA/PO Communication Playbook" },
  { text: "The BA/PO becomes dangerous—in a good way—when they stop asking only 'What do you want?' and start asking: 'What problem are we solving, for whom, why now, what trade-offs are acceptable, and how will we measure success?'", source: "BA/PO Communication Mission" },
  { text: "A good BA/PO does not eliminate all uncertainty. They name uncertainty clearly enough that the right people can act.", source: "Core Communication Principles" },
  { text: "If everything is priority one, leadership has not made real decisions.", source: "Brutal Realities" },
  { text: "Documentation does not create alignment by itself. People can sign documents they did not understand. Validation conversations matter.", source: "Brutal Realities" },
  { text: "A BA/PO without backbone becomes a note-taker. You need diplomacy and courage.", source: "Brutal Realities" },
  { text: "Your value is in problem-solving, not transcription.", source: "Common Pitfalls — Part 9" },
  { text: "The difference between good and exemplary is systematic rigor applied consistently.", source: "Exemplary BA/PO Mindset" },
  { text: "You are the voice of the user in a room full of business constraints and technical limitations.", source: "Exemplary BA/PO Mindset" },
  { text: "You are the protector of 'why' when everyone else focuses on 'how.'", source: "Exemplary BA/PO Mindset" },
  { text: "Your precision creates clarity. Your accuracy builds trust. Your thoroughness prevents chaos.", source: "Exemplary BA/PO Mindset" },
  { text: "One afternoon talking to users saves months of building the wrong thing.", source: "Pitfall #5: Skipping User Research" },
  { text: "'Agile' does not remove the need for clarity. It changes when and how clarity is created.", source: "Brutal Realities" },
  { text: "Neutrality means: I am loyal to the problem, the evidence, the agreed goal, and the value—not to one person's preference.", source: "BA/PO Neutrality Stance" },
  { text: "The loudest stakeholder is not always the most important stakeholder. Map influence, impact, expertise, and decision authority.", source: "Brutal Realities" },
  { text: "People say 'requirements' when they mean 'preferences.' Your job is to find the difference.", source: "Brutal Realities" },
  { text: "Most delivery failures are not because people are stupid. They happen because assumptions stay hidden too long.", source: "Principle 3: Make Ambiguity Visible Early" },
  { text: "You are the translator making sure business and technology speak the same language.", source: "Exemplary BA/PO Mindset" },
  { text: "You are the realist who balances ambition with achievability.", source: "Exemplary BA/PO Mindset" },
  { text: "Plan for 80% of theoretical capacity. You'll hit it more often.", source: "Backlog Management — Part 3" },
  { text: "Don't just hear updates at standup; listen for red flags.", source: "Working with Development Teams — Part 4" },
  { text: "Stay available. Do not disappear after writing stories.", source: "Communication by Delivery Phase — Build" },
  { text: "If the goal changed, revisit priority. If only preference changed, protect delivery stability.", source: "Handling Difficult Scenarios" },
  { text: "Many conflicts are caused by different definitions. Define terms before building.", source: "Brutal Realities" },
  { text: "Ensure business readiness, not just technical deployment.", source: "Communication by Delivery Phase — Release" },

  // ── BABOK Quotes ──────────────────────────────────────────────
  { text: "Business Analysis is not about producing documents. It is about enabling better decisions.", source: "BABOK v3 — Foundation" },
  { text: "Requirements that cannot be tested are not requirements — they are wishes.", source: "BABOK v3 — Requirements Analysis" },
  { text: "The most dangerous requirement is the one everyone assumes is understood.", source: "BABOK v3 — Elicitation & Collaboration" },
  { text: "Strategy Analysis asks: Are we solving the right problem? Solution Evaluation asks: Did we solve it?", source: "BABOK v3 — Strategy Analysis" },
  { text: "Validation confirms you built the right thing. Verification confirms you built it right.", source: "BABOK v3 — Study Guide" },

  // ── System Design Quotes ──────────────────────────────────────
  { text: "Always clarify scope before architecture. The best design for the wrong scope is still wrong.", source: "BA/PO System Design Guide — Core Principle" },
  { text: "Non-functional requirements are not optional extras. They are failure modes waiting to be discovered.", source: "BA/PO System Design Guide — Step 4" },
  { text: "CAP Theorem: A distributed system can guarantee at most two of Consistency, Availability, and Partition Tolerance.", source: "BA/PO System Design Guide — Architecture Concepts" },
  { text: "Scope creep in system design is quiet. Each 'small addition' looks harmless in isolation.", source: "BA/PO System Design Guide — Prioritization" },
  { text: "The MVP is not the minimum you can build. It is the minimum that delivers the core value proposition.", source: "BA/PO System Design Guide — MVP Templates" },

  // ── Interview Quotes ──────────────────────────────────────────
  { text: "Your value as a BA is in problem-solving, not transcription.", source: "BA Interview Q&A — Core Skills" },
  { text: "SQL is the single most demanded technical skill for Business Analysts in 2025.", source: "BA Interview Q&A — Technical Tools" },
  { text: "INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable — the checklist for every user story.", source: "BA Interview Q&A — Q10" },
  { text: "In STAR answers, 60% of your response should describe the specific actions YOU took.", source: "BA Interview Q&A — Behavioral" },
  { text: "Conflicting metrics between departments are usually a data governance problem, not a technical one.", source: "BA Interview Q&A — Case Study Q37" }
];

// Export for use in other modules
window.BAData = {
  COMMS_SECTIONS,
  COMMS_INTRO,
  EXCELLENCE_SECTIONS,
  EXCELLENCE_INTRO,
  QUIZ_QUESTIONS,
  QOTD_POOL,
  QUOTES,
  SECTION_THEMES
};
