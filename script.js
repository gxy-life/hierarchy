const listWrapper = document.querySelector(".list-wrapper");

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  const dir1Ul = document.createElement("ul");
  dir1Ul.classList.add("dir1-ul");
  listWrapper.appendChild(dir1Ul);
  const ver1 = document.createElement("span");
  ver1.classList.add("vertical1");
  dir1Ul.appendChild(ver1);
  const dir1Li = document.createElement("li");
  dir1Li.classList.add("directory1");
  dir1Li.textContent = element.dir1[0];
  dir1Ul.appendChild(dir1Li);
  if (element.dir1.length > 1) {
    for (let j = 1; j < element.dir1.length; j++) {
      const element2 = element.dir1[j];
      const dir2Ul = document.createElement("ul");
      dir2Ul.classList.add("dir2-ul");
      dir1Li.appendChild(dir2Ul);
      const ver2 = document.createElement("span");
      ver2.classList.add("vertical2");
      dir2Ul.appendChild(ver2);
      const dir2Li = document.createElement("li");
      dir2Li.classList.add("directory2");
      dir2Li.textContent = element2.dir2[0];
      dir2Ul.appendChild(dir2Li);
      const dir3Ul = document.createElement("ul");
      dir3Ul.classList.add("dir3-ul");
      dir2Li.appendChild(dir3Ul);

      for (let k = 1; k < element2.dir2.length; k++) {
        const element3 = element2.dir2[k];
        const dir3Li = document.createElement("li");
        dir3Li.classList.add("directory3");
        dir3Li.textContent = element3.dir3;
        dir3Ul.appendChild(dir3Li);
      }
    }
  }
}

const dir1 = document.querySelectorAll(".directory1");
const dir = document.querySelectorAll('[class^="directory"]');
const vertical1 = document.querySelectorAll(".vertical1");

dir.forEach((e) => {
  isClicked(e);
});

function vertical() {
  //  transitionで.3s後に高さが変化するため
  setTimeout(function () {
    for (let i = 0; i < dir1.length; i++) {
      let element = dir1[i];
      let targetDir1 = element.getBoundingClientRect().top;
      let targetDir2 = element.lastElementChild.getBoundingClientRect().top;
      vertical1[i].style.height = targetDir2 - targetDir1 - 20 + "px";
    }
  }, 310);
}

function isClicked(e) {
  e.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!e.classList.contains("deepestDir")) {
      e.classList.toggle("active");
      e.parentElement.classList.toggle("active");
      vertical();
    }
  });
}

const li = document.querySelectorAll(".list-wrapper li");
//  一番最後のディレクトリは最初からactiveを追加し、クリックしてもactiveが削除されないようにする
li.forEach((element) => {
  if (element.children.length == 0) {
    element.classList.add("active", "deepestDir");
  }
});
