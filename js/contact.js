function validFile(input) {

    const fileValidator = new FileValidator();

    const curFiles = input.files;

    if(curFiles.length !== 0) {

        for(const file of curFiles) {

            if (!fileValidator.validFileType(file)) {

                alert(
                    "첨부 불가능한 파일 형식입니다." +
                    "\n\n" + "'" + file.name + "'" +
                    "\n\n" + "첨부 가능한 파일 형식: " + fileValidator.permitFileTypes
                );
                input.value = "";
                return false;
            }

            if (!fileValidator.validFileSize(file)) {

                alert("5MB 이하의 파일만 첨부 가능합니다.");
                input.value = "";
                return false;
            }
        }
    }

    return true;
}

function contactFormCheck(form) {
    // let fieldInquiries = form.elements.fieldInquiries;
    let budget = form.elements.budget;

    // if (!isLeastOneInList(fieldInquiries)) {
    //     alert("통증 강도는 최소 하나 이상 선택하셔야합니다.");
    //     fieldInquiries[0].focus();
    //     return false;
    // }

    if (!isLeastOneInList(budget)) {
        alert("확인 후 연락드리겠습니다.");
        budget[0].focus();
        return false;
    }

    return true;
}

function isLeastOneInList(target) {

    for (let idx in target) {

        if (target[idx].checked) {
            return true;
        }
    }

    return false;
}