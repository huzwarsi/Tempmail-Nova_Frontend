export const FAQ_LIST = [
  {
    q: 'What is a temporary email address?',
    a: 'A temporary email address (also called disposable email, temp mail, burner email, or throwaway email) is a short-lived inbox created without registration. It lets you receive confirmation links, OTP codes, and verification emails without exposing your personal email address.',
  },
  {
    q: 'Is TempMail Nova free to use?',
    a: 'Yes, TempMail Nova is free to use. You can generate disposable email addresses and receive incoming messages without paying subscription fees or creating an account.',
  },
  {
    q: 'How long does a temporary email last on TempMail Nova?',
    a: 'Incoming emails and mailboxes are stored temporarily and automatically purged from our servers after 24 hours to protect user privacy and prevent data accumulation.',
  },
  {
    q: 'How does TempMail Nova compare to 10 minute mail services?',
    a: 'Unlike traditional 10 minute mail or ten minute mail services that expire in only 10 minutes—often causing users to lose delayed verification codes—TempMail Nova retains messages for 24 hours. This gives you ample time to receive confirmation emails while ensuring all data is permanently purged after 24 hours.',
  },
  {
    q: 'Can I use TempMail Nova as a fake mail generator for testing?',
    a: 'Yes. Developers and QA engineers frequently use TempMail Nova as a test email generator to verify signup flows, template rendering, and automated transactional emails. Unlike non-functional mock addresses, TempMail Nova provides real working inboxes that receive mail in real time.',
  },
  {
    q: 'Can I choose a custom email address?',
    a: 'Yes. You can click the "Custom Address" button on the mailbox generator to pick a custom username and select from available active domains.',
  },
  {
    q: 'Can I receive verification emails and OTPs?',
    a: 'Yes. TempMail Nova receives incoming messages in real-time, making it suitable for receiving signup confirmation links, verification codes, and one-time passwords.',
  },
  {
    q: 'Can I send emails from TempMail Nova?',
    a: 'No. Outbound email sending is disabled to prevent spam abuse and maintain server deliverability. TempMail Nova is strictly an incoming email inbox generator.',
  },
  {
    q: 'Are file attachments supported?',
    a: 'Yes. Attached files (images, documents, PDFs) are parsed and downloadable directly from the email message viewer in your browser.',
  },
  {
    q: 'How does real-time email delivery work?',
    a: 'Our backend uses WebSocket (Socket.io) connections. When an incoming email arrives at our Haraka SMTP server, it is processed and pushed immediately to your open browser session.',
  },
  {
    q: 'Can I use TempMail Nova on mobile devices?',
    a: 'Yes. TempMail Nova is fully responsive on smartphones and tablets. You can also scan the QR code on desktop to view your inbox on a mobile device.',
  },
  {
    q: 'What happens when a mailbox expires?',
    a: 'When the 24-hour expiration window completes, all associated messages, headers, and attachments are permanently removed during automated database cleanup runs.',
  },
  {
    q: 'Is account registration required?',
    a: 'No registration or personal information is required. You can generate a temporary mailbox instantly upon visiting the website.',
  },
  {
    q: 'Why should I use a temporary email instead of my personal email?',
    a: 'Using a disposable email address for one-time signups prevents your primary email from getting added to unwanted marketing databases, promotional spam lists, and potential data breach leaks.',
  },
  {
    q: 'Can I use a temporary email for Discord or gaming platforms?',
    a: 'While temporary emails work for many online registrations, third-party platforms like Discord actively maintain blocklists of recognized disposable email domains and may reject them or request phone verification. Additionally, because TempMail Nova purges messages after 24 hours, you should never use temporary addresses for accounts that require future recovery.',
  },
  {
    q: 'What is a throwaway or single-use email address?',
    a: 'A throwaway email address (or single-use email) is a short-lived inbox created for temporary web interactions. It lets you receive one-time passwords and verification links without connecting your permanent personal inbox to marketing campaigns.',
  },
];
