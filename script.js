
var inputTall = document.getElementById("inputTall");
var inputCharacter = document.getElementById("inputCharacter");



document.querySelector('form.form').addEventListener('submit',
    function treeFunc(event) {
      //prevent the normal submission of the form

      event.preventDefault();

      var num = 1;
      var numSub = inputTall.value;
      while(num < parseInt(inputTall.value) * 2){
        console.log(" ".repeat(numSub - 1) + inputCharacter.value.repeat(num) + " ");

        num += 2;
        numSub -= 1;
      }
  });
