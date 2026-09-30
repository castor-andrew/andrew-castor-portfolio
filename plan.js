/* Course summaries and prerequisite wording are condensed from UW's course catalog. */
const catalog = {
  "CHEM 142":["General Chemistry I","Atomic structure, bonding, stoichiometry, solutions, and gases with laboratory work.","CHEM 110 (1.7+), a passing General Chemistry Placement exam, or Chemistry AP score of 1+.","chem"],
  "ENGR 101":["Engineering Exploration","Talks and discussions introducing engineering fields and current research.","No course prerequisite listed.","engr"],
  "ENGR 106":["Experience Engineering","Hands-on makerspace and laboratory workshops using engineering tools and techniques.","No course prerequisite listed.","engr"],
  "GEN ST 199":["The University Community","UW resources, opportunities, and academic skills for university life.","No course prerequisite listed.","genst"],
  "MATH 208":["Matrix Algebra with Applications","Linear systems, matrices, vector spaces, orthogonality, eigenvalues, and applications.","No course prerequisite listed; guided self-placement is recommended.","math"],
  "CHEM 152":["General Chemistry II","Equilibria, thermochemistry, thermodynamics, and electrochemistry with laboratory work.","CHEM 142, 143, or 145 with a minimum grade of 1.7.","chem"],
  "A A 210":["Engineering Statics","Forces, moments, equilibrium, free-body diagrams, friction, and structural components.","MATH 126 or 136 (2.0+), and PHYS 121 or 141 (2.0+).","aa"],
  "DESIGN 166":["Design Foundations","Visual structure and problem solving in two- and three-dimensional design.","No course prerequisite listed.","design"],
  "M E 230":["Kinematics and Dynamics","Motion and forces of particles and rigid bodies; energy and momentum methods.","A A 210.","meche"],
  "CEE 220":["Introduction to Mechanics of Materials","Stress, strain, deformation, and strength of rods, shafts, and beams.","A A 210 with a minimum grade of 2.0.","cee"],
  "AMATH 301":["Beginning Scientific Computing","Programming in Python or MATLAB for numerical modeling, analysis, and visualization.","MATH 125, MATH 135, or Q SCI 292.","appmath"],
  "MSE 170":["Fundamentals of Materials Science","Atomic structure and properties of metals, ceramics, polymers, and other engineering materials.","CHEM 142, 143, or 145.","mse"],
  "M E 323":["Engineering Thermodynamics","Energy conversion, thermodynamic properties, laws, refrigeration, and combustion.","CHEM 142/143/145; MATH 126/136; and PHYS 121/141.","meche"],
  "E E 215":["Fundamentals of Electrical Engineering","Circuits, Kirchhoff’s laws, basic components, and circuit differential equations.","MATH 136, or MATH 126 plus MATH 207/307/AMATH 351 (the latter may be concurrent); and PHYS 122/142.","ee"],
  "AMATH 401":["Vector Calculus and Complex Variables","Vector calculus, line and surface integrals, complex functions, and contour integration.","MATH 126 or 136.","appmath"],
  "M E 333":["Introduction to Fluid Mechanics","Conservation laws, flow similarity, friction, compressible flow, and fluid machinery.","AMATH 301; M E 323; and MATH 207 or AMATH 351.","meche"],
  "M E 373":["Introduction to System Dynamics","Models and time-domain responses of dynamic physical systems, with lab experiments.","AMATH 351 or MATH 207; AMATH 352 or MATH 208; E E 215; and M E 230.","meche"],
  "MUSIC 131":["History of Jazz","Musicians, composers, styles, and eras across the history of jazz.","No course prerequisite listed.","music"],
  "M E 354":["Mechanics of Materials Laboratory","Material behavior, strength, deformation, testing, data analysis, and engineering reports.","MSE 170 and CEE 220.","meche"],
  "M E 374":["Systems Dynamic Analysis and Design","Frequency response, system modeling, electromechanical actuators, and lab design work.","AMATH 301 and M E 373.","meche"],
  "AMATH 353":["Partial Differential Equations and Waves","Traveling waves, Fourier analysis, vibrations, shocks, and conservation laws.","AMATH 351, MATH 136, or MATH 207.","appmath"],
  "M E 331":["Introduction to Heat Transfer","Conduction, convection, radiation, and introductory heat-exchanger design.","M E 333 or CEE 342.","meche"],
  "M E 430":["Advanced Energy Conversion Systems","High-efficiency cycles, nuclear and biomass thermal conversion, fuel cells, and environmental effects.","M E 323.","meche"],
  "AMATH 481":["Scientific Computing","Numerical methods for ordinary and partial differential equations using scientific programming.","AMATH 301; AMATH 351/MATH 135/MATH 207; and AMATH 352/MATH 136/MATH 208.","appmath"],
  "M E 493":["Introduction to Capstone Design","Engineering design methods, project management, teamwork, and technical communication.","M E 123 and M E 354.","meche"],
  "M E 425":["HVAC Engineering","Comfort, heating and cooling loads, fluid distribution, controls, and HVAC design.","M E 323 and M E 331.","meche"],
  "M E 494":["Capstone Design I","Team engineering project using design, analysis, management, economics, and ethics.","M E 123; M E 354; and M E 414/E E 414 or M E 493. M E 355 recommended.","meche"],
  "M E 355":["Introduction to Manufacturing Processes","How materials, fabrication processes, and part design affect each other.","M E 354.","meche"],
  "IND E 315":["Probability and Statistics for Engineers","Distributions, estimation, data analysis, regression, and engineering applications.","MATH 135/136/207 or AMATH 351.","inde"],
  "M E 426":["Renewable Energy II","Energy conversion from wind and water.","M E 333.","meche"],
  "M E 495":["Capstone Design II","Continuation of the team design project begun in M E 494.","M E 494.","meche"],
  "MUSIC 162":["American Popular Song","History, communities, and musical styles shaping American popular music.","No course prerequisite listed.","music"],
  "GEN ST 391":["Independent Study","Supervised study with a faculty member in their area of expertise.","No course prerequisite listed; a supervised study arrangement is needed.","genst"],
  "M E 431":["Advanced Fluid Mechanics","Viscous flow, turbulence, vortex dynamics, and experimental and numerical methods.","M E 333.","meche"],
  "M E 473":["Instrumentation","Sensors and measurement of motion, force, pressure, flow, and other quantities.","M E 374.","meche"],
  "M E 356":["Machine Design Analysis","Design and selection of gears, linkages, cams, motors, bearings, and other elements.","M E 354.","meche"]
};
const quarters = [
  {name:"Autumn 2026",status:"REGISTERED",credits:"12 credits",courses:[["CHEM 142",5],["ENGR 101",1],["ENGR 106",1],["GEN ST 199",1],["MATH 208",4]]},
  {name:"Winter 2027",credits:"14 credits",courses:[["CHEM 152",5],["A A 210",4],["DESIGN 166",5]]},
  {name:"Spring 2027",credits:"16 credits",courses:[["M E 230",4],["CEE 220",4],["AMATH 301",4],["MSE 170",4]]},
  {name:"Autumn 2027",credits:"13 credits",courses:[["M E 323",5],["E E 215",4],["AMATH 401",4]]},
  {name:"Winter 2028",credits:"15 credits",courses:[["M E 333",5],["M E 373",5],["MUSIC 131",5]]},
  {name:"Spring 2028",credits:"13 credits",courses:[["M E 354",5],["M E 374",5],["AMATH 353",3]]},
  {name:"Autumn 2028",credits:"16 credits",courses:[["M E 331",4],["M E 430",4],["AMATH 481",5],["M E 493",3]]},
  {name:"Winter 2029",credits:"14 credits",courses:[["M E 425",4],["M E 494",3],["M E 355",4],["IND E 315",3]]},
  {name:"Spring 2029",credits:"11–15 credits",courses:[["M E 426",3],["M E 495",3],["GEN ST 391","1–5"],["M E 356",4]]},
  {name:"Autumn 2029",credits:"13 credits",courses:[["M E 431",4],["M E 473",4],["MUSIC 162",5]]}
];
const timeline=document.getElementById("timeline"), links=document.getElementById("quarter-links"), search=document.getElementById("course-search");
function node(tag,cls,content){const el=document.createElement(tag);if(cls)el.className=cls;if(content!==undefined)el.textContent=content;return el}
quarters.forEach((q,i)=>{
  const id=`quarter-${i+1}`,block=node("section","quarter-block");
  block.id=id;
  const heading=node("div","quarter-heading"),h=node("h2",null,q.name);
  if(q.status)block.append(node("span","quarter-status",q.status));
  heading.append(h,node("span",null,q.credits));
  block.append(heading);
  const jump=node("a",null,q.name);
  jump.href=`#${id}`;
  jump.append(node("span",null,String(i+1).padStart(2,"0")));
  links.append(jump);
  q.courses.forEach(([code,credit])=>{
    const [title,description,prereq,subject]=catalog[code];
    const details=node("details","course"),summary=node("summary");
    summary.append(node("span","course-code",code),node("span","course-title",title),node("span","course-credit",`${credit} cr`));
    details.append(summary);
    const body=node("div","course-detail");
    body.append(node("p",null,description));
    const p=node("p");
    p.append(node("strong",null,"Prerequisites: "),document.createTextNode(prereq));
    body.append(p);
    const a=node("a",null,"UW catalog ↗");
    a.href=`https://www.washington.edu/students/crscat/${subject}.html`;
    a.target="_blank";
    a.rel="noopener noreferrer";
    body.append(a);
    details.append(body);
    details.dataset.search=`${code} ${title} ${description} ${prereq}`.toLowerCase();
    block.append(details);
  });
  timeline.append(block);
});

function filter(){
  const term=search.value.trim().toLowerCase();
  let count=0;
  document.querySelectorAll(".quarter-block").forEach(block=>{
    let shown=0;
    block.querySelectorAll(".course").forEach(course=>{
      const match=course.dataset.search.includes(term);
      course.hidden=!match;
      if(match){shown++;count++;}
    });
    block.hidden=shown===0;
  });
  document.getElementById("empty-search").hidden=count!==0;
  links.querySelectorAll("a").forEach((a,i)=>a.hidden=document.getElementById(`quarter-${i+1}`).hidden);
}

search.addEventListener("input",filter);
document.getElementById("expand-all").addEventListener("click",()=>document.querySelectorAll(".course:not([hidden])").forEach(c=>c.open=true));
document.getElementById("collapse-all").addEventListener("click",()=>document.querySelectorAll(".course").forEach(c=>c.open=false));
document.getElementById("year").textContent=new Date().getFullYear();

// Scroll spy for sidebar links
const quarterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      links.querySelectorAll("a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { rootMargin: "-20% 0px -70% 0px" });

document.querySelectorAll(".quarter-block").forEach(block => quarterObserver.observe(block));
