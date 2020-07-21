let input = document.querySelector('input');
// let textarea = document.querySelector('textarea');
let valid = true;
input.addEventListener('change',  async () => {
    let files = input.files;

    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();
    let readContent = "";
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        // textarea.value = lines.join('\n');
        // readContent = ""+textarea.value+"";
        readContent = lines.join('\n');
        console.log(readContent);
            var xhr = new XMLHttpRequest();


            xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("getButton").disabled = false;
        alert("Converted Successfully");
    }
    else if(this.readyState == 4 )
    {
        alert("Error!\n Please check the format of json parsed");
    }
}
xhr.open("POST", "https://jsoncsvgsx.herokuapp.com/", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(readContent);

    }; 

    reader.onerror = (e) => alert("");

     reader.readAsText(file); 
    
 });


function get()
{
      fetch('https://jsoncsvgsx.herokuapp.com/').then(function (response) {
    // The API call was successful!
    console.log('success!', response.body.data);
    window.location.href = 'https://jsoncsvgsx.herokuapp.com/';
}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});
document.getElementById("getButton").disabled = true;
}
