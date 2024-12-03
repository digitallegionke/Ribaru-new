declare module '@expo-google-fonts/albert-sans' {
  export const AlbertSans_400Regular: any;
  export const AlbertSans_500Medium: any;
  export const AlbertSans_600SemiBold: any;
  export function useFonts(fonts: { [key: string]: any }): [boolean, Error | null];
}

declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}

declare module "*.jpg" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
} 