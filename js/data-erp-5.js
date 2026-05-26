// ================================================================
// data-erp-5.js — MODULE 5: Part 8 Methodologies + Part 9 Critical Knowledge Areas
// Word-for-word from add5.txt — §8.1–§8.5 · §9.1–§9.4
// ================================================================
(window.ERP_SECTIONS = window.ERP_SECTIONS || []).push(

  // ── 13 ──────────────────────────────────────────────────────────
  {
    id: 'erp-methodologies',
    num: '13',
    title: 'Part 8: Implementation Methodologies (8.1–8.5)',
    tag: 'PART 8',
    insight: 'SAP Activate (Hybrid/Agile) is the most common methodology used today. Big Bang works best when the entire organization operates on similar processes.',
    content: `<h3>8.1 Waterfall Methodology</h3>
<p><strong>Phases:</strong> Project Preparation → Business Blueprint → Realization → Final Preparation → Go-Live → Post Go-Live Support</p>
<p><strong>Advantages:</strong> Clear milestones and deliverables · Better for fixed-scope, fixed-price contracts · Well-suited when requirements are stable and well-understood · Easier to manage large teams</p>
<p><strong>Disadvantages:</strong> Inflexible to changing requirements · Business doesn't see the system until late in the project · Issues discovered late are expensive to fix · Less suited for innovative implementations</p>
<h3>8.2 Agile ERP (Scrum Framework)</h3>
<p><strong>Adapted Scrum for ERP:</strong> Sprint length: 2-4 weeks · Product Backlog: Prioritized list of features/configurations · Sprint Review: Demo completed configurations to business stakeholders · Retrospective: Continuous improvement of the implementation process</p>
<p><strong>ERP-Specific Agile Challenges:</strong></p>
<ul>
<li><strong>Integration dependencies</strong>: Module A changes affect Module B — hard to sprint independently</li>
<li><strong>Data migration</strong>: Not easily sprint-able; it's a sequential, waterfall-like process</li>
<li><strong>Testing</strong>: ERP testing requires end-to-end scenarios that span sprints</li>
<li><strong>Solution</strong>: Use Agile for configuration and business processes, Waterfall for data migration and infrastructure</li>
</ul>
<h3>8.3 Hybrid Methodology (Most Common Today)</h3>
<p>Combines waterfall structure (gated phases with clear milestones and approvals) with agile execution (sprints and iteration within phases).</p>
<p><strong>SAP Activate</strong> (SAP's official methodology — 🔴 know this for SAP interviews):</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Discover</strong>: Understand business requirements, assess SAP fit</li>
<li><strong>Prepare</strong>: Project charter, governance, environment setup</li>
<li><strong>Explore</strong>: Fit-to-Standard workshops — map business processes to SAP standard</li>
<li><strong>Realize</strong>: Configuration sprints, data migration, integrations, testing</li>
<li><strong>Deploy</strong>: User training, cutover, go-live</li>
<li><strong>Run</strong>: Hypercare support, system monitoring, continuous improvement</li>
</ol>
<h3>8.4 Deployment Strategies</h3>
<p><strong>Big Bang:</strong> All modules go live simultaneously across entire organization. Pro: Faster single cutover, no parallel systems, lower cost. Con: Highest risk, large change impact. Best for: Small companies, single-site, or when processes are uniform. 🔴 Historically had the highest failure rate for large enterprises.</p>
<p><strong>Phased by Module:</strong> Finance first, then SCM, then HR, etc. Pro: Lower risk, team builds expertise before next phase. Con: Integration testing is complex (testing Finance before SCM means testing without the full picture). Best for: Complex, multi-module implementations.</p>
<p><strong>Phased by Location/Business Unit:</strong> Region 1 goes live first, then Region 2. Pro: Lessons from first rollout improve subsequent. Con: Maintaining parallel legacy + ERP systems. Best for: Global rollouts of proven ERP templates.</p>
<p><strong>Parallel Run:</strong> Legacy and ERP run simultaneously for 1-3 months. Pro: Zero risk — compare outputs side by side. Con: Double data entry burden, very expensive. Best for: Critical financial systems, regulated industries.</p>
<p><strong>Two-Tier ERP:</strong> Corporate uses Tier 1 (SAP/Oracle), subsidiaries use Tier 2 (NetSuite/Business Central). Pro: Right tool for right size, faster subsidiary deployments. Con: Integration complexity between tiers. Best for: Large holding companies with diverse business units.</p>
<h3>8.5 Implementation Best Practices Checklist</h3>
<ul>
<li>Start data quality improvement 6-12 months before go-live</li>
<li>Dedicate (don't split) key business resources — 50-100% time on project</li>
<li>Build a governance structure before the project starts (steering committee, change control board, RACI)</li>
<li>Design the chart of accounts and organizational structure first — everything depends on it</li>
<li>Do fit-to-standard workshops before writing any requirements</li>
<li>Define the cut-off strategy for historical data migration early</li>
<li>Plan for 3+ rounds of mock data migration before cutover</li>
<li>Design go-live support model (hypercare) before you need it</li>
<li>Run performance testing with realistic data volumes before go-live</li>
</ul>`
  },

  // ── 14 ──────────────────────────────────────────────────────────
  {
    id: 'erp-critical-knowledge',
    num: '14',
    title: 'Part 9: Critical Knowledge Areas (9.1–9.4)',
    tag: 'PART 9',
    insight: 'Every ERP integration must answer: What triggers it? What data moves? In which direction? With what frequency? What happens on failure?',
    content: `<h3>9.1 Integration Architecture (🔴 High Interview Weight)</h3>
<p><strong>Common Integration Patterns:</strong></p>
<p><strong>Point-to-Point:</strong> Direct connection between two systems. Simple but creates a spaghetti architecture as systems multiply. Avoid for more than 3-4 integrations.</p>
<p><strong>Hub-and-Spoke (ESB/iPaaS):</strong> Central integration platform routes messages. Centralized monitoring, easier maintenance. MuleSoft, Dell Boomi, Azure Integration Services, SAP Integration Suite are common platforms.</p>
<p><strong>Event-Driven:</strong> Systems publish events; subscribers react asynchronously. Loose coupling, scalable. Used for high-volume integrations (e.g., IoT, e-commerce orders).</p>
<p><strong>API Gateway:</strong> Single entry point for all ERP APIs. Provides security, rate limiting, and monitoring. Essential for cloud ERP integrations.</p>
<p><strong>Integration Technologies:</strong> REST APIs (most modern integrations) · SOAP/Web Services (legacy enterprise, still common in SAP) · EDI (Electronic Data Interchange — B2B with suppliers/customers) · Flat files / SFTP (legacy, still surprisingly common) · RFC (SAP Remote Function Call) — proprietary SAP protocol</p>
<p><strong>BA Responsibility for Integrations:</strong></p>
<ul>
<li>Interface Design Document (IDD) for each integration</li>
<li>For every integration, document: What triggers it? What data moves? In which direction? With what frequency? What happens on failure? Who owns error resolution?</li>
</ul>
<h3>9.2 Data Migration (🔴 Critical Knowledge)</h3>
<p><strong>ETL (Extract, Transform, Load) Process:</strong></p>
<p><strong>Extract:</strong> Identify all source systems and data · SQL queries or export utilities · Data profiling (what is actually in the source?)</p>
<p><strong>Transform:</strong> Cleansing (remove duplicates, fix formats) · Mapping (source field → ERP field) · Enrichment (add missing required data) · Validation rules (what data is acceptable?)</p>
<p><strong>Load:</strong> ERP import tools (SAP LSMW/BAPI, Oracle FBDI, Dynamics DMF) · Iterative mock loads (#1 shows problems, #2 shows improvements, #3 is dress rehearsal) · Reconciliation reports (count and balance checks)</p>
<p><strong>Master Data Entities to Migrate (by Priority):</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li>Chart of Accounts and GL structure</li>
<li>Customer Master (sold-to, ship-to, bill-to)</li>
<li>Vendor/Supplier Master</li>
<li>Material/Product Master (including BOM, pricing)</li>
<li>Employee Master (core HR data)</li>
<li>Open Transactions (open POs, invoices, orders — the hard part)</li>
<li>Historical Data (prior period balances — typically 3-5 years)</li>
</ol>
<p><strong>Common Data Migration Challenges:</strong> Duplicates (same customer with 5 different IDs) · Orphaned records (PO line items without PO headers) · Missing required fields (ERP requires tax ID, legacy doesn't have it) · Format mismatches (legacy stores "01/30/2024", ERP requires "2024-01-30") · Encoding issues (special characters, non-ASCII)</p>
<h3>9.3 Security &amp; Compliance</h3>
<p><strong>Key Compliance Frameworks:</strong></p>
<p><strong>SOX (Sarbanes-Oxley):</strong> Applies to publicly traded companies · Controls around financial reporting · Segregation of Duties (SoD) is the #1 SOX control in ERP · Audit trail requirements for financial transactions</p>
<p><strong>GDPR:</strong> Applies to all companies with EU customers · Right to erasure (difficult in ERP transaction systems) · Data residency requirements · Consent management for HR data</p>
<p><strong>HIPAA:</strong> Healthcare industry (US) · Patient data protection · Access controls and audit logging · Business Associate Agreements with ERP vendors</p>
<p><strong>FDA 21 CFR Part 11:</strong> Life sciences industry · Electronic signatures and audit trails · System validation requirements (IQ/OQ/PQ)</p>
<p><strong>ERP Security Controls BAs Must Know:</strong></p>
<ul>
<li><strong>Role-Based Access Control (RBAC)</strong>: Users get access based on their role, not individual configuration</li>
<li><strong>SoD Matrix</strong>: Document which roles conflict (e.g., creating vendors AND approving vendor payments should not be same person)</li>
<li><strong>Audit Trail</strong>: Every transaction change logged with who, when, and what changed</li>
<li><strong>Encryption</strong>: Data at rest and in transit</li>
</ul>
<h3>9.4 Reporting &amp; Analytics Architecture</h3>
<p><strong>Reporting Layers in ERP:</strong></p>
<p><strong>Operational Reports</strong>: Day-to-day transaction reports (aging reports, open orders, inventory status). Lives in ERP transactional system. Near-real-time data.</p>
<p><strong>Management Reports</strong>: KPI dashboards, departmental metrics. Often Power BI, SAP Analytics Cloud, or embedded ERP analytics. Daily/weekly refresh.</p>
<p><strong>Executive Dashboards</strong>: High-level business performance metrics. Pre-built dashboards from data warehouse. Daily/real-time.</p>
<p><strong>Ad-hoc Analytics</strong>: Self-service querying for analysts. Data warehouse or lake with BI tools (Tableau, Qlik). Historical data.</p>
<p><strong>Data Warehouse Architecture:</strong> ERP Transactional DB (OLTP) → ETL/ELT → Data Warehouse (OLAP) → BI Layer → End Users. BA role: Define reporting requirements · Specify key metrics and calculation logic · Review dashboard wireframes · Validate data warehouse outputs against ERP source</p>`
  }

); // end push
