// localStorage
// sessionStorage

// window.localStorage.setItem("test", 1);

const elementInputEmail = document.querySelector(".lns-input[name='email']");
const elementInputAddress = document.querySelector(".lns-input[name='address']");
const elementButton = document.querySelector(".lsn-button");
const elementButtonCopy = document.querySelector(".lsn-copy-button");
const elementButtonClear = document.querySelector(".lsn-clear-button");
const elementButtonDelete = document.querySelector(".lsn-delete-button");

// localStorage.setItem("boolean", true);
// localStorage.setItem("test", JSON.stringify({ name: "Joh" }));

elementButtonCopy.addEventListener("click", () => {
    const payload = {
    email: elementInputEmail.value,
    address: elementInputAddress.value,
  };

  localStorage.setItem("userData-copy", JSON.stringify(payload));
});

elementButtonClear.addEventListener("click", () => {
  localStorage.removeItem("userData");
});

elementButtonDelete.addEventListener("click", () => {
  localStorage.clear();
});


elementButton.addEventListener("click", () => {
  const payload = {
    email: elementInputEmail.value,
    address: elementInputAddress.value,
  };

  // localStorage.setItem("userData", JSON.stringify(payload));
  Cookies.set('name', JSON.stringify(payload), { path: '/', expires: .01 })
});


const restoreUserData = () => {
  try {
    const initialUserData = Cookies.get("name");
    const userData = JSON.parse(initialUserData);
  
    if (!userData) {
      return;
    }
  
    // if (userData.email) {
    //   elementInputEmail.value = userData.email;
    // }

    // if (userData.address) {
    //   elementInputAddress.value = userData.address;
    // }

    elementInputEmail.value = userData.email || "";
    elementInputAddress.value = userData.address || "";
  } catch {
    console.log("Error!");
  }
};

restoreUserData();
// Cookies.remove('name')
