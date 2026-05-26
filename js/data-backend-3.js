// ================================================================
// data-backend-3.js — MODULE 3: Sections 09–12
// ERP Technical Architecture · ERP Integration · Cloud · Data Analytics · Security
// Word-for-word from add4.txt §8.5–§11
// ================================================================
(window.BACKEND_SECTIONS = window.BACKEND_SECTIONS || []).push(

  // ── 09 ──────────────────────────────────────────────────────────
  {
    id: 'erp-technical-implementation',
    num: '09',
    title: '8. ERP Systems — Architecture, Implementation & Anti-Patterns (8.5–8.8)',
    tag: 'ERP',
    insight: '"Paving the cow path" — replicating legacy processes exactly in the new ERP — wastes investment and yields no process improvement.',
    content: `<h3>8.5 ERP Technical Architecture (What BAs Need to Know)</h3>
<p><strong>Data Model:</strong></p>
<ul>
<li><strong>Master Data</strong>: Long-lived reference data — customer master, vendor master, material master, chart of accounts, employee master. Master data governance is critical and often the #1 reason ERP projects fail or succeed.</li>
<li><strong>Transactional Data</strong>: Business events — purchase orders, sales orders, journal entries, production orders.</li>
<li><strong>Organizational Structure</strong>: Company codes, plants, sales organizations, purchasing organizations, storage locations. Defining this correctly is a foundational design decision.</li>
</ul>
<p><strong>Integration Layer:</strong></p>
<ul>
<li><strong>IDocs (SAP)</strong>: Intermediate Documents — SAP's native format for data exchange.</li>
<li><strong>BAPIs / RFCs (SAP)</strong>: Programmatic interfaces to SAP business objects and functions.</li>
<li><strong>OData / REST APIs</strong>: Modern APIs exposed by S/4HANA, Dynamics 365, Oracle Cloud.</li>
<li><strong>SOAP / Web Services</strong>: Still prevalent in many ERP integrations.</li>
<li><strong>File-based (Flat files, CSV, XML)</strong>: Still extremely common for batch integrations, especially with legacy systems, banks, and government agencies.</li>
<li><strong>Middleware / iPaaS</strong>: SAP BTP Integration Suite (formerly CPI), Oracle Integration Cloud (OIC), MuleSoft, Boomi, Microsoft Power Automate.</li>
</ul>
<p><strong>Extensibility:</strong></p>
<ul>
<li><strong>SaaS ERP philosophy</strong>: "Extend, don't modify." Use side-car extensions, APIs, and platform tools instead of changing core code.</li>
<li><strong>SAP</strong>: BTP (Business Technology Platform) for extensions, Fiori for UI, ABAP Cloud for custom logic within guardrails.</li>
<li><strong>Dynamics 365</strong>: Power Platform (Power Apps, Power Automate, Power BI) for low-code extensions, Azure for pro-code extensions.</li>
<li><strong>Oracle Cloud</strong>: Oracle Visual Builder, Application Composer, PaaS extensions on OCI.</li>
</ul>
<h3>8.6 ERP Implementation Methodology</h3>
<p><strong>Common Methodologies:</strong> SAP Activate (Discover → Prepare → Explore → Realize → Deploy → Run) · Oracle Unified Method OUM (Focus → Plan → Develop → Transition → Operate) · Microsoft Success by Design (Initiate → Implement → Prepare → Operate) · Generic (Plan → Analyze → Design → Build → Test → Deploy → Stabilize → Optimize).</p>
<p><strong>Key Activities for BAs/POs:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong>Fit-Gap Analysis</strong>: Compare out-of-the-box ERP functionality against business requirements. Categorize each requirement as Fit (standard), Gap (requires configuration), or Gap (requires customization/extension). Aim for maximum fit — excessive customization creates upgrade nightmares.</li>
<li style="margin-bottom:0.5rem"><strong>Business Process Mapping</strong>: Document current-state (as-is) and future-state (to-be) processes. Use BPMN 2.0 or similar notation. L1 (process area) → L2 (process) → L3 (sub-process) → L4 (activity/step).</li>
<li style="margin-bottom:0.5rem"><strong>Master Data Migration</strong>: Plan data cleansing, mapping, transformation, and loading. Budget 30-40% of project effort for data migration — it's always underestimated.</li>
<li style="margin-bottom:0.5rem"><strong>Configuration vs. Customization Decision</strong>: Configuration uses the ERP's built-in settings and rules — safe for upgrades; always prefer this. Customization writes custom code (ABAP, PL/SQL, X++) — creates technical debt and upgrade risk; justify every customization. Extension builds new functionality that connects to but doesn't modify the core — modern best practice for SaaS ERP.</li>
<li style="margin-bottom:0.5rem"><strong>Testing Strategy</strong>: Unit testing (individual configurations) · Integration testing (end-to-end business processes) · UAT (business users validate) · Performance/load testing · Regression testing · Cutover rehearsal.</li>
<li style="margin-bottom:0.5rem"><strong>Change Management</strong>: Often the make-or-break factor. Includes stakeholder alignment, training, communication, resistance management. ERP changes how people do their jobs daily.</li>
</ol>
<h3>8.7 ERP Anti-Patterns (What Goes Wrong)</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Anti-Pattern</th><th>Description</th><th>Consequence</th></tr></thead><tbody>
<tr><td><strong>"Paving the cow path"</strong></td><td>Replicating legacy processes exactly in the new ERP without optimization</td><td>Wasted investment, no process improvement</td></tr>
<tr><td><strong>Over-customization</strong></td><td>Modifying core ERP code to match every existing workflow</td><td>Upgrade lock-in, exponential maintenance cost, vendor support issues</td></tr>
<tr><td><strong>Big Bang go-live without rehearsal</strong></td><td>Going live on all modules in all geographies simultaneously without cutover rehearsal</td><td>Catastrophic failures, data corruption, business disruption</td></tr>
<tr><td><strong>Ignoring master data</strong></td><td>Assuming data migration "will work itself out"</td><td>Duplicate records, broken reports, failed integrations</td></tr>
<tr><td><strong>Under-investing in change management</strong></td><td>Treating ERP as a technology project, not a business transformation</td><td>User resistance, workarounds in spreadsheets, low adoption</td></tr>
<tr><td><strong>Scope creep</strong></td><td>Continuously adding requirements during build phase</td><td>Budget overrun, timeline explosion, team burnout</td></tr>
<tr><td><strong>Skipping integration testing</strong></td><td>Testing modules in isolation but not end-to-end processes</td><td>Failures at go-live when modules interact</td></tr>
</tbody></table></div>
<h3>8.8 ERP Integration Scenarios</h3>
<p>Common integration patterns in an ERP landscape:</p>
<ul>
<li><strong>ERP ↔ CRM</strong> (e.g., SAP ↔ Salesforce): Customer master sync, sales order flow, pricing/availability checks.</li>
<li><strong>ERP ↔ E-Commerce</strong> (e.g., SAP ↔ Shopify/Magento): Product catalog sync, inventory availability, order ingestion, fulfillment updates.</li>
<li><strong>ERP ↔ Warehouse Management (WMS)</strong>: Inbound/outbound delivery instructions, stock movements, pick confirmations.</li>
<li><strong>ERP ↔ Banking</strong> (Payment systems): Payment runs, bank statement imports, reconciliation.</li>
<li><strong>ERP ↔ Tax Engines</strong> (Vertex, Avalara): Tax calculation at point of sale/invoicing.</li>
<li><strong>ERP ↔ BI/Analytics</strong> (Power BI, Tableau, SAP Analytics Cloud): Data extraction for reporting and dashboards.</li>
<li><strong>ERP ↔ MES</strong> (Manufacturing Execution System): Production orders, work instructions, quality data, machine data.</li>
<li><strong>ERP ↔ PLM</strong> (Product Lifecycle Management): BOM sync, engineering change orders.</li>
<li><strong>ERP ↔ HR/HCM</strong> (SuccessFactors, Workday): Employee master data, organizational assignments, payroll data.</li>
</ul>
<p><strong>BA/PO action</strong>: For every integration, document the Interface Design Document (IDD) covering: source system, target system, direction, trigger (event vs. schedule), frequency, data payload, field mapping, error handling, and retry logic.</p>`
  },

  // ── 10 ──────────────────────────────────────────────────────────
  {
    id: 'cloud-infrastructure',
    num: '10',
    title: '9. Cloud Infrastructure Basics',
    tag: 'CLOUD',
    insight: 'Understand the release process. Can your team deploy on demand, or is there a release train every two weeks?',
    content: `<h3>9.1 Major Cloud Providers</h3>
<ul>
<li><strong>AWS</strong> (Amazon Web Services): Market leader. Broadest service portfolio.</li>
<li><strong>Microsoft Azure</strong>: Strong enterprise play. Deep Microsoft ecosystem integration.</li>
<li><strong>Google Cloud Platform (GCP)</strong>: Strong in data/analytics/ML.</li>
<li><strong>Alibaba Cloud, Huawei Cloud</strong>: Dominant in China and parts of Asia.</li>
</ul>
<h3>9.2 Key Cloud Services BAs Should Know</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Service Category</th><th>Examples</th><th>BA Relevance</th></tr></thead><tbody>
<tr><td><strong>Compute</strong></td><td>EC2, Azure VMs, Lambda, ECS/EKS</td><td>Affects scalability, cost model</td></tr>
<tr><td><strong>Storage</strong></td><td>S3, Azure Blob, Cloud Storage</td><td>Document storage, backups, data lake</td></tr>
<tr><td><strong>Database</strong></td><td>RDS, Azure SQL, DynamoDB, Cosmos DB</td><td>Data persistence decisions</td></tr>
<tr><td><strong>Networking</strong></td><td>VPC, subnets, VPN, Direct Connect</td><td>Security boundaries, hybrid connectivity</td></tr>
<tr><td><strong>Identity</strong></td><td>IAM, Azure AD/Entra ID</td><td>Access control</td></tr>
<tr><td><strong>Integration</strong></td><td>API Gateway, EventBridge, Service Bus</td><td>System integration</td></tr>
<tr><td><strong>Monitoring</strong></td><td>CloudWatch, Azure Monitor, Datadog</td><td>Operational visibility</td></tr>
</tbody></table></div>
<h3>9.3 Deployment Concepts</h3>
<ul>
<li><strong>CI/CD (Continuous Integration / Continuous Deployment)</strong>: Automated pipeline that builds, tests, and deploys code changes. Enables frequent, reliable releases.</li>
<li><strong>Infrastructure as Code (IaC)</strong>: Define infrastructure in code (Terraform, CloudFormation, Pulumi). Enables reproducible, auditable environments.</li>
<li><strong>Containers &amp; Orchestration</strong>: Docker (packaging), Kubernetes (orchestration). Enables consistent deployment across environments.</li>
<li><strong>Blue-Green / Canary Deployments</strong>: Techniques for releasing changes with minimal risk. Blue-green: two identical environments, switch traffic. Canary: route a small % of traffic to new version first.</li>
</ul>
<p><strong>BA/PO implication</strong>: Understand the release process. Can your team deploy on demand, or is there a release train every two weeks? This affects how fast features reach users. Ask about rollback capabilities — if a release breaks something, how fast can the team revert?</p>`
  },

  // ── 11 ──────────────────────────────────────────────────────────
  {
    id: 'data-analytics-architecture',
    num: '11',
    title: '10. Data & Analytics Architecture',
    tag: 'DATA & ANALYTICS',
    insight: '"We need a report" is never just a report — it requires source data, quality validation, transformation logic, refresh frequency, access controls, and visualization.',
    content: `<h3>10.1 ETL vs. ELT</h3>
<ul>
<li><strong>ETL</strong> (Extract, Transform, Load): Data is transformed before loading into the warehouse. Traditional approach.</li>
<li><strong>ELT</strong> (Extract, Load, Transform): Data is loaded raw, then transformed inside the warehouse. Modern approach enabled by powerful cloud warehouses.</li>
</ul>
<h3>10.2 Data Pipeline Concepts</h3>
<ul>
<li><strong>Batch Processing</strong>: Large volumes processed on a schedule (hourly, daily). Tools: Apache Spark, AWS Glue, dbt.</li>
<li><strong>Stream Processing</strong>: Data processed as it arrives in real time. Tools: Kafka Streams, Apache Flink, Spark Streaming.</li>
<li><strong>Data Orchestration</strong>: Scheduling and managing pipeline dependencies. Tools: Apache Airflow, Dagster, Prefect.</li>
</ul>
<h3>10.3 Data Governance</h3>
<ul>
<li><strong>Data Catalog</strong>: Registry of all data assets, their owners, and metadata (e.g., Alation, Atlan, DataHub).</li>
<li><strong>Data Lineage</strong>: Tracking where data comes from and how it's transformed through the pipeline.</li>
<li><strong>Data Quality</strong>: Rules, validation, and monitoring to ensure data accuracy (e.g., Great Expectations, Monte Carlo, Soda).</li>
<li><strong>Master Data Management (MDM)</strong>: Single source of truth for critical data entities (customers, products, vendors). Especially critical in ERP landscapes with multiple systems.</li>
</ul>
<p><strong>BA/PO implication</strong>: "We need a report" is never just a report. It requires: source data identification, data quality validation, transformation logic, refresh frequency, access controls, and a visualization layer. Budget accordingly.</p>`
  },

  // ── 12 ──────────────────────────────────────────────────────────
  {
    id: 'security-architecture',
    num: '12',
    title: '11. Security Architecture',
    tag: 'SECURITY',
    insight: '"Never trust, always verify." Every request is authenticated and authorized regardless of network location.',
    content: `<h3>11.1 Defense in Depth</h3>
<p>Security is implemented in layers, not as a single perimeter:</p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong>Network security</strong>: Firewalls, VPCs, network segmentation, DDoS protection.</li>
<li style="margin-bottom:0.5rem"><strong>Application security</strong>: Input validation, OWASP Top 10 mitigations, secure coding practices.</li>
<li style="margin-bottom:0.5rem"><strong>Data security</strong>: Encryption at rest and in transit, data masking, tokenization (especially for PCI-DSS).</li>
<li style="margin-bottom:0.5rem"><strong>Identity security</strong>: MFA, least privilege, just-in-time access, privileged access management.</li>
<li style="margin-bottom:0.5rem"><strong>Operational security</strong>: Vulnerability scanning, penetration testing, incident response plans, security monitoring (SIEM).</li>
</ol>
<h3>11.2 Compliance Frameworks BAs Should Know</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Framework</th><th>Domain</th><th>Key Requirement</th></tr></thead><tbody>
<tr><td><strong>GDPR</strong></td><td>EU data privacy</td><td>Right to erasure, data portability, consent management, data processing agreements</td></tr>
<tr><td><strong>PDPA</strong></td><td>Malaysian data privacy</td><td>Similar to GDPR — consent, access, correction rights</td></tr>
<tr><td><strong>SOC 2</strong></td><td>Service organization controls</td><td>Security, availability, processing integrity, confidentiality, privacy</td></tr>
<tr><td><strong>PCI-DSS</strong></td><td>Payment card data</td><td>Encryption, access controls, network segmentation, regular audits</td></tr>
<tr><td><strong>HIPAA</strong></td><td>US healthcare data</td><td>PHI protection, access controls, audit trails</td></tr>
<tr><td><strong>ISO 27001</strong></td><td>Information security management</td><td>Systematic approach to managing sensitive information</td></tr>
</tbody></table></div>
<h3>11.3 Zero Trust Architecture</h3>
<p>"Never trust, always verify." Every request is authenticated and authorized regardless of network location. No implicit trust based on being "inside the network."</p>
<p><strong>BA/PO action</strong>: When specifying access requirements, default to least privilege. Users should only have access to what they need, when they need it.</p>`
  }

); // end push
