(function () {
  var FORM_ID = "350bb96e-bde6-11f1-ae1f-fb1fa2bef3a6";
  var takeover = document.getElementById("takeover");
  var close = document.getElementById("takeover-close");
  if (takeover && close) {
    close.addEventListener("click", function () {
      takeover.hidden = true;
    });
  }

  function shapeForm() {
    var form = document.querySelector(".emailoctopus-form");
    if (!form || form.dataset.shaped) return Boolean(form);
    var rows = [].slice.call(form.querySelectorAll(".emailoctopus-form-row:not(.emailoctopus-form-row-hp)"));
    if (rows.length < 5) return false;
    var first = rows[0];
    var last = rows[1];
    var email = rows[2];
    var phone = rows[3];
    var zip = rows[4];
    var names = document.createElement("div");
    names.className = "field-row field-row--half";
    first.before(names);
    names.append(first, last);
    var split = document.createElement("div");
    split.className = "field-row";
    email.before(split);
    split.append(email, zip);
    phone.classList.add("field-phone");
    [
      [first, "given-name", "text"],
      [last, "family-name", "text"],
      [email, "email", "email"],
      [phone, "tel", "tel"],
      [zip, "postal-code", "text"],
    ].forEach(function (item) {
      var input = item[0].querySelector("input");
      if (!input) return;
      input.setAttribute("autocomplete", item[1]);
      if (item[2] === "tel" || item[2] === "text") input.type = item[2];
      if (item[1] === "tel" || item[1] === "postal-code") input.inputMode = "numeric";
    });
    var placeholders = {
      field_1: "First name",
      field_2: "Last name",
      field_0: "Email address",
      field_3: "Mobile number",
      field_4: "Zip code",
    };
    form.querySelectorAll("input[name]").forEach(function (input) {
      if (placeholders[input.name]) input.placeholder = placeholders[input.name];
    });
    var disclaimer = document.querySelector(".signup__disclaimer");
    var btn = form.querySelector('input[type="submit"]');
    if (btn) btn.value = "Join Our Team";
    if (disclaimer && btn) btn.before(disclaimer);
    form.dataset.shaped = "1";
    return true;
  }

  var slot = document.getElementById("form-slot");
  if (slot && !slot.querySelector("script[data-form]")) {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://eomail5.com/form/" + FORM_ID + ".js";
    script.dataset.form = FORM_ID;
    slot.appendChild(script);
    var ticks = 0;
    var timer = window.setInterval(function () {
      ticks += 1;
      if (shapeForm() || ticks > 80) window.clearInterval(timer);
    }, 120);
  }
})();
