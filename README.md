# Nuxt 3 Calculator App with Vuetify

A modern calculator application built with Nuxt 3 and Vuetify Material Design components. This project demonstrates a complete calculator with calculation history, recall functionality, and a clean, responsive interface.

## Features

- ✨ **Basic Arithmetic Operations**: Add, subtract, multiply, and divide
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Material Design UI**: Built with Vuetify 3 components
- 📋 **Calculation History**: Track all your calculations with timestamps
- 🔄 **Recall Functionality**: Easily reuse previous calculations
- 🗑️ **Delete History**: Remove unwanted calculation entries
- ⚠️ **Error Handling**: Proper handling of division by zero and invalid inputs
- 🌐 **English Interface**: Clean, professional English text throughout

## Technologies Used

- **Nuxt 3.18.1** - The Intuitive Vue Framework
- **Vue 3** - Progressive JavaScript Framework
- **Vuetify 3.9.5** - Material Design Component Framework
- **Material Design Icons** - Beautiful iconography
- **TypeScript** - Type-safe JavaScript
- **SASS** - Enhanced CSS preprocessing

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## Project Structure

```
├── components/
│   ├── CalculatorForm.vue      # Main calculator input form
│   └── CalculationHistory.vue  # History display with recall/delete
├── layouts/
│   └── default.vue             # Application layout with navigation
├── pages/
│   ├── index.vue              # Homepage
│   └── calculatorApp.vue      # Calculator page
├── plugins/
│   └── vuetify.client.js      # Vuetify configuration
└── nuxt.config.ts             # Nuxt configuration
```

## Usage

1. Navigate to the calculator page (`/calculatorApp`)
2. Enter numbers in the A and B input fields
3. Select an operation (Add, Subtract, Multiply, Divide)
4. Click "Calculate" to see the result
5. View calculation history below the form
6. Use "Recall" to reuse previous calculations
7. Use "Delete" to remove unwanted history entries

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).

Check out the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) and [Vuetify documentation](https://vuetifyjs.com/) to learn more.
