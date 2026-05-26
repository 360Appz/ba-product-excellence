// ================================================================
// data-backend-1.js — MODULE 1: Sections 01–04
// Foundational Concepts · Architecture Patterns · Databases · APIs
// Word-for-word from add4.txt §1–§4
// ================================================================
(window.BACKEND_SECTIONS = window.BACKEND_SECTIONS || []).push(

  // ── 01 ──────────────────────────────────────────────────────────
  {
    id: 'foundational-concepts',
    num: '01',
    title: '1. Foundational Concepts',
    tag: 'FOUNDATION',
    insight: 'When you define a requirement like "the system must support 10,000 concurrent users," you are making a system design decision whether you realize it or not.',
    content: `<h3>1.1 What "Backend" and "System Design" Mean for a BA/PO</h3>
<p>As a BA or PO, you don't write the code — but you make decisions that constrain or enable the architecture every single day. When you define a requirement like "the system must support 10,000 concurrent users" or "order status must update in real time," you are making a system design decision whether you realize it or not.</p>
<p><strong>Backend</strong> refers to everything the user doesn't see: servers, databases, APIs, business logic, integrations, message queues, caching layers, and batch jobs. <strong>System design</strong> is the discipline of deciding how all these pieces fit together to meet functional and non-functional requirements.</p>
<h3>1.2 Why This Matters for BAs/POs</h3>
<ul>
<li><strong>Feasibility assessment</strong> — You need to know if a requirement is trivially easy, architecturally expensive, or physically impossible within the timeline.</li>
<li><strong>Trade-off negotiation</strong> — Every feature has cost, performance, and complexity trade-offs. You're the one negotiating scope.</li>
<li><strong>Better user stories</strong> — Understanding backend constraints lets you write stories that are implementable, testable, and appropriately sized.</li>
<li><strong>Vendor evaluation</strong> — Especially for ERP, CRM, and SaaS procurement, you need to evaluate architectures, not just feature checklists.</li>
<li><strong>Incident understanding</strong> — When production breaks, you need to understand the post-mortem and make prioritization decisions.</li>
</ul>`
  },

  // ── 02 ──────────────────────────────────────────────────────────
  {
    id: 'backend-architecture-patterns',
    num: '02',
    title: '2. Backend Architecture Patterns',
    tag: 'ARCHITECTURE',
    insight: 'Features that span multiple services require cross-team coordination. "Simple" features can become complex if they touch 5 services.',
    content: `<h3>2.1 Monolith</h3>
<p>A single deployable unit containing all business logic, data access, and UI serving.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Aspect</th><th>Detail</th></tr></thead><tbody>
<tr><td><strong>When to choose</strong></td><td>Early-stage products, small teams (&lt; 8 devs), when domain boundaries are unclear</td></tr>
<tr><td><strong>Strengths</strong></td><td>Simple deployment, easy debugging, low operational overhead, single database transactions</td></tr>
<tr><td><strong>Weaknesses</strong></td><td>Scaling is all-or-nothing, long build times as codebase grows, tight coupling, risky deployments</td></tr>
<tr><td><strong>BA/PO implication</strong></td><td>Feature delivery is fast early on but slows as system grows. Releases require full regression.</td></tr>
</tbody></table></div>
<h3>2.2 Modular Monolith</h3>
<p>A monolith with strict internal module boundaries — modules communicate through defined interfaces, not direct database access.</p>
<ul>
<li>This is increasingly recommended as a "best of both worlds" starting point.</li>
<li>Each module owns its own tables; cross-module communication goes through internal APIs.</li>
<li><strong>BA/PO implication</strong>: You can organize teams by module/domain and later extract modules into services if needed.</li>
</ul>
<h3>2.3 Microservices</h3>
<p>The system is decomposed into small, independently deployable services, each owning its own data store.</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Aspect</th><th>Detail</th></tr></thead><tbody>
<tr><td><strong>When to choose</strong></td><td>Large organizations, multiple teams, when different components have different scaling needs</td></tr>
<tr><td><strong>Strengths</strong></td><td>Independent deployment, technology flexibility per service, isolated failure domains, team autonomy</td></tr>
<tr><td><strong>Weaknesses</strong></td><td>Distributed system complexity (network failures, data consistency), operational overhead (monitoring, tracing), harder debugging</td></tr>
<tr><td><strong>BA/PO implication</strong></td><td>Features that span multiple services require cross-team coordination. "Simple" features can become complex if they touch 5 services. You need to understand service boundaries to scope work accurately.</td></tr>
</tbody></table></div>
<h3>2.4 Service-Oriented Architecture (SOA)</h3>
<p>Precursor to microservices — larger, coarser-grained services, often communicating via an Enterprise Service Bus (ESB). Common in legacy enterprise and ERP landscapes.</p>
<ul><li><strong>BA/PO implication</strong>: You'll encounter this in brownfield projects. Integration is often the hardest part. The ESB can be both a coordination point and a bottleneck.</li></ul>
<h3>2.5 Serverless / Functions-as-a-Service (FaaS)</h3>
<p>Code runs in ephemeral containers triggered by events (e.g., AWS Lambda, Azure Functions, Google Cloud Functions).</p>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Aspect</th><th>Detail</th></tr></thead><tbody>
<tr><td><strong>When to choose</strong></td><td>Event-driven workloads, variable/unpredictable traffic, small discrete functions</td></tr>
<tr><td><strong>Strengths</strong></td><td>No server management, pay-per-invocation, auto-scaling to zero</td></tr>
<tr><td><strong>Weaknesses</strong></td><td>Cold start latency, vendor lock-in, execution time limits, harder local development/testing</td></tr>
<tr><td><strong>BA/PO implication</strong></td><td>Great for MVPs and event-driven features (e.g., "send email when order ships"). Watch for cost surprises at high volumes.</td></tr>
</tbody></table></div>
<h3>2.6 Event-Driven Architecture (EDA)</h3>
<p>Services communicate by producing and consuming events (messages) rather than making direct synchronous calls.</p>
<p><strong>Key components:</strong></p>
<ul>
<li><strong>Event producers</strong> — emit events when something happens (e.g., "OrderPlaced")</li>
<li><strong>Event brokers</strong> — message infrastructure (Kafka, RabbitMQ, Amazon SNS/SQS, Azure Service Bus)</li>
<li><strong>Event consumers</strong> — react to events asynchronously</li>
</ul>
<p><strong>BA/PO implication</strong>: Enables loose coupling and real-time reactivity, but introduces eventual consistency. When you write "the inventory should update immediately after an order is placed," the architect will ask: "Do you mean within milliseconds synchronously, or within a few seconds asynchronously?" This distinction matters enormously.</p>
<h3>2.7 CQRS and Event Sourcing</h3>
<ul>
<li><strong>CQRS (Command Query Responsibility Segregation)</strong>: Separate models for reading and writing data. Write model is optimized for transactions; read model is optimized for queries.</li>
<li><strong>Event Sourcing</strong>: Instead of storing current state, store a sequence of events. Current state is derived by replaying events.</li>
</ul>
<p><strong>BA/PO implication</strong>: Useful for audit-heavy domains (finance, healthcare, legal). If you need "show me every change that ever happened to this record," event sourcing provides this natively. But it's complex — don't choose it for simple CRUD.</p>`
  },

  // ── 03 ──────────────────────────────────────────────────────────
  {
    id: 'databases-storage',
    num: '03',
    title: '3. Databases & Data Storage',
    tag: 'DATA',
    insight: 'When an architect says "we chose eventual consistency," they mean the system prioritizes availability — a user might briefly see stale data.',
    content: `<h3>3.1 Relational Databases (RDBMS)</h3>
<p>PostgreSQL, MySQL, SQL Server, Oracle.</p>
<ul>
<li><strong>Data model</strong>: Tables, rows, columns. Relationships via foreign keys.</li>
<li><strong>Strengths</strong>: ACID transactions, strong consistency, mature tooling, SQL is a well-known query language.</li>
<li><strong>When to choose</strong>: Structured data with clear relationships, transactional systems (orders, payments, user accounts), regulatory/compliance requirements.</li>
</ul>
<h3>3.2 NoSQL Databases</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Type</th><th>Examples</th><th>Best For</th></tr></thead><tbody>
<tr><td><strong>Document</strong></td><td>MongoDB, Couchbase</td><td>Flexible schemas, content management, catalogs</td></tr>
<tr><td><strong>Key-Value</strong></td><td>Redis, DynamoDB</td><td>Caching, session storage, high-speed lookups</td></tr>
<tr><td><strong>Wide-Column</strong></td><td>Cassandra, HBase</td><td>Time-series, IoT, write-heavy workloads at massive scale</td></tr>
<tr><td><strong>Graph</strong></td><td>Neo4j, Amazon Neptune</td><td>Relationship-heavy queries (social networks, fraud detection, knowledge graphs)</td></tr>
</tbody></table></div>
<h3>3.3 The CAP Theorem (Simplified for BAs)</h3>
<p>In a distributed database, you can optimize for at most two of three properties:</p>
<ul>
<li><strong>Consistency</strong> — Every read gets the most recent write</li>
<li><strong>Availability</strong> — Every request gets a response (even if stale)</li>
<li><strong>Partition tolerance</strong> — System works even when network links between nodes fail</li>
</ul>
<p><strong>BA/PO translation</strong>: When an architect says "we chose eventual consistency," they mean the system prioritizes availability — a user might briefly see stale data. If your requirement is "the balance must always be accurate," you're demanding strong consistency, which has latency and availability costs.</p>
<h3>3.4 Data Warehouses &amp; Data Lakes</h3>
<ul>
<li><strong>Data Warehouse</strong> (Snowflake, BigQuery, Redshift): Structured, schema-on-write, optimized for analytical queries (OLAP). Used for BI, reporting, dashboards.</li>
<li><strong>Data Lake</strong> (S3 + Athena, Azure Data Lake, Databricks Lakehouse): Raw data in multiple formats, schema-on-read. Used for data science, ML, and exploratory analysis.</li>
<li><strong>Lakehouse</strong>: Combines aspects of both (Delta Lake, Apache Iceberg).</li>
</ul>
<p><strong>BA/PO implication</strong>: When stakeholders ask for "real-time dashboards," clarify the latency requirement. A data warehouse refreshed every 15 minutes is very different from a real-time streaming pipeline. The cost and complexity differ by orders of magnitude.</p>`
  },

  // ── 04 ──────────────────────────────────────────────────────────
  {
    id: 'apis-integration',
    num: '04',
    title: '4. APIs & Integration Patterns',
    tag: 'INTEGRATION',
    insight: 'Idempotency is critical for payment processing and retries: an operation that produces the same result if called multiple times.',
    content: `<h3>4.1 API Styles</h3>
<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Style</th><th>Description</th><th>When to Use</th></tr></thead><tbody>
<tr><td><strong>REST</strong></td><td>Resource-oriented, HTTP verbs (GET/POST/PUT/DELETE), JSON payloads</td><td>General-purpose web APIs, CRUD operations, public APIs</td></tr>
<tr><td><strong>GraphQL</strong></td><td>Client specifies exact data shape needed in a query</td><td>Mobile apps (bandwidth-sensitive), complex frontends needing data from multiple entities</td></tr>
<tr><td><strong>gRPC</strong></td><td>Binary protocol (Protocol Buffers), strongly typed, bidirectional streaming</td><td>Internal service-to-service communication, low-latency requirements</td></tr>
<tr><td><strong>SOAP</strong></td><td>XML-based, WSDL contract, WS-Security</td><td>Legacy enterprise systems, many ERP integrations still use SOAP</td></tr>
<tr><td><strong>Webhooks</strong></td><td>Server pushes events to a client-registered URL</td><td>Real-time notifications, integration with third-party services</td></tr>
</tbody></table></div>
<h3>4.2 API Design Concepts BAs Should Know</h3>
<ul>
<li><strong>Endpoints &amp; Resources</strong>: An API exposes resources (e.g., <code>/api/v1/orders/{id}</code>). Each endpoint maps to an operation.</li>
<li><strong>Versioning</strong>: APIs change over time. Versioning (<code>/v1/</code>, <code>/v2/</code>) prevents breaking existing consumers.</li>
<li><strong>Pagination</strong>: Large data sets are returned in pages (e.g., 50 records at a time) to prevent overloading.</li>
<li><strong>Rate Limiting</strong>: APIs restrict how many calls a client can make per time window. Critical for public APIs and third-party integrations.</li>
<li><strong>Idempotency</strong>: An operation that produces the same result if called multiple times (e.g., "set order status to shipped" is idempotent; "increment counter" is not). Critical for payment processing and retries.</li>
<li><strong>Authentication/Authorization</strong>: OAuth 2.0, API keys, JWT tokens. Determines who can access what.</li>
</ul>
<h3>4.3 Integration Patterns</h3>
<ul>
<li><strong>Point-to-Point</strong>: Direct connections between systems. Simple but creates a spaghetti mess at scale.</li>
<li><strong>Hub-and-Spoke (ESB)</strong>: Central integration hub routes all messages. Common in legacy ERP landscapes. Can be a bottleneck and single point of failure.</li>
<li><strong>Publish-Subscribe</strong>: Producers broadcast events; interested consumers subscribe. Decoupled and scalable.</li>
<li><strong>API Gateway</strong>: Single entry point for all API traffic. Handles routing, authentication, rate limiting, and load balancing (e.g., Kong, AWS API Gateway, Apigee).</li>
<li><strong>iPaaS (Integration Platform as a Service)</strong>: Cloud-based integration tools (MuleSoft, Boomi, Workato, Celigo). Increasingly common for connecting SaaS/ERP systems.</li>
</ul>
<p><strong>BA/PO implication</strong>: When you spec an integration requirement, specify: direction (one-way or bidirectional), frequency (real-time, near-real-time, batch), data volume, error handling expectations, and who owns the mapping/transformation logic.</p>`
  }

); // end push
