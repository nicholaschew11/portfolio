import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDarkMode = colorMode === 'dark'

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={isDarkMode ? 'gray' : 'white'}
      variant="outline"
      icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggleButton
