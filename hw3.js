<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>

/*
create a form and add a button
*/
<body>
        <div class="container">
            <form action="signup.html" method="post" id="signup">
                <h1>Add a student</h1>
                <div class="field">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your fullname",onchange = "handleInput()"  />
                    <small></small>
                </div>
                <div class="field">
                    <label for="age">Age:</label>
                    <input type="text" id="Age" name="age" placeholder="Enter your age", onchange = "handleInput()" />
                    <small></small>
                </div>
                
                <div class="field">
                    <label for="phone">Phone:</label>
                    <input type="text" id="Phone" name="phone" placeholder="Enter your phone", onchange = "handleInput()" />
                    <small></small>
                </div>
                <div class="field">
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" placeholder="Enter your address", onchange = "handleInput()"/>
                    <small></small>
                </div>
                <div class="field">
                    <button type="submit" class="full" onclick = "submitData()"  >Add</button>
                </div>
            </form>
        </div>
        <ul id="UnList"></ul>
        <ol id = "orlist"></ol>
        <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
        <script>
        const data = { };
        const row = 1;
        function handleInput(){
            data["name"] = document.getElementById("name").value;
        }

        function submitData(){
            console.log(data["name"]); // Get the first name from the object
            console.log(data); // return object
            var table = document.getElementsByTagName('tbdy')
            var tr = table[row]
            for (var j = 0; j < 4; j++) {
                 var td = tr[j]
                 var text = document.createTextNode('\u0020')
                 if (j == 0)
                    text = document.createTextNode(data["name"]);
                 if (j == 1)
                    text = document.createTextNode(data["age"]);
                 if (j == 2)
                    text = document.createTextNode(data["phone"]);
                 if (j == 3)
                    text = document.createTextNode(data["address"]);
                 td.appendChild(text)
                 
    }
           row += 1
            
            
  }
        function tableCreate() {
            var body = document.getElementsByTagName('body')[0];
            var tbl = document.createElement('table');
            tbl.style.width = '100%';
            tbl.setAttribute('border', '1');
            var tbdy = document.createElement('tbody');
            for (var i = 0; i < 5; i++) {
              var tr = document.createElement('tr');
              for (var j = 0; j < 4; j++) {
                  var td = document.createElement('td');
                  var text = document.createTextNode('\u0020')
                  if (i == 0) {
                    if (j == 0)
                        text = document.createTextNode('Student Name');
                    if (j == 1)
                        text = document.createTextNode('Age');
                    if (j == 2)
                        text = document.createTextNode('phone');
                    if (j == 3)
                        text = document.createTextNode('address');
                 
    }
          
                  td.appendChild(text)
                  tr.appendChild(td)
              }
              tbdy.appendChild(tr);
            }
            tbl.appendChild(tbdy);
            body.appendChild(tbl)
}
        tableCreate();

      let d = ["item1", "item2", "item3", "item4"];
      let list = document.getElementById("UnList");
      let olist = document.getElementById("orList");
      for (i = 0; i < d.length; ++i) {
         var li = document.createElement('li');
         var orli = document.createElement('li');
         li.innerText = d[i];
         orli.innerText = d[i];
         list.appendChild(li);
         olist.appendChild(orli);
      }



        </script>
        
        
        
        <script src="js/app.js"></script>
        
    </body>
    </html>


<!DOCTYPE html>
