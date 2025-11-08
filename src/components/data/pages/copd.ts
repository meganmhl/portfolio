const htmlContent = `<h2>COPD Management: a SMART on FHIR App for Patient Self-Monitoring</h2>

<p>
  <strong>Type:</strong><br />
  School-based Healthcare Application Project
</p>

<p>
  <strong>Year:</strong><br />
  2024
</p>


<hr />

<h3>Background</h3>
<p>
  Chronic Obstructive Pulmonary Disease (COPD) is a leading chronic condition that requires consistent monitoring to
  improve patient health outcomes and reduce the risk of exacerbation. Managing COPD effectively means tracking ongoing
  symptoms, activity, and assessments—ideally empowering both patients and providers. Integrating wearable data and
  digital questionnaires can offer clearer trends and quicker insight for timely intervention.
</p>

<hr />

<h3>Solution Overview</h3>
<p>
  The COPD Management App is a SMART-on-FHIR compatible platform for patient-driven health monitoring, enabling seamless
  viewing and submission of observations and questionnaires.
</p>

<h4>Frontend</h4>
<ul>
  <li><strong>Tech Stack:</strong> React, Bootstrap, SMART-on-FHIR</li>
  <li><strong>Authentication:</strong> <code>fhirclient</code> OAuth, contextual patient resource loading</li>
  <li><strong>Dashboard:</strong>
    <ul>
      <li>Visualizes latest heart rate, step count, and SpO₂ readings by LOINC code</li>
      <li>Applies clinical thresholds to interpret metrics</li>
      <li>Surfaces most recent CAT (COPD Assessment Test) score with intuitive color coding</li>
      <li>Action button for uploading new synthetic readings, importing and refreshing data on-demand</li>
    </ul>
  </li>
  <li><strong>Patient Tools:</strong>
    <ul>
      <li>View complete observation history with historical trends</li>
      <li>Complete CAT questionnaire, with responses summarized into follow-up recommendations</li>
      <li>Accordion display of past CAT submissions (read-only replays)</li>
      <li>Dedicated account tab with demographic info and secure session/logout controls</li>
    </ul>
  </li>
  <li><strong>Navigation:</strong> Persistent sidebar (Home, Questionnaire History, Device Record, Account, Logout); top
    bar for greetings and new CAT assessment startup</li>
</ul>

<h4>Backend (Observation Generator)</h4>
<ul>
  <li><strong>Tech Stack:</strong> FastAPI </li>
  <li><strong>Function:</strong>
    <ul>
      <li>Generates synthetic heart rate, step, and oxygen readings customized per impact level, every hour</li>
      <li>Converts generated data into FHIR transaction bundles</li>
      <li>Exposes <code>/generate/&#123;patientId&#125;</code> endpoint for frontend imports</li>
    </ul>
  </li>
</ul>

<hr />

<h3>Key Features</h3>
<ul>
  <li><strong>SMART-on-FHIR workflow:</strong> Secure launch, patient context handling, MELD sandbox compatibility</li>
  <li><strong>Dynamic Dashboard:</strong> Composite vitals trends and CAT risk assessment</li>
  <li><strong>Questionnaire Suite:</strong> Create, validate, submit, and tag CAT responses</li>
  <li><strong>Extensive History:</strong> Replay previous questionnaires and observations in detail</li>
  <li><strong>Synthetic Data Operations:</strong> Upload, visualize, and integrate backend-generated readings</li>
  <li><strong>Patient Info &amp; Security:</strong> Account management, easy logout, privacy controls</li>
</ul>

<hr />

<h3>Demonstration Video</h3>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
  <iframe 
    src="https://www.youtube.com/embed/LmBUGR0N-z4" 
    title="COPD Management Demo Video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;"
  ></iframe>
</div>
<hr />`;

export default htmlContent;

