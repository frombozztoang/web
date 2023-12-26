const StyleDictionary = require('style-dictionary');

// 모드별로 파일 생성
const fileConfigs = [
  {
    destination: 'variables-light.css',
    source: ['./src/tokens/light.json'],
  },
  {
    destination: 'variables-dark.css',
    source: ['./src/tokens/dark.json'],
  },
];

const convertObjectToString = (obj) => {
  console.log('잉잉', obj.value);

  if (typeof obj === 'object' && obj !== null) {
    const result = Object.entries(obj)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join(', ');
    return `{ ${result} }`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else {
    return obj;
  }
};

// 각 파일에 대해 StyleDictionary 정의 및 빌드
fileConfigs.forEach((fileConfig) => {
  const styleDictionaryConfig = {
    source: fileConfig.source,
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'build/',
        files: [
          {
            destination: fileConfig.destination,
            format: 'css/variables',
            transforms: [
              'attribute/cti', // 속성 camel case 변경
              'name/ti/camel', // 이름 camel case 변경
              'size/px', // 크기 px 변경
              'color/hex', // 색상 hex 변경
              (prop) => {
                if (typeof prop.value === 'object') {
                  prop.value = `{ ${convertObjectToString(prop.value)} }`;
                }
                return prop;
              },
            ],
          },
        ],
      },
    },
  };

  const styleDictionary = StyleDictionary.extend(styleDictionaryConfig);
  styleDictionary.buildPlatform('css');
});
