// Student score
const score = 72;

switch (true) {
  case (score >= 90):
    console.log("A — Excellent!");
    break;

  case (score >= 80):
    console.log("B — Good");
    break;

  case (score >= 70):
    console.log("C — Satisfactory");
    break;

  case (score >= 60):
    console.log("D — Needs improvement");
    break;

  default:
    console.log("F — Please see your teacher");
}