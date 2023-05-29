export class Input {
  constructor(parentSelector, { classList, name, placeholder = "Type sms", type, value = "" }) {
    this.inputTag = document.createElement("input");
    this.inputTag.classList = classList;
    this.inputTag.name = name;
    this.inputTag.placeholder = placeholder;
    this.inputTag.type = type;
    this.inputTag.value = value;

    // render to the screen
    this.parentElement = document.querySelector(parentSelector);
    this.parentElement.appendChild(this.inputTag);
  }

  onchange(callback) {
    this.inputTag.addEventListener("input", callback);
  }

  update(tagName, tagValue) {
    this.inputTag[tagName] = tagValue;
  }

  remove() {
    this.inputTag.remove();
  }
}

export class Password extends Input {
  constructor(parentSelector, args) {
    super(parentSelector, args);

    this.inputTag.type = "password";

    this.inputTagWrapper = document.createElement("div");

    this.inputIconWrapper = document.createElement("span");
    this.inputIconWrapper.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg>`;

    this.inputIconWrapper.addEventListener("click", () => {
      this.inputTag.type = this.inputTag.type === "password" ? "text" : "password";
    });

    this.inputTag.remove();

    this.inputTagWrapper.appendChild(this.inputTag);
    this.inputTagWrapper.appendChild(this.inputIconWrapper);
    this.parentElement.appendChild(this.inputTagWrapper);
  }
}
