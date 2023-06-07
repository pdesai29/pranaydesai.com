const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let counter = 0;
const test = [];
let c = 0;
app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    await checkInput();
    removeInput();
    await delay(150);
    appendNewLine();
  }
});
app.addEventListener("keydown", async function (event) {
  if (event.key == "ArrowUp") {
    if (test.length > 0 && c == 0) {
      input = document.querySelector("input");
      input.value = test[c];
    } else if (test.length > 0) {
      c -= 1;
      input = document.querySelector("input");
      input.value = test[c];
    }
  }

  if (event.key == "ArrowDown" && c < test.length - 1) {
    if (c >= 0 && test.length > 0) {
      c++;
      input = document.querySelector("input");
      input.value = test[c];
    }
  }
});
app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function start() {
  appendElementText(
    "####################   Welcome  #####################",
    "welcome"
  );
  appendElementText("Better Portfolio coming soon ...", "welcome");
  appendElementText("Try this for now", "welcome");

  await delay(800);
  await appendElementText(">>  Type 'help' to start  <<", "start");
  await delay(500);
  appendNewLine();
}

function appendNewLine() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "~ user";
  span1.textContent = " in";
  span2.textContent = " #/Guest";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-terminal fa-xs icon");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function checkInput() {
  const value = document.querySelector("input").value;
  test.push(value);
  c = test.length;
  if (value === "all") {
    checkValue(value);
    await appendElementText(
      "################  All Commands List:  ###############",
      "newlineAll"
    );
    await appendElementHtml(">> [projects]", "- My github page.", "projects");
    await appendElementHtml(">> [about me]", "- Who I am.", "aboutme");
    await appendElementHtml(
      ">> [social network]",
      "- All my social media handles.",
      "social"
    );
    await appendElementHtml(">> [clear]", "- Clear the terminal.", "clear");
    appendElementText(
      "###################################################",
      "hashLine"
    );
  } else if (value === "projects") {
    checkValue(value);
    appendElementText(
      "##################    Projects:   #####################",
      "projectsline"
    );
    appendSocialElement(" < github/pranaydesai >", "github");
    appendElementText(
      "##################################################",
      "hashLine"
    );
  } else if (value === "about me") {
    checkValue(value);
    appendElementText(
      "####################   About Me  #####################",
      "newLineAboutMe"
    );
    appendElementText("Hello there, My name is PRANAY", "greet");
    appendElementText(
      "I am MSCS student, Eager to contribute and learn modern WEB Technologies",
      "aboutinfo"
    );
    appendElementText(
      "###################################################",
      "hashLine"
    );
  } else if (value === "social network") {
    checkValue(value);
    appendElementText(
      "#################   Social Network   ###################",
      "newLineAboutMe"
    );
    appendSocialElement("  < github/pranaydesai >", "github");
    appendSocialElement("  < linkedin.com/in/pranaydesai29 >", "linkedin");
    appendSocialElement("  < instagram.com/_____pranay______ >", "insta");
    appendElementText(
      "###################################################",
      "hashLine"
    );
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
    appendElementText(
      "###################################################",
      "hashLine"
    );
  } else if (value === "help") {
    checkValue(value);
    await appendElementText(
      "##################   Commands List:  ##################",
      "commands"
    );
    await appendElementHtml(">>  [about me]", "- Who I am.", "aboutme");
    await appendElementHtml(">>  [all]", "- See all commands.", "all");
    await appendElementHtml(
      ">>  [social network]",
      "- All my social media handles",
      "social"
    );
    appendElementText(
      "###################################################",
      "hashLine"
    );
    // await delay(500);
  } else {
    checkValue(value);
    counter++;
    appendElementText(
      `#################   command not found: ${value}   ###################`,
      `new${counter}`
    );
  }
}

function checkValue(value) {
  if (
    value === "all" ||
    value === "social network" ||
    value === "help" ||
    value === "clear" ||
    value === "about me" ||
    value === "projects"
  ) {
    const div = document.createElement("section");
    div.setAttribute("class", "type2");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-terminal fa-xs icon");
    const m = document.createElement("p");
    m.setAttribute("class", "success");
    m.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(m);
    app.appendChild(div);
  } else {
    const div = document.createElement("section");
    div.setAttribute("class", "type2");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-terminal fa-xs icon error");
    const m = document.createElement("p");
    m.setAttribute("class", "error");
    m.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(m);
    app.appendChild(div);
  }
}

async function printText(text, className) {
  let str = text.split("");
  const interval = setInterval(() => {
    let content = document.querySelector(`.${className}`);
    content.innerHTML += str[0];
    str = str.slice(1);
    if (!str.length) {
      clearInterval(interval);
    }
  }, 10);
}

async function appendElementText(text, className) {
  counter++;
  const p = document.createElement("p");
  p.setAttribute("class", `${className + counter}`);
  app.appendChild(p);
  printText(text, `${className + counter}`);
}

async function appendElementHtml(code, text, className) {
  const p = document.createElement("p");
  counter++;
  p.setAttribute("class", `code ${className + counter}`);
  app.appendChild(p);
  await printText(code, `${className + counter} .new`);
  let content = document.querySelector(`.${className + counter}`);
  content.innerHTML += `<p class="new"><p><span class='text'></span>`;
  await printText(text, `${className + counter} .text`);
}

async function appendSocialElement(text, className) {
  counter++;
  if (className === "github") {
    const p = document.createElement("p");
    p.setAttribute("class", `${className + counter}`);
    app.appendChild(p);
    let content = document.querySelector(`.${className + counter} `);
    counter++;
    content.innerHTML += `<a class="${
      className + counter
    }" href='https://github.com/pdesai29' target='_blank'><i class='fab fa-github white '></i></a>`;
    printText(text, className + counter);
  } else if (className === "linkedin") {
    const p = document.createElement("p");
    p.setAttribute("class", `${className + counter}`);
    app.appendChild(p);
    let content = document.querySelector(`.${className + counter}`);
    counter++;
    content.innerHTML += `<a class="${
      className + counter
    }" href='https://www.linkedin.com/in/pranaydesai29/' target='_blank'><i class='fab fa-linkedin-in white '></i></a>`;
    printText(text, className + counter);
  } else {
    const p = document.createElement("p");
    p.setAttribute("class", `${className + counter}`);
    app.appendChild(p);
    let content = document.querySelector(`.${className + counter}`);
    counter++;
    content.innerHTML += `<a class="${
      className + counter
    }" href='https://www.instagram.com/_____pranay______/' target='_blank'><i class='fab fa-instagram white '></i>  </a> <span> <- Not much here ;p  </span>`;
    printText(text, className + counter);
  }
}

start();
