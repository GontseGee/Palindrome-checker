function checkPalindrome(){


    const inputString = document.getElementById('inputString').value; //* the field for inputing the string to be checked
    const result = document.getElementById('result'); //*displaying of the results

    const cleanedString = inputString.replace(/[A-Za-z0-9]/g).toLowercase();  //*lowercase conversion and removal of non alphabets
    
    let left=0; //* the beginning index of the string
    let right = cleanedString.length -1 ; //* the ending index of the string
 while (left < right){
    if (cleanedString[left] == cleanedString[right]){
        //* checks if the left and the right values are equal 
        resultElement.textContent="'{inputString}'.it is not a palindrome"; //*the output of the palindrome checker
        return;
    }
      
 }
 left++;
 right--;

resultElement.textContent='"{inputString}" it is a palindrome';
}
