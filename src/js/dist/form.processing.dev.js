"use strict";

var form = new ItcSubmitForm("form"); // при получении ответа result="success" от сервера

document.querySelector("form").addEventListener("success", function (e) {
  var el = e.target.closest(".footer").querySelector(".form__success");
  el.classList.remove("form__success-hide");
}); // при клике на .form-success__btn

document.querySelector(".form__success-btn").addEventListener("click", function (e) {
  form.reset();
  e.target.closest(".footer").querySelector(".form__success").classList.add("form__success-hide");
});

if (!empty($_POST["phone"])) {
  $data["form"]["phone"] = preg_replace("/D/", "", $_POST["phone"]);

  if (!preg_match("/^(8|7)(d{10})$/", $phone)) {
    $data["result"] = "error";
    $data["errors"]["phone"] = "Поле содержит не корректный номер.";
    itc_log("Phone не корректный.");
  }
}