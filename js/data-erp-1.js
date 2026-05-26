// ================================================================
// data-erp-1.js — MODULE 1: Executive Summary + Part 1 ERP Fundamentals
// Word-for-word from add5.txt — How to Use · Executive Summary · §1.1–§1.4
// ================================================================
(window.ERP_SECTIONS = window.ERP_SECTIONS || []).push(

  // ── 01 ──────────────────────────────────────────────────────────
  {
    id: 'erp-exec-summary',
    num: '01',
    title: 'How to Use This Guide & Executive Summary',
    tag: 'OVERVIEW',
    insight: '55-75% of ERP projects experience challenges or partial failure. Business analysts are the critical bridge that determines whether an implementation succeeds.',
    content: `<h3>How to Use This Guide</h3>
<p>This comprehensive study guide is designed to transform you from an ERP novice to a knowledgeable business analyst capable of contributing meaningfully to ERP projects, interviews, and strategic discussions.</p>
<p><strong>Reading Strategy:</strong></p>
<ul>
<li><strong>Quick Primer</strong>: Read Executive Summary + Essential Terminology (30 minutes)</li>
<li><strong>Interview Prep</strong>: Focus on Parts 3, 9, and 11 (2 hours)</li>
<li><strong>Deep Dive</strong>: Complete reading for comprehensive mastery (6-8 hours)</li>
<li><strong>Reference Mode</strong>: Use as on-demand lookup during projects</li>
</ul>
<p><strong>Color Coding:</strong> 🔴 Critical concepts for interviews · 🟡 Important for daily BA work · 🟢 Advanced/emerging topics · 💡 Pro Tips from industry experts</p>
<h3>Executive Summary</h3>
<p><strong>What is ERP?</strong><br>Enterprise Resource Planning (ERP) is an integrated software platform that manages and automates core business processes across an organization — from finance and HR to supply chain and manufacturing — using a single, centralized database. Modern ERP systems are the digital backbone of enterprises, enabling real-time visibility, data-driven decision-making, and operational efficiency.</p>
<p><strong>Market Landscape 2025:</strong></p>
<ul>
<li><strong>Global Market Size</strong>: $66-73 billion (2025), projected to reach $136-181 billion by 2033</li>
<li><strong>Growth Rate</strong>: 7-15% CAGR depending on deployment type (cloud growing faster at 15.5%)</li>
<li><strong>Cloud Adoption</strong>: 76% of businesses migrated or began migrating to cloud ERP in 2024</li>
<li><strong>Implementation Reality</strong>: 55-75% of ERP projects experience challenges or partial failure</li>
<li><strong>Top 3 Vendors</strong>: Oracle (6.5% market share), SAP (6.57%), Microsoft Dynamics (strong growth)</li>
</ul>
<p><strong>Why Business Analysts Matter:</strong><br>Business analysts are the critical bridge between business stakeholders and technical teams in ERP projects. They translate business requirements into system specifications, conduct fit-gap analyses, lead process reengineering efforts, and drive user adoption — ultimately determining whether an ERP implementation succeeds or becomes another failure statistic.</p>`
  },

  // ── 02 ──────────────────────────────────────────────────────────
  {
    id: 'erp-fundamentals',
    num: '02',
    title: 'Part 1: ERP Fundamentals — Industry Overview & Market',
    tag: 'PART 1',
    insight: 'ERP solves the fundamental business problem of data fragmentation and process silos.',
    content: `<h3>1.1 Industry Overview</h3>
<p><strong>Core Value Proposition:</strong><br>ERP systems solve the fundamental business problem of <strong>data fragmentation and process silos</strong>. Before ERP, companies operated with disconnected systems: accounting on one platform, inventory on another, HR on spreadsheets, and manufacturing on legacy software. This created: data inconsistencies and duplicate entry, inability to get real-time business insights, manual reconciliation and reporting nightmares, and slow decision-making due to information lag.</p>
<p><strong>How ERP Creates Value:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Single Source of Truth</strong>: One database eliminates data silos</li>
<li><strong>Process Automation</strong>: Reduces manual work and errors</li>
<li><strong>Real-Time Visibility</strong>: Dashboards and analytics for instant insights</li>
<li><strong>Regulatory Compliance</strong>: Built-in controls for SOX, GDPR, HIPAA</li>
<li><strong>Scalability</strong>: Supports business growth without system replacement</li>
</ol>
<h3>1.2 Market Size &amp; Growth</h3>
<p><strong>2025 Market Statistics:</strong></p>
<ul>
<li><strong>U.S. Market</strong>: $15.06 billion, expected to reach $30.08 billion by 2035</li>
<li><strong>Global Market</strong>: Estimates range from $55-73 billion depending on methodology</li>
<li><strong>Cloud ERP Segment</strong>: $57.17 billion (2024) → $181.04 billion (2032) at 15.5% CAGR</li>
<li><strong>Customer Base</strong>: 7 million companies globally use ERP systems</li>
</ul>
<p><strong>Growth Drivers:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Digital Transformation</strong>: Companies modernizing legacy systems</li>
<li><strong>Cloud Migration</strong>: 58.5% of companies prefer phased cloud adoption</li>
<li><strong>AI Integration</strong>: Vendors embedding AI/ML for predictive analytics</li>
<li><strong>Industry Compliance</strong>: Increasing regulatory requirements</li>
<li><strong>SMB Adoption</strong>: Growing at 7% annually as cloud makes ERP accessible</li>
</ol>
<p><strong>Market Segmentation:</strong> By Deployment: Cloud (fastest growing), On-Premise (declining), Hybrid · By Enterprise Size: Large Enterprise (39% share), SMB (growing segment) · By Vertical: Manufacturing, Retail, Healthcare, Financial Services, etc.</p>`
  },

  // ── 03 ──────────────────────────────────────────────────────────
  {
    id: 'erp-business-models-value-chain',
    num: '03',
    title: 'Part 1: Business Models & Value Chain (1.3–1.4)',
    tag: 'PART 1',
    insight: 'The "crossover point" where subscription costs exceed perpetual license is approximately 8 years.',
    content: `<h3>1.3 Business Models</h3>
<p><strong>🔴 Software Licensing Models:</strong></p>
<p><strong>1. Subscription/SaaS</strong> (Dominant Model)</p>
<ul>
<li><strong>Structure</strong>: Per-user, per-month recurring fees</li>
<li><strong>Typical Pricing</strong>: $99-299 per user/month</li>
<li><strong>Benefits</strong>: Lower upfront costs, automatic updates, predictable budgeting</li>
<li><strong>Example</strong>: NetSuite starts at ~$999/month base + $99/user</li>
</ul>
<p><strong>2. Perpetual License</strong> (Traditional/Declining)</p>
<ul>
<li><strong>Structure</strong>: One-time license fee + annual maintenance (15-25% of license cost)</li>
<li><strong>Typical Pricing</strong>: $1,200-$5,000+ per user (one-time) + maintenance</li>
<li><strong>Benefits</strong>: Lower long-term costs (8+ years), full control</li>
<li><strong>Example</strong>: SAP ECC on-premise deployments</li>
</ul>
<p><strong>3. Modular Pricing</strong></p>
<ul>
<li><strong>Structure</strong>: Base platform + add-on modules</li>
<li><strong>Rationale</strong>: Pay only for needed functionality</li>
<li><strong>Example</strong>: Dynamics 365 offers separate Finance, SCM, HR modules</li>
</ul>
<p>💡 <strong>Pro Tip</strong>: The "crossover point" where subscription costs exceed perpetual license is approximately 8 years. For companies planning 10+ year implementations, perpetual may be more economical — but cloud benefits often outweigh pure cost savings.</p>
<p><strong>Vendor Revenue Streams:</strong> Software licenses/subscriptions (primary) · Implementation services (consulting, customization) · Training and certification programs · Annual maintenance and support (15-20% of license) · Third-party partner ecosystem fees</p>
<h3>1.4 Value Chain</h3>
<p><strong>ERP Value Chain from Provider to End-User:</strong></p>
<blockquote>Vendor Development → Implementation Partners → System Integrators → Internal IT Teams → End Users → Business Outcomes</blockquote>
<p><strong>Stage 1: Vendor Development</strong> — Core platform engineering (SAP, Oracle, Microsoft) · Module development (Finance, SCM, HR, CRM) · Cloud infrastructure management · Product roadmap and innovation</p>
<p><strong>Stage 2: Implementation Partners</strong> — System design and architecture · Business process consulting · Configuration and customization · Data migration services · Change management and training</p>
<p><strong>Stage 3: System Integrators</strong> — Connect ERP to legacy systems · API development and middleware · Third-party app integration (Salesforce, AWS, etc.) · Master data management</p>
<p><strong>Stage 4: Internal IT Teams</strong> — Ongoing support and maintenance · User access management · System upgrades and patches · Performance monitoring</p>
<p><strong>Stage 5: End Users</strong> — Daily operational use · Transaction processing · Report generation · Process execution</p>
<p><strong>Stage 6: Business Outcomes</strong> — Operational efficiency gains · Cost reduction (15-30% typical) · Revenue growth enablement · Compliance achievement · Competitive advantage</p>`
  }

); // end push
