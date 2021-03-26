const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array) {
  let winResult = array.find(w => w.result === "W")
  if (winResult) {
    return winResult.year
  } else {
    return undefined
  };
}