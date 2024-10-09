# MLSA Nexus Chapter Website

Welcome to the **MLSA Nexus Chapter Website** repository! 🎉  
This project is built using **Next.js** with **TypeScript** for type safety and **Tailwind CSS** for styling. It’s designed to be a dynamic, community-driven platform where Microsoft Learn Student Ambassadors (MLSA) can share resources, announce events, and foster collaboration.

# Figma Link for reference

https://www.figma.com/design/9EePKTLQQBEbIW1FtQKXJJ/Nexus-Website

---

## 🚀 Tech Stack

- **Next.js**: React-based framework using the App Router for a modular structure.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for custom UI styling.
- **API Integration**: (Optional) APIs for fetching chapter updates, event details, etc.

---

## 🎃 Hacktoberfest 2024 Collaboration

We are thrilled to announce that **MLSA Nexus Chapter Website** is part of **Hacktoberfest 2024**! Hacktoberfest is a month-long celebration of open-source software, and we welcome all contributors, from beginners to seasoned developers, to join us and help make this repository even better.

## Rules for Contriution:-
<ul>
<li> Always raise an issue or take existing issue and them ask maintainers to get yourself assigned to your choosen issue ,NO PR will be accpeted if it's not from an issue assigned to you. </li>
<li>No Spammy PR, your PR will be tagged as spammy & you can  get banned from Hacktoberfest as accoriding to hacktoberfest guidelines for which maintainer will be not held responsibile. </li>
<li>NO PR on Readme File will be entertained & will be marked as spammy </li>

</ul>

## 🛠️ Installation and Setup

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** 

### Clone the Repository

```bash
git clone https://github.com/Microsoft-LSA-Nexus-Chapter/Nexus-Chapter-Website
```
```bash
cd Nexus-Chapter-Website
```

### Install Dependencies
 ```bash
 npm install
 ```

 ### Running the Development Server
 ```bash
 npm run dev
 ```

 It will open at https:/localhost/3000
 ## Project Structure
```
|src/
    ├── app/                # App Router, entry point for Next.js routes
       ├── layout.tsx      # Layout component for all pages
       ├── page.tsx        # Home page component
       ├── events/page.tsx  # Events section with nestedroutes
       |___ gallery/page.tsx  # Gallery of all the events
       |___ members/page.tsx  # Members of the MLSA Nexus chapter
       └── about/page.tsx         # About section with static content
       |___ Contact/page.tsx  # Contact Page
    ├── components/         # Reusable components (Header, Footer, etc.)
├── public/             # Static files like images and icons
    ├── images/
├── styles/             # Global styles and Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.js  # Tailwind CSS configuration
```
### App Router
The App Router (app/) is where all of the routing happens. Instead of a traditional pages/ directory, each folder inside app/ acts as a route. You can also nest routes easily within this structure.

## 📢 Important Note
All contributions must adhere to the Hacktoberfest Rules to be counted as valid contributions. This includes ensuring meaningful pull requests and avoiding spammy or incomplete submissions.



## 📚 Resources
If you're new to open-source or want to learn more about contributing, here are some helpful links:

[How to Contribute to open Source](https://opensource.guide/how-to-contribute/)

[GitHub Documentation](https://docs.github.com/en)

[Hacktoberfest Participation Guide](https://hacktoberfest.com/participation/)

If you're new to Next.js, TypeScript, or Tailwind CSS, check out these resources:

[Next.js Documentation](https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app)

[TypeScript Documentation](https://www.typescriptlang.org/docs/)

[Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
