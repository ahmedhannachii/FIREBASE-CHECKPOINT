var messageRef = firebase.database().ref('workshop');

function submitForm(){

   var name = document.getElementById('name').value;
   var track = document.getElementById('track').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
   saveForm(name,track,email,phone);
}

function saveForm(n,t,e,p){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: n,
        track: t,
        email: e,
        phone: p,
    })
}

    document.getElementById('sub').addEventListener('click', submitForm);

    $('#sub').click(function(){
      alert("Votre demande a bien été prise en compte");
      location.reload(true);
    })
    