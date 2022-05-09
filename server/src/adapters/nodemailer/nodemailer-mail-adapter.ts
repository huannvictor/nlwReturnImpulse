import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4f419884f0ee5b",
    pass: "edce0c5ba196c0",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <suport@feedget.com>",
      to: "huannvictor@gmail.com",
      subject,
      html: body,
    });
  }
}
