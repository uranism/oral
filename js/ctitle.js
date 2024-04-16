const rrr = ["krome", "mt8", "glock", "sosa", "touji"];
let vvv = 0;
function yyy() {
  document.title = rrr[vvv];
  vvv = (vvv + 1) % rrr.length;
}
setInterval(yyy, 300);
