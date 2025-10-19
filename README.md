# School Portal ICT Chatbot (Demo)

This is a small client-side demo chatbot for a school portal. It's built with only HTML, CSS and JavaScript and stores ICT tickets in the browser's localStorage. The demo is intended as a starting point; for production you'll want to add authentication and a backend to persist tickets.

Files
- `index.html` — main page and UI
- `styles.css` — simple responsive styles
- `chatbot.js` — chat logic, FAQ rules, ticket storage (localStorage)

How to run
1. Serve the folder with a simple HTTP server (recommended):

```bash
# Python 3
python3 -m http.server 8000

# or using Node (if available)
# npx http-server -p 8000
```

2. Open http://localhost:8000 in your browser and try the chat.

Behavior
- Choose "General question" or "Contact ICT" in the dropdown.
- When contacting ICT the message is saved as a ticket locally and shown in the Tickets view.
- If the FAQ rules don't match, the bot offers to escalate and you can open a ticket.

Next steps
- Add authentication and a secure backend API to persist tickets and send notifications.
- Implement file attachments and screenshots for tickets.
- Improve AI responses by connecting to a conversational API or embedding a larger rule set.

Security note
This demo stores tickets only in localStorage and is not secure. Do not use it to store real student personal data in production without proper protections.

# full-stack development journey
