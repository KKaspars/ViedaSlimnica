﻿function addID(msgID, mode) { 
    var id = mode + 'modalMsgID';
    var modal = document.getElementById(id)
    modal.value = msgID;
}
function editReply(msgID, mode, msghtmlID) {
    if (mode === "edit") {
        // labot
        document.getElementById('editreplyTitle').innerHTML = "Labot ziņu";
        document.getElementById('editreplyMode').value = 'edit';
        document.getElementById('editMsgID').value = msgID;
        document.getElementById('editreplySubject').value = document.getElementById('msgSubject' + msghtmlID).innerHTML;
        $('#editreplyText').val(document.getElementById('message' + msghtmlID).innerHTML);
    }
    else {
        // atbildēt
        var msgTo = document.getElementById('msgAuthor' + msghtmlID).innerHTML;
        document.getElementById('editreplyTitle').innerHTML = "Atbildēt " + msgTo;
        document.getElementById('editreplyMode').value = 'reply';
        document.getElementById('editMsgID').value = msgID;
        document.getElementById('editreplySubject').value = 'RE: ' + document.getElementById('msgSubject' + msghtmlID).innerHTML;
        $('#editreplyText').val(""); 

    }
}