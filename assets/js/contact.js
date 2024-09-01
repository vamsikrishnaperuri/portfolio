// const v_name = document.querySelector(".name");
// const v_email = document.querySelector(".email");
// const v_phnum = document.querySelector(".phnumber");
// const v_msg = document.querySelector(".txtmessage");
// const v_btn = document.getElementById("subbtn");
// const v_formdata = document.getElementById("cont-formdata");

// if(v_name!="" && v_email!="" && v_phnum!="" && v_msg!=""){
// v_btn.addEventListener("click", (e) =>{
//   e.preventDefault();
  
//     db.collection('formdata').doc().ser({
//       fullname : v_name.value,
//       email : v_email.value,
//       phnum : v_phnum,
//       mag : v_msg.value,
//   }).then(() => {
//     v_formdata.reset();
//   })
// });
// }else{
//   window.prompt("Fill all fields");
// }


document.addEventListener("DOMContentLoaded", () => {
  const v_btn = document.getElementById("subbtn");
  const v_formdata = document.getElementById("cont-formdata");
  const v_name = document.getElementById("name");
  const v_email = document.getElementById("email");
  const v_phnum = document.getElementById("phnumber");
  const v_msg = document.getElementById("txtmessage");

  v_btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (v_name.value !== "" && v_email.value !== "" && v_phnum.value !== "" && v_msg.value !== "") {
      db.collection('cont-formdata').doc().set({
        fullname: v_name.value,
        email: v_email.value,
        phnum: v_phnum.value,
        mag: v_msg.value,
      }).then(() => {
        v_formdata.reset();
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    } else {
      window.prompt("Fill all fields");
    }
  });
});
