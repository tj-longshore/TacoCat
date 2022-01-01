//controller function
function getString() {
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("alert").classList.remove("msg-true","msg-false", "msg-error")

    let originalString = document.getElementById("originalString").value;

    let palindromeString = palindrome(originalString);

    displayString(palindromeString);
}

//logic function
function palindrome(originalString) {
    let remove = /[\^\W_]/g;    
    let lowerStr = originalString.toLowerCase().replace(remove,"");
    let reverseStr = lowerStr.split("").reverse().join("");
    if (reverseStr === lowerStr && reverseStr !== ""){
        palindromeHeaderMsg = "It's a palindrome!";
        palindromeMsg = "Your string reversed is:"
        document.getElementById("alert").classList.add("msg-true");
    } else if (reverseStr === "") {
        palindromeHeaderMsg = "Well you didn't enter anything.";
        palindromeMsg = "¯\\_(ツ)_/¯"
        document.getElementById("alert").classList.add("msg-error");
    }else {
        palindromeHeaderMsg = "It's not a palindrome :(";
        palindromeMsg = "Your string reversed is:";
        document.getElementById("alert").classList.add("msg-false");
    }

    return reverseStr;
}


//display function
function displayString(reverseStr){
    //display header message
    document.getElementById("msgHeader").innerHTML = `${palindromeHeaderMsg}`
    //display message
    document.getElementById("msg").innerHTML = `${palindromeMsg} ${reverseStr}`;

    //show alert box
    document.getElementById("alert").classList.remove("invisible");
}