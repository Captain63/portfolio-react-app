import { Component } from "react";
import { requiredMessage, validEmail } from "../utils/validate";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact Me</h2>
                <p className="hide" id="error"></p>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your name" onBlur={requiredMessage} required></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your email" onBlur={validEmail} required></input>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="3" className="form-control" id="textarea" placeholder="Add your message" onBlur={requiredMessage} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>                
            </div>
        );
    }
}

export default Contact;