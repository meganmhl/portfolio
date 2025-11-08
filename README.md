# My Personal Website

Check out my personal website: [meganmhl.github.io/portfolio](https://meganmhl.github.io/portfolio)


## Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript
- **Styling**: CSS3 with custom animations
- **Animation Library**: Framer Motion
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Home.tsx       # Home page component
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── AboutMe.tsx # About section
│   │   └── data/          # Project data and assets
│   ├── App.tsx            # Main app component
│   └── App.css            # Global styles
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meganmhl/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page will reload automatically when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and minified for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run deploy`
Deploys the app to GitHub Pages. This command:
1. Builds the app for production
2. Deploys the `build` folder to the `gh-pages` branch

## License

This project is open source and available under the [MIT License](LICENSE).

