// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// function firstFun () {
//  console.log( first );
//  console.log( first.label );
//  console.log( first.type );
//  console.log( first.id );
//
// }


// -------- Your Code Goes Below this Line --------

let fields = document.querySelector("#fields")

let first = formData[0]
let last = formData[1]
let email = formData[2]
let website = formData[3]
let language = formData[4]
let comment = formData[5]
let mobile = formData[6]
let home = formData[7]


const firstName = document.createElement("input")
firstName.id = first.id
firstName.type = first.type
firstName.label = "First Name"
firstName.placeholder = "First Name"
firstName.options = []

fields.appendChild(firstName)

const lastName = document.createElement("input")
lastName.id = last.id
lastName.type = last.type
lastName.label = "Last Name"
lastName.placeholder = "Last Name"
lastName.options = []

fields.appendChild(lastName)

const emailAddress = document.createElement("input")
emailAddress.id = email.id
emailAddress.type = email.type
emailAddress.label = "Email Address"
emailAddress.placeholder = "Email Address"
emailAddress.options = []

fields.appendChild(emailAddress)

const currentWeb = document.createElement("input")
currentWeb.id = website.id
currentWeb.type = website.type
currentWeb.label = "Current website url"
currentWeb.placeholder = "Current website url"
currentWeb.options = []

fields.appendChild(currentWeb)


const selL = document.createElement("option")
selL.value = "Select Language"
selL.textContent = "Select Language"

const enOpt = document.createElement("option")
enOpt.value = "EN"
enOpt.textContent = "English"

const frOpt = document.createElement("option")
frOpt.value = "FR"
frOpt.textContent = "French"

const spOpt = document.createElement("option")
spOpt.value = "SP"
spOpt.textContent = "Spanish"

const chOpt = document.createElement("option")
chOpt.value = "CH"
chOpt.textContent = "Chinese"

const jpOpt = document.createElement("option")
jpOpt.value = "JP"
jpOpt.textContent = "Japanese"


let selectLang = document.createElement("select")
selectLang.id = language.id
selectLang.type = language.type
selectLang.label = "Select Language"
selectLang.placeholder = "Select Language"

selectLang.appendChild(selL)
selectLang.appendChild(enOpt)
selectLang.appendChild(frOpt)
selectLang.appendChild(spOpt)
selectLang.appendChild(chOpt)
selectLang.appendChild(jpOpt)


fields.appendChild(selectLang)

const yourComment = document.createElement("textarea")
yourComment.id = comment.id
yourComment.type = comment.type
yourComment.label = "Your comment"
yourComment.placeholder = "Your comment"
yourComment.options = []

fields.appendChild(yourComment)

const mobileNumber = document.createElement("input")
mobileNumber.id = mobile.id
mobileNumber.type = mobile.type
mobileNumber.label = "Mobile number"
mobileNumber.placeholder = "Mobile number"
mobileNumber.options = []

fields.appendChild(mobileNumber)

const homeNumber = document.createElement("input")
homeNumber.id = home.id
homeNumber.type = home.type
homeNumber.label = "Home number"
homeNumber.placeholder = "Home number"
homeNumber.options = []

fields.appendChild(homeNumber)
