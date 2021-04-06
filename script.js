function CreateUser(event){
event.preventDefault()

const user={
first_name: $('#first Name').val(),
last_name: $('#last Name').val(),
age: $('#age').val()

}
fetch('http://localhost:3333/user',{
headers: {'Content-Type': 'application/json;charset=utf-8'},
method: 'POST', 
body; JSON.stringify(user)
}).then(response => response.json())
.then((json => {console.log(json) })
.catch(error => console.error(error))

function displayUserId(user) {
alert('User added with id' +user.id)

}}

function deleteUser(User id){
$.ajax({
method: "DELETE",
url: 'user' +User id,
success: function(result){
data={
first_name: $('#first Name').val(),
last_name: $('#last Name').val(),
age: $('#age').val(),
user_id: $('#user id').val()

}
requestUsers();
},
function deleteUser(User id){
alert('your data is deleted');
}
}};

function ListUsers(event){
event.preventDefault()
$ajax({
type: 'GET'
dataType:"json"
url: '/users',+usersId,
success: function(data){

data={
first_name: $('#first Name').val(),
last_name: $('#last Name').val(),
age: $('#age').val()

}
});
return false;
});
function renderList(Users){
alert(Users);
} 

function getUser(event){
event.preventDefault()
$ajax({
type: 'GET'
dataType:"json"
url: '/user',+UserId,
success: function(data){

data={
first_name: $('#first Name').val(),
last_name: $('#last Name').val(),

}
});
return false;
});
function getUser(id){
alert(id);
}








