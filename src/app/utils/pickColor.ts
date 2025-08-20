const lightColorMap: Record<string, string> = {
  purple: 'bg-purple-50',
  green: 'bg-green-50',
  blue: 'bg-blue-50',
};

const darkColorMap: Record<string, string> = {
  purple: 'text-purple-600',
  green: 'text-green-600',
  blue: 'text-blue-600',
};

export const pickColor = (color: string): {
  lightColor: string,
  darkColor: string
} => {
  return {
    lightColor: lightColorMap[color],
    darkColor: darkColorMap[color]
  }
}