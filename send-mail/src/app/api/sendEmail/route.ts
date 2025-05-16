import { BodySendMailRequest } from "@/models/bodySendEmailRequest.model";
import { NextRequest, NextResponse } from "next/server";
import { valitdateBodySendMailRequest } from "./validator";
import { sendEmailService } from "@/app/services/sendEmails/SendEmail.service";

export async function POST(request: NextRequest) {

    const body: BodySendMailRequest = await request.json()
    const validation = valitdateBodySendMailRequest(body)

    // validation request bosy
    if (!validation.isValid) {
        return NextResponse.json({
            message: validation.message,
        }, {
            status: 400
        })
    }

    // send email service
    const result = await sendEmailService(body)
    if (result.success) {
    
        return NextResponse.json({result}, {status: 201})
    }


    return NextResponse.json({result}, {status: 500})

}
