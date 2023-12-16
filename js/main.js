var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");

var bookmarkList = [];
if (localStorage.getItem("bookmarks") != null) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
  displayBookmark();
}

function getInputValue() {
  var bookmark = {
    name: bookmarkName.value,
    url: bookmarkURL.value,
  };
  bookmarkList.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
  displayBookmark();
  clear();
}
function displayBookmark() {
  var cartona = ``;
  for (var i = 0; i < bookmarkList.length; i++) {
    cartona += `
    <tr>
        <td>${i + 1}</td>
        <td>${bookmarkList[i].name}</td>
        <td><button class="btn btn-success" onclick="navigateToUserProvidedPage()" ><i class="fa-solid fa-eye pe-2"></i> Visit</button></td>
        <td><button class="btn btn-danger" onclick = "deleteItem(${i})" ><i class="fa-solid fa-trash-can pe-2"></i> Delete</button></td>
        </tr>
    `;
  }
  document.getElementById("tableContent").innerHTML = cartona;
}
function clear() {
  bookmarkName.value = "";
  bookmarkURL.value = "";
}

function deleteItem(index) {
  bookmarkList.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
  displayBookmark();
}
function navigateToNewPage() {
  var newPageUrl = bookmarkURL;
  window.location.href = newPageUrl;
}
function navigateToUserProvidedPage() {
  var userProvidedUrl = document.getElementById("bookmarkURL").value;
  if (userProvidedUrl.trim() !== "") {
    window.location.href = userProvidedUrl;
  } else {
    alert("Please enter a valid URL.");
  }
}
