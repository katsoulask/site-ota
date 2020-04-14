import React, { Component } from "react"
import "./contact.css"
import Content from "../../components/Content"

export default class Contact extends Component {
  render() {
    return (
      <Content>
        <h1>Επικοινωνία με το Σωματείο </h1>
        <br />
        <form action="/action_page.php">
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />

          <label>Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          <input type="submit" value="Submit" />
        </form>
      </Content>
    )
  }
}
