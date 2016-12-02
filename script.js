
var inputTall = document.getElementById("inputTall");
var inputCharacter = document.getElementById("inputCharacter");

document.querySelector('form.form').addEventListener('submit',
    function treeFunc(event) {
      //prevent the normal submission of the form

      event.preventDefault();

      var num = 1;
      while(num <= parseInt(inputTall.value)){
        console.log(inputCharacter.value.repeat(num));
        num++;
      }
  });
