var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["loanAmount"] = document.getElementById("loanAmount").value;
    formData["loanDate"] = document.getElementById("loanDate").value;
    formData["RepaymentAmount"] = document.getElementById("repaymentAmount").value;
    formData["repaymentDate"] = document.getElementById("repaymentDate").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("clientList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phoneNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.loanAmount;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.loanDate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.RepaymentAmount;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.repaymentDate;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("loanAmount").value = "";
    document.getElementById("loanDate").value = "";
    document.getElementById("repaymentAmount").value = "";
    document.getElementById("repaymentDate").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("loanAmount").value = selectedRow.cells[2].innerHTML;
    document.getElementById("loanDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("repaymentAmount").value = selectedRow.cells[4].innerHTML;
    document.getElementById("repaymentDate").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.phoneNumber;
    selectedRow.cells[2].innerHTML = formData.loanAmount;
    selectedRow.cells[3].innerHTML = formData.loanDate;
    selectedRow.cells[4].innerHTML = formData.repaymentAmount;
    selectedRow.cells[5].innerHTML = formData.repaymentDate;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("clientList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
