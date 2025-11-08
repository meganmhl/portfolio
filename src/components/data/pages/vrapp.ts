import vrapp1Img from "../images/vrapp-1.png";

const htmlContent = `<h2>Exploring the Security and User Privacy of Emerging Application Ecosystems</h2>

<p>
  <strong>Type:</strong><br />
  Research Thesis on Application Privacy Practices
</p>

<p>
  <strong>Year:</strong><br />
  2024 - 2025
</p>

<hr />

<h3>Background</h3>
<p>
  Privacy labels aim to provide users with a concise summary of how applications collect and use data. However,
  particularly within fast-evolving sectors like virtual reality (VR), the dependability of these labels is uncertain.
  This study investigates the consistency of privacy labels reported on the Meta Store, evaluating current labeling
  standards and highlighting gaps or inconsistencies in disclosures.
</p>

<hr />

<h3>Methodology and Pipeline Overview</h3>
<p>
  To address the challenge, we built an end-to-end pipeline for large-scale privacy label analysis:
</p>
<ul>
  <li>
    <strong>Data Collection:</strong><br />
    Compiled a dataset of 2,890 VR apps from the Meta Store using web scraping tools. The scraping module collects
    section-level app lists and per-app details.
  </li>
  <li>
    <strong>Feature Extraction:</strong><br />
    Extracted and enriched metadata using a KeyBERT-based keyword extractor for app descriptions and privacy labels.
  </li>
  <li>
    <strong>Clustering and Anomaly Detection:</strong><br />
    Leveraged unsupervised machine learning (clustering via HDBSCAN and scikit-learn) and anomaly detection to group
    similar apps and systematically identify inconsistencies and potential under-reporting.
  </li>
  <li>
    <strong>Reporting and Analysis:</strong><br />
    Aggregated results with scripts that summarize anomaly patterns and provide cross-cluster insights for further
    manual investigation.
  </li>
</ul>

<img src="${vrapp1Img}" alt="Overview" style="max-width:100%;height:auto;border-radius:8px;margin:0.5rem 0;" />
<p><em>An overview of the VR privacy label consistency analysis pipeline</em></p>

<hr />

<h3>Key Findings</h3>
<ul>
  <li>
    <strong>Inconsistencies Identified:</strong><br />
    1,135 apps (39.3%) exhibited potential inconsistencies in their reported privacy labels when compared to similar
    apps in their cluster.
  </li>
  <li>
    <strong>Under-reporting Detected:</strong><br />
    904 apps (31.3%) were marked for likely under-reporting, suggesting notable discrepancies in privacy disclosures
    across VR apps.
  </li>
  <li>
    <strong>Qualitative Insights:</strong><br />
    Manual review of several flagged apps exposed frequent and severe label inconsistencies, validating the usefulness
    of the unsupervised anomaly-detection methods.
  </li>
  <li>
    <strong>Implications:</strong><br />
    The findings pinpoint substantial reliability issues in self-reported privacy labels, reinforcing the necessity for
    stronger, independent validation mechanisms within the VR ecosystem.
  </li>
</ul>

<hr />

<h3>Repository</h3>
<p>
  <a href="https://github.com/meganmhl/vr-apps-labelling-pipeline" target="_blank" rel="noopener noreferrer">
    View the GitHub repository
  </a>
</p>

<hr />

<h3>Tech Stack</h3>
<ul>
  <li><strong>Languages:</strong> Python</li>
  <li><strong>Web Scraping:</strong> Selenium, BeautifulSoup</li>
  <li><strong>Data Processing:</strong> pandas, NumPy</li>
  <li><strong>Clustering &amp; ML:</strong> scikit-learn, HDBSCAN</li>
  <li><strong>Keyword Extraction:</strong> KeyBERT</li>
  <li><strong>Visualization:</strong> matplotlib, plotly</li>
</ul>

<hr />`;

export default htmlContent;
