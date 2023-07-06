const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let counter = 0;
const commandStack = [];
let commandCounter = 0;

// Event listeners
app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    await checkInput();
    removeInput();
    await delay(150);
    appendNewLine();
  }
});
app.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    if (commandStack.length > 0 && commandCounter == 0) {
      input = document.querySelector("input");
      input.value = commandStack[commandCounter];
    } else if (commandStack.length > 0) {
      commandCounter -= 1;
      input = document.querySelector("input");
      input.value = commandStack[commandCounter];
    }
  }

  if (event.key == "ArrowDown" && commandCounter < commandStack.length - 1) {
    if (commandCounter >= 0 && commandStack.length > 0) {
      commandCounter++;
      input = document.querySelector("input");
      input.value = commandStack[commandCounter];
    }
  }
});
app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});
console.log(window.innerWidth);
async function start() {
  await appendElementText(
    "################### Welcome #####################",
    "welcome"
  );
  await appendElementText("Better Portfolio coming soon ...", "welcome");
  await appendElementText("Checkout this for now", "welcome");

  await delay(800);
  await appendElementText(
    "Copyright © 2023 Pranay Desai, All rights reserved.",
    "quoteCopyright"
  );
  await appendElementText(`>>  Type 'help' to start  <<`, "welcome");
  await delay(500);
  appendNewLine();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function checkInput() {
  const value = document.querySelector("input").value;
  commandStack.push(value);
  commandCounter = commandStack.length;
  if (value.toLowerCase() === "projects") {
    checkValue(value);
    await appendElementText(
      "################### Projects ####################",
      "projectsLine"
    );
    await appendSocialElement(" < github/pranaydesai >", "github");
    await appendSocialElement(
      " < Chess game | chess.pranaydesai.com >",
      "chess"
    );
    await appendSocialElement(
      " < ColorPicker | colorpicker.pranaydesai.com >",
      "colorPicker"
    );
    await appendSocialElement(" < OVS | ovs.pranaydesai.com >", "ovs");
    await appendSocialElement(
      " < paletteGenerator (Open AI, SvelteKit) | pdesai29/paletteGenerator >",
      "paletteGenerator"
    );
    await appendSocialElement(
      " < My Portfolio | pranaydesai.com >",
      "portfolio"
    );
    await appendElementText(
      "#################################################",
      "hashLine"
    );
  } else if (value.toLowerCase() === "about me") {
    checkValue(value);
    await appendElementText(
      "################## About Me ####################",
      "newLineAboutMe"
    );
    await appendElementText("> Hey there, I'm Pranay <", "greet");
    await appendElementText(
      "> A computer science graduate student with a passion for all things tech.",
      "aboutInfo",
      `<i class="fas fa-graduation-cap icon-text"></i>`
    );
    await appendElementText(
      "> When I'm not crushing code,",
      "aboutInfo",
      `<i class="fas fa-laptop-code icon-text"></i>`
    );
    await appendElementText(
      `- You'll find me unleashing my competitive spirit in the gaming world`,
      "list",
      `<i class="fas fa-gamepad icon-text "></i>`
    );
    await appendElementText(
      "- Jamming to my favorite tunes, ",
      "list",
      `<a class="link" href='https://open.spotify.com/user/21aoizzn4bxqtxuzoiti3myli?si=b5fdf7043acc446e' target='_blank'><i class="fab fa-spotify icon-text"></i> <span class="button">Follow</span></a>`
    );
    await appendElementText(
      "- or Diving into captivating books. ",
      "list",
      `<i class="fas fa-book icon-text"></i>`
    );
    await appendElementText(
      `> I'm driven to learn and contribute to modern web technologies.`,
      "aboutInfo",
      `<i class="fas fa-rocket icon-text"></i>`
    );
    await appendElementText(
      "> Ready to level up your team? Let's chat and make some tech magic happen!",
      "aboutInfo",
      `<a class="link" href='https://www.linkedin.com/in/pranaydesai29/' target='_blank'><i class='fab fa-linkedin-in icon-text '></i><span class="button">Click</span></a>`
    );
    await appendSocialElement(" < My Resume >", "resume");
    await appendElementText(
      "#################################################",
      "hashLine"
    );
  } else if (value.toLowerCase() === "social network") {
    checkValue(value);
    await appendElementText(
      "################ Social Network #################",
      "newLineAboutMe"
    );
    await appendSocialElement("  < github/pranaydesai >", "github");

    await appendSocialElement(
      "  < linkedin.com/in/pranaydesai29 >",
      "linkedin"
    );
    await appendSocialElement("  < medium/@pranaydesai29 >", "medium");
    await appendSocialElement("  < instagram.com/_____pranay______ >", "insta");
    await appendElementText(
      "#################################################",
      "hashLine"
    );
  } else if (value.toLowerCase() === "clear") {
    counter = 0;
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));

    await appendElementText(
      "#################################################",
      "hashLine"
    );
    await appendElementText(">>  Type 'help' to start  <<", "welcome");
  } else if (value.toLowerCase() === "help") {
    checkValue(value);
    await appendElementText(
      "############### All Commands List: ##############",
      "newlineAll"
    );
    await appendElementHtml(">>  [about me]", "- Who I am.", "aboutMe");
    await appendElementHtml(
      ">> [my quotes]",
      "- Check out quotes written by me for inspiration",
      "myQuotes"
    );
    await appendElementHtml(
      ">>  [social network]",
      "- All my social media handles",
      "social"
    );
    await appendElementHtml(">> [projects]", "- My github page.", "projects");
    await appendElementHtml(">> [clear]", "- Clear the terminal.", "clear");

    await appendElementText(
      "#################################################",
      "hashLine"
    );
  } else if (value.toLowerCase() === "my quotes") {
    checkValue(value);

    await appendElementText(
      "################### My Quotes ###################",
      "newLineMyQuotes"
    );
    await appendElementText("const life = () => {", "quote");
    await appendElementText(
      "if (lifestyle === optimized) achieve();",
      "quoteList"
    );
    await appendElementText(
      " if (comfortZone.contains(you)) exit();",
      "quoteList"
    );
    await appendElementText(
      " if (potential > currentSelf) upgrade();",
      "quoteList"
    );
    await appendElementText("for (goals in progress) persist();", "quoteList");
    await appendElementText("for (strength in body) dedicate();", "quoteList");
    await appendElementText("for (memories in making) live();", "quoteList");
    await appendElementText(
      "for (confidence in self) reachNewHeights();",
      "quoteList"
    );
    await appendElementText(
      "for (financialFreedom in sight) pursue();",
      "quoteList"
    );
    await appendElementText(
      " while (challenges.exist()) persevere();",
      "quoteList"
    );
    await appendElementText(
      "while (change.isInevitable()) adapt();",
      "quoteList"
    );
    await appendElementText("}", "quote");

    await appendElementText(
      "#################################################",
      "hashLine"
    );
  } else {
    checkValue(value);
    counter++;
    await appendElementText(
      `XXX Command not found: ${value} XXX`,
      `new${counter} error`
    );
  }
}

function checkValue(value) {
  value = value.toLowerCase();
  if (
    value === "social network" ||
    value === "help" ||
    value === "clear" ||
    value === "about me" ||
    value === "projects" ||
    value === "my quotes"
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

async function printText(text, id, icon) {
  let str = text.split("");
  const interval = setInterval(() => {
    let content = document.querySelector(`#${id}`);
    content.innerHTML += str[0];
    str = str.slice(1);

    if (!str.length) {
      console.log(icon);
      icon ? (content.innerHTML += icon) : "";
      clearInterval(interval);
    }
  }, 10);
}

start();
