function submit(){
  function fun(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("comment").value;

    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
  };
  return fun;
}