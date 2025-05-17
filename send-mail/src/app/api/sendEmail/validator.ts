import { BodySendMailRequest } from "@/models/bodySendEmailRequest.model";

export const valitdateBodySendMailRequest = (body: BodySendMailRequest) => {

    
    if (!body.from || body.from.length === 0 ) 
        {
            return {
                isValid: false,
                message: "from is required",
            }
    } else if (body.from.includes("@") === false)

    if (!body.to || body.to.length === 0 ) 
        {
            return {
                isValid: false,
                message: "to is required",
            }
    } else if (body.to.includes("@") === false)
        {
            return {
                isValid: false,
                message: "Email format is invalid",
            }
        }



    if (!body.subject) {
        return {
            isValid: false,
            message: "subject is required",
        }
    }

    if (!body.content) {
        return {
            isValid: false,
            message: "content is required",
        }
    }
    return {
        isValid: true, 
        message: "",
    }
}