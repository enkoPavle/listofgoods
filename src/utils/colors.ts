export const Colors = {
  white: '#FFFFFF',
  gray: '#dedede',
  red: '#FF0000',
  yellow: '#FFC107',
  green: '#4CAF50',
  blue: '#2F80ED',
  black: '#000000',
};

export const getRatingColor = (rating: number) => {
  if (rating >= 4) return Colors.green;
  else if (rating >= 3) return Colors.yellow;
  else return Colors.red;
};
