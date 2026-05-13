// followers
(async function () {
  let modal = document.querySelector("#followersModal .modal-body");

  let oldScroll = modal.scrollTop;
  let allRows = new Map();
  let count = 0;

  modal.scrollTop = 0;
  await new Promise((r) => setTimeout(r, 300));

  while (count < 100) {
    document.querySelectorAll(".user-row-id").forEach((row) => {
      let text = row.innerText;
      if (!allRows.has(text)) allRows.set(text, text);
    });

    console.log("scrolling... Please wait");
    modal.scrollTop += 200;
    await new Promise((r) => setTimeout(r, 200));

    if (modal.scrollTop >= modal.scrollHeight - 100) break;
    count++;
  }

  modal.scrollTop = oldScroll;

  let result = Array.from(allRows.values());
  let blob = new Blob([result.join("\n\n")], {
    type: "text/plain",
  });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `followers.txt`;
  a.click();

  console.log(`totall followers: ${result.length}`);
})();
// followings
(async function () {
  let modal = document.querySelector("#followingModal .modal-body");

  let oldScroll = modal.scrollTop;
  let allRows = new Map();
  let count = 0;

  modal.scrollTop = 0;
  await new Promise((r) => setTimeout(r, 300));

  while (count < 100) {
    document.querySelectorAll(".user-row-id").forEach((row) => {
      let text = row.innerText;
      if (!allRows.has(text)) allRows.set(text, text);
    });

    console.log("scrolling... Please wait");
    modal.scrollTop += 200;
    await new Promise((r) => setTimeout(r, 200));

    if (modal.scrollTop >= modal.scrollHeight - 100) break;
    count++;
  }

  modal.scrollTop = oldScroll;

  let result = Array.from(allRows.values());
  let blob = new Blob([result.join("\n\n")], {
    type: "text/plain",
  });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `following.txt`;
  a.click();

  console.log(`totall followeing: ${result.length}`);
})();
