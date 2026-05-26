// ================================================================
// data-erp-2.js — MODULE 2: Part 2 Terminology + Part 3 Key Players
// Word-for-word from add5.txt — §2.1–§2.5 · §3.1–§3.5
// ================================================================
(window.ERP_SECTIONS = window.ERP_SECTIONS || []).push(

  // ── 04 ──────────────────────────────────────────────────────────
  {
    id: 'erp-terminology-core',
    num: '04',
    title: 'Part 2: Essential Terminology — Core Concepts & Implementation (2.1–2.2)',
    tag: 'PART 2',
    insight: 'Go-Live is the date when ERP switches from testing to production. Cutover is the final transition when legacy systems are turned off.',
    content: `<h3>2.1 Core ERP Concepts (🔴 Must-Know for Interviews)</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>ERP (Enterprise Resource Planning)</strong>: Integrated software platform managing core business processes via centralized database</li>
<li style="margin-bottom:0.4rem"><strong>Modules</strong>: Functional components of ERP system (Finance, HR, SCM, Manufacturing, CRM, etc.)</li>
<li style="margin-bottom:0.4rem"><strong>Implementation</strong>: Process of deploying and configuring ERP system in an organization</li>
<li style="margin-bottom:0.4rem"><strong>Go-Live</strong>: The date when ERP system switches from testing to production use</li>
<li style="margin-bottom:0.4rem"><strong>Cutover</strong>: Final transition weekend/period when legacy systems are turned off and ERP goes live</li>
<li style="margin-bottom:0.4rem"><strong>Master Data</strong>: Core business data entities (customers, vendors, products, employees, accounts) shared across modules</li>
<li style="margin-bottom:0.4rem"><strong>Transactional Data</strong>: Day-to-day business transactions (orders, invoices, payments, shipments)</li>
<li style="margin-bottom:0.4rem"><strong>Single Source of Truth (SSOT)</strong>: ERP's centralized database eliminating data silos and inconsistencies</li>
<li style="margin-bottom:0.4rem"><strong>Integration</strong>: Connecting ERP with other systems (CRM, e-commerce, legacy) via APIs or middleware</li>
<li style="margin-bottom:0.4rem"><strong>Customization</strong>: Modifying ERP code to meet specific business requirements (discouraged vs. configuration)</li>
</ol>
<h3>2.2 Implementation &amp; Methodology Terms</h3>
<ol start="11" style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>Fit-Gap Analysis</strong>: Comparing ERP functionality to business requirements to identify gaps requiring customization/workarounds</li>
<li style="margin-bottom:0.4rem"><strong>Business Process Reengineering (BPR)</strong>: Redesigning business processes to align with ERP best practices rather than customizing ERP</li>
<li style="margin-bottom:0.4rem"><strong>Vanilla Implementation</strong>: Deploying ERP with minimal/no customization, using out-of-the-box functionality</li>
<li style="margin-bottom:0.4rem"><strong>Bolt-on</strong>: Third-party application integrated with ERP to fill functionality gaps</li>
<li style="margin-bottom:0.4rem"><strong>Waterfall</strong>: Traditional sequential implementation methodology (Plan → Design → Build → Test → Deploy)</li>
<li style="margin-bottom:0.4rem"><strong>Agile ERP</strong>: Iterative implementation with frequent sprints and continuous delivery</li>
<li style="margin-bottom:0.4rem"><strong>Hybrid Methodology</strong>: Combining waterfall structure (gated phases) with agile execution (sprints within phases)</li>
<li style="margin-bottom:0.4rem"><strong>Big Bang</strong>: Implementing all modules across entire organization simultaneously</li>
<li style="margin-bottom:0.4rem"><strong>Phased Rollout</strong>: Gradual implementation by module, location, or business unit</li>
<li style="margin-bottom:0.4rem"><strong>Parallel Run</strong>: Operating legacy and new ERP simultaneously to verify accuracy before cutover</li>
</ol>`
  },

  // ── 05 ──────────────────────────────────────────────────────────
  {
    id: 'erp-terminology-technical',
    num: '05',
    title: 'Part 2: Technical Architecture, PM & Emerging Terms (2.3–2.5)',
    tag: 'PART 2',
    insight: 'MACH Architecture: Microservices, API-first, Cloud-native, Headless — the modern composable ERP approach.',
    content: `<h3>2.3 Technical Architecture Terms</h3>
<ol start="21" style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>Cloud ERP (SaaS)</strong>: ERP hosted on vendor's cloud infrastructure (AWS, Azure, Oracle Cloud)</li>
<li style="margin-bottom:0.4rem"><strong>On-Premise ERP</strong>: ERP installed on company's own servers and data centers</li>
<li style="margin-bottom:0.4rem"><strong>Hybrid ERP</strong>: Combination of cloud and on-premise components</li>
<li style="margin-bottom:0.4rem"><strong>Two-Tier ERP</strong>: Corporate HQ uses Tier 1 ERP (SAP/Oracle), subsidiaries use lighter Tier 2 (NetSuite, Dynamics)</li>
<li style="margin-bottom:0.4rem"><strong>Composable ERP</strong>: Modular, API-first architecture allowing mix-and-match of best-of-breed components</li>
<li style="margin-bottom:0.4rem"><strong>MACH Architecture</strong>: <strong>M</strong>icroservices, <strong>A</strong>PI-first, <strong>C</strong>loud-native, <strong>H</strong>eadless — modern composable approach</li>
<li style="margin-bottom:0.4rem"><strong>API (Application Programming Interface)</strong>: Interface enabling different systems to communicate</li>
<li style="margin-bottom:0.4rem"><strong>Middleware</strong>: Software layer facilitating integration between ERP and other applications</li>
<li style="margin-bottom:0.4rem"><strong>ETL (Extract, Transform, Load)</strong>: Data migration process pulling data from source, cleaning/transforming, loading to ERP</li>
<li style="margin-bottom:0.4rem"><strong>MDM (Master Data Management)</strong>: Processes ensuring master data quality, consistency, and governance</li>
</ol>
<h3>2.4 Project Management &amp; KPIs</h3>
<ol start="31" style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>TCO (Total Cost of Ownership)</strong>: Complete cost including software, implementation, training, maintenance, and infrastructure over system lifecycle</li>
<li style="margin-bottom:0.4rem"><strong>ROI (Return on Investment)</strong>: (Gains from ERP - TCO) / TCO expressed as percentage</li>
<li style="margin-bottom:0.4rem"><strong>TTV (Time to Value)</strong>: Duration from go-live until organization realizes measurable business benefits</li>
<li style="margin-bottom:0.4rem"><strong>User Adoption Rate</strong>: Percentage of intended users actively using the system</li>
<li style="margin-bottom:0.4rem"><strong>Change Management</strong>: Structured approach to transitioning individuals and organizations to new processes/systems</li>
<li style="margin-bottom:0.4rem"><strong>UAT (User Acceptance Testing)</strong>: Testing phase where business users validate system meets requirements</li>
<li style="margin-bottom:0.4rem"><strong>SoD (Segregation of Duties)</strong>: Internal control ensuring no single person has conflicting access rights (fraud prevention)</li>
<li style="margin-bottom:0.4rem"><strong>SOX Compliance</strong>: Sarbanes-Oxley Act requirements for financial controls and audit trails</li>
<li style="margin-bottom:0.4rem"><strong>GDPR</strong>: General Data Protection Regulation for European data privacy</li>
<li style="margin-bottom:0.4rem"><strong>System Integrator (SI)</strong>: Consulting firm specializing in ERP implementation (Accenture, Deloitte, IBM, etc.)</li>
</ol>
<h3>2.5 Emerging Buzzwords (🟢 Advanced)</h3>
<ol start="41" style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>Agentic AI</strong>: Autonomous AI agents performing tasks within ERP (auto-approvals, predictive ordering)</li>
<li style="margin-bottom:0.4rem"><strong>Hyperautomation</strong>: End-to-end process automation using AI, RPA, ML, and workflow orchestration</li>
<li style="margin-bottom:0.4rem"><strong>Embedded Analytics</strong>: Built-in BI and reporting within ERP modules (vs. separate BI tools)</li>
<li style="margin-bottom:0.4rem"><strong>Low-Code/No-Code</strong>: Platforms enabling customization via visual interfaces without programming</li>
<li style="margin-bottom:0.4rem"><strong>Headless ERP</strong>: Backend ERP decoupled from frontend UI, allowing custom user experiences</li>
<li style="margin-bottom:0.4rem"><strong>Citizen Developer</strong>: Non-IT employees creating automations and reports using low-code tools</li>
<li style="margin-bottom:0.4rem"><strong>Digital Twin</strong>: Virtual replica of physical assets/processes synchronized with ERP data</li>
<li style="margin-bottom:0.4rem"><strong>Predictive Maintenance</strong>: Using IoT + ERP data to forecast equipment failures</li>
<li style="margin-bottom:0.4rem"><strong>S/4HANA</strong>: SAP's next-gen ERP built on in-memory database (HANA) replacing SAP ECC</li>
<li style="margin-bottom:0.4rem"><strong>Dynamics 365</strong>: Microsoft's cloud ERP/CRM suite (Finance, SCM, Business Central, etc.)</li>
</ol>`
  },

  // ── 06 ──────────────────────────────────────────────────────────
  {
    id: 'erp-major-vendors',
    num: '06',
    title: 'Part 3: Major ERP Vendors — Top 5 & Tier 2 (3.1–3.2)',
    tag: 'PART 3',
    insight: 'For BA careers: SAP and Oracle certifications carry the most weight globally, but Microsoft Dynamics is fastest-growing and most accessible for career switchers.',
    content: `<h3>3.1 Major ERP Vendors (🔴 Top 5 You Must Know)</h3>
<p><strong>1. SAP</strong> (Market Leader by Customer Count)</p>
<ul>
<li><strong>Market Share</strong>: 6.57% by revenue ($8.6B), 2% by customer count (141,399 customers)</li>
<li><strong>Flagship Products</strong>: SAP S/4HANA (cloud/on-prem), SAP Business One (SMB)</li>
<li><strong>Strengths</strong>: Industry-specific depth (pharma, automotive, utilities), global operations, extensive ecosystem</li>
<li><strong>Ideal For</strong>: Large global manufacturers, enterprises with complex supply chains</li>
<li><strong>Business Analyst Focus</strong>: Process-heavy, requires deep SAP module knowledge (FI/CO, MM, SD, PP)</li>
</ul>
<p><strong>2. Oracle</strong> (Revenue Leader — Recently Surpassed SAP)</p>
<ul>
<li><strong>Market Share</strong>: 6.5% by revenue ($8.7B), 1.4% by customers (100,000)</li>
<li><strong>Flagship Products</strong>: Oracle Fusion Cloud ERP, Oracle E-Business Suite, NetSuite (acquired 2016)</li>
<li><strong>Strengths</strong>: Cloud-first strategy, strong in finance/HCM, integrated tech stack (DB, middleware, cloud)</li>
<li><strong>Ideal For</strong>: Financial services, healthcare, large enterprises migrating to cloud</li>
<li><strong>Business Analyst Focus</strong>: Strong in financial modules, requires understanding of Oracle database concepts</li>
</ul>
<p><strong>3. Microsoft Dynamics 365</strong></p>
<ul>
<li><strong>Market Share</strong>: Growing rapidly, strong in mid-market</li>
<li><strong>Flagship Products</strong>: Dynamics 365 Finance &amp; Operations, Business Central (SMB), Power Platform integration</li>
<li><strong>Strengths</strong>: Seamless Microsoft 365 integration, Power BI analytics, low-code Power Apps</li>
<li><strong>Ideal For</strong>: Microsoft-centric organizations, mid-market companies, fast-growing startups</li>
<li><strong>Business Analyst Focus</strong>: Citizen development opportunities, Excel-friendly, requires Power Platform skills</li>
</ul>
<p><strong>4. Infor</strong> (Koch Industries Owned)</p>
<ul>
<li><strong>Market Share</strong>: Niche leader in specific verticals</li>
<li><strong>Flagship Products</strong>: CloudSuite (industry-specific: Manufacturing, Healthcare, Retail, Hospitality)</li>
<li><strong>Strengths</strong>: "Micro-verticalization" — deep industry expertise in 30+ sectors</li>
<li><strong>Ideal For</strong>: Industry-specific needs (fashion, food &amp; beverage, automotive, healthcare)</li>
<li><strong>Business Analyst Focus</strong>: Industry process expertise critical, less technical configuration</li>
</ul>
<p><strong>5. NetSuite</strong> (Oracle Subsidiary)</p>
<ul>
<li><strong>Market Share</strong>: #1 cloud ERP for SMB/mid-market</li>
<li><strong>Flagship Products</strong>: NetSuite ERP (unified platform), SuiteCommerce (e-commerce)</li>
<li><strong>Strengths</strong>: Born-in-cloud architecture, fast deployment, strong in retail/wholesale</li>
<li><strong>Ideal For</strong>: Fast-growing companies, e-commerce businesses, multi-entity operations</li>
<li><strong>Business Analyst Focus</strong>: User-friendly, heavy focus on reporting/dashboards, SuiteScript customization</li>
</ul>
<h3>3.2 Tier 2 &amp; Emerging Vendors</h3>
<p><strong>Tier 2 Leaders:</strong> Sage (accounting-focused, Sage Intacct, Sage X3) · Epicor (manufacturing and distribution specialist) · IFS (strong in aerospace, defense, field service) · Acumatica (cloud ERP for mid-market) · Priority Software (manufacturing, wholesale, healthcare) · Unit4 (professional services and nonprofits)</p>
<p><strong>Emerging Disruptors:</strong> Workday (cloud ERP for finance and HCM) · Odoo (open-source ERP gaining traction in SMB) · Rambase (cloud-native Norwegian ERP for manufacturing) · Plex (cloud ERP specifically for manufacturing)</p>
<p>💡 <strong>Pro Tip</strong>: For business analyst careers, SAP and Oracle certifications carry most weight globally, but Microsoft Dynamics is fastest-growing and often more accessible for career switchers.</p>`
  },

  // ── 07 ──────────────────────────────────────────────────────────
  {
    id: 'erp-ecosystem',
    num: '07',
    title: 'Part 3: System Integrators, Supporting Technology & Regulatory Bodies (3.3–3.5)',
    tag: 'PART 3',
    insight: 'Big 4 consulting firms are the largest ERP implementers globally. Boutique specialists offer independent selection advice.',
    content: `<h3>3.3 System Integrators &amp; Consulting Partners</h3>
<p><strong>Big 4 Consulting:</strong></p>
<ul>
<li><strong>Accenture</strong>: Largest ERP implementer globally, all major platforms</li>
<li><strong>Deloitte</strong>: Strong in SAP S/4HANA transformations</li>
<li><strong>PwC</strong>: Financial services ERP expertise</li>
<li><strong>EY</strong>: Oracle Fusion Cloud specialist</li>
</ul>
<p><strong>Technology Consultancies:</strong> IBM (hybrid cloud ERP, legacy modernization) · Capgemini (European leader, SAP partnership) · TCS / Tata Consultancy Services (offshore implementation leader) · Infosys (digital transformation and cloud migrations)</p>
<p><strong>Boutique Specialists:</strong> RSM (NetSuite and mid-market focus) · Panorama Consulting (independent ERP selection advisors) · Deloitte Digital (user experience and change management)</p>
<h3>3.4 Supporting Technology Ecosystem</h3>
<p><strong>Integration Platforms:</strong> MuleSoft (Salesforce) — API-led integration · Dell Boomi — cloud integration platform · Informatica — data integration and MDM · Fivetran — automated ELT for data warehouses</p>
<p><strong>Data Migration Tools:</strong> dataZap (ChainSys) — automated migration/archival · Talend — open-source ETL · AWS Data Pipeline — cloud-native migration</p>
<p><strong>Analytics &amp; BI:</strong> Power BI (Microsoft) — ERP reporting and dashboards · Tableau (Salesforce) — visual analytics · Qlik — self-service BI · SAP Analytics Cloud — embedded SAP analytics</p>
<p><strong>Testing &amp; Quality:</strong> Tricentis — automated ERP testing · Worksoft — SAP test automation · Panaya — cloud-based testing and analytics</p>
<h3>3.5 Regulatory Bodies &amp; Industry Associations</h3>
<p><strong>Standards Organizations:</strong></p>
<ul>
<li><strong>APICS</strong> (Association for Supply Chain Management): SCM certifications</li>
<li><strong>IIBA</strong> (International Institute of Business Analysis): BA standards and CBAP certification</li>
<li><strong>PMI</strong> (Project Management Institute): ERP project management standards</li>
</ul>
<p><strong>Compliance Frameworks:</strong> SOX (Sarbanes-Oxley) — financial reporting controls · GDPR — European data protection · HIPAA — healthcare data privacy (U.S.) · ISO 27001 — information security management · NIST — cybersecurity framework</p>
<p><strong>Industry Analyst Firms:</strong> Gartner (Magic Quadrant reports, Hype Cycle for ERP) · Forrester (Wave reports on ERP vendors) · IDC (market share and forecast research) · Constellation Research (emerging technology analysis)</p>
<p><strong>Vendor Conferences (Networking Opportunities):</strong> SAP TechEd &amp; SAPPHIRE — annual SAP user conferences · Oracle OpenWorld/CloudWorld — Oracle ecosystem events · Microsoft Ignite/Inspire — Dynamics 365 focused · SuiteWorld — NetSuite user conference</p>`
  }

); // end push
