function editUser(i) {
  index = i;
  console.log(data[i]);

  for (a in data[i]) {
    document.getElementById(a).value = data[i][a];
  }
}

function update() {
  var updatedObj = {};
  for (a in data[0]) {
    updatedObj[a] = document.getElementById(a).value;
  }
  data[index] = updatedObj;
  displayPerson(data);
  clearForm();
}

function clearForm() {
  for (a in data[0]) {
    document.getElementById(a).value = "";
  }
}
selectedCheck = [];
function selectCheck(i) {
  selectedCheck.push(i);
  isExist = false;
  var isindex;
  for (j = 0; j < selectedCheck.length; j++) {
    if (selectCheck[j] == i) {
      isExist = true;
      isindex = j;
    }
  }
  if (isExist == false) {
    selectedCheck.push();
  } else {
    selectedCheck.splice(isindex, 1);
  }
  var dup = findDuplicate(selectedCheck);
  if (dup[0] == i) {
    selectedCheck.splice(i, 1);
  }
  console.log(selectedCheck);
}
function deleteSelected() {}
function findDuplicate(arr) {
  const result = arr.filter(
    (value, index, array) => array.indexOf(value) !== index
  );
  return result;
}
