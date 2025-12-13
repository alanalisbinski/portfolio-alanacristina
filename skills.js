const container = document.getElementById("skills-container");

skills.forEach(skill => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill-item";

const skills = [
  { name: "JavaScript", level: 82 },
  { name: "Python", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "C++", level: 60 }
];

container.appendChild(skillDiv);

  const progressCircle = skillDiv.querySelector(".skill-progress");
  const circumference = 2 * Math.PI * 70;
  progressCircle.style.strokeDasharray = circumference;

  const offset = circumference - (skill.level / 100) * circumference;

  setTimeout(() => {
    progressCircle.style.strokeDashoffset = offset;
  }, 300);
});