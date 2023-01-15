var images = ["The-Family-Book.jpg", "Father.jpg", "Mother.jpg", "Brother.jpg", "Me.jpg", "Capturesnip.PNG"];
var names = ["Family Book", "Perumal Ramanujan(Father)", "Uma(Mother)", "Harijit(Brother)", "Yogith(Me)", "Zainab Mam(Not family but the best teacher)"];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 5
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }

  //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage = images[i];
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
