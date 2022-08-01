// template_30b8fri
// service_ekkgeii
// ytuAGmvTJjnAwCVMQ

// function contact(event) {
//   event.preventDefault();
//   const loading = document.querySelector('.modal__overlay--loading');
//   const success = document.querySelector('.modal__overlay--success');
//   loading.classList += " modal__overlay--visible";
//   emailjs
//     .sendForm(
//       'service_ekkgeii',
//       'template_30b8fri',
//       event.target,
//       'ytuAGmvTJjnAwCVMQ'
//     )
//     .then(() => {
//       loading.classList.remove("modal__overlay--visible");
//       success.classList += " modal__overlay--visble";
//     })
//     .catch(() => {
//       loading.classList.remove("modal__overlay--visible");
//       alert(
//         "The email service is currently unavailable. Please contact me directly at CadenNeary9@gmail.com"
//       );
//     });
// }


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_ekkgeii",
        "template_30b8fri",
        event.target,
        "ytuAGmvTJjnAwCVMQ"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }

  function toggleModal () {
    document.body.classList += " modal--open"
  }

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }