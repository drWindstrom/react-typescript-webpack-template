import 'styled-components';

// This is a dummy theme, define your own theme here or delete the file
// if you do not want to use the theming capabilities of styled components
declare module 'styled-components' {
  export interface DummyTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}