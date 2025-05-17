"use client"
import { useState } from "react";

export default function Home() {

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    status: "",
  });
  const [emailInfo, setEmailInfo] = useState({
    from: "",
    to: "",
    subject: "",
    content: "",
  });


  const sendEmail = async () => {
    // envio del correo 

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailInfo),
    })

    const respondeJSon = await response.json()

    if (response.status === 201) {
      setEmailInfo({
        from: "",
        to: "",
        subject: "",
        content: "",
      });

      setAlertMessage({
        message: "Correo enviado correctamente",
        status: "success",
      });

    } else {
      setAlertMessage({
        message: "error al enviar el correo",
        status: "error",
      });
    }
  }



  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-lg bg-slate-200 rounded-md text-center flex flex-col items-center p-5 pr-9">
        <h1>Send Email Api</h1>
        <form>
          <div>
            <input
              type="text"
              id="from"
              name="from"
              onChange={(e) => {
                setEmailInfo({ ...emailInfo, from: e.target.value });
              }}
              value={emailInfo.from}
              placeholder="From"
              className="border-2 bg-white w-full border-gray-300 rounded-md p-2 m-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="to"
              name="to"
              value={emailInfo.to}
              onChange={(e) => {
                setEmailInfo({ ...emailInfo, to: e.target.value });
              }}
              placeholder="To"
              className="border-2 bg-white w-full border-gray-300 rounded-md p-2 m-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={emailInfo.subject}
              onChange={(e) => {
                setEmailInfo({ ...emailInfo, subject: e.target.value });
              }}
              placeholder="Subject"
              className="border-2 bg-white w-full border-gray-300 rounded-md p-2 m-2"
            />
          </div>
          <div>
            <textarea
              id="content"
              value={emailInfo.content}
              name="content"
              placeholder="Message"
              onChange={(e) => {
                setEmailInfo({ ...emailInfo, content: e.target.value });
              }}
              className="border-2 bg-white border-gray-300 rounded-md p-2 m-2 w-full h-32"
            ></textarea>
          </div>

          <span>{
            alertMessage.message && (
              <div
                className={`${alertMessage.status === "success"
                  ? "bg-green-500"
                  : "bg-red-500"
                  } text-white p-2 rounded-md m-2`}
              >
                {alertMessage.message}
              </div>
            )
          }</span>
          <button
            type="button"
            onClick={sendEmail}
            className="bg-slate-500 text-white rounded-md p-2 m-2 hover:bg-blue-600 w-full transition duration-200 ease-in-out"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
