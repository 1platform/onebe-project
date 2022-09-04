import { ServiceLoader } from "onebe/Services";
import { EmailService } from "onebe/Email";
import { SMSService } from "onebe/SMS";

export default function services(): void {
  ServiceLoader.set<EmailService>(new EmailService());
  ServiceLoader.set<SMSService>(new SMSService());

  // Define the services to be loaded here.
}
