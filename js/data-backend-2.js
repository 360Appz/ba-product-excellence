// ================================================================
// data-backend-2.js — MODULE 2: Sections 05–08
// NFRs · Building Blocks · Authentication · ERP Fundamentals
// Word-for-word from add4.txt §5–§8.4
// ================================================================
(window.BACKEND_SECTIONS = window.BACKEND_SECTIONS || []).push(

  // ── 05 ──────────────────────────────────────────────────────────
  {
    id: 'non-functional-requirements',
    num: '05',
    title: '5. Non-Functional Requirements (NFRs)',
    tag: 'NFRs',
    insight: 'These are the requirements that BAs often under-specify but that dominate architectural decisions.',
    content: `<p>These are the requirements that BAs often under-specify but that dominate architectural decisions.</p>
<h3>5.1 Performance &amp; Latency</h3>
<ul>
<li><strong>Response time</strong>: How fast a single request completes (e.g., "P95 latency &lt; 200ms" means 95% of requests complete within 200ms).</li>
<li><strong>Throughput</strong>: How many requests per second the system can handle.</li>
<li><strong>BA/PO action</strong>: Always specify performance requirements with measurable targets, percentiles, and under what load conditions.</li>
</ul>
<h3>5.2 Scalability</h3>
<ul>
<li><strong>Vertical scaling (scale up)</strong>: Bigger machine (more CPU, RAM). Simple but has a ceiling.</li>
<li><strong>Horizontal scaling (scale out)</strong>: More machines. Requires stateless design or shared-nothing architecture.</li>
<li><strong>BA/PO action</strong>: Define expected growth. "We have 1,000 users now but expect 100,000 in 18 months" is an architectural driver.</li>
</ul>
<h3>5.3 Availability &amp; Reliability</h3>
<ul>
<li><strong>Uptime SLAs</strong>: 99.9% ("three nines") = ~8.7 hours downtime/year. 99.99% ("four nines") = ~52 minutes/year. Each additional nine is exponentially more expensive.</li>
<li><strong>Redundancy</strong>: Multiple instances, multiple data centers, failover mechanisms.</li>
<li><strong>BA/PO action</strong>: Don't say "the system must always be available." Specify the actual SLA, the acceptable maintenance window, and the impact of downtime.</li>
</ul>
<h3>5.4 Security</h3>
<ul>
<li><strong>Authentication (AuthN)</strong>: Who are you? (passwords, MFA, SSO, biometrics)</li>
<li><strong>Authorization (AuthZ)</strong>: What are you allowed to do? (RBAC — Role-Based Access Control, ABAC — Attribute-Based Access Control)</li>
<li><strong>Encryption</strong>: At rest (database encryption) and in transit (TLS/HTTPS).</li>
<li><strong>Data residency</strong>: Where is data physically stored? Critical for GDPR, PDPA (Malaysia), and other regulations.</li>
<li><strong>BA/PO action</strong>: Define access control requirements as a matrix: role × resource × permission. Specify compliance requirements (GDPR, SOC 2, HIPAA, PCI-DSS, PDPA) early — retrofitting compliance is painful and expensive.</li>
</ul>
<h3>5.5 Observability</h3>
<ul>
<li><strong>Logging</strong>: Record what happened (structured logs).</li>
<li><strong>Metrics</strong>: Measure what's happening (CPU, memory, request rates, error rates).</li>
<li><strong>Tracing</strong>: Follow a single request across multiple services (distributed tracing).</li>
<li><strong>Alerting</strong>: Notify the team when something is wrong.</li>
<li><strong>BA/PO action</strong>: Define what business events must be auditable and what SLAs trigger alerts.</li>
</ul>
<h3>5.6 Data Integrity &amp; Consistency</h3>
<ul>
<li><strong>Strong consistency</strong>: Every read reflects the most recent write. Required for financial transactions.</li>
<li><strong>Eventual consistency</strong>: Reads may temporarily return stale data. Acceptable for social media feeds, product catalogs.</li>
<li><strong>BA/PO action</strong>: For each data entity, clarify: "Is it acceptable for users to see a 5-second-old version of this data?" This drives major architectural choices.</li>
</ul>`
  },

  // ── 06 ──────────────────────────────────────────────────────────
  {
    id: 'system-design-building-blocks',
    num: '06',
    title: '6. System Design Building Blocks',
    tag: 'BUILDING BLOCKS',
    insight: '"There are only two hard things in computer science: cache invalidation and naming things." — Phil Karlton',
    content: `<h3>6.1 Load Balancers</h3>
<p>Distribute incoming traffic across multiple server instances. Prevent any single server from being overwhelmed.</p>
<ul>
<li><strong>Types</strong>: Layer 4 (TCP-level, faster) vs. Layer 7 (HTTP-level, smarter routing based on URL/headers).</li>
<li><strong>BA/PO implication</strong>: Load balancers enable horizontal scaling but require your application to be stateless (or use sticky sessions/shared session stores).</li>
</ul>
<h3>6.2 Caching</h3>
<p>Store frequently accessed data closer to the consumer to reduce latency and database load.</p>
<ul>
<li><strong>Layers</strong>: Browser cache → CDN → Application cache (Redis/Memcached) → Database query cache.</li>
<li><strong>Cache invalidation</strong>: "There are only two hard things in computer science: cache invalidation and naming things." — Phil Karlton. Stale cache = showing wrong data to users.</li>
<li><strong>BA/PO implication</strong>: When you say "this page must load in under 1 second," caching is probably how the team will achieve it. But understand that cached data can be stale.</li>
</ul>
<h3>6.3 Content Delivery Networks (CDN)</h3>
<p>Distributed network of edge servers that cache static content (images, CSS, JS, videos) close to users geographically.</p>
<ul>
<li><strong>Examples</strong>: Cloudflare, AWS CloudFront, Akamai, Fastly.</li>
<li><strong>BA/PO implication</strong>: If your users are global, a CDN is essential for performance. It also provides DDoS protection.</li>
</ul>
<h3>6.4 Message Queues &amp; Streaming Platforms</h3>
<ul>
<li><strong>Message Queues</strong> (RabbitMQ, Amazon SQS): Decouple producers and consumers. Messages are processed once and deleted.</li>
<li><strong>Streaming Platforms</strong> (Apache Kafka, Amazon Kinesis, Redpanda): Durable, ordered event logs. Messages can be replayed. Multiple consumers can read the same stream.</li>
</ul>
<p><strong>BA/PO implication</strong>: When you need "fire-and-forget" processing (e.g., "send a confirmation email after order is placed"), a message queue is the right pattern. When you need "replay all events from the last 30 days for auditing," that's a streaming platform.</p>
<h3>6.5 Background Jobs &amp; Schedulers</h3>
<ul>
<li><strong>Task queues</strong> (Celery, Sidekiq, Bull): Process work asynchronously in the background (e.g., generating reports, processing file uploads).</li>
<li><strong>Cron jobs / schedulers</strong> (Airflow, cron, cloud scheduler): Run tasks on a schedule (e.g., "generate the daily revenue report at 6 AM").</li>
</ul>
<p><strong>BA/PO implication</strong>: If you define a requirement like "generate a PDF report of all transactions," ask: does this happen on-demand (user clicks a button and waits) or asynchronously (user requests it, gets notified when it's ready)? This is a fundamental architectural choice.</p>
<h3>6.6 Search Engines</h3>
<ul>
<li><strong>Elasticsearch / OpenSearch</strong>: Full-text search, fuzzy matching, faceted search, log analytics.</li>
<li><strong>Algolia, Typesense, Meilisearch</strong>: Managed search-as-a-service with instant results.</li>
</ul>
<p><strong>BA/PO implication</strong>: If the product requires "search across 10 million products with typo tolerance, filtering by 15 attributes, and sub-100ms response," a relational database <code>LIKE</code> query won't cut it. You need a dedicated search engine.</p>`
  },

  // ── 07 ──────────────────────────────────────────────────────────
  {
    id: 'authentication-identity',
    num: '07',
    title: '7. Authentication & Identity',
    tag: 'SECURITY',
    insight: 'Define roles and permissions in a matrix early. Clarify: does "Admin" mean the same thing across all modules?',
    content: `<h3>7.1 Key Concepts</h3>
<ul>
<li><strong>SSO (Single Sign-On)</strong>: One login for multiple applications. Implemented via SAML 2.0 or OIDC (OpenID Connect).</li>
<li><strong>OAuth 2.0</strong>: Authorization framework for granting third-party applications limited access.</li>
<li><strong>MFA (Multi-Factor Authentication)</strong>: Something you know + something you have + something you are.</li>
<li><strong>Identity Provider (IdP)</strong>: Centralized identity management (Okta, Azure AD/Entra ID, Auth0, Keycloak).</li>
<li><strong>RBAC vs. ABAC</strong>:
<ul>
<li>RBAC: Permissions assigned by role (Admin, Editor, Viewer).</li>
<li>ABAC: Permissions based on attributes (department, data classification level, time of day, geography).</li>
</ul></li>
</ul>
<h3>7.2 BA/PO Action Items</h3>
<ul>
<li>Define roles and permissions in a matrix early.</li>
<li>Specify whether the system will use an existing corporate IdP or a new one.</li>
<li>Clarify: does "Admin" mean the same thing across all modules? (In ERP, it often doesn't.)</li>
<li>Specify session management: how long before auto-logout? What happens on concurrent sessions?</li>
</ul>`
  },

  // ── 08 ──────────────────────────────────────────────────────────
  {
    id: 'erp-fundamentals',
    num: '08',
    title: '8. ERP Systems — Fundamentals (8.1–8.4)',
    tag: 'ERP',
    insight: 'ERP implementations are among the most complex, expensive, and risky IT projects.',
    content: `<h3>8.1 What ERP Is (and Isn't)</h3>
<p><strong>Enterprise Resource Planning (ERP)</strong> is an integrated suite of modules that manage core business processes: finance, procurement, manufacturing, supply chain, HR, sales, and more — with a shared database.</p>
<p>What ERP is <strong>not</strong>: a silver bullet, a project management tool (though some have PM modules), or a plug-and-play solution. ERP implementations are among the most complex, expensive, and risky IT projects.</p>
<h3>8.2 Core ERP Modules</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Module</th><th>Function</th><th>Key Entities</th></tr></thead><tbody>
<tr><td><strong>Financial Management (FI/CO)</strong></td><td>General ledger, AP/AR, asset accounting, cost center accounting, budgeting</td><td>Chart of accounts, journals, invoices, cost centers</td></tr>
<tr><td><strong>Materials Management (MM) / Procurement</strong></td><td>Purchase requisitions, purchase orders, goods receipt, invoice verification, inventory management</td><td>Purchase orders, vendors, material masters, stock</td></tr>
<tr><td><strong>Sales &amp; Distribution (SD)</strong></td><td>Quotations, sales orders, delivery, billing, pricing</td><td>Customers, sales orders, deliveries, invoices</td></tr>
<tr><td><strong>Production Planning (PP) / Manufacturing</strong></td><td>BOM (Bill of Materials), routing, MRP (Material Requirements Planning), shop floor control</td><td>Work orders, BOMs, routings, production schedules</td></tr>
<tr><td><strong>Warehouse Management (WM/EWM)</strong></td><td>Storage bin management, picking, packing, shipping, inventory optimization</td><td>Warehouse structures, transfer orders, storage units</td></tr>
<tr><td><strong>Human Capital Management (HCM)</strong></td><td>Employee master data, payroll, time management, talent management, organizational structure</td><td>Employee records, pay structures, org units</td></tr>
<tr><td><strong>Plant Maintenance (PM)</strong></td><td>Preventive/corrective maintenance, equipment tracking, work orders</td><td>Equipment, maintenance plans, notifications</td></tr>
<tr><td><strong>Quality Management (QM)</strong></td><td>Inspection planning, quality notifications, certificates</td><td>Inspection lots, quality plans, defect records</td></tr>
<tr><td><strong>Project System (PS)</strong></td><td>WBS (Work Breakdown Structures), project costing, resource planning, milestone tracking</td><td>Projects, WBS elements, networks</td></tr>
</tbody></table></div>
<h3>8.3 ERP Market Landscape (Current)</h3>
<p><strong>Tier 1 (Enterprise)</strong>: SAP S/4HANA (market leader for large enterprises, in-memory HANA database, available on-premise and cloud) · Oracle Cloud ERP Fusion (strong in financials and supply chain, cloud-native) · Microsoft Dynamics 365 Finance &amp; Supply Chain Management (strong in mid-to-upper market, deep Microsoft ecosystem integration).</p>
<p><strong>Tier 2 (Upper Mid-Market)</strong>: Infor CloudSuite (industry-specific ERPs) · Epicor Kinetic (manufacturing and distribution) · IFS Cloud (asset-intensive industries) · Sage Intacct / Sage X3 (financials-focused, mid-market).</p>
<p><strong>Tier 3 (SMB)</strong>: SAP Business One / Business ByDesign · Oracle NetSuite (cloud-native) · Odoo (open-source, modular, growing rapidly) · Acumatica (cloud-native, flexible licensing) · ERPNext (open-source, lightweight).</p>
<h3>8.4 ERP Architecture Models</h3>
<ul>
<li><strong>On-Premise</strong>: Software installed on company's own servers. Full control, full responsibility. High capex. Still common in regulated industries.</li>
<li><strong>Private Cloud (Hosted)</strong>: ERP running on dedicated cloud infrastructure (e.g., RISE with SAP, Oracle Cloud@Customer). Company gets cloud benefits with more control/isolation.</li>
<li><strong>Public Cloud / SaaS</strong>: Multi-tenant, vendor-managed. Lower upfront cost, subscription model. Vendor controls upgrade cycles. Customization is more constrained — you extend, not modify.</li>
<li><strong>Hybrid</strong>: Some modules on-premise (e.g., manufacturing floor systems), some in cloud (e.g., financials, HR). Connected via integration middleware.</li>
<li><strong>Two-Tier ERP</strong>: Large enterprise uses Tier 1 ERP at HQ (e.g., SAP) and Tier 2/3 (e.g., Oracle NetSuite, Odoo) at subsidiaries or regional offices, with data flowing between them.</li>
</ul>`
  }

); // end push
