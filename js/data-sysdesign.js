// ================================================================
// data-sysdesign.js — BA/PO System Design Guide
// Word-for-word from add2.txt, structured for rendering
// ================================================================

const SYSDESIGN_INTRO = `System design for a BA or PO is about translating a business problem into a coherent operating model + product capability + data flow + system behavior + delivery backlog. The BA/PO should not merely ask "What do you want?" — they should ask: "What business outcome are we changing, what system capabilities are required, what constraints matter, what trade-offs are acceptable, and how will we prove the solution works?"`;

const SYSDESIGN_SECTIONS = [
  {
    id: 'core-principle',
    num: '01',
    title: 'Core Principle & The BA/PO Role in System Design',
    tag: 'FOUNDATION',
    insight: 'The BA/PO must be dangerous enough to detect gaps — even if they don\'t own the technical decisions.',
    content: `<h3>Core Principle: BA/PO System Design Is Not "Draw Boxes"</h3>
<p>System design for a BA or PO is about translating a business problem into a <strong>coherent operating model + product capability + data flow + system behavior + delivery backlog</strong>.</p>
<p>The BA/PO should not merely ask:</p>
<blockquote>"What features do users want?"</blockquote>
<p>They should ask:</p>
<blockquote>"What business outcome are we changing, what system capabilities are required, what constraints matter, what trade-offs are acceptable, and how will we prove the solution works?"</blockquote>
<p>This aligns with the IIBA framing of business analysis around <strong>change, need, solution, value, stakeholder, and context</strong>. The Scrum Guide similarly frames the Product Owner as accountable for maximizing product value and managing the Product Backlog through Product Goal, backlog items, and ordering.</p>
<h3>The BA/PO's Role in System Design</h3>
<p>A BA/PO is not expected to replace solution architects, engineers, security specialists, or UX designers. But they <strong>must be dangerous enough</strong> to detect gaps.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Area</th><th>BA/PO Responsibility</th></tr></thead><tbody>
<tr><td>Business problem</td><td>Define the real need, not just requested features</td></tr>
<tr><td>Stakeholders</td><td>Identify users, buyers, operators, approvers, regulators, support teams</td></tr>
<tr><td>Scope</td><td>Decide what is in, out, deferred, or killed</td></tr>
<tr><td>Requirements</td><td>Convert messy needs into testable requirements</td></tr>
<tr><td>Process</td><td>Model current-state and future-state workflows</td></tr>
<tr><td>Data</td><td>Define key entities, data ownership, lifecycle, quality rules</td></tr>
<tr><td>Product behavior</td><td>Define user journeys, rules, exceptions, edge cases</td></tr>
<tr><td>Prioritization</td><td>Order work by value, risk, dependency, and learning</td></tr>
<tr><td>Acceptance</td><td>Define acceptance criteria and evidence of completion</td></tr>
<tr><td>Trade-offs</td><td>Make business calls when cost, speed, quality, and scope conflict</td></tr>
</tbody></table></div>
<p>The BA/PO does <strong>not</strong> need to choose Kubernetes vs. serverless or REST vs. event streaming alone. But they <strong>must understand the consequence</strong> of those decisions on cost, delivery speed, reliability, security, analytics, compliance, and user experience.</p>
<h3>System Design Thinking Model</h3>
<blockquote><strong>Outcome → Users → Processes → Capabilities → Data → Integrations → Rules → Quality Attributes → Risks → Delivery Slices</strong></blockquote>
<p>Most bad product/system designs fail because teams jump from "idea" to "features" without passing through the middle layers.</p>`
  },
  {
    id: 'steps-1-2',
    num: '02',
    title: 'Steps 1–2: Define the Problem & Identify Stakeholders',
    tag: 'PLAYBOOK',
    insight: 'Most system design failures are political before they are technical. Map decision rights first.',
    content: `<h3>Step 1: Define the Real Business Problem</h3>
<p>Do not start with the requested solution.</p>
<p><strong>Bad framing:</strong> "We need a dashboard."</p>
<p><strong>Better framing:</strong> "Managers cannot detect delayed orders early enough, causing SLA breaches and customer complaints. They need earlier visibility into risk signals."</p>
<p><strong>Ask:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What business outcome are we trying to improve?</li>
<li>What is broken today?</li>
<li>Who experiences the pain?</li>
<li>How often does it happen?</li>
<li>What does it cost?</li>
<li>What happens if we do nothing?</li>
<li>Is this a real need or a stakeholder preference?</li>
<li>Is the requested solution the only way to solve it?</li>
</ol>
<p><strong>Deliverables:</strong> Problem statement · Opportunity statement · Business objective · Success metrics · Assumption log · Out-of-scope list</p>
<p><strong>Example:</strong> "Reduce manual reconciliation time from 4 hours/day to under 30 minutes/day for finance operations by automating transaction matching and exception handling."</p>
<h3>Step 2: Identify Stakeholders and Decision Rights</h3>
<p>Most system design failures are political before they are technical.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Stakeholder Type</th><th>Examples</th><th>Why They Matter</th></tr></thead><tbody>
<tr><td>Primary users</td><td>Sales reps, agents, analysts</td><td>Use the system directly</td></tr>
<tr><td>Secondary users</td><td>Managers, auditors, support</td><td>Depend on outputs</td></tr>
<tr><td>Decision makers</td><td>Product head, sponsor, compliance</td><td>Approve scope and trade-offs</td></tr>
<tr><td>Operators</td><td>DevOps, support, admin teams</td><td>Keep the system running</td></tr>
<tr><td>Data owners</td><td>Finance, risk, HR, legal</td><td>Own correctness and usage rights</td></tr>
<tr><td>External parties</td><td>Vendors, customers, regulators</td><td>Create constraints</td></tr>
</tbody></table></div>
<p><strong>Ask:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Who can approve requirements?</li><li>Who can reject the solution?</li><li>Who owns the data?</li>
<li>Who supports this after launch?</li><li>Who pays for it?</li>
<li>Who is affected but not represented?</li><li>Whose workflow gets worse?</li>
</ol>
<p><strong>Deliverables:</strong> Stakeholder map · RACI / DACI · Decision log · Escalation path</p>
<blockquote>Critical warning: If no one owns a decision, the backlog becomes a landfill.</blockquote>`
  },
  {
    id: 'steps-3-4',
    num: '03',
    title: 'Steps 3–4: Understand Current State & Define Capabilities',
    tag: 'PLAYBOOK',
    insight: 'Capabilities are more stable than features. Features change; capabilities endure.',
    content: `<h3>Step 3: Understand Current State</h3>
<p>Before designing the future system, understand the existing mess.</p>
<p><strong>Capture:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Current workflow</li><li>Manual workarounds</li><li>Existing systems</li><li>Data sources</li>
<li>Bottlenecks</li><li>Failure points</li><li>Compliance constraints</li><li>Reporting needs</li><li>Support burden</li>
</ol>
<p><strong>Use:</strong> Process maps · Swimlane diagrams · Service blueprints · User interviews · Shadowing · Data sample reviews · Support ticket analysis · Audit findings</p>
<p><strong>Ask:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What triggers the process?</li><li>What are the happy paths?</li><li>What are the exception paths?</li>
<li>Where do users copy/paste?</li><li>Where do approvals happen?</li><li>Where does data get re-entered?</li>
<li>Where do errors occur?</li><li>Which steps are legally or operationally required?</li><li>What systems are sources of truth?</li>
</ol>
<p><strong>Deliverables:</strong> Current-state process map · Pain point inventory · System landscape map · Data source list · Exception catalogue</p>
<h3>Step 4: Define Future-State Capabilities</h3>
<p>Do not jump directly into "user stories." First define <strong>capabilities</strong>. A capability is something the business must be able to do.</p>
<p><strong>Example for an order management system:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Capability</th><th>Description</th></tr></thead><tbody>
<tr><td>Capture order</td><td>Accept order details from customers or internal users</td></tr>
<tr><td>Validate order</td><td>Check product, pricing, customer, credit, inventory</td></tr>
<tr><td>Route order</td><td>Send to fulfillment, approval, or exception queue</td></tr>
<tr><td>Track order</td><td>Provide status and milestone visibility</td></tr>
<tr><td>Amend order</td><td>Allow controlled changes before fulfillment</td></tr>
<tr><td>Cancel order</td><td>Handle cancellation rules and refunds</td></tr>
<tr><td>Notify stakeholders</td><td>Send status updates and alerts</td></tr>
<tr><td>Report performance</td><td>Monitor SLA, delay, backlog, revenue impact</td></tr>
</tbody></table></div>
<p>Capabilities are more stable than features. Features change; capabilities endure.</p>
<p><strong>Deliverables:</strong> Capability map · Capability maturity assessment · Future-state workflow · MVP capability slice</p>`
  },
  {
    id: 'steps-5-6',
    num: '04',
    title: 'Steps 5–6: Define Users & Model the Domain',
    tag: 'PLAYBOOK',
    insight: 'Many systems fail because teams never agree on nouns. Define business objects clearly.',
    content: `<h3>Step 5: Define Users, Personas, and Jobs-to-Be-Done</h3>
<p>Avoid fake personas like "Mary, 34, likes coffee." Focus on role, intent, context, and constraints.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Role</td><td>Finance analyst</td></tr>
<tr><td>Goal</td><td>Reconcile unmatched transactions</td></tr>
<tr><td>Frequency</td><td>Daily</td></tr>
<tr><td>Volume</td><td>500–2,000 records/day</td></tr>
<tr><td>Pain</td><td>Manual matching and unclear exceptions</td></tr>
<tr><td>Risk</td><td>Incorrect revenue recognition</td></tr>
<tr><td>Success</td><td>Exceptions reduced by 80%</td></tr>
<tr><td>Permissions</td><td>Can view, match, comment; cannot approve write-offs</td></tr>
</tbody></table></div>
<p><strong>Ask:</strong> What is the user trying to accomplish? · What decision are they making? · What information do they need? · What do they do before and after using the system? · What mistakes are likely? · What actions should be restricted? · What does "done" mean for them?</p>
<p><strong>Deliverables:</strong> Role matrix · Persona-lite profiles · Jobs-to-be-done · Permission model draft</p>
<h3>Step 6: Model the Domain</h3>
<p>Domain modeling is one of the most valuable BA/PO system design skills. Define the business objects clearly.</p>
<p><strong>Example for a claims system:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Entity</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Customer</td><td>Person or organization covered by policy</td></tr>
<tr><td>Policy</td><td>Contract defining coverage</td></tr>
<tr><td>Claim</td><td>Request for compensation</td></tr>
<tr><td>Incident</td><td>Event that caused loss</td></tr>
<tr><td>Assessment</td><td>Evaluation of claim validity</td></tr>
<tr><td>Payment</td><td>Approved financial settlement</td></tr>
<tr><td>Document</td><td>Evidence or supporting file</td></tr>
</tbody></table></div>
<p><strong>For each entity, define:</strong> Meaning · Attributes · Owner · Source of truth · Lifecycle states · Relationships · Data quality rules · Privacy classification · Retention rules</p>
<p><strong>Ask:</strong></p>
<ul>
<li>What is the difference between customer, account, user, and contact?</li>
<li>Can one customer have multiple accounts? Can one order have multiple shipments?</li>
<li>Can a claim exist without a policy?</li>
<li>When is a record created, locked, or modified?</li>
<li>What is the source of truth?</li>
<li>What happens if two systems disagree?</li>
</ul>
<p><strong>Deliverables:</strong> Conceptual data model · Entity relationship diagram · Data dictionary · State model · Data ownership matrix</p>
<blockquote>Critical warning: Many systems fail because teams never agree on nouns.</blockquote>`
  },
  {
    id: 'steps-7-8',
    num: '05',
    title: 'Steps 7–8: Business Rules & Functional Requirements',
    tag: 'PLAYBOOK',
    insight: 'Business rules are not "details." They are often the actual product.',
    content: `<h3>Step 7: Define Business Rules</h3>
<p>Business rules are not "details." They are often the actual product.</p>
<p><strong>Examples:</strong></p>
<ul>
<li>Orders over $50,000 require manager approval.</li>
<li>Refunds after 30 days require exception authorization.</li>
<li>A user cannot approve their own request.</li>
<li>Claims with missing documents remain in "Pending Evidence."</li>
<li>Premium customers get priority routing.</li>
<li>Failed payments retry three times before suspension.</li>
</ul>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Rule Type</th><th>Example</th></tr></thead><tbody>
<tr><td>Eligibility</td><td>Who qualifies?</td></tr>
<tr><td>Calculation</td><td>How is amount computed?</td></tr>
<tr><td>Routing</td><td>Where does the case go?</td></tr>
<tr><td>Validation</td><td>What must be true?</td></tr>
<tr><td>Authorization</td><td>Who can do what?</td></tr>
<tr><td>Compliance</td><td>What is legally required?</td></tr>
<tr><td>Exception</td><td>What happens when normal rules fail?</td></tr>
</tbody></table></div>
<p><strong>Deliverables:</strong> Business rules catalogue · Decision tables · Rule ownership matrix · Configuration requirements</p>
<h3>Step 8: Define Functional Requirements</h3>
<p>Functional requirements describe what the system must do.</p>
<p><strong>Use this structure:</strong> As a [role], I want [capability/action], so that [business value].</p>
<p>But user stories alone are often insufficient. Add: Acceptance criteria · Business rules · Data requirements · Error handling · Permission behavior · Audit/logging needs · Reporting impact · Dependencies</p>
<p><strong>Example:</strong></p>
<p><em>Story:</em> As a finance analyst, I want the system to automatically match incoming payments to open invoices so that I can reduce manual reconciliation effort.</p>
<p><em>Acceptance criteria:</em></p>
<ul>
<li>Exact matches are created when invoice number, amount, and customer ID match.</li>
<li>Partial matches are flagged for review.</li>
<li>Duplicate payment references are not auto-matched.</li>
<li>All auto-matches include timestamp, rule used, and confidence score.</li>
<li>Analysts can override a match with reason code.</li>
<li>Overrides are logged for audit.</li>
</ul>
<p><strong>Deliverables:</strong> User stories · Use cases · Acceptance criteria · Wireframes · API behavior notes · Error and exception flows</p>`
  },
  {
    id: 'steps-9-10',
    num: '06',
    title: 'Steps 9–10: Non-Functional Requirements & Integrations',
    tag: 'PLAYBOOK',
    insight: 'NFRs are not optional "technical stuff." They define whether the system is usable, safe, reliable, scalable, and operable.',
    content: `<h3>Step 9: Define Non-Functional Requirements Properly</h3>
<p>Non-functional requirements define whether the system is usable, safe, reliable, scalable, and operable.</p>
<p><strong>Bad NFR:</strong> "The system should be fast."</p>
<p><strong>Better NFR:</strong> "Search results for standard customer lookup must return within 2 seconds at p95 under normal business load of 500 concurrent users."</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Category</th><th>Questions</th></tr></thead><tbody>
<tr><td>Performance</td><td>How fast must it respond? Under what load?</td></tr>
<tr><td>Availability</td><td>When must it be up? What downtime is acceptable?</td></tr>
<tr><td>Scalability</td><td>What growth is expected? Users, records, transactions?</td></tr>
<tr><td>Security</td><td>Who can access what? What data is sensitive?</td></tr>
<tr><td>Privacy</td><td>What personal data is collected, stored, retained?</td></tr>
<tr><td>Reliability</td><td>What happens when dependencies fail?</td></tr>
<tr><td>Usability</td><td>Can users complete tasks efficiently and correctly?</td></tr>
<tr><td>Accessibility</td><td>Does it support accessibility standards?</td></tr>
<tr><td>Auditability</td><td>What actions must be logged?</td></tr>
<tr><td>Maintainability</td><td>How easy is it to modify rules/features?</td></tr>
<tr><td>Observability</td><td>What metrics, logs, alerts are needed?</td></tr>
<tr><td>Compliance</td><td>What regulations, policies, contracts apply?</td></tr>
<tr><td>Data quality</td><td>What accuracy, completeness, freshness is required?</td></tr>
<tr><td>Disaster recovery</td><td>What RTO/RPO is acceptable?</td></tr>
</tbody></table></div>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Weak</th><th>Strong</th></tr></thead><tbody>
<tr><td>System must be secure</td><td>Users must only access records assigned to their region and role; all admin actions must be logged</td></tr>
<tr><td>System must be reliable</td><td>Payment submission must not lose transactions if downstream gateway is unavailable</td></tr>
<tr><td>System must be scalable</td><td>System must support 10x current transaction volume over 24 months</td></tr>
<tr><td>System must be auditable</td><td>All approval, rejection, and override actions must record user, timestamp, old value, new value, and reason</td></tr>
</tbody></table></div>
<p><strong>Deliverables:</strong> NFR catalogue · SLO/SLA/SLI draft · Security/privacy requirements · Audit requirements · Operational reporting requirements</p>
<h3>Step 10: Define Integrations</h3>
<p>Every integration should have a business purpose. Do not accept "we need to integrate with X" without clarity.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Field</th><th>Questions</th></tr></thead><tbody>
<tr><td>System</td><td>What system are we connecting to?</td></tr>
<tr><td>Purpose</td><td>Why do we need it?</td></tr>
<tr><td>Data</td><td>What data moves?</td></tr>
<tr><td>Direction</td><td>Inbound, outbound, bidirectional?</td></tr>
<tr><td>Trigger</td><td>Real-time, scheduled, event-based, manual?</td></tr>
<tr><td>Frequency</td><td>How often?</td></tr>
<tr><td>Owner</td><td>Who owns source and target?</td></tr>
<tr><td>Failure handling</td><td>What happens if it fails?</td></tr>
<tr><td>Reconciliation</td><td>How do we detect mismatch?</td></tr>
<tr><td>Security</td><td>How is access controlled?</td></tr>
<tr><td>Audit</td><td>What must be logged?</td></tr>
</tbody></table></div>
<p><strong>Deliverables:</strong> Context diagram · Integration catalogue · Data flow diagram · Interface requirements · Failure/retry requirements</p>`
  },
  {
    id: 'steps-11-12',
    num: '07',
    title: 'Steps 11–12: System Boundaries & State Lifecycles',
    tag: 'PLAYBOOK',
    insight: 'Many systems are state machines disguised as forms. Define entry/exit criteria for every state.',
    content: `<h3>Step 11: Define System Boundaries</h3>
<p>A BA/PO must know what the system should and should not own.</p>
<p><strong>Ask:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What capabilities belong inside this product?</li>
<li>What should stay in existing systems?</li>
<li>What should be manual for MVP?</li>
<li>What should be automated later?</li>
<li>What data should this system master?</li>
<li>What data should it only consume?</li>
<li>What decisions should the system make?</li>
<li>What decisions require human approval?</li>
</ol>
<p>Boundary mistakes create bloated systems.</p>
<p><strong>Example — loan application platform:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Capability</th><th>Own Here?</th><th>Reason</th></tr></thead><tbody>
<tr><td>Capture application</td><td>Yes</td><td>Core journey</td></tr>
<tr><td>Credit scoring</td><td>No / integrate</td><td>Existing risk engine owns scoring</td></tr>
<tr><td>Document upload</td><td>Yes</td><td>User-facing workflow</td></tr>
<tr><td>Identity verification</td><td>Integrate</td><td>Specialist provider</td></tr>
<tr><td>Approval decision</td><td>Partially</td><td>System recommends, underwriter approves</td></tr>
<tr><td>Payment collection</td><td>No</td><td>Finance platform owns payment</td></tr>
</tbody></table></div>
<p><strong>Deliverables:</strong> System context diagram · Capability ownership map · In-scope/out-of-scope list · Integration boundary decisions</p>
<h3>Step 12: Think in States and Lifecycles</h3>
<p>Many systems are state machines disguised as forms.</p>
<p><strong>Order states example:</strong></p>
<pre>Draft → Submitted → Validated → Approved → Fulfilled → Closed
                         ↓
                    Exception → Cancelled</pre>
<p><strong>Claim states example:</strong></p>
<pre>Created → Pending Documents → Under Review → Approved → Paid → Closed
                                 ↓
                              Rejected</pre>
<p><strong>For each state, define:</strong> Entry criteria · Exit criteria · Allowed actions · Permissions · Notifications · SLAs · Audit events · Reversal rules · Timeout rules</p>
<p><strong>Ask:</strong></p>
<ul>
<li>Can users go backward? Can records be edited after approval?</li>
<li>Can two users act at the same time?</li>
<li>What happens if approval expires?</li>
<li>What happens if required data changes mid-process?</li>
<li>What statuses appear to customers vs. internal users?</li>
</ul>
<p><strong>Deliverables:</strong> State transition diagram · Status definitions · Action matrix · Exception handling rules</p>`
  },
  {
    id: 'steps-13-14',
    num: '08',
    title: 'Steps 13–14: Reporting, Analytics, Security & Privacy',
    tag: 'PLAYBOOK',
    insight: 'Reporting is not an afterthought. It changes data design. Security is not a phase — it is a constraint.',
    content: `<h3>Step 13: Define Reporting and Analytics Early</h3>
<p>Reporting is not an afterthought. It changes data design.</p>
<p><strong>Ask:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What decisions will reports support?</li><li>What KPIs matter?</li><li>Who consumes reports?</li>
<li>How often?</li><li>What filters are needed?</li><li>What historical snapshots are required?</li>
<li>Are metrics operational, financial, regulatory, or strategic?</li>
<li>Does the system need real-time reporting or batch reporting?</li>
<li>What is the definition of each metric?</li>
</ol>
<p><strong>Example metric definitions:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Metric</th><th>Definition</th></tr></thead><tbody>
<tr><td>Average resolution time</td><td>Time from case submission to final closure, excluding customer-waiting status</td></tr>
<tr><td>SLA breach rate</td><td>Percentage of cases not resolved within contractual SLA</td></tr>
<tr><td>Auto-match rate</td><td>Percentage of transactions matched without human intervention</td></tr>
<tr><td>Reopen rate</td><td>Percentage of closed cases reopened within 14 days</td></tr>
</tbody></table></div>
<p><strong>Deliverables:</strong> KPI dictionary · Report catalogue · Dashboard wireframes · Data retention needs · Metric definitions</p>
<blockquote>Critical warning: If metric definitions are not agreed upfront, executives will argue about dashboards instead of decisions.</blockquote>
<h3>Step 14: Define Security, Privacy, and Compliance</h3>
<p>Do not leave this until the end.</p>
<p><strong>Ask:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What data is sensitive?</li><li>Is there personal data?</li>
<li>Is there financial, health, identity, or confidential business data?</li>
<li>Who can view it?</li><li>Who can export it?</li><li>Who can delete it?</li>
<li>What must be encrypted?</li><li>What must be retained?</li><li>What must be purged?</li>
<li>What requires audit trail?</li><li>Are there regulatory requirements?</li>
<li>Are there segregation-of-duty rules?</li>
</ol>
<p><strong>Access control matrix example:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Role</th><th>View</th><th>Create</th><th>Edit</th><th>Approve</th><th>Delete</th><th>Export</th></tr></thead><tbody>
<tr><td>Analyst</td><td>Yes</td><td>Yes</td><td>Own records</td><td>No</td><td>No</td><td>No</td></tr>
<tr><td>Manager</td><td>Yes</td><td>Yes</td><td>Team records</td><td>Yes</td><td>No</td><td>Yes</td></tr>
<tr><td>Admin</td><td>Yes</td><td>No</td><td>Config only</td><td>No</td><td>No</td><td>No</td></tr>
<tr><td>Auditor</td><td>Read-only</td><td>No</td><td>No</td><td>No</td><td>No</td><td>Yes</td></tr>
</tbody></table></div>
<p><strong>Deliverables:</strong> Role-permission matrix · Data classification · Audit requirements · Retention requirements · Privacy impact questions · Compliance checklist</p>`
  },
  {
    id: 'architecture-concepts',
    num: '09',
    title: 'Architecture Concepts BA/POs Must Understand',
    tag: 'ARCHITECTURE',
    insight: 'You do not need to be an architect, but you should understand these concepts and their business trade-offs.',
    content: `<h3>5.1 Frontend vs Backend</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Layer</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Frontend</td><td>User interface</td></tr>
<tr><td>Backend</td><td>Business logic, APIs, processing</td></tr>
<tr><td>Database</td><td>Persistent data</td></tr>
<tr><td>Integration layer</td><td>Connects systems</td></tr>
<tr><td>Analytics layer</td><td>Reporting and insights</td></tr>
<tr><td>Infrastructure</td><td>Hosting, network, deployment, monitoring</td></tr>
</tbody></table></div>
<p><strong>BA/PO relevance:</strong> UI requirements are not the whole system. Business rules often belong in backend logic. Reporting may require separate data models. Integrations create delays and failure modes.</p>
<h3>5.2 APIs</h3>
<p>An API allows systems to communicate.</p>
<p><strong>Ask:</strong> What data is requested or sent? · Who calls whom? · Is it synchronous or asynchronous? · What happens on timeout? · What error codes matter to users? · What fields are mandatory? · What fields are sensitive? · Is versioning needed?</p>
<p><strong>BA/PO example requirement:</strong> "When the CRM requests customer risk status, the Risk API must return customer ID, risk tier, effective date, and review status. If the Risk system is unavailable, CRM must display 'Risk status unavailable' and prevent approval actions."</p>
<h3>5.3 Events and Asynchronous Processing</h3>
<p>Not everything should happen instantly in one transaction.</p>
<p><strong>Example — when an order is submitted:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Order submitted event</li><li>Inventory reserved</li><li>Payment authorized</li><li>Customer notified</li><li>Warehouse task created</li>
</ol>
<p><strong>Ask:</strong> Does the user need immediate confirmation? · What can happen later? · What happens if one step fails? · Can events be duplicated? · Can events arrive late? · How will users know the current status?</p>
<h3>5.4 Batch Jobs</h3>
<p>Some processes run periodically. Examples: Nightly reconciliation · Daily report generation · Monthly billing · Data warehouse refresh · Regulatory file submission</p>
<p><strong>Ask:</strong> How often does it run? · What is the cutoff time? · What happens if it fails? · Who receives the failure alert? · Can it be rerun? · Is the output idempotent? · What audit evidence is needed?</p>
<h3>5.5 Source of Truth</h3>
<p><strong>Ask:</strong> Which system owns customer data? · Which system owns product data? · Which system wins when data conflicts? · How are corrections propagated?</p>
<p><strong>Bad design:</strong> "Customer address can be edited in CRM, billing, support, and fulfillment independently."</p>
<p><strong>Better design:</strong> "CRM is source of truth for customer profile. Billing and fulfillment consume address updates from CRM."</p>`
  },
  {
    id: 'questioning-framework',
    num: '10',
    title: 'The Ruthless BA/PO Questioning Framework',
    tag: 'FRAMEWORK',
    insight: 'Use these questions in every design review. If you cannot answer them, the design is not ready.',
    content: `<h3>Business Value</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What decision or behavior will this feature change?</li>
<li>What measurable outcome improves?</li>
<li>Who benefits?</li>
<li>How often is this used?</li>
<li>What is the cost of not building it?</li>
<li>Is this solving a symptom or root cause?</li>
</ol>
<h3>Scope</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What is explicitly out of scope?</li>
<li>What are we deferring?</li>
<li>What is MVP versus later?</li>
<li>What is manual for now?</li>
<li>What is configurable versus hardcoded?</li>
</ol>
<h3>Users</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Who exactly uses this?</li>
<li>What permissions do they have?</li>
<li>What mistakes can they make?</li>
<li>What do they do when the system blocks them?</li>
<li>What happens for new, inactive, suspended, or external users?</li>
</ol>
<h3>Data</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What data is required?</li>
<li>Where does it come from?</li>
<li>Who owns it?</li>
<li>How fresh must it be?</li>
<li>What if it is missing, duplicated, stale, or inconsistent?</li>
<li>What needs historical tracking?</li>
</ol>
<h3>Rules</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Who owns this rule?</li><li>Is it always true?</li><li>Are there exceptions?</li>
<li>Does it vary by country, product, customer, or channel?</li>
<li>Can business users configure it?</li><li>How is rule change audited?</li>
</ol>
<h3>Workflow</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What triggers the process?</li><li>What is the happy path?</li><li>What are exception paths?</li>
<li>Can the process be reversed?</li><li>What happens when approval is rejected?</li>
<li>What happens when users abandon the process?</li>
</ol>
<h3>Integration</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Which systems are involved?</li><li>What data moves?</li><li>Which system initiates?</li>
<li>What is real-time versus batch?</li><li>What happens if integration fails?</li><li>Who monitors it?</li>
</ol>
<h3>NFRs</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>How fast is fast enough?</li><li>How available must it be?</li><li>What volume must it handle?</li>
<li>What must be logged?</li><li>What must be secure?</li><li>What recovery time is acceptable?</li>
</ol>
<h3>Delivery</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>What is the smallest valuable slice?</li><li>What assumptions should we test first?</li>
<li>What dependencies block us?</li><li>What needs technical discovery?</li>
<li>What can be mocked?</li><li>What can be launched to a limited group?</li>
</ol>`
  },
  {
    id: 'deliverables',
    num: '11',
    title: 'System Design Deliverables for BA/POs',
    tag: 'DELIVERABLES',
    insight: 'You do not need all deliverables for every project. Choose based on risk.',
    content: `<h3>Discovery Deliverables</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Deliverable</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Problem statement</td><td>Align on why</td></tr>
<tr><td>Business case</td><td>Justify investment</td></tr>
<tr><td>Stakeholder map</td><td>Identify decision makers and impacted groups</td></tr>
<tr><td>Current-state process</td><td>Understand today</td></tr>
<tr><td>Pain point analysis</td><td>Identify friction and waste</td></tr>
<tr><td>Opportunity map</td><td>Compare solution options</td></tr>
<tr><td>Assumption log</td><td>Track unproven beliefs</td></tr>
</tbody></table></div>
<h3>Product Definition Deliverables</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Deliverable</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Product goal</td><td>Define target outcome</td></tr>
<tr><td>Capability map</td><td>Define what the business must do</td></tr>
<tr><td>User journeys</td><td>Show end-to-end experience</td></tr>
<tr><td>Story map</td><td>Organize backlog by workflow</td></tr>
<tr><td>MVP definition</td><td>Define smallest useful release</td></tr>
<tr><td>Feature brief</td><td>Explain feature intent and scope</td></tr>
</tbody></table></div>
<h3>Requirements Deliverables</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Deliverable</th><th>Purpose</th></tr></thead><tbody>
<tr><td>User stories</td><td>Agile delivery units</td></tr>
<tr><td>Use cases</td><td>Detailed interactions</td></tr>
<tr><td>Acceptance criteria</td><td>Testable conditions</td></tr>
<tr><td>Business rules</td><td>Decision logic</td></tr>
<tr><td>Data dictionary</td><td>Shared data definitions</td></tr>
<tr><td>State model</td><td>Lifecycle behavior</td></tr>
<tr><td>Permissions matrix</td><td>Access control</td></tr>
<tr><td>NFR catalogue</td><td>Quality attributes</td></tr>
</tbody></table></div>
<h3>System Design Support Deliverables</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Deliverable</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Context diagram</td><td>Show system boundaries</td></tr>
<tr><td>Data flow diagram</td><td>Show movement of data</td></tr>
<tr><td>Integration catalogue</td><td>Define system interfaces</td></tr>
<tr><td>Event list</td><td>Define important business events</td></tr>
<tr><td>Error handling matrix</td><td>Define failure behavior</td></tr>
<tr><td>Reporting catalogue</td><td>Define outputs and metrics</td></tr>
<tr><td>Risk register</td><td>Track product/system risks</td></tr>
<tr><td>Decision log</td><td>Record major trade-offs</td></tr>
</tbody></table></div>`
  },
  {
    id: 'prioritization-slicing',
    num: '12',
    title: 'Prioritization Framework & Delivery Slicing',
    tag: 'DELIVERY',
    insight: 'Slice vertically, not horizontally. Each slice should deliver an observable behavior.',
    content: `<h3>Prioritization Framework</h3>
<p>A BA/PO must prioritize across value, risk, urgency, dependency, and learning. Avoid simple "stakeholder shouted loudest" prioritization.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Factor</th><th>Question</th></tr></thead><tbody>
<tr><td>Business value</td><td>How much outcome improvement?</td></tr>
<tr><td>User impact</td><td>How many users and how severe is the pain?</td></tr>
<tr><td>Risk reduction</td><td>Does this reduce major uncertainty?</td></tr>
<tr><td>Compliance urgency</td><td>Is there a legal/regulatory deadline?</td></tr>
<tr><td>Revenue/cost impact</td><td>Does it increase revenue or reduce cost?</td></tr>
<tr><td>Dependency</td><td>Does other work depend on it?</td></tr>
<tr><td>Effort</td><td>How large or complex is it?</td></tr>
<tr><td>Time criticality</td><td>Does delay reduce value?</td></tr>
<tr><td>Learning value</td><td>Does it test a key assumption?</td></tr>
</tbody></table></div>
<p><strong>Good MVP slices are usually:</strong> 1) High learning 2) High value 3) Low dependency 4) Operationally safe 5) Small enough to release 6) Measurable after launch</p>
<p><strong>Bad MVP:</strong> Build half of every feature.</p>
<p><strong>Good MVP:</strong> Build one complete workflow for one user segment with real data and measurable outcome.</p>
<h3>How to Slice System Design Into Delivery</h3>
<p>Slice vertically, not horizontally.</p>
<p><strong>Bad slicing:</strong> 1) Build database 2) Build backend 3) Build UI 4) Build reporting 5) Test later</p>
<p><strong>Better slicing:</strong> 1) Submit simple request 2) Validate request 3) Approve request 4) Notify user 5) Track status 6) Handle rejection 7) Add reporting 8) Add automation 9) Add advanced rules</p>
<p><strong>Example for claims:</strong></p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Slice</th><th>Value</th></tr></thead><tbody>
<tr><td>Create claim manually</td><td>Capture demand</td></tr>
<tr><td>Upload evidence</td><td>Support review</td></tr>
<tr><td>Assign claim to reviewer</td><td>Enable workflow</td></tr>
<tr><td>Approve/reject claim</td><td>Complete decision</td></tr>
<tr><td>Pay approved claim</td><td>Complete business outcome</td></tr>
<tr><td>Add fraud rules</td><td>Reduce risk</td></tr>
<tr><td>Add customer notifications</td><td>Improve transparency</td></tr>
<tr><td>Add analytics</td><td>Improve management</td></tr>
</tbody></table></div>`
  },
  {
    id: 'ac-design-review',
    num: '13',
    title: 'Acceptance Criteria Quality & Design Review Checklist',
    tag: 'QUALITY',
    insight: 'Good acceptance criteria are: testable, specific, unambiguous, complete, include negative cases, permissions, and error behavior.',
    content: `<h3>Acceptance Criteria Quality Checklist</h3>
<p>Good acceptance criteria are:</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Testable</li><li>Specific</li><li>Unambiguous</li><li>Complete enough</li>
<li>Include negative cases</li><li>Include permissions</li><li>Include data conditions</li>
<li>Include error behavior</li><li>Include audit/logging if relevant</li><li>Include performance/security if relevant</li>
</ol>
<p><strong>Weak:</strong> "User can upload documents."</p>
<p><strong>Strong:</strong> "Given an authenticated claimant with an active claim, when they upload a PDF, JPG, or PNG file under 10MB, then the document is attached to the claim, virus-scanned, timestamped, and visible to assigned claim reviewers. If the file exceeds 10MB or is an unsupported type, the system rejects it and displays a clear error message."</p>
<h3>Design Review Checklist for BA/POs</h3>
<p>Before a feature moves to delivery, check:</p>
<p><strong>Business:</strong></p>
<ul><li>Is the business outcome clear?</li><li>Is the user problem validated?</li><li>Is value measurable?</li><li>Is scope explicit?</li><li>Are assumptions documented?</li></ul>
<p><strong>Functional:</strong></p>
<ul><li>Are happy paths defined?</li><li>Are exception paths defined?</li><li>Are business rules clear?</li><li>Are permissions defined?</li><li>Are state transitions clear?</li></ul>
<p><strong>Data:</strong></p>
<ul><li>Are required fields defined?</li><li>Are data sources known?</li><li>Is source of truth clear?</li><li>Are data quality rules defined?</li><li>Is historical tracking needed?</li></ul>
<p><strong>Integration:</strong></p>
<ul><li>Are upstream/downstream systems known?</li><li>Are failure scenarios defined?</li><li>Is retry/reconciliation needed?</li><li>Is latency acceptable?</li><li>Is ownership clear?</li></ul>
<p><strong>Non-functional:</strong></p>
<ul><li>Are performance expectations measurable?</li><li>Are availability needs clear?</li><li>Are audit requirements defined?</li><li>Are security/privacy needs defined?</li><li>Are support/monitoring needs defined?</li></ul>
<p><strong>Delivery:</strong></p>
<ul><li>Is this sliced small enough?</li><li>Are dependencies understood?</li><li>Are acceptance criteria testable?</li><li>Is there a rollout plan?</li><li>Is there a rollback/mitigation plan?</li></ul>`
  },
  {
    id: 'failures-interview',
    num: '14',
    title: 'Common Failure Patterns & Interview Framework',
    tag: 'PATTERNS',
    insight: 'Most system failures are traceable to one of 7 patterns. Know them before they happen to you.',
    content: `<h3>Common Failure Patterns</h3>
<p><strong>Failure 1: Feature-first thinking</strong></p>
<p>Symptom: "Build a dashboard." Missing: Who uses it? What decision does it support? What data is trusted? What action follows?</p>
<p>Fix: Start with decision, not visualization.</p>
<p><strong>Failure 2: No source of truth</strong></p>
<p>Symptom: Different systems show different customer status.</p>
<p>Fix: Define ownership, synchronization rules, conflict resolution, and audit trail.</p>
<p><strong>Failure 3: NFRs discovered too late</strong></p>
<p>Symptom: System works in demo but fails in production.</p>
<p>Fix: Define performance, security, availability, volume, and audit needs during discovery.</p>
<p><strong>Failure 4: No exception handling</strong></p>
<p>Symptom: Happy path works. Real operations break it.</p>
<p>Fix: Catalogue exceptions explicitly — Missing data · Duplicate records · Failed payment · Timeout · Rejected approval · Expired document · User lacks permission · Downstream system unavailable</p>
<p><strong>Failure 5: "MVP" is just poor quality</strong></p>
<p>Symptom: The MVP lacks audit, security, support, and reliability.</p>
<p>Fix: MVP can be small, but it must still be operationally safe.</p>
<p><strong>Failure 6: Requirements without ownership</strong></p>
<p>Symptom: Nobody can approve rules or resolve conflicts.</p>
<p>Fix: Assign business owner for each rule, data object, and workflow.</p>
<p><strong>Failure 7: Reports added at the end</strong></p>
<p>Symptom: Data needed for reporting was never captured.</p>
<p>Fix: Define KPIs, events, and data history upfront.</p>
<h3>BA/PO System Design Interview Framework</h3>
<p>When interviewing stakeholders, use this structure:</p>
<p><strong>Opening:</strong> What are you trying to achieve? · What is not working today? · What would success look like? · What happens if this is not solved?</p>
<p><strong>Process:</strong> Walk me through the current process · Where does it start and end? · Who is involved? · What tools do you use? · Where do delays happen? · Where do mistakes happen?</p>
<p><strong>Data:</strong> What information do you need? · Where does it come from? · What do you create or update? · What data do you not trust? · What reports do you use?</p>
<p><strong>Rules:</strong> What decisions do you make? · What rules guide those decisions? · Are there exceptions? · Who can override? · What approvals are needed?</p>
<p><strong>Pain:</strong> What is manual? · What is duplicated? · What is slow? · What causes rework? · What creates risk?</p>
<p><strong>Future:</strong> What should the system automate? · What should remain human-controlled? · What alerts would help? · What would make your job easier? · What would you not want changed?</p>`
  },
  {
    id: 'templates-mvp',
    num: '15',
    title: 'Practical Templates & Minimum Viable System Design Pack',
    tag: 'TEMPLATES',
    insight: 'A strong BA/PO says: "Engineering should decide the implementation, but we must clarify the business trade-offs."',
    content: `<h3>Feature Brief Template</h3>
<pre>Feature name:
Business problem:
Target users:
Desired outcome:
Success metrics:
In scope:
Out of scope:
Assumptions:
Dependencies:
Business rules:
Data required:
Integrations:
Permissions:
NFRs:
Risks:
Open questions:
MVP slice:
Acceptance criteria:</pre>
<h3>Requirement Template</h3>
<pre>Requirement ID:
Requirement type: Functional / Non-functional / Data / Integration / Reporting / Compliance
Description:
Business rationale:
User role:
Priority:
Source:
Acceptance criteria:
Business rules:
Data fields:
Dependencies:
Risks:
Owner:
Status:</pre>
<h3>Business Rule Template</h3>
<pre>Rule ID:
Rule name:
Description:
Applies to:
Condition:
Outcome:
Exceptions:
Owner:
Configurable? Yes/No
Effective date:
Audit required? Yes/No
Related requirements:</pre>
<h3>NFR Template</h3>
<pre>NFR category:
Requirement:
Metric:
Target:
Measurement method:
Applies to:
Business rationale:
Priority:
Owner:
Validation approach:</pre>
<h3>What a Strong BA/PO Brings to Technical Design Discussions</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Technical Question</th><th>BA/PO Contribution</th></tr></thead><tbody>
<tr><td>Real-time vs batch</td><td>How fresh does the business need the data?</td></tr>
<tr><td>Centralized vs distributed data</td><td>Who owns the data and what consistency is required?</td></tr>
<tr><td>Build vs buy</td><td>Which capabilities are differentiating?</td></tr>
<tr><td>Configurable rules vs hardcoded rules</td><td>How often do rules change and who owns them?</td></tr>
<tr><td>Manual approval vs automation</td><td>What is the risk of wrong decisions?</td></tr>
<tr><td>High availability</td><td>What is business impact of downtime?</td></tr>
<tr><td>Eventual consistency</td><td>Can users tolerate temporary mismatch?</td></tr>
<tr><td>Data retention</td><td>What legal/business history is required?</td></tr>
<tr><td>Audit logging</td><td>What evidence is needed and by whom?</td></tr>
</tbody></table></div>
<h3>Minimum Viable System Design Pack</h3>
<p>For most serious initiatives, a BA/PO should aim to produce at least this:</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Problem statement</li><li>Success metrics</li><li>Stakeholder map</li><li>Current-state process</li>
<li>Future-state process</li><li>Capability map</li><li>MVP scope</li><li>User roles and permissions</li>
<li>Business rules catalogue</li><li>Conceptual data model</li><li>Key user stories</li>
<li>Acceptance criteria</li><li>NFR catalogue</li><li>Integration catalogue</li>
<li>Reporting/KPI definitions</li><li>Risk and assumption log</li><li>Decision log</li>
</ol>`
  }
];

// ── SYSTEM DESIGN QUIZ QUESTIONS ─────────────────────────────────
const SYSDESIGN_QUIZ = [
  {
    q: "Which system design thinking model correctly orders the layers?",
    opts: ["Features → Outcome → Users → Data","Outcome → Users → Processes → Capabilities → Data → Integrations → Rules → Quality → Risks → Delivery","Stakeholders → Features → Architecture → Testing","Data → Rules → Users → Outcome"],
    a: 1, cat: "System Design"
  },
  {
    q: "What is a 'capability' in system design and how does it differ from a feature?",
    opts: ["Capabilities are documented features with acceptance criteria","Capabilities describe what the business must be able to do; they are more stable than features","Capabilities are technical components owned by engineering","Capabilities are the same as user stories in Agile"],
    a: 1, cat: "System Design"
  },
  {
    q: "What does 'source of truth' mean in system design?",
    opts: ["The document with the most recent requirements","The system designated as the authoritative owner of a specific data entity","The database with the highest availability","The senior stakeholder who approves requirements"],
    a: 1, cat: "System Design"
  },
  {
    q: "Which of these is a sign of 'failure 3: NFRs discovered too late'?",
    opts: ["Dashboard shows wrong data","System works in demo but fails in production","Users abandon the onboarding flow","Stakeholders disagree on priority"],
    a: 1, cat: "System Design"
  },
  {
    q: "What is 'vertical slicing' in delivery?",
    opts: ["Building each layer (DB, API, UI) separately before integrating","Delivering one complete end-to-end behavior per slice","Splitting stories across multiple teams by role","Prioritizing infrastructure before features"],
    a: 1, cat: "System Design"
  },
  {
    q: "What is the key BA/PO question when a stakeholder requests real-time data integration?",
    opts: ["What database technology should we use?","How fresh does the business actually need the data?","Can the dev team handle it in this sprint?","What is the cost of the API call?"],
    a: 1, cat: "System Design"
  },
  {
    q: "A good MVP must be:",
    opts: ["Half of every feature","Any working build regardless of security or audit","Small, but still operationally safe","Only the UI without backend logic"],
    a: 2, cat: "System Design"
  },
  {
    q: "When defining business rules, which classification covers 'Who qualifies?'",
    opts: ["Calculation","Routing","Eligibility","Compliance"],
    a: 2, cat: "System Design"
  }
];

// ── SYSTEM DESIGN QOTD ───────────────────────────────────────────
const SYSDESIGN_QOTD = [
  {
    q: "Walk through Steps 1–4 of the BA/PO system design playbook with a real example (e.g., a loan application system).",
    a: `Step 1: Define the Real Business Problem
Don't start with the solution. Example: "The current loan application process takes 5 days because most of it is manual, causing high abandonment and customer complaints. We need to reduce time-to-decision to under 1 hour."
Deliverables: Problem statement, business objective, success metrics (1-hour decision time), assumption log.

Step 2: Identify Stakeholders and Decision Rights
Map: Applicants (primary users), credit officers (decision makers), compliance (regulators), IT (operators), finance (data owners), MAS (external regulator).
Key question: Who approves requirements? Who owns credit rules?
Deliverables: Stakeholder map, RACI, decision log, escalation path.

Step 3: Understand Current State
Document the 5-day manual process: paper forms, branch officer manual review, credit bureau phone call, manager approval via email.
Pain points: Re-keying data, unclear exceptions, no progress visibility.
Deliverables: Current-state process map, pain point inventory, system landscape.

Step 4: Define Future-State Capabilities
Capabilities needed: Capture application → Validate identity (KYC) → Auto-check credit bureau → Route to credit officer → Approve/reject with reason → Notify applicant → Archive with audit trail.
Deliverables: Capability map, MVP slice (basic online form + credit check + email notification first).`
  },
  {
    q: "Explain the 7 common system design failure patterns and how to prevent each.",
    a: `1. Feature-first thinking — Teams jump from idea to features without defining outcome. Prevention: Always start with "What decision or behavior will this change?"

2. No source of truth — Different systems show conflicting data. Prevention: Define which system owns each data entity; establish sync rules and conflict resolution.

3. NFRs discovered too late — System works in demo but fails in production. Prevention: Define performance, security, availability, and volume requirements during discovery, not testing.

4. No exception handling — Happy path works; real operations break it. Prevention: Explicitly catalogue every exception: missing data, failed payments, expired documents, permission errors.

5. "MVP" is just poor quality — MVP lacks audit, security, and reliability. Prevention: MVP can be small but must be operationally safe.

6. Requirements without ownership — No one can approve rules or resolve conflicts. Prevention: Assign a business owner for every rule, data object, and workflow.

7. Reports added at the end — Data needed for reporting was never captured. Prevention: Define KPIs, events, and data history requirements upfront before any development begins.`
  }
];

// ── SYSTEM DESIGN QUOTES ─────────────────────────────────────────
const SYSDESIGN_QUOTES = [
  { text: "System design for a BA or PO is about translating a business problem into a coherent operating model, not drawing boxes.", source: "BA/PO System Design Guide" },
  { text: "Capabilities are more stable than features. Features change; capabilities endure.", source: "Step 4: Define Future-State Capabilities" },
  { text: "Many systems fail because teams never agree on nouns.", source: "Step 6: Model the Domain" },
  { text: "Business rules are not 'details.' They are often the actual product.", source: "Step 7: Define Business Rules" },
  { text: "Reporting is not an afterthought. It changes data design.", source: "Step 13: Reporting and Analytics" },
  { text: "If metric definitions are not agreed upfront, executives will argue about dashboards instead of decisions.", source: "Step 13: Reporting and Analytics" }
];

// Expose to window for page scripts
window.SYSDESIGN_DATA = {
  SYSDESIGN_INTRO,
  SYSDESIGN_SECTIONS,
  SYSDESIGN_QUIZ,
  SYSDESIGN_QOTD,
  SYSDESIGN_QUOTES
};
