var cad= `
<div class="container-fluid bg-white">
                  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="index.html" onclick="homeRedirect()"> Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="aboutus.html" onclick="aboutUsRedirect()"> About Me </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="education.html" onclick="educationRedirect()"> Education </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="skill.html" onclick="skillRedirect()"> Skills </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="job.html" onclick="jobRedirect()"> Experience </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                  
`
document.getElementById("header").innerHTML=cad;

var cad= `
<div class="social">
                    <a href="https://www.linkedin.com/in/gimenabinaghi/" class="icon-linkedin-square" target="_blank"><p></p></a>
                    <a href="https://github.com/gibinaghi?tab=repositories" class="icon-github" target="_blank"><p></p></a>
                </div>
                <div> 
                    <p class="copy">  &copy; 2020, All rights reserved <br> | María Gimena Binaghi |</p>
                </div>
                  
`
document.getElementById("footer").innerHTML=cad;