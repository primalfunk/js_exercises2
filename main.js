var passed = document.getElementById('passed')
var failed = document.getElementById('failed')
var li = document.createElement('li')

function runTest(name, actual, expected) {
  try {
    expect(actual).toEqual(expected)
    li.innerHTML = name + ' passed'
    passed.appendChild(li)
  } catch (err) {
    li.innerHTML = name + ' failed - ' + err
    failed.appendChild(li)
  }
}

//Sum 2
function sum(num1, num2) {
  return num1 + num2
}
runTest('sum', sum(2,3), 5)