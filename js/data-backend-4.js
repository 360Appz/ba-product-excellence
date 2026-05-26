// ================================================================
// data-backend-4.js — MODULE 4: Sections 13–17
// Estimation · Specific Scenarios · Engineering Communication · Glossary · Learning Path
// Word-for-word from add4.txt §12–§16
// ================================================================
(window.BACKEND_SECTIONS = window.BACKEND_SECTIONS || []).push(

  // ── 13 ──────────────────────────────────────────────────────────
  {
    id: 'estimation-tradeoffs',
    num: '13',
    title: '12. Estimation & Trade-off Frameworks',
    tag: 'FRAMEWORKS',
    insight: 'Buy for commodity, build for competitive advantage, use open-source for infrastructure.',
    content: `<h3>12.1 The "Ilities" Checklist</h3>
<p>When evaluating any system design decision, consider these quality attributes:</p>
<p>Scalability, Availability, Reliability, Performance, Security, Maintainability, Testability, Operability, Extensibility, Portability, Compliance, Cost-effectiveness.</p>
<p>No system can maximize all of these simultaneously. Your job as BA/PO is to prioritize.</p>
<h3>12.2 Build vs. Buy vs. Open-Source</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Factor</th><th>Build</th><th>Buy (SaaS/COTS)</th><th>Open-Source</th></tr></thead><tbody>
<tr><td><strong>Time to value</strong></td><td>Slowest</td><td>Fastest</td><td>Medium</td></tr>
<tr><td><strong>Cost model</strong></td><td>Dev team cost (ongoing)</td><td>Subscription/license</td><td>Free software + implementation/support cost</td></tr>
<tr><td><strong>Customization</strong></td><td>Unlimited</td><td>Limited to vendor's extensibility</td><td>High (you have source code)</td></tr>
<tr><td><strong>Maintenance burden</strong></td><td>Yours entirely</td><td>Vendor's</td><td>Community + yours</td></tr>
<tr><td><strong>Vendor lock-in</strong></td><td>None</td><td>High</td><td>Low to moderate</td></tr>
<tr><td><strong>Best for</strong></td><td>Core differentiating capabilities</td><td>Commodity functions (email, HR, accounting)</td><td>Technical infrastructure, non-differentiating functions</td></tr>
</tbody></table></div>
<p><strong>BA/PO rule of thumb</strong>: Buy for commodity, build for competitive advantage, use open-source for infrastructure.</p>
<h3>12.3 Technical Debt</h3>
<p>Technical debt is the implied cost of rework caused by choosing a quick/easy solution now instead of a better approach that would take longer. It's not inherently bad — it's a conscious trade-off:</p>
<ul>
<li><strong>Deliberate debt</strong>: "We'll skip automated tests to hit the launch deadline. We'll add them next sprint." (Acceptable if tracked.)</li>
<li><strong>Accidental debt</strong>: "We didn't know about that pattern, so we did it the hard way." (Knowledge gap.)</li>
<li><strong>Reckless debt</strong>: "We don't have time for tests." (Never paid back.)</li>
</ul>
<p><strong>BA/PO action</strong>: Maintain a technical debt register. Allocate capacity each sprint (typically 15-20%) for paying down debt. Understand that every shortcut today is a tax on future velocity.</p>`
  },

  // ── 14 ──────────────────────────────────────────────────────────
  {
    id: 'specific-scenarios',
    num: '14',
    title: '13. Designing for Specific Scenarios',
    tag: 'SCENARIOS',
    insight: 'When two users edit the same paragraph simultaneously, what happens? Define conflict resolution rules before build starts.',
    content: `<h3>13.1 High-Traffic E-Commerce System</h3>
<ul>
<li><strong>Key concerns</strong>: Inventory accuracy, payment reliability, flash sale handling, cart abandonment.</li>
<li><strong>Architecture</strong>: CDN for static assets, caching layer (Redis) for product catalog, message queue for order processing, separate read replicas for search/browse, event-driven inventory updates, idempotent payment processing.</li>
<li><strong>BA/PO focus</strong>: Define what happens when inventory hits zero mid-transaction. Define acceptable latency for inventory sync between channels. Define retry behavior for failed payments.</li>
</ul>
<h3>13.2 Multi-Tenant SaaS Application</h3>
<ul>
<li><strong>Key concerns</strong>: Data isolation, tenant-specific configuration, per-tenant billing, noisy neighbor prevention.</li>
<li><strong>Architecture options</strong>: Shared database with tenant ID column (cheapest, least isolated), schema-per-tenant (moderate), database-per-tenant (most isolated, most expensive).</li>
<li><strong>BA/PO focus</strong>: Define tenant isolation requirements. Can one tenant's data ever be visible to another? What happens if one tenant generates massive load — should it affect others?</li>
</ul>
<h3>13.3 Real-Time Collaboration (e.g., Google Docs-style)</h3>
<ul>
<li><strong>Key concerns</strong>: Concurrent editing, conflict resolution, presence awareness, offline support.</li>
<li><strong>Architecture</strong>: WebSocket connections for real-time updates, Operational Transformation (OT) or CRDTs for conflict-free merging, event log for undo/redo.</li>
<li><strong>BA/PO focus</strong>: Define conflict resolution rules. When two users edit the same paragraph simultaneously, what happens?</li>
</ul>
<h3>13.4 IoT / Manufacturing Data Collection</h3>
<ul>
<li><strong>Key concerns</strong>: High-volume ingestion, time-series data, edge processing, unreliable connectivity.</li>
<li><strong>Architecture</strong>: Edge gateways for local processing, MQTT protocol for lightweight messaging, streaming platform (Kafka) for ingestion, time-series database (InfluxDB, TimescaleDB) for storage.</li>
<li><strong>BA/PO focus</strong>: Define data retention policies. Do you need 1-second granularity for 5 years, or can you aggregate to hourly after 30 days?</li>
</ul>`
  },

  // ── 15 ──────────────────────────────────────────────────────────
  {
    id: 'communication-engineering',
    num: '15',
    title: '14. Communication with Engineering Teams',
    tag: 'COMMUNICATION',
    insight: 'Is this a configuration or a customization? What\'s the upgrade impact?',
    content: `<h3>14.1 Artifacts BAs/POs Should Produce</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Artifact</th><th>Purpose</th><th>When</th></tr></thead><tbody>
<tr><td><strong>User Story</strong></td><td>Describe a unit of value from the user's perspective</td><td>Sprint planning</td></tr>
<tr><td><strong>Acceptance Criteria</strong></td><td>Define "done" — testable conditions</td><td>Attached to every user story</td></tr>
<tr><td><strong>Business Process Model (BPMN)</strong></td><td>Visualize process flow with swim lanes</td><td>Process analysis, ERP fit-gap</td></tr>
<tr><td><strong>Data Flow Diagram (DFD)</strong></td><td>Show how data moves between systems</td><td>Integration design</td></tr>
<tr><td><strong>Entity-Relationship Diagram (ERD)</strong></td><td>Show data entities and their relationships</td><td>Database/data model design</td></tr>
<tr><td><strong>Non-Functional Requirements Spec</strong></td><td>Quantified quality attributes</td><td>Architecture design phase</td></tr>
<tr><td><strong>Interface Design Document (IDD)</strong></td><td>Detailed integration specification</td><td>Integration build phase</td></tr>
<tr><td><strong>Decision Log</strong></td><td>Record architectural decisions and rationale</td><td>Throughout the project</td></tr>
</tbody></table></div>
<h3>14.2 Questions BAs/POs Should Ask Engineering</h3>
<p><strong>Architecture:</strong></p>
<ul>
<li>"What are the failure modes? What happens when service X is down?"</li>
<li>"What's the blast radius of a deployment failure?"</li>
<li>"How do we handle schema migrations without downtime?"</li>
</ul>
<p><strong>Data:</strong></p>
<ul>
<li>"What's the source of truth for this data entity?"</li>
<li>"What's the data retention policy?"</li>
<li>"How do we handle data consistency across services?"</li>
</ul>
<p><strong>Integration:</strong></p>
<ul>
<li>"What happens when the downstream system is unavailable?"</li>
<li>"Is this integration synchronous or asynchronous? Why?"</li>
<li>"What's the retry and dead-letter queue strategy?"</li>
</ul>
<p><strong>ERP-specific:</strong></p>
<ul>
<li>"Is this a configuration or a customization? What's the upgrade impact?"</li>
<li>"Does this change affect the standard upgrade path?"</li>
<li>"What's the transport/deployment process from dev → test → production?"</li>
</ul>`
  },

  // ── 16 ──────────────────────────────────────────────────────────
  {
    id: 'glossary',
    num: '16',
    title: '15. Glossary of Key Terms',
    tag: 'REFERENCE',
    insight: 'P95/P99 — the latency below which 95%/99% of requests complete. Always specify performance requirements with percentiles.',
    content: `<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody>
<tr><td><strong>ACID</strong></td><td>Atomicity, Consistency, Isolation, Durability — properties of reliable database transactions</td></tr>
<tr><td><strong>API</strong></td><td>Application Programming Interface — contract for how systems communicate</td></tr>
<tr><td><strong>BPMN</strong></td><td>Business Process Model and Notation — standard for process diagrams</td></tr>
<tr><td><strong>COTS</strong></td><td>Commercial Off-The-Shelf software</td></tr>
<tr><td><strong>CRUD</strong></td><td>Create, Read, Update, Delete — basic data operations</td></tr>
<tr><td><strong>DDD</strong></td><td>Domain-Driven Design — methodology for modeling complex software around business domains</td></tr>
<tr><td><strong>GDPR</strong></td><td>General Data Protection Regulation (EU)</td></tr>
<tr><td><strong>iPaaS</strong></td><td>Integration Platform as a Service</td></tr>
<tr><td><strong>MDM</strong></td><td>Master Data Management</td></tr>
<tr><td><strong>MRP</strong></td><td>Material Requirements Planning</td></tr>
<tr><td><strong>OLAP</strong></td><td>Online Analytical Processing (analytics workloads)</td></tr>
<tr><td><strong>OLTP</strong></td><td>Online Transaction Processing (transactional workloads)</td></tr>
<tr><td><strong>P95/P99</strong></td><td>95th/99th percentile — the latency below which 95%/99% of requests complete</td></tr>
<tr><td><strong>RFC</strong></td><td>Remote Function Call (SAP)</td></tr>
<tr><td><strong>SLA</strong></td><td>Service Level Agreement</td></tr>
<tr><td><strong>SLO</strong></td><td>Service Level Objective — internal target (often stricter than SLA)</td></tr>
<tr><td><strong>SOW</strong></td><td>Statement of Work</td></tr>
<tr><td><strong>TTL</strong></td><td>Time To Live — how long cached data remains valid</td></tr>
<tr><td><strong>WBS</strong></td><td>Work Breakdown Structure</td></tr>
</tbody></table></div>`
  },

  // ── 17 ──────────────────────────────────────────────────────────
  {
    id: 'learning-path',
    num: '17',
    title: '16. Recommended Learning Path',
    tag: 'CAREER',
    insight: 'This playbook is a living reference. System design is a discipline of trade-offs, not absolute rules.',
    content: `<p><strong>Level 1 — Foundation (Weeks 1-4)</strong>:<br>Start with understanding the client-server model, REST APIs, databases (relational vs. NoSQL), and basic cloud concepts. Learn to read architecture diagrams.</p>
<p><strong>Level 2 — Intermediate (Months 2-3)</strong>:<br>Study system design patterns (caching, queuing, load balancing), non-functional requirements, and integration patterns. Learn to write interface specifications.</p>
<p><strong>Level 3 — Advanced (Months 4-6)</strong>:<br>Dive into distributed systems concepts (CAP theorem, eventual consistency), event-driven architecture, microservices trade-offs, and data architecture (warehousing, streaming).</p>
<p><strong>Level 4 — ERP Specialization (Ongoing)</strong>:<br>Learn your specific ERP platform deeply — its data model, integration capabilities, extensibility model, and implementation methodology. Get certified if possible.</p>
<p><strong>Recommended Resources</strong>:</p>
<ul>
<li><em>Designing Data-Intensive Applications</em> by Martin Kleppmann (the "bible" of backend system design)</li>
<li><em>System Design Interview</em> by Alex Xu (practical, visual, accessible)</li>
<li><em>Business Analysis Body of Knowledge (BABOK)</em> by IIBA</li>
<li>Your ERP vendor's official documentation and certification paths</li>
<li>Architecture decision records (ADRs) from open-source projects for real-world examples</li>
</ul>
<blockquote>This playbook is a living reference. System design is a discipline of trade-offs, not absolute rules. Your job as a BA/PO is not to make architecture decisions — it's to provide the engineering team with the clarity, constraints, and context they need to make good ones.</blockquote>`
  }

); // end push
