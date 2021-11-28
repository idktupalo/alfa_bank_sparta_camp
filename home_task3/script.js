const grid = document.querySelector(".grid");

for (let index = 0; index < 25; index++) {
  grid.innerHTML += `
    <div class="elem" id=${index}>
        <div class="text">
            <textarea
                class="text_area"
                name=""
                cols="30"
                rows="10"
                placeholder="text"
            ></textarea>
      </div>
    <div class="buttons" id="button_${index}">
        <button class="save">save</button>
        <button class="cancel">cancel</button>
    </div>
    `;
}

const textBlocks = document.querySelectorAll(".elem");
const buttons = document.querySelectorAll(".buttons");
const textarea = document.querySelectorAll(".text_area");
const cancel = document.querySelectorAll(".cancel");
const save = document.querySelectorAll(".save");

textBlocks.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.childNodes[1].style.visibility = "visible";
  });
});

textarea.forEach((elem, index) => {
  elem.innerHTML = localStorage.getItem(index);

  elem.addEventListener("click", () => {
    buttons.forEach((elem) => {
      elem.style.visibility = "hidden";
    });

    buttons[index].style.visibility = "visible";

    let cancel_text = elem.value;

    cancel.forEach((button) => {
      button.addEventListener("click", () => {
        elem.value = cancel_text;
      });
    });

    save.forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem(index, elem.value);
      });
    });
  });
});
