// data-backend.js -- MASTER: Backend & System Design Playbook (add4.txt)
// Sections populated by data-backend-1.js ... data-backend-4.js
window.BACKEND_SECTIONS = [];
const BACKEND_INTRO = 'A comprehensive, practitioner-oriented reference including ERP systems. As a BA or PO, you do not write the code but you make decisions that constrain or enable the architecture every single day.';
const BACKEND_QUIZ = [
  { q: 'Which architecture pattern deploys each service independently with its own data store?', opts: ['Monolith','Modular Monolith','Microservices','Serverless'], a: 2, cat: 'Backend' },
  { q: 'In the CAP theorem, eventual consistency prioritises which two properties?', opts: ['Consistency and Partition tolerance','Availability and Partition tolerance','Consistency and Availability','None of the above'], a: 1, cat: 'Backend' },
  { q: 'Which API style uses binary Protocol Buffers for internal service-to-service comms?', opts: ['REST','GraphQL','gRPC','SOAP'], a: 2, cat: 'Backend' },
  { q: 'What does idempotency mean in API design?', opts: ['API responds faster second time','Same operation produces same result regardless of how many times it is called','API automatically retries','API encrypts payloads'], a: 1, cat: 'Backend' },
  { q: 'Which NFR category does P95 latency under 200ms belong to?', opts: ['Scalability','Availability','Performance','Security'], a: 2, cat: 'Backend' },
  { q: 'What is the purpose of an API Gateway?', opts: ['Stores API responses','Single entry point handling routing, auth, rate limiting, and load balancing','Replaces databases with in-memory cache','Creates API docs automatically'], a: 1, cat: 'Backend' },
  { q: 'In ERP, what does Fit-Gap Analysis mean?', opts: ['Analysing server performance gaps','Comparing ERP functionality to business requirements to identify gaps','Measuring integration data gaps','Reviewing UI gaps'], a: 1, cat: 'Backend' },
  { q: 'Key difference between a Message Queue and a Streaming Platform?', opts: ['Queues are faster; streaming is more reliable','Queues process messages once then delete; streaming stores durable ordered logs that can be replayed','Streaming is for small messages; queues for large','They are the same'], a: 1, cat: 'Backend' }
];
const BACKEND_QOTD = [
  { q: 'A stakeholder says order status must update in real time. What clarifying questions?', a: '1. What does real time mean? 100ms, 1s, 5s?\n2. Who is the audience?\n3. What triggers the status change?\n4. Is slight staleness acceptable for lower cost or higher availability?\n5. What happens if delayed?\n6. How many concurrent users at peak?\n7. Guaranteed delivery or best-effort?\n\nThese determine: synchronous API, event-driven architecture, WebSocket push, or polling.' },
  { q: 'Explain Build vs Buy vs Open-Source with an example for each.', a: 'BUILD: fintech builds own fraud detection -- core IP no vendor can replicate.\n\nBUY: buy Workday for payroll -- paying employees is not a competitive advantage.\n\nOPEN-SOURCE: PostgreSQL, Kafka, Kubernetes -- infrastructure.\n\nRule of thumb: Buy for commodity, build for competitive advantage, use open-source for infrastructure.' }
];
const BACKEND_QUOTES = [
  { text: 'When you define a requirement like the system must support 10,000 concurrent users, you are making a system design decision whether you realize it or not.', source: 'Section 1.1' },
  { text: 'Every feature has cost, performance, and complexity trade-offs. You are the one negotiating scope.', source: 'Section 1.2' },
  { text: 'There are only two hard things in computer science: cache invalidation and naming things.', source: 'Phil Karlton' },
  { text: 'Buy for commodity, build for competitive advantage, use open-source for infrastructure.', source: 'Section 12.2' },
  { text: 'Master data governance is critical and often the number one reason ERP projects fail or succeed.', source: 'Section 8.5' },
  { text: 'System design is a discipline of trade-offs, not absolute rules.', source: 'Section 16' }
];
window.BACKEND_DATA = {
  BACKEND_INTRO,
  get BACKEND_SECTIONS() { return window.BACKEND_SECTIONS; },
  BACKEND_QUIZ,
  BACKEND_QOTD,
  BACKEND_QUOTES
};