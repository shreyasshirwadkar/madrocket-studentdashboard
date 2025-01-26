import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the ThemeContext
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

// Create a Theme Context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props for the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode; // React children
  defaultTheme?: string; // Optional default theme, defaults to 'light'
}

// Custom Theme Provider Component
export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  // Load the theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save the theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to use the Theme Context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
