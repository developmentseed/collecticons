import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
  defineSlotRecipe
} from '@chakra-ui/react';
import { tooltipAnatomy, listAnatomy } from '@chakra-ui/react/anatomy';

const tooltipRecipe = defineSlotRecipe({
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      '--tooltip-bg': 'colors.base'
    }
  }
});

const listRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),
  variants: {
    variant: {
      marker: {
        item: {
          _marker: {
            color: 'white'
          }
        }
      }
    }
  }
});

const linkRecipe = defineRecipe({
  variants: {
    variant: {
      plain: {
        color: 'white'
      }
    }
  }
});

const config = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: 'primary'
    },
    a: {
      colorPalette: 'red'
    }
  },
  theme: {
    recipes: {
      link: linkRecipe
    },
    slotRecipes: {
      tooltip: tooltipRecipe,
      list: listRecipe
    },
    keyframes: {
      mainBg: {
        '0%': {
          backgroundPosition: '-44vw top'
        },
        '100%': {
          backgroundPosition: '-48vw top'
        }
      }
    },
    tokens: {
      animations: {
        mainBg: { value: 'mainBg 4s ease 0s 1 normal forwards' }
      },
      colors: {
        base: { value: '#201D1D' },
        primary: { value: '#F1584A' },
        secondary: { value: '#F1826A' }
      },
      fonts: {
        heading: {
          value: `"Pier Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
        },
        body: {
          value: `"Pier Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
        }
      }
    }
  }
});

export default createSystem(defaultConfig, config);
