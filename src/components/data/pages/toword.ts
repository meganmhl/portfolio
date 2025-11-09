import towordVideo from "../images/toword.mov";
import towordCover from "../images/toword-cover.png";

const htmlContent = `<h2>Numeric to Words Converter</h2>

<p>
  <strong>Type:</strong><br />
  Full-Stack Application Development Coding Exercise
</p>

<p>
  <strong>Year:</strong><br />
  2025
</p>


<hr />

<h3>Background</h3>
<p>
  Built for a technical test. The application converts numeric values (including decimals and negative numbers) into their word representation 
  in dollars and cents format. Features a responsive web frontend with comprehensive input validation and a complete unit testing suite with 
  22 test cases covering various scenarios.
</p>

<hr />

<h3>Tech Stack</h3>
<ul>
  <li><strong>Backend Framework:</strong> ASP.NET Core 9.0 MVC</li>
  <li><strong>Programming Language:</strong> C# (.NET 9.0)</li>
  <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
  <li><strong>UI Framework:</strong> Bootstrap 5</li>
  <li><strong>Testing Framework:</strong> xUnit</li>
  <li><strong>Architecture Pattern:</strong> MVC (Model-View-Controller)</li>
</ul>

<hr />
<h3>Demonstration Video</h3>
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:600px;">
  <video 
    src="${towordVideo}"
    controls
    style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;"
    poster="${towordCover}"
  >
    Your browser does not support the video tag.
  </video>
</div>


<hr />
<h3>Source Code</h3>
<p>
  View the complete project source code on GitHub:<br/>
  <a href="https://github.com/meganmhl/numeric-to-words" target="_blank" rel="noopener noreferrer">
    https://github.com/meganmhl/numeric-to-words
  </a>
</p>

<hr />`;

export default htmlContent;
