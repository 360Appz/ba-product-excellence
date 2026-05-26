// ================================================================
// data-erp-3.js — MODULE 3: Part 4 ERP Modules + Part 5 Critical Success Factors
// Word-for-word from add5.txt — §4.1–§4.6 · §5.1–§5.4
// ================================================================
(window.ERP_SECTIONS = window.ERP_SECTIONS || []).push(

  // ── 08 ──────────────────────────────────────────────────────────
  {
    id: 'erp-modules-finance-scm',
    num: '08',
    title: 'Part 4: ERP Modules — Finance & SCM (4.1–4.2)',
    tag: 'PART 4',
    insight: 'The GL is the foundation of all financial reporting. Every other financial module posts to the General Ledger.',
    content: `<h3>4.1 Financial Management (Finance Module)</h3>
<p>Financial management is the core of every ERP implementation. All other modules integrate into Finance for accounting and reporting.</p>
<p><strong>Sub-Modules:</strong></p>
<p><strong>General Ledger (GL)</strong> — Chart of Accounts management · Journal entries and period-end closing · Financial statements (Balance Sheet, P&amp;L, Cash Flow) · Multi-currency and multi-entity consolidation · 🔴 Key Concept: GL is the foundation. Every financial transaction flows through here.</p>
<p><strong>Accounts Payable (AP)</strong> — Vendor invoice processing · Three-way matching (PO → Goods Receipt → Invoice) · Payment processing and bank reconciliation · Vendor master management</p>
<p><strong>Accounts Receivable (AR)</strong> — Customer invoicing and collections · Credit management and aging reports · Cash application · Collections workflow</p>
<p><strong>Fixed Assets (FA)</strong> — Asset tracking (equipment, property) · Depreciation calculations (straight-line, declining balance) · Asset retirement and disposal</p>
<p><strong>Cash Management</strong> — Bank account management · Cash flow forecasting · Treasury management</p>
<p>💡 <strong>BA Pro Tip</strong>: In every ERP implementation, start with Finance. It's the most critical, most regulated, and most complex. Finance go-live success is what executives measure.</p>
<h3>4.2 Supply Chain Management (SCM)</h3>
<p><strong>Procurement / Purchasing:</strong> Supplier management and RFQ/RFP · Purchase order creation and approval workflows · Contract management · Supplier performance tracking</p>
<p><strong>Inventory Management:</strong> Real-time stock levels across warehouses · Lot and serial number tracking · Cycle counting and physical inventory · Inventory valuation (FIFO, LIFO, Average Cost)</p>
<p><strong>Order Management:</strong> Sales order processing · Availability-to-Promise (ATP) checking · Delivery scheduling and fulfillment · Returns and reverse logistics</p>
<p><strong>Warehouse Management System (WMS):</strong> Bin/location management · Pick, pack, ship workflows · Barcode scanning and RF device integration · Cross-docking optimization</p>
<p><strong>Demand Planning:</strong> Sales forecasting · Safety stock optimization · Seasonal adjustment · Statistical modeling</p>
<p><strong>Transportation Management (TMS):</strong> Carrier selection and rate shopping · Route optimization · Freight cost management · Compliance documentation</p>`
  },

  // ── 09 ──────────────────────────────────────────────────────────
  {
    id: 'erp-modules-manufacturing-hr-crm',
    num: '09',
    title: 'Part 4: Manufacturing, HR, CRM & Emerging Modules (4.3–4.6)',
    tag: 'PART 4',
    insight: 'Most ERP implementations exclude CRM — dedicated tools like Salesforce often win. The integration between ERP and CRM is where BA work is critical.',
    content: `<h3>4.3 Manufacturing &amp; Production</h3>
<p><strong>MRP (Material Requirements Planning):</strong> Bill of Materials (BOM) management · Production order creation · Material requirement calculation · Capacity planning</p>
<p><strong>Shop Floor Control:</strong> Work order management · Production scheduling · Machine and labor time tracking · Quality control checkpoints</p>
<p><strong>Quality Management:</strong> Inspection plans and quality gates · Non-conformance management · Statistical Process Control (SPC) · Certificates of analysis</p>
<p><strong>Product Lifecycle Management (PLM):</strong> New product introduction workflows · Engineering change management · Product configuration and variants</p>
<p><strong>Enterprise Asset Management (EAM):</strong> Preventive maintenance scheduling · Work order management for maintenance · Spare parts management · Equipment performance tracking</p>
<h3>4.4 Human Capital Management (HCM/HR)</h3>
<p><strong>Core HR:</strong> Employee master data (org structure, positions, reporting hierarchy) · Employment lifecycle (hire to retire) · Document management</p>
<p><strong>Payroll:</strong> Gross to net calculation · Tax compliance by jurisdiction · Benefits integration · Labor costing to Finance</p>
<p><strong>Time &amp; Attendance:</strong> Shift scheduling · Clock-in/out tracking · Absence and leave management · Overtime calculation</p>
<p><strong>Benefits Administration:</strong> Health insurance enrollment · 401k management · FSA/HSA tracking · Open enrollment workflows</p>
<p><strong>Talent Management:</strong> Recruitment and applicant tracking · Performance management · Learning and development · Succession planning</p>
<h3>4.5 Customer Relationship Management (CRM)</h3>
<p><strong>Sales Force Automation (SFA):</strong> Lead and opportunity management · Pipeline and forecast visibility · Quote-to-Order integration with ERP</p>
<p><strong>Marketing Automation:</strong> Campaign management · Lead generation and scoring · Email and digital marketing integration</p>
<p><strong>Customer Service:</strong> Case and ticket management · Service level agreements · Knowledge base and self-service portal</p>
<p>💡 <strong>BA Note</strong>: Most ERP implementations exclude CRM — dedicated tools like Salesforce often win. The integration between ERP (for orders/invoices) and CRM (for opportunities/customers) is where BA integration work is critical.</p>
<h3>4.6 Emerging &amp; Specialized Modules</h3>
<p><strong>ESG (Environmental, Social, Governance):</strong> Carbon tracking and reporting · Supply chain sustainability metrics · Social impact measurement · Regulatory ESG reporting (CSRD in EU)</p>
<p><strong>IoT Integration:</strong> Sensor data collection from equipment · Real-time production monitoring · Predictive maintenance alerts</p>
<p><strong>Blockchain:</strong> Supply chain traceability · Smart contracts for procurement · Fraud prevention in financial transactions</p>`
  },

  // ── 10 ──────────────────────────────────────────────────────────
  {
    id: 'erp-success-factors',
    num: '10',
    title: 'Part 5: Critical Success Factors, Failure Factors & KPIs (5.1–5.4)',
    tag: 'PART 5',
    insight: 'The #1 failure factor is poor change management — 55-75% of ERP projects experience challenges largely due to user resistance, not technical issues.',
    content: `<h3>5.1 Why ERP Projects Fail (🔴 Critical for Interviews)</h3>
<p>Understanding failure factors helps business analysts proactively mitigate them.</p>
<p><strong>Top Failure Factors (Ranked by Frequency):</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>Poor Change Management</strong> (43% of failures): Insufficient user training, no communication strategy, resistance ignored</li>
<li style="margin-bottom:0.4rem"><strong>Scope Creep</strong> (38%): Requirements growing uncontrolled during implementation</li>
<li style="margin-bottom:0.4rem"><strong>Data Quality Issues</strong> (35%): Poor master data, missing fields, inconsistent formats</li>
<li style="margin-bottom:0.4rem"><strong>Inadequate Executive Sponsorship</strong> (32%): Leadership not visibly committed or removing roadblocks</li>
<li style="margin-bottom:0.4rem"><strong>Under-resourcing</strong> (30%): Business resources not allocated — subject matter experts remain on day jobs during implementation</li>
<li style="margin-bottom:0.4rem"><strong>Customization Overload</strong> (28%): Too many code modifications creating upgrade and maintenance nightmares</li>
<li style="margin-bottom:0.4rem"><strong>Poor Requirements Definition</strong> (25%): Vague or incomplete business requirements</li>
<li style="margin-bottom:0.4rem"><strong>Integration Complexity</strong> (22%): Underestimating the work to connect ERP with other systems</li>
</ol>
<h3>5.2 Critical Success Factors</h3>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li style="margin-bottom:0.4rem"><strong>Executive Sponsorship</strong>: C-suite champion who removes barriers, resolves conflicts, and communicates urgency</li>
<li style="margin-bottom:0.4rem"><strong>Dedicated Project Team</strong>: Full-time business resources, not part-time split with operational roles</li>
<li style="margin-bottom:0.4rem"><strong>Data Quality Initiative</strong>: Start data cleansing 6-12 months before go-live</li>
<li style="margin-bottom:0.4rem"><strong>Process-First Mindset</strong>: Reengineer business processes to fit ERP; avoid customizing ERP to fit broken processes</li>
<li style="margin-bottom:0.4rem"><strong>Change Management Program</strong>: Structured communication, training, and resistance management plan</li>
<li style="margin-bottom:0.4rem"><strong>Clear Governance</strong>: Steering committee, change control board, escalation paths defined upfront</li>
<li style="margin-bottom:0.4rem"><strong>Realistic Timeline</strong>: Most implementations take 12-36 months; compress this and quality suffers</li>
<li style="margin-bottom:0.4rem"><strong>Phased Scope</strong>: Go live with core functionality (MVP) then iterate vs. trying to do everything at once</li>
</ol>
<h3>5.3 KPIs for Measuring ERP Success</h3>
<p><strong>Project Success Metrics:</strong> On-time delivery · On-budget delivery · Scope achieved · User acceptance test pass rate · Training completion rate</p>
<p><strong>Post Go-Live Operational Metrics:</strong></p>
<ul>
<li>System uptime/availability (target 99.9%)</li>
<li>User adoption rate (target 80%+ active users within 30 days)</li>
<li>Data accuracy rate (target 98%+ for master data)</li>
<li>Process cycle time reduction (e.g., invoice processing: 5 days → 2 days)</li>
<li>Report generation time reduction</li>
</ul>
<p><strong>Business Outcome KPIs (12-24 months post go-live):</strong></p>
<ul>
<li>Inventory accuracy and reduction</li>
<li>Order fulfillment cycle time</li>
<li>Days Sales Outstanding (DSO) and Days Payable Outstanding (DPO)</li>
<li>Cost per transaction reduction</li>
<li>Compliance achievement (zero audit findings)</li>
</ul>
<h3>5.4 Competitive Advantages &amp; Risk Framework</h3>
<p><strong>Your Competitive Advantage as BA on ERP Projects:</strong></p>
<ol style="padding-left:1.5rem;margin-bottom:1rem">
<li><strong>Risk Identification</strong>: Anticipate problems before they materialize</li>
<li><strong>Stakeholder Bridge</strong>: Communicate technical concepts to business, business needs to IT</li>
<li><strong>Requirements Quality</strong>: Well-written requirements reduce rework by 70%</li>
<li><strong>Decision Acceleration</strong>: Bring analysis and options; don't just escalate problems</li>
</ol>
<p><strong>Enterprise-Level Risk Categories to Monitor:</strong> Technical (integration failures, performance) · Data (quality, migration, governance) · Process (adoption, reengineering resistance) · Project (scope, timeline, budget, resource) · Vendor (stability, support, roadmap alignment)</p>`
  }

); // end push
