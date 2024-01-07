// convertObjectToString.js
export const convertObjectToString = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value.type === 'color') {
        return `'--${key}': '${value.value}'`;
      } else if (value.type === 'typography') {
        // Handling specific types like 'Heading', 'Label', 'Paragraph'
        if (key === 'Heading' || key === 'Label' || key === 'Paragraph') {
          return `'--${key.toLowerCase()}-${Object.keys(value.value)[0].toLowerCase()}': ${JSON.stringify(
            value.value[Object.keys(value.value)[0]],
          )}`;
        }

        // Handling other typography types
        return `'--${key}': ${JSON.stringify(value.value)}`;
      } else {
        return '';
      }
    })
    .filter((str) => str !== '')
    .join(',\n');
};
