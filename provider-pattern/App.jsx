export const ThemeContext = React.createContext()

const themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#171717",
    color: "#fff",
  },
}

export default function App() {
  const [theme, setTheme] = useState("dark")

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  }

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  )
}
