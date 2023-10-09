// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "admin@workmates.live",
      to: ["admin@workmates.live"],
      subject: "Thanks!",
      react: (
        <>
          <p>Got it!  Reply to this e-mail if you have any questions.  Thanks!</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
