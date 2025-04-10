import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      await emailjs.send("service_18evzwb", "template_90724bp", {
        name,
        email,
        message,
      }, "HBy-CVUnIr68wYtyM");
      await emailjs.send("service_18evzwb", "template_uun1i0u", {
        name,
        email,
        message,
      },"HBy-CVUnIr68wYtyM");
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent Successfully");
      setDisableBtn(false);
    } catch (error) {
      toast.error(error);
      setDisableBtn(false);
    }
  };
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <section>
        <motion.form onSubmit={submitHandler}>
          <div>
            <BsPerson size={30} />
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <MdEmail size={30} />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <BiMessageAltDetail size={30} style={{ marginBottom: "90px" }} />
            <textarea
              type="text"
              rows={5}
              cols={10}
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <motion.button type="submit" disabled={disableBtn}>
            Send
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
