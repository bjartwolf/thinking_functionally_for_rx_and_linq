import { fromEvent, interval, map } from "rxjs";
//function getPos(evt: MouseEvent): number {
//  return evt.pageX;
//}
//let getPositions = map(getPos);
//let events = fromEvent<MouseEvent>(document, "mousemove")
//let positions = getPositions(events)

function add7(x: number): number {
  return x + 7;
}
let add7s = map(add7);

const numbers = interval(1000);

let posAnd7s = add7s(numbers)

posAnd7s.subscribe({
    next: (x: any) => logItem(x),
    error:  (error: any) => logItem("Error: " + error),
    complete:  () => logItem("Completed")
  }
);

var list = document.getElementById("list");
function logItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("list").insertBefore(node, list.children[0]);
}