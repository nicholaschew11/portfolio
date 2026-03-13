import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <IconButton
      aria-label="Toggle theme"
      variant="ghost"
      size="sm"
      icon={isDarkMode ? <SunIcon boxSize={3.5} /> : <MoonIcon boxSize={3.5} />}
      onClick={toggleColorMode}
      opacity={0.5}
      _hover={{ opacity: 1, bg: 'transparent' }}
      transition="opacity 0.2s ease"
    />
  );
};

export default ThemeToggleButton;
