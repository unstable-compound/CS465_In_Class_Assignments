function submit(){
  const fun = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const message = document.getElementById("comment").value;

    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
  };
  return fun;
}