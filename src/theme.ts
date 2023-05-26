/**
 * Copyright (c) 2023 Anuj S
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { extendTheme } from '@chakra-ui/react';

const colors = {
  background: '#0d1117',
  accent: '#30363d',
};

const styles = {
  global: {
    body: {
      backgroundColor: 'background',
      color: 'white',
    },
  },
};
export const theme = extendTheme({ colors, styles });
