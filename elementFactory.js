function appendNewLine() {
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  span1.setAttribute("class", "span1");
  span2.setAttribute("class", "span2");
  span3.setAttribute("class", "span3");
  span1.innerHTML = "~ user";
  span2.innerHTML = "in";
  span3.innerHTML = "#Guest>";
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-dollar-sign fa-xs icon");
  const input = document.createElement("input");
  div.appendChild(span1);
  div.appendChild(span2);
  div.appendChild(span3);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

async function appendElementText(text, className, icon) {
  counter++;
  const p = document.createElement("p");
  p.setAttribute("class", `${className}`);
  p.setAttribute("id", `e${counter}`);
  app.appendChild(p);
  await printText(text, `e${counter}`, icon);
}

async function appendElementHtml(code, text, className) {
  const p = document.createElement("p");
  counter++;
  p.setAttribute("class", `code ${className}`);
  p.setAttribute("id", `e${counter}`);
  app.appendChild(p);
  await printText(code, `e${counter} .new`);
  let content = document.getElementById(`e${counter}`);
  content.innerHTML += `<p class="new"><p><span class='text'></span>`;
  await printText(text, `e${counter} .text`);
}

async function appendSocialElement(text, className) {
  counter++;
  const p = document.createElement("p");
  p.setAttribute("class", `${className} aboutInfo`);
  p.setAttribute("id", `e${counter}`);
  app.appendChild(p);
  let content = document.querySelector(`#e${counter}`);
  counter++;
  if (className === "github") {
    //github Link

    content.innerHTML += `<a id="e${counter}" href='https://github.com/pdesai29' target='_blank'><i class='fab fa-github white'></i></a>`;
    await printText(text, `e${counter}`);
  } else if (className === "portfolio") {
    //portfolio link

    content.innerHTML += `<a id="e${counter}" href='https://pranaydesai.com' target='_blank'><i class="fas fa-id-card white"></i></a>`;
    await printText(text, `e${counter}`);
  } else if (className === "chess") {
    // chess link

    content.innerHTML += `<a id="e${counter}" href='https://chess.pranaydesai.com' target='_blank'><i class="fas fa-chess"></i></a>`;
    await printText(text, `e${counter}`);
  } else if (className === "colorPicker") {
    // colorpicker link

    content.innerHTML += `<a id="e${counter}" href='https://colorpicker.pranaydesai.com' target='_blank'><i class="fas fa-crosshairs"></i></a>`;
    await printText(text, `e${counter}`);
  } else if (className === "ovs") {
    // ovs link

    content.innerHTML += `<a id="e${counter}" href='https://ovs.pranaydesai.com' target='_blank'><i class="fas fa-car"></i></a>`;
    await printText(text, `e${counter}`);
  } else if (className === "paletteGenerator") {
    // paletteGenerator link

    content.innerHTML += `<a id="e${counter}" href='https://github.com/pdesai29/paletteGenerator' target='_blank'><i class="fas fa-palette"></i></a>`;
    await printText(text, `e${counter}`);
  } else if (className === "linkedin") {
    content.innerHTML += `<a id="e${counter}" href='https://www.linkedin.com/in/pranaydesai29/' target='_blank'><i class='fab fa-linkedin-in white '></i></a>`;
    await printText(text, `e${counter}`);
  } else {
    content.innerHTML += `<a id="e${counter}" href='https://www.instagram.com/_____pranay______/' target='_blank'><i class='fab fa-instagram white '></i>  </a> <span>  </span>`;
    await printText(text + ` <- Not much here ;p`, `e${counter}`);
  }
}
