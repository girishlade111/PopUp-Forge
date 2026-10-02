# PopUp Forge

PopUp Forge is a modern, responsive web application that allows you to craft, customize, and preview pop-up notifications with ease. It's built with Next.js, React, and ShadCN UI components for a sleek and professional user experience.

## ✨ Features

- **Real-time Customization**: Instantly see your changes as you edit the notification message and display delay.
- **Live Preview**: Schedule a pop-up preview to see exactly how your notification will appear and behave.
- **Export Configuration**: Generate a clean JSON configuration for your pop-up that can be easily integrated into any web project.
- **Copy to Clipboard**: Quickly copy the generated configuration with a single click.
- **Modern & Minimalist UI**: A beautiful, dark-themed interface that is both professional and easy to use.
- **Fully Responsive**: Designed to work flawlessly on both desktop and mobile devices.

## 🚀 Getting Started

To get started with using PopUp Forge, simply open the application in your browser.

### How to Use

1.  **Customize the Message**:
    -   In the "Notification Message" input field, type the text you want your pop-up to display.

2.  **Set the Display Delay**:
    -   Use the slider under "Display Delay" to set how long the application should wait before showing the pop-up. The delay is shown in seconds.

3.  **Preview the Pop-up**:
    -   Click the **`Preview Pop-up`** button.
    -   A confirmation toast will appear, and your custom pop-up will be displayed after the specified delay.

4.  **Export the Configuration**:
    -   Once you are happy with your settings, click the **`Export Configuration`** button.
    -   This will generate a JSON object containing your `message` and `delaySeconds`.

5.  **Copy the Code**:
    -   The exported configuration will appear in a card at the bottom of the page.
    -   Click the copy icon to copy the JSON configuration to your clipboard, ready to be pasted into your own project's code.

## 🛠️ Built With

*   **Next.js**: A React framework for building server-side rendered and static web applications.
*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **ShadCN UI**: A collection of re-usable components built using Radix UI and Tailwind CSS.
*   **Lucide React**: A beautiful and consistent icon library.
*   **Genkit**: An AI toolkit for building generative AI features.

---

## Project Structure

```
PopUp-Forge/
├── src/
│   ├── app/              # Next.js app router (page.tsx, layout.tsx)
│   ├── components/       # UI components (ShadCN/Radix)
│   ├── hooks/            # React hooks
│   └── lib/              # Utility functions
├── public/               # Static assets
├── next.config.ts        # Next.js config (static export enabled)
└── package.json
```

## Deploy

Static export (`output: "export"` in `next.config.ts`). Build with:

```bash
npm install
npm run build   # emits static site to ./out
```

Deploy the `out/` folder to any static host (Cloudflare Pages, Netlify, GitHub Pages).

## Credits

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
