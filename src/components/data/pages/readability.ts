const htmlContent = `<h2>Measuring and Improving Readability in Insurance and Health Documentation</h2>

<p>
  <strong>Type:</strong><br />
  School-based Industrial Final Year Project
</p>

<p>
  <strong>Year:</strong><br />
  2021 - 2022
</p>

<hr />

<h3>Overview</h3>
<p>
  This project investigates the readability measurement and automation of Chinese health and insurance documents, 
  initiated by <strong>Bowtie Life Insurance</strong>, a virtual medical insurer in Hong Kong. 
  Readability measurement evaluates how clear and easy a text is to read, a crucial aspect in industries that produce 
  complex written materials such as Terms &amp; Conditions (T&amp;C), disclaimers, and contracts.
</p>

<p>
  To alleviate the challenges of complex insurance documentation, this project emphasizes 
  the creation of an automated system for continuous measurement and improvement of readability. 
  The outcome benefits not only Bowtie but also the broader insurance industry by enhancing 
  transparency and customer understanding.
</p>

<hr />

<h3>Project Components</h3>

<ul>
  <li>
    <strong>Data Acquisition:</strong><br />
    Collected <strong>339 samples</strong> from Chinese Terms and Conditions (T&amp;Cs) 
    of various insurance products in Hong Kong. 
    Additionally, conducted a <strong>readability score collection study</strong> with participants, 
    resulting in a total dataset of <strong>1,356 entries</strong>.
  </li>

  <li>
    <strong>Feature Engineering:</strong><br />
    Derived <strong>36 features</strong> based on characteristics across character-level, lexical-level, 
    and syntactic-level dimensions.
  </li>

  <li>
    <strong>Data Preprocessing:</strong><br />
    Performed feature selection using correlation analysis, multicollinearity detection, 
    ANOVA tests, RIDGE regularization, and feature importance analysis via gradient boosting algorithms.
  </li>

  <li>
    <strong>Data Modeling:</strong><br />
    Trained multiple regression models including <em>multiple linear regression</em>, 
    <em>stepwise regression</em>, <em>LASSO regression</em>, and <em>non-linear regression</em> 
    to develop the optimal readability prediction model.
  </li>

  <li>
    <strong>Data Testing and Performance Evaluation:</strong><br />
    Conducted comprehensive testing to evaluate model accuracy, robustness, 
    and interpretability in predicting readability scores.
  </li>

  <li>
    <strong>Automation:</strong><br />
    Developed a fully automated system capable of analyzing multiple corpora simultaneously. 
    Users can simply place T&amp;C text files into a designated folder, and the system 
    automatically analyzes all files and generates corresponding <strong>HTML reports</strong>.
  </li>

  <li>
    <strong>Data Visualization &amp; Readability Improvement Suggestions:</strong><br />
    Implemented HTML-based visualization to highlight performance metrics and 
    identify text segments influencing readability. 
    Each HTML report presents variable-specific results, where content contributing 
    to higher or lower readability is highlighted to assist in targeted improvements.
  </li>
</ul>

<hr />

<h3>Modeling and Results</h3>
<p>
  Regression analysis formed the core of the project’s modeling phase, producing a 
  <strong>comprehensive readability formula</strong> and score for each input corpus. 
  The main focus was placed on T&amp;C datasets to achieve deeper insights. 
  The project involved extensive preprocessing of readability-affecting factors 
  and participant-based scoring data, followed by rigorous model training and validation.
</p>

<p>
  Automation and visualization were key components which enabled real-time analysis, 
  interactive exploration, and story-driven data interpretation through dashboards 
  and HTML-based reports. The resulting system is both user-friendly and effective 
  for practical use within Bowtie and similar institutions.
</p>

<hr />

<h3>Key Outcomes</h3>
<ul>
  <li>Developed an automated regression model for measuring readability of Chinese insurance and health documents.</li>
  <li>Created a scalable HTML-based visualization system for highlighting areas of improvement.</li>
  <li>Provided actionable insights for simplifying complex legal and insurance content.</li>
  <li>Demonstrated measurable enhancement in interpretability and transparency for end users.</li>
</ul>

<hr />

<h3>Tech Stack</h3>
<ul>
  <li><strong>Languages:</strong> Python</li>
  <li><strong>Libraries:</strong> pandas, NumPy, scikit-learn, matplotlib</li>
  <li><strong>Modeling:</strong> Linear Regression, LASSO, RIDGE, Gradient Boosting</li>
  <li><strong>Automation &amp; Reporting:</strong> HTML generation scripts, data pipelines</li>
  <li><strong>Visualization:</strong> plotly, seaborn, custom HTML highlights</li>
</ul>

<hr />

<h3>Presentation</h3>
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:600px;">
  <iframe 
    src="https://www.youtube.com/embed/61PZa5-JKUQ"
    title="Readability Project Presentation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;"
  ></iframe>
</div>

<hr />`;

export default htmlContent;
