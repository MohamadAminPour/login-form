let securityCode = document.querySelector(".securityCode-text");
let phone = document.querySelector(".phone");
let password = document.querySelector(".password");
let securityCodeInput = document.querySelector(".securityCode-input");
let submitBtn = document.querySelector(".submitBtn");

let users = [
  { id: 1, phone: "09159156299", password: "1010" },
  { id: 2, phone: "09027528819", password: "2020" },
  { id: 3, phone: "09121557291", password: "3030" },
];

let randomCode = Math.floor(Math.random() * 99999);
window.addEventListener("load", () => {
  securityCode.innerHTML = randomCode;
});

submitBtn.addEventListener("click", (e) => {
  console.log(typeof securityCode.innerHTML);
  console.log(typeof securityCodeInput.value);

  e.preventDefault();
  users.every((user) => {
    if (
      securityCodeInput.value === securityCode.innerHTML &&
      phone.value === user.phone &&
      password.value === user.password
    ) {
      Swal.fire({
        title: "ورود موفقیت آمیز",
        text: "تبریک، در حال انتقال به پنل کاربری",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "خطا هنگام ورود",
        text: "لطفا همه اطلاعات خواسته شده را به درستی وارد کنید",
        icon: "error",
      });
    }
  });
});
