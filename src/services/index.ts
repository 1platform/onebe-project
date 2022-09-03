import ServiceLoader from "onebe/Services/ServiceLoader";
import EmailService from "onebe/Email/EmailService";
import SMSService from "onebe/SMS/SMSService";

export default function services(): void {
  ServiceLoader.set<EmailService>(new EmailService());
  ServiceLoader.set<SMSService>(new SMSService());

  // Define the services to be loaded here.
}
