import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

/**
 * Custom hook to consume the ThemeContext.
 * @returns {{ theme: string, toggleTheme: () => void }}
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;
