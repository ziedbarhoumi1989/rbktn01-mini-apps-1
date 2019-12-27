function findWinner(arr) {
  //check rows
  for (var i = 0; i < arr.length - 2; i += 3) {
    if (arr[i].innerText + arr[i + 1].innerText + arr[i + 2].innerText === 'XXX') {
      return name1
    }
    if (arr[i].innerText + arr[i + 1].innerText + arr[i + 2].innerText === 'OOO') {
      return name2
    }
  }
  //check columns
  for (var i = 0; i < 3; i++) {
    if (arr[i].innerText + arr[i + 3].innerText + arr[i + 6].innerText === 'XXX') {
      return name1
    }
    if (arr[i].innerText + arr[i + 3].innerText + arr[i + 6].innerText === 'OOO') {
      return name2
    }
  }
  //check diagonal
  if (arr[0].innerText + arr[4].innerText + arr[8].innerText === 'XXX' || arr[2].innerText + arr[4].innerText + arr[6].innerText === 'XXX') {
    return name1
  }
  if (arr[0].innerText + arr[4].innerText + arr[8].innerText === 'OOO' || arr[2].innerText + arr[4].innerText + arr[6].innerText === 'OOO') {
    return name2
  }

}
var arr = document.getElementsByClassName('item');
var name1 = 'player1'
var name2 = 'player2'
document.getElementById('start').addEventListener('click', function () {
  name1 = document.getElementById('player1').value || name1
  document.getElementById('name1').innerText = name1
  console.log(name1)
  name2 = document.getElementById('player2').value || name2
  document.getElementById('name2').innerText = name2
  console.log(name2)

})
var arr = document.getElementsByClassName('item');

for (var i = 0; i < arr.length; i++) {
  arr[i].setAttribute('id', 'item' + i)
  var name = name1;
  var first = 'X'
  var second = 'O'

  var chosen = arr[i]
  console.log(chosen)

  chosen.addEventListener('click', function (event) {

    if (name === name1) {
      this.innerText = first
      if (findWinner(arr)) {
        if (findWinner(arr) === name1) {
          document.getElementById('score1').innerText = '' + Number(document.getElementById('score1').innerText) + 1
        }
        else if (findWinner(arr) === name2) {
          document.getElementById('score2').innerText = '' + Number(document.getElementById('score2').innerText) + 1
        }
        var h1 = document.createElement('h1')
        var btn = document.createElement('button')
        btn.innerText = "play again"
        h1.innerText = findWinner(arr) + '                wins'
        document.getElementsByTagName('body')[0].appendChild(h1)
        document.getElementsByTagName('body')[0].appendChild(btn)
        document.getElementsByClassName('container')[0].style.display = 'none'

      }
      return name = name2;
    }
    else {
      this.innerText = second
      if (findWinner(arr)) {
        if (findWinner(arr) === name1) {
          document.getElementById('score1').innerText = '' + Number(document.getElementById('score1').innerText) + 1
        }
        else if (findWinner(arr) === name2) {
          document.getElementById('score2').innerText = '' + Number(document.getElementById('score2').innerText) + 1
        }
        var h1 = document.createElement('h1')
        var btn = document.createElement('button')
        h1.innerText = findWinner(arr) + '                wins'
        btn.innerText = "play again"
        document.getElementsByTagName('body')[0].appendChild(h1)
        document.getElementsByTagName('body')[0].appendChild(btn)

        document.getElementsByClassName('container')[0].style.display = 'none'
      }
      return name = name1
    }


  })

}









